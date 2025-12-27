"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "Machined Components",
    desc: "CNC precision components manufactured with tight tolerances across aluminum, steel, and engineered alloys.",
    img: "/products/machined-components.png",
  },
  {
    title: "Industrial Castings",
    desc: "Ferrous and non-ferrous castings from 50mm to 1.5m, up to 1 ton, with full NDT and inspection.",
    img: "/products/industrial-castings.png",
  },
  {
    title: "Fabricated Assemblies",
    desc: "Custom welded and fabricated assemblies built to drawing, specification, and functional requirements.",
    img: "/products/fabricated-assemblies.png",
  },
  {
    title: "Aluminum & Steel Products",
    desc: "High-quality light and heavy metal products supplied machined or fabricated as required.",
    img: "/products/aluminum-steel.png",
  },
  {
    title: "Engineering Services",
    desc: "2D/3D design support, reverse engineering, and job work coordination across manufacturing partners.",
    img: "/products/engineering-services.png",
  },
];

export default function ProductsPage() {
  return (
    <main>

      {/* ---------------- HERO ---------------- */}
      <section className="bg-navy text-white py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Products & Capabilities
        </motion.h1>

        <div className="w-20 h-1 bg-gold mx-auto mb-6" />

        <p className="max-w-2xl mx-auto text-slate-200 text-lg">
          Engineering solutions delivered through trusted manufacturing
          partners and structured quality processes.
        </p>
      </section>

      {/* ---------------- PRODUCTS GRID ---------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl shadow overflow-hidden"
            >

              {/* Image */}
              <div className="relative w-full h-[260px] md:h-[280px] bg-slate-100 flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="
                    object-contain
                    md:object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Hover / Reveal Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/70
                  text-white
                  flex flex-col justify-end
                  p-6
                  opacity-100
                  md:opacity-0
                  md:group-hover:opacity-100
                  transition-opacity duration-400
                "
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Mobile content (visible by default) */}
              <div className="p-6 md:hidden">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* ---------------- CTA (MATCHES ABOUT US) ---------------- */}
      <section className="bg-navy py-24 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-lg"
        >
          Our engineering team is ready to discuss your specific requirements.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gold text-navy px-10 py-4 rounded font-medium"
        >
          Contact Our Team
        </motion.button>
      </section>

    </main>
  );
}
