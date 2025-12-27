"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      {/* HERO */}
      <section className="bg-navy text-white py-28 text-center">
        <h1 className="text-5xl font-bold mb-4">Products & Capabilities</h1>
        <div className="w-20 h-1 bg-gold mx-auto mb-6" />
        <p className="text-slate-200 max-w-2xl mx-auto">
          Engineering solutions designed for precision, reliability, and global delivery.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-slate-900"
            >
              {/* IMAGE */}
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* DEFAULT OVERLAY */}
                <div className="absolute inset-0 bg-navy/70 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0 md:group-hover:opacity-0">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-sm">{item.short}</p>
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-navy/85 p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold text-black py-20 text-center">
        <p className="mb-6 text-lg">
          Our engineering team is ready to discuss your specific requirements.
        </p>
        <button className="bg-gold px-8 py-4 rounded font-medium">
          Contact Our Team
        </button>
      </section>
    </main>
  );
}
