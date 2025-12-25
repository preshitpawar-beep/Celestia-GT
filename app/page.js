"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

/* ---------------- OUR PROCESS DATA ---------------- */

const processSteps = [
  {
    title: "Requirement",
    desc: "Share your technical drawings, specifications, and quantity requirements.",
    icon: "/process-requirement.webp"
  },
  {
    title: "Supplier",
    desc: "We align suitable manufacturing partners based on capability, compliance, and application.",
    icon: "/process-supplier.webp"
  },
  {
    title: "Quotation",
    desc: "Receive a transparent, competitive quotation quickly.",
    icon: "/process-quotation.webp"
  },
  {
    title: "Production",
    desc: "Manufacturing is coordinated with defined process controls and checkpoints.",
    icon: "/process-production.webp"
  },
  {
    title: "Inspection",
    desc: "Multi-stage inspection including dimensional checks and NDT as required.",
    icon: "/process-inspection.webp"
  },
  {
    title: "Shipping",
    desc: "Export packaging, documentation, and logistics coordination for international delivery.",
    icon: "/process-shipping.webp"
  },
  {
    title: "Support",
    desc: "Post-shipment support, documentation handling, and buyer coordination.",
    icon: "/process-support.webp"
  }
];

/* ---------------- PROCESS COMPONENT ---------------- */

function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Our Process</h2>
      <p className="text-slate-600 mb-14">
        From requirement to delivery, we ensure precision at every step
      </p>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-10">
        {processSteps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`p-6 rounded-xl shadow text-center transition-all duration-200
              ${
                i === activeIndex
                  ? "bg-gold text-white"
                  : "bg-white hover:bg-slate-50"
              }`}
          >
            <Image
              src={step.icon}
              alt={step.title}
              width={36}
              height={36}
              className="mx-auto mb-3"
            />
            <p className="font-semibold">{step.title}</p>
          </button>
        ))}
      </div>

      <div className="p-6 bg-white shadow rounded-xl max-w-3xl mx-auto text-slate-700">
        {processSteps[activeIndex].desc}
      </div>
    </div>
  );
}

/* ---------------- HOME PAGE ---------------- */

export default function Home() {
  return (
    <main>

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-navy text-white py-32 overflow-hidden">
        <Image
          src="/hero-bg.webp"
          alt="Engineering exports"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            supported by structured quality processes and export coordination.
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

      {/* ---------------- OUR PROCESS ---------------- */}
      <section className="py-24">
        <ProcessSection />
      </section>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Industries Choose Celestia GT
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "ISO-Aligned Supplier Network", icon: "/why-iso.webp", desc: "Audited manufacturing partners across India." },
              { title: "Casting Range: 50mm to 1.5m", icon: "/why-casting.webp", desc: "Up to 1 ton capacity for industrial applications." },
              { title: "Cost Efficiency", icon: "/why-cost.webp", desc: "Optimised sourcing without compromising specifications." },
              { title: "Complete Confidentiality", icon: "/why-nda.webp", desc: "All enquiries governed under ICC NDAs." },
              { title: "Global Reach", icon: "/why-global.webp", desc: "Serving UK, EU, Middle East, and Americas." },
              { title: "Technical Documentation", icon: "/why-docs.webp", desc: "Inspection and quality documentation with every shipment." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative bg-navy py-24 text-center text-white overflow-hidden">
        <Image
          src="/cta-bg.webp"
          alt="Background texture"
          fill
          className="object-cover opacity-10"
        />

        <div className="relative">
          <p className="mb-6 text-lg">
            Send us your requirement — we’ll respond within 24 hours.
          </p>
          <button className="bg-gold px-8 py-4 rounded font-medium">
            Submit Enquiry
          </button>
        </div>
      </section>

    </main>
  );
}
