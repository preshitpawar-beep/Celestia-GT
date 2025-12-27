"use client";

import { motion } from "framer-motion";

export default function Quality() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0b1b2f] to-[#122a45] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quality & Reliability
          </h1>
          <div className="w-14 h-[3px] bg-gold mx-auto mb-6" />
          <p className="text-lg text-white/80">
            Quality You Can Measure. Reliability You Can Trust.
          </p>
        </div>
      </section>

      {/* QUOTE – tightened spacing */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#faf7f2] rounded-xl px-10 py-8 border-l-4 border-gold">
            <p className="text-xl font-semibold text-center italic text-[#0b1b2f]">
              “We don’t just inspect quality – we deliver it.”
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Quality Commitment
            </h2>
            <div className="w-12 h-[3px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative h-64 rounded-xl overflow-hidden group"
              >
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Hover overlay */}
                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#0b1b2f]/75"
                />

                {/* Content */}
                <motion.div
                  variants={{
                    rest: { y: 16, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative z-10 p-8 text-white h-full flex flex-col justify-end"
                >
                  <div className="mb-3 w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 STAGE PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              6-Stage Inspection Process
            </h2>
            <div className="w-12 h-[3px] bg-gold mx-auto mb-4" />
            <p className="text-muted-foreground">
              Every component undergoes rigorous quality checks at multiple stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stages.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 relative"
              >
                <div className="absolute -top-4 left-6 bg-gold text-white text-sm font-semibold px-4 py-1 rounded-md">
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – EXACT About Us style */}
      <section className="bg-[#0b1b2f] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg text-white/80">
            Request our quality brochure or discuss your specific inspection requirements
          </p>
        </div>
      </section>
    </main>
  );
}

/* ---------- DATA ---------- */

const commitments = [
  {
    title: "ISO-Certified Suppliers",
    desc:
      "50+ ISO-certified partners across India ensuring consistent quality standards.",
    img: "/images/quality/commitment-1.png",
    icon: (
      <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
        <path d="M9 1l7 4v6c0 4-3 6-7 6s-7-2-7-6V5l7-4z" />
      </svg>
    ),
  },
  {
    title: "Multi-stage Inspection",
    desc:
      "Dimensional, visual, and NDT verification at every production stage.",
    img: "/images/quality/commitment-2.png",
    icon: (
      <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
        <circle cx="9" cy="9" r="7" />
        <path d="M9 5v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Complete Documentation",
    desc:
      "Each order includes MTC, FAI, NDT reports, and quality photos.",
    img: "/images/quality/commitment-3.png",
    icon: (
      <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
        <path d="M4 2h7l3 3v11H4z" />
        <path d="M7 7h4M7 11h4" />
      </svg>
    ),
  },
  {
    title: "Confidentiality",
    desc:
      "All data protected under ICC-governed NDAs for complete security.",
    img: "/images/quality/commitment-4.png",
    icon: (
      <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="8" width="12" height="8" rx="2" />
        <path d="M6 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    ),
  },
];

const stages = [
  { n: "01", title: "Raw Material Verification", desc: "Material certificates and chemical composition analysis" },
  { n: "02", title: "In-Process Inspection", desc: "Continuous monitoring during manufacturing" },
  { n: "03", title: "Dimensional Check", desc: "Precision measurement against technical drawings" },
  { n: "04", title: "NDT Testing", desc: "Non-destructive testing for internal defects" },
  { n: "05", title: "Visual Inspection", desc: "Surface finish and aesthetic quality check" },
  { n: "06", title: "Final Documentation", desc: "Complete quality documentation package" },
];
