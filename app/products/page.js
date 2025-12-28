"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

/* ---------------- MOTION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const products = [
  {
    title: "Machined Components",
    short: "CNC precision parts with tight tolerances.",
    image: "/products/machined-components.png",
    points: [
      "CNC turning, milling & grinding",
      "Tight tolerance repeatability",
      "Aluminum, steel & hardened alloys"
    ]
  },
  {
    title: "Industrial Castings",
    short: "Ferrous & non-ferrous castings up to 1 ton.",
    image: "/products/industrial-castings.png",
    points: [
      "Sand, investment & die casting",
      "Ferrous & non-ferrous materials",
      "NDT & dimensional inspection"
    ]
  },
  {
    title: "Fabricated Assemblies",
    short: "Custom welding and fabrication solutions.",
    image: "/products/fabricated-assemblies.png",
    points: [
      "Structural & precision assemblies",
      "Welding, fit-up & finishing",
      "Export-ready fabrication"
    ]
  },
  {
    title: "Aluminum & Steel Products",
    short: "High-quality light and heavy metal parts.",
    image: "/products/aluminum-steel.png",
    points: [
      "Light & heavy sections",
      "Machined or fabricated",
      "Industrial-grade materials"
    ]
  },
  {
    title: "Engineering Services",
    short: "Design, reverse engineering & job work.",
    image: "/products/engineering-services.png",
    points: [
      "2D / 3D design support",
      "Reverse engineering",
      "Job work coordination"
    ]
  }
];

export default function ProductsPage() {
  return (
    <main>

      {/* ---------------- HERO ---------------- */}
      <section className="bg-navy text-white py-28 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl font-bold mb-4"
        >
          Products & Capabilities
        </motion.h1>

        <div className="w-20 h-1 bg-gold mx-auto mb-6" />

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-slate-200 max-w-2xl mx-auto text-lg"
        >
          Engineering solutions designed for precision, reliability,
          and global delivery.
        </motion.p>
      </section>

      {/* ---------------- PRODUCTS GRID (UNCHANGED) ---------------- */}
      <section className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
        >
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-slate-900"
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {item.short}
                  </p>
                </div>

                <div className="absolute inset-0 bg-black/60 p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-slate-200">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-gold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- OUR CAPABILITIES (NEW SECTION) ---------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-3">Our Capabilities</h2>
            <div className="w-12 h-[3px] bg-gold mx-auto" />
          </motion.div>

          {/* Capability 1 */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative h-[260px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/products/capability-machining.png"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-2xl font-bold mb-4">Precision Machining</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Our CNC machining capabilities deliver components with
                tolerances as tight as ±0.01mm. From prototype to batch
                production, we ensure consistent quality across all volumes.
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  3-axis, 4-axis, and 5-axis CNC machining
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Turning, milling, and grinding operations
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Material range from aluminum to hardened steel
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Capability 2 */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold mb-4">Industrial Casting</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                We handle castings from 50mm to 1.5m, up to 1 ton in weight.
                All castings are NDT-tested and can be supplied fully
                machined to your specifications.
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Sand casting, investment casting, die casting
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Pattern making - match plate, loose etc. 
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Complete NDT and dimensional inspection
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative h-[260px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
            >
              <Image
                src="/products/capability-casting.png"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ---------------- CTA (MATCHES ABOUT US) ---------------- */}
      <section className="py-24 bg-navy text-white text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-xl italic mb-8"
        >
          “Our engineering team is ready to discuss your specific requirements.”
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <Link href="/contact">
            <button className="bg-gold text-navy px-10 py-4 rounded font-medium hover:scale-105 transition">
              Contact Our Team
            </button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
