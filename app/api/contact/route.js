import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Escape user text before putting it into the HTML email, so any markup
// or links a spammer submits cannot render.
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const country = formData.get("country");
    const productType = formData.get("product_type");
    const quantity = formData.get("quantity");
    const incoterms = formData.get("incoterms") || "Not specified";
    const notes = formData.get("notes") || "None";
    const attachment = formData.get("attachment");

    // --- Spam protection --------------------------------------------------
    // 1) Honeypot: a hidden "website" field a person never sees. If it has a
    //    value, a bot filled it.
    const honeypot = formData.get("website");
    // 2) Time-trap: the form reports how long it was on screen. Humans take
    //    several seconds; bots submit instantly or never send this value.
    const elapsedMs = Number(formData.get("elapsed_ms"));

    const looksLikeBot =
      (typeof honeypot === "string" && honeypot.trim() !== "") ||
      !Number.isFinite(elapsedMs) ||
      elapsedMs < 2500;

    if (looksLikeBot) {
      // Silently accept and discard: no email is sent, and returning success
      // gives the bot no signal to adapt.
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }

    // 3) Validation backstop for anything that gets this far.
    if (!name || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid name and email address." },
        { status: 400 }
      );
    }
    if (
      String(name).length > 100 ||
      String(company || "").length > 150 ||
      String(notes).length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields is too long." },
        { status: 400 }
      );
    }
    // ---------------------------------------------------------------------

    // Check file size - GoDaddy SMTP has a limit of ~20MB
    const MAX_EMAIL_ATTACHMENT_SIZE = 20 * 1024 * 1024; // 20MB
    if (attachment && attachment.size > MAX_EMAIL_ATTACHMENT_SIZE) {
      return NextResponse.json(
        {
          error: "File size exceeds email limit",
          details: `GoDaddy SMTP has a 20MB attachment limit. Your file is ${(
            attachment.size /
            (1024 * 1024)
          ).toFixed(
            2
          )}MB. Please use a smaller file or contact us directly at harsh.jaiswal@celestiagt.com`,
        },
        { status: 413 }
      );
    }

    // Create transporter
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtpout.secureserver.net",
      port: smtpPort,
      secure: smtpPort === 465, // true for 465 (GoDaddy SSL), false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
      maxConnections: 5,
      maxMessages: 100,
    });

    // Plain-text version
    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Country: ${country}
      Product Type: ${productType}
      Quantity: ${quantity}
      Preferred Incoterms: ${incoterms}
      
      Additional Notes:
      ${notes}
    `;

    const safeSubject = `New Enquiry from ${name} - ${company}`.replace(
      /[\r\n]+/g,
      " "
    );

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "harsh.jaiswal@celestiagt.com",
      subject: safeSubject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Company:</strong> ${escapeHtml(company)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Country:</strong> ${escapeHtml(country)}</p>
            <p><strong>Product Type:</strong> ${escapeHtml(productType)}</p>
            <p><strong>Quantity:</strong> ${escapeHtml(quantity)}</p>
            <p><strong>Preferred Incoterms:</strong> ${escapeHtml(incoterms)}</p>
            <hr style="border: 1px solid #d1d5db; margin: 20px 0;">
            <p><strong>Additional Notes:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(notes)}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Add attachment if present
    if (attachment && attachment.size > 0) {
      const bytes = await attachment.arrayBuffer();
      const buffer = Buffer.from(bytes);
      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
