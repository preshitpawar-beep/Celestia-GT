"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ---------------- PROCESS DATA ---------------- */

const processSteps = [
  {
    title: "Requirement",
    desc: "Share your technical drawings, specifications, and quantity requirements.",
    icon: "/process-requirement.png"
  },
  {
    title: "Supplier",
    desc: "We align suitable manufacturing partners based on capability and compliance.",
    icon: "/process-supplier.png"
  },
  {
    title: "Quotation",
    desc: "Receive a transparent, competitive quotation quickly.",
    icon: "/process-quotation.png"
  },
  {
    title: "Production",
    desc: "Manufacturing is coordinated with defined process controls.",
    icon: "/process-production.png"
  },
  {
    title: "Inspection",
    desc: "Multi-stage inspection including dimensional and NDT checks.",
    icon: "/process-inspection.png"
  },
  {
    title: "Shipping",
    desc: "Export packaging, documentation, and logistics coordination.",
    icon: "/process-shipping.png"
  },
  {
    title: "Support",
    desc: "Post-shipment support and buyer coordination.",
    icon: "/process-support.png"
  }
];

/* ---------------- PROCESS SECTION ---------------- */

function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Our Process</h2>
      <p className="text-slate-600 mb-14">
        From requirement to delivery, we ensure precision at every step
      </p>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-8 mb-12">
        {processSteps.map((step, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            whileHover={{ y: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-6 rounded-xl text-center transition
              ${
                i === activeIndex
                  ? "bg-gold text-white shadow-lg"
                  : "bg-white shadow hover:shadow-md"
              }`}
          >
            <Image
              src={step.icon}
              alt={step.title}
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <p className="font-semibold">{step.title}</p>
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-white shadow rounded-xl max-w-3xl mx-auto text-slate-700"
      >
        {processSteps[activeIndex].desc}
      </motion.div>
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
          src="/hero-bg.png"
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Industries Choose Celestia GT
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              { title: "ISO-Aligned Supplier Network", icon: "/why-iso.png", desc: "Audited manufacturing partners across India." },
              { title: "Casting Range: 50mm to 1.5m", icon: "/why-casting.png", desc: "Up to 1 ton capacity for industrial applications." },
              { title: "Cost Efficiency", icon: "/why-cost.png", desc: "Optimised sourcing without compromising specifications." },
              { title: "Complete Confidentiality", icon: "/why-nda.png", desc: "All enquiries governed under ICC NDAs." },
              { title: "Global Reach", icon: "/why-global.png", desc: "Serving UK, EU, Middle East, and Americas." },
              { title: "Technical Documentation", icon: "/why-docs.png", desc: "Inspection and quality documentation with every shipment." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow flex gap-8 items-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={72}
                  height={72}
                />

                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative bg-navy py-24 text-center text-white overflow-hidden">
        <Image
          src="/cta-bg.png"
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
