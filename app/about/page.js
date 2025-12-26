"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ---------------- MOTION PRESETS ---------------- */

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ---------------- ABOUT PAGE ---------------- */

export default function AboutPage() {
  return (
    <main>

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-navy text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl font-bold mb-6"
          >
            About Celestia GT
          </motion.h1>

          <div className="w-20 h-1 bg-gold mb-6" />

          <p className="max-w-3xl text-lg text-slate-200">
            A focused engineering sourcing and export partner connecting
            India’s manufacturing capability with global industrial demand.
          </p>
        </div>
      </section>

      {/* ---------------- WHO WE ARE ---------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about/about-who-we-are.png"
              alt="Engineering manufacturing capability"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Celestia GT operates as a specialised sourcing and export partner
              for precision-engineered components and assemblies.
              We work closely with vetted manufacturing partners across India
              to deliver components that meet international quality,
              documentation, and delivery expectations.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Our role is to simplify global procurement by managing supplier
              coordination, quality assurance, inspection processes,
              documentation, and export logistics — allowing our clients to
              focus on engineering execution and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-16"
          >
            What We Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Engineering Sourcing",
                desc: "Identifying and aligning capable manufacturers based on drawings, tolerances, materials, and industry requirements."
              },
              {
                title: "Quality & Inspection",
                desc: "Coordinating dimensional checks, NDT, material verification, and inspection documentation as required."
              },
              {
                title: "Export & Documentation",
                desc: "Managing export packaging, compliance documents, and logistics for international delivery."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HOW WE OPERATE ---------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <h2 className="text-4xl font-bold mb-6">How We Operate</h2>

            <ul className="space-y-4 text-slate-700">
              <li>• Structured supplier selection and capability matching</li>
              <li>• Defined inspection and quality checkpoints</li>
              <li>• Clear documentation and traceability</li>
              <li>• Confidential handling of designs and data</li>
              <li>• Responsive coordination and communication</li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about/about-how-we-operate.png"
              alt="Engineering workflow and inspection process"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- CLOSING STATEMENT ---------------- */}
      <section className="py-24 bg-navy text-white text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-xl italic"
        >
          “Precision in every process. Reliability in every shipment.
          Confidentiality in every partnership.”
        </motion.p>
      </section>

    </main>
  );
}
