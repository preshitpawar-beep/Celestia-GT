"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------------- PROCESS DATA ---------------- */

const processSteps = [
  { title: "Requirement", desc: "Share drawings, specifications, and quantity requirements.", icon: "/process-requirement.png" },
  { title: "Supplier", desc: "Matched with suitable manufacturing partners.", icon: "/process-supplier.png" },
  { title: "Quotation", desc: "Transparent and competitive pricing.", icon: "/process-quotation.png" },
  { title: "Production", desc: "Controlled manufacturing with defined checkpoints.", icon: "/process-production.png" },
  { title: "Inspection", desc: "Dimensional and quality verification.", icon: "/process-inspection.png" },
  { title: "Shipping", desc: "Export packaging and logistics coordination.", icon: "/process-shipping.png" },
  { title: "Support", desc: "Post-shipment coordination and documentation.", icon: "/process-support.png" }
];

/* ---------------- PROCESS SECTION ---------------- */

function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-slate-600 mb-14">
          From requirement to delivery, we ensure precision at every step
        </p>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-8 mb-6 md:mb-12">
          {processSteps.map((step, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative p-6 rounded-xl shadow transition
                ${
                  i === activeIndex
                    ? "bg-gold text-white scale-105 shadow-lg"
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

        {/* Mobile description */}
        <motion.div
          key={`mobile-${activeIndex}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden p-6 bg-white shadow rounded-xl text-slate-700 mb-10"
        >
          {processSteps[activeIndex].desc}
        </motion.div>

        {/* Desktop description */}
        <motion.div
          key={`desktop-${activeIndex}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden md:block p-6 bg-white shadow rounded-xl max-w-3xl mx-auto text-slate-700"
        >
          {processSteps[activeIndex].desc}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- HOME PAGE ---------------- */

export default function Home() {
  return (
    <main>

      {/* ---------------- HERO ---------------- */}
      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-contain md:bg-cover bg-center md:bg-fixed bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-left"
          >
            <div className="w-20 h-1 bg-gold mb-6" />

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering Exports from India to Global Markets
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8">
              Supplying precision-engineered components and assemblies with
              structured quality control and export coordination.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/products">
                <button className="bg-gold text-navy px-7 py-3 rounded-md font-medium">
                  Explore Capabilities →
                </button>
              </Link>

              <Link href="/contact">
                <button className="border border-white/40 px-7 py-3 rounded-md font-medium">
                  Request a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- OUR PROCESS ---------------- */}
      <ProcessSection />

      {/* ---------------- CTA ---------------- */}
      <section
        className="relative text-white text-center py-24 md:py-32 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('/cta-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-lg md:text-xl"
          >
            Send us your requirement — we’ll respond within 24 hours.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gold text-navy px-10 py-4 rounded-md font-medium"
            >
              Contact our team
            </motion.button>
          </Link>
        </div>
      </section>

    </main>
  );
}
