
"use client";
import { motion } from "framer-motion";
export default function QualityHero() {
  return (
    <section className="bg-navy text-white py-32 text-center">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl font-bold mb-4">
        Quality & Reliability
      </motion.h2>
      <p>Quality you can measure. Reliability you can trust.</p>
    </section>
  );
}
