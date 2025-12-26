"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ---------------- GLOBAL MOTION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24"
    >
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`p-6 rounded-xl transition shadow
                ${
                  i === activeIndex
                    ? "bg-gold text-white shadow-lg"
                    : "bg-white hover:shadow-md"
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="p-6 bg-white shadow rounded-xl max-w-3xl mx-auto text-slate-700"
        >
          {processSteps[activeIndex].desc}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- HOME PAGE ---------------- */

export default function Home() {
  return (
    <main>

     {/* ---------------- HERO ---------------- */}
<section className="relative bg-navy text-white py-32 overflow-hidden">
  {/* Background Image */}
  <Image
    src="/hero-bg.png"
    alt="Precision CNC machining in industrial manufacturing"
    fill
    className="object-cover"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl text-left"
    >
      {/* Accent line */}
      <div className="w-20 h-1 bg-gold mb-6" />

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Engineering Exports from India  
        <br className="hidden md:block" />
        to Global Markets
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-slate-200 mb-6">
        Supplying precision-engineered components and assemblies,
        supported by structured quality control and export coordination.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-5 mt-8">
        <button className="bg-gold text-navy px-7 py-3 rounded-md font-medium hover:bg-gold/90 transition">
          Explore Capabilities →
        </button>
        <button className="border border-white/40 px-7 py-3 rounded-md font-medium hover:bg-white hover:text-navy transition">
          Request a Quote
        </button>
      </div>
    </motion.div>
  </div>
</section>

      {/* ---------------- OUR PROCESS ---------------- */}
      <ProcessSection />

      {/* ---------------- WHY CHOOSE ---------------- */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Industries Choose Celestia GT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                transition={{ duration: 0.3, ease: "easeOut" }}
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
      </motion.section>

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
