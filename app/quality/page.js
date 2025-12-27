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
          <div className="w-16 h-[3px] bg-gold mx-auto mb-6" />
          <p className="text-lg text-white/80">
            Quality You Can Measure. Reliability You Can Trust.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#faf7f2] rounded-xl px-8 py-10 border-l-4 border-gold">
            <p className="text-xl font-semibold text-center italic text-[#0b1b2f]">
              “We don’t just inspect quality – we deliver it.”
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Quality Commitment
            </h2>
            <div className="w-14 h-[3px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ISO-Certified Suppliers",
                desc:
                  "50+ ISO-certified partners across India ensuring consistent quality standards.",
                img: "/images/quality/commitment-1.png",
              },
              {
                title: "Multi-stage Inspection",
                desc:
                  "Dimensional, visual, and NDT verification at every production stage.",
                img: "/images/quality/commitment-2.png",
              },
              {
                title: "Complete Documentation",
                desc:
                  "Each order includes MTC, FAI, NDT reports, and quality photos.",
                img: "/images/quality/commitment-3.png",
              },
              {
                title: "Confidentiality",
                desc:
                  "All data protected under ICC-governed NDAs for complete security.",
                img: "/images/quality/commitment-4.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden h-64"
              >
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0b1b2f]/80" />
                <div className="relative p-8 text-white h-full flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              6-Stage Inspection Process
            </h2>
            <div className="w-14 h-[3px] bg-gold mx-auto mb-4" />
            <p className="text-muted-foreground">
              Every component undergoes rigorous quality checks at multiple stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Raw Material Verification",
                desc:
                  "Material certificates and chemical composition analysis",
              },
              {
                n: "02",
                title: "In-Process Inspection",
                desc:
                  "Continuous monitoring during manufacturing",
              },
              {
                n: "03",
                title: "Dimensional Check",
                desc:
                  "Precision measurement against technical drawings",
              },
              {
                n: "04",
                title: "NDT Testing",
                desc:
                  "Non-destructive testing for internal defects",
              },
              {
                n: "05",
                title: "Visual Inspection",
                desc:
                  "Surface finish and aesthetic quality check",
              },
              {
                n: "06",
                title: "Final Documentation",
                desc:
                  "Complete quality documentation package",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 relative"
              >
                <div className="absolute -top-4 left-6 bg-gold text-white text-sm font-semibold px-4 py-1 rounded-md">
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold mb-2 mt-4">
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

      {/* DOCUMENTATION */}
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
              {[
                {
                  title: "MTC",
                  desc:
                    "Material Test Certificates with chemical composition",
                },
                {
                  title: "FAI",
                  desc:
                    "First Article Inspection reports",
                },
                {
                  title: "NDT Reports",
                  desc:
                    "Non-Destructive Testing documentation",
                },
                {
                  title: "Quality Photos",
                  desc:
                    "Visual documentation of finished products",
                },
                {
                  title: "Dimensional Reports",
                  desc:
                    "Detailed measurement data vs drawings",
                },
              ].map((doc, i) => (
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

      {/* CTA */}
      <section className="bg-[#0b1b2f] py-16">
        <p className="text-center text-white/80 text-lg px-6">
          Request our quality brochure or discuss your specific inspection requirements
        </p>
      </section>
    </main>
  );
}
