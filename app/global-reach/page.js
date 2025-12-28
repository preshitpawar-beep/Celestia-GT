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

const locationIcon = (
  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2">
    <path d="M12 10c0 3-3 6-3 6s-3-3-3-6a3 3 0 0 1 6 0z" />
    <circle cx="9" cy="10" r="1" />
  </svg>
);

const shipIcon = (
  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
    <path d="M3 18h18M4 14l5-6 5 6M9 8V3h4v5" />
  </svg>
);

const boxIcon = (
  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z" />
  </svg>
);

const checkIcon = (
  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const chartIcon = (
  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="M18 9l-5 5-4-4-4 4" />
  </svg>
);

/* ------------------ DATA ------------------ */

const regions = [
  {
    title: "United Kingdom",
    desc: "Customer interface and market coordination.",
    icon: locationIcon,
  },
  {
    title: "Europe",
    desc: "Machined and cast products supply base.",
    icon: locationIcon,
  },
  {
    title: "Middle East",
    desc: "Industrial and spare part clients.",
    icon: locationIcon,
  },
  {
    title: "Americas",
    desc: "Custom and batch exports.",
    icon: locationIcon,
  },
];

const logistics = [
  {
    title: "Global Shipping",
    desc: "EXW, FOB, CIF, and DAP terms available",
    icon: shipIcon,
  },
  {
    title: "Secure Packaging",
    desc: "Export-grade packaging and documentation",
    icon: boxIcon,
  },
  {
    title: "Customs Support",
    desc: "Complete customs and regulatory compliance",
    icon: checkIcon,
  },
  {
    title: "Timely Delivery",
    desc: "On-time delivery across all regions",
    icon: chartIcon,
  },
];

/* ------------------ PAGE ------------------ */

export default function GlobalReach() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0b1b2f] to-[#122a45] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Global Reach
          </h1>
          <div className="w-14 h-[3px] bg-gold mx-auto mb-6" />
          <p className="text-lg text-white/80">
            From India to the World
          </p>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Global Presence
            </h2>
            <div className="w-12 h-[3px] bg-gold mx-auto mb-4" />
            <p className="text-muted-foreground">
              Serving industries across four continents with precision engineering solutions
            </p>
          </div>

          {/* 🌍 GLOBAL IMAGE SECTION */}
          <div className="relative rounded-2xl overflow-hidden mb-16 bg-muted">
            <img
              src="/images/global/global-reach.png"
              alt=""
              className="
                w-full 
                h-[220px] 
                sm:h-[320px] 
                md:h-[420px] 
                object-contain 
                md:object-cover
              "
            />

            {/* Stats overlay – desktop only */}
            <div className="hidden md:flex absolute bottom-6 left-0 right-0 justify-center gap-16 text-white">
              <div className="text-center">
                <p className="text-2xl font-bold">120+</p>
                <p className="text-sm text-white/80">Global Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-white/80">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-white/80">Continents</p>
              </div>
            </div>
          </div>

          {/* REGION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {regions.map((region, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <div className="mb-4 w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-white">
                  {region.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {region.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {region.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS EXCELLENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Logistics Excellence
            </h2>
            <div className="w-12 h-[3px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {logistics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gold flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY NETWORK */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Supply Network
            </h2>
            <div className="w-12 h-[3px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["1", "2", "3"].map((n) => (
              <div key={n} className="rounded-xl overflow-hidden">
                <img
                  src={`/images/global/network-${n}.png`}
                  alt=""
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold text-black text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-xl italic"
        >
          "Let’s discuss how we can support your international sourcing needs."
        </motion.p>
      </section>
    </main>
  );
}
