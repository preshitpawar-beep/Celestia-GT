"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ---------------- MOTION PRESETS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileError, setFileError] = useState("");

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setFileError("File size must be less than 10 MB.");
      e.target.value = "";
    } else {
      setFileError("");
    }
  }

  function handleSubmit() {
    if (!fileError) {
      setSubmitted(true);
    }
  }

  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="bg-navy text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>

          <div className="w-20 h-1 bg-gold mx-auto mb-6" />

          <p className="text-lg text-slate-200">
            Let’s Build Global Partnerships in Engineering
          </p>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-700">
          Send us your drawings or product requirements — we’ll respond within
          24 hours.
        </div>
      </section>

      {/* ---------------- FORM + INFO ---------------- */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start">

          {/* ---------------- FORM / SUCCESS ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="lg:col-span-2"
          >
            {!submitted ? (
              <form
                action="mailto:harsh.jaiswal@celestiagt.com"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-10"
              >
                <h2 className="text-2xl font-bold mb-8">Send Enquiry</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 w-full rounded-lg border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="mt-2 w-full rounded-lg border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-2 w-full rounded-lg border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Country *</label>
                    <input
                      type="text"
                      name="country"
                      required
                      className="mt-2 w-full rounded-lg border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Product Type *</label>
                    <input
                      type="text"
                      name="product_type"
                      required
                      className="mt-2 w-full rounded-lg border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Quantity *</label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      className="mt-2 w-full rounded-lg border px-4 py-3"
                    />
                  </div>
                </div>

                {/* Incoterms */}
                <div className="mt-8">
                  <label className="text-sm font-medium block mb-3">
                    Preferred Incoterms
                  </label>
                  <div className="flex gap-6 text-sm">
                    <label><input type="radio" name="incoterms" value="EXW" /> EXW</label>
                    <label><input type="radio" name="incoterms" value="FOB" /> FOB</label>
                    <label><input type="radio" name="incoterms" value="CIF" /> CIF</label>
                    <label><input type="radio" name="incoterms" value="DAP" /> DAP</label>
                  </div>
                </div>

                {/* Upload */}
                <div className="mt-8">
                  <label className="text-sm font-medium block mb-2">
                    Drawing Upload (PDF / DWG / STEP)
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    className="w-full border rounded-lg p-3"
                  />
                  {fileError && (
                    <p className="text-sm text-red-600 mt-2">{fileError}</p>
                  )}
                </div>

                {/* Notes */}
                <div className="mt-8">
                  <label className="text-sm font-medium block mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    rows="4"
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!!fileError}
                  className="mt-10 w-full bg-gold text-black font-semibold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                >
                  Send Secure Enquiry →
                </button>

                <p className="text-xs text-center text-slate-500 mt-4">
                  All enquiries are governed by ICC NDAs for confidentiality.
                </p>
              </form>
            ) : (
              /* ---------------- SUCCESS UI ---------------- */
              <div className="bg-white rounded-2xl shadow-lg p-14 text-center">
                <h2 className="text-3xl font-bold mb-4 text-navy">
                  Enquiry Sent Successfully
                </h2>
                <p className="text-slate-700 max-w-md mx-auto">
                  Thank you for contacting Celestia GT.  
                  Your enquiry has been sent successfully and our team will
                  respond within 24 hours.
                </p>
              </div>
            )}
          </motion.div>

          {/* ---------------- INFO ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-sm"><strong>Email:</strong><br />sales@celestiagt.com</p>
              <p className="text-sm mt-4"><strong>Website:</strong><br />www.celestiagt.com</p>
              <p className="text-sm mt-4"><strong>Location:</strong><br />India</p>
            </div>

            <div className="bg-gold rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-2">24-Hour Response</h4>
              <p className="text-sm">
                We respond to every technical enquiry within 24 hours.
              </p>
            </div>

            <div className="bg-navy text-white rounded-2xl p-8">
              <p className="text-sm">
                Your data and designs are protected under ICC-governed
                confidentiality agreements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
