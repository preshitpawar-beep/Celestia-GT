"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-navy text-white py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            CELESTIA GT
          </motion.h1>

          <div className="w-20 h-1 bg-gold mx-auto mb-6" />

          <p className="text-2xl text-gold mb-6">
            Precision Engineering. Global Supply.
          </p>

          <p className="max-w-2xl mx-auto text-slate-200 mb-10">
            Delivering engineering components and assemblies from India,
            supported by structured quality processes and global supply coordination.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-gold px-6 py-3 rounded font-medium">
              Explore Our Capabilities →
            </button>
            <button className="bg-white text-navy px-6 py-3 rounded font-medium">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-slate-600 mb-14">
            From requirement to delivery, we ensure precision at every step
          </p>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
            {[
              "Requirement",
              "Supplier",
              "Quotation",
              "Production",
              "Inspection",
              "Shipping",
              "Support"
            ].map((step, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl shadow text-center ${
                  step === "Quotation"
                    ? "bg-gold text-white"
                    : "bg-white"
                }`}
              >
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white shadow rounded-xl max-w-3xl mx-auto">
            Receive a transparent, competitive quotation quickly.
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Industries Choose Celestia GT
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ISO-Aligned Supplier Network",
                desc: "Consistent, audited manufacturing partners across India."
              },
              {
                title: "Casting Range: 50mm to 1.5m",
                desc: "Up to 1 ton capacity for industrial applications."
              },
              {
                title: "Cost Efficiency",
                desc: "Optimised sourcing without compromising specifications."
              },
              {
                title: "Complete Confidentiality",
                desc: "All enquiries governed under ICC NDAs."
              },
              {
                title: "Global Reach",
                desc: "Serving UK, EU, Middle East and Americas."
              },
              {
                title: "Technical Documentation",
                desc: "Inspection and quality documentation with every shipment."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 text-center text-white">
        <p className="mb-6 text-lg">
          Send us your requirement — we’ll respond within 24 hours.
        </p>
        <button className="bg-gold px-8 py-4 rounded font-medium">
          Submit Enquiry
        </button>
      </section>

    </main>
  );
}
