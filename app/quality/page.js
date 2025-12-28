"use client";

import { motion } from "framer-motion";

/* ------------------ ANIMATION ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ ICONS ------------------ */

const shieldIcon = (
  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
    <path d="M9 1l7 4v6c0 4-3 6-7 6s-7-2-7-6V5l7-4z" />
  </svg>
);

const eyeIcon = (
  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
    <circle cx="9" cy="9" r="3" />
    <path d="M1 9s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z" />
  </svg>
);

const fileIcon = (
  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
    <path d="M4 2h7l3 3v11H4z" />
    <path d="M7 7h4M7 11h4" />
  </svg>
);

const lockIcon = (
  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
    <rect x="3" y="8" width="12" height="8" rx="2" />
    <path d="M6 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

/* ------------------ DATA ------------------ */

const commitments = [
  {
    title: "ISO-Certified Suppliers",
    desc:
      "ISO-certified partners across India ensuring consistent quality standards.",
    img: "/images/quality/commitment-1.png",
    icon: shieldIcon,
  },
  {
    title: "Multi-stage Inspection",
    desc:
      "Dimensional, visual, and NDT verification at every production stage.",
    img: "/images/quality/commitment-2.png",
    icon: eyeIcon,
  },
  {
    title: "Complete Documentation",
    desc:
      "Each order includes MTC, FAI, NDT reports, and quality photos.",
    img: "/images/quality/commitment-3.png",
    icon: fileIcon,
  },
  {
    title: "Confidentiality",
    desc:
      "All data protected under ICC-governed NDAs for complete security.",
    img: "/images/quality/commitment-4.png",
    icon: lockIcon,
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

const documents = [
  { title: "MTC", desc: "Material Test Certificates with chemical composition" },
  { title: "FAI", desc: "First Article Inspection reports" },
  { title: "NDT Reports", desc: "Non-Destructive Testing documentation" },
  { title: "Quality Photos", desc: "Visual documentation of finished products" },
  { title: "Dimensional Reports", desc: "Detailed measurement data vs drawings" },
];

/* ------------------ PAGE ------------------ */

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

      {/* QUOTE */}
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative h-64 rounded-xl overflow-hidden"
              >
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0b1b2f]/75" />

                <div className="relative z-10 p-8 text-white h-full flex flex-col justify-end">
                  <div className="mb-3 w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {item.desc}
                  </p>
                </div>
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

      {/* COMPLETE DOCUMENTATION PACKAGE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Complete Documentation Package
            </h2>
            <p className="text-muted-foreground mb-8">
              Every shipment includes comprehensive quality documentation,
              giving you complete traceability and peace of mind.
            </p>

            <div className="space-y-4">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-sm px-6 py-4"
                >
                  <h4 className="font-semibold">{doc.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/quality/documentation.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUALITY CTA – SAME AS ABOUT */}
      <section className="py-24 bg-gold text-black text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-xl italic"
        >
          “Quality you can measure. Reliability you can trust.
          Documentation you can depend on.”
        </motion.p>
      </section>
    </main>
  );
}
