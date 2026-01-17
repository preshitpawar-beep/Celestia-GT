import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    // You'll need to configure these environment variables
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtpout.secureserver.net",
      port: smtpPort,
      secure: smtpPort === 465, // true for 465 (GoDaddy SSL), false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Increase timeout and size limits for large files
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,
      socketTimeout: 60000,
      maxConnections: 5,
      maxMessages: 100,
    });

    // Prepare email content
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

    // Prepare mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "harsh.jaiswal@celestiagt.com",
      subject: `New Enquiry from ${name} - ${company}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Product Type:</strong> ${productType}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Preferred Incoterms:</strong> ${incoterms}</p>
            <hr style="border: 1px solid #d1d5db; margin: 20px 0;">
            <p><strong>Additional Notes:</strong></p>
            <p style="white-space: pre-wrap;">${notes}</p>
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

    // Send email
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
