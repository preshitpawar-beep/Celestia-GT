
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-navy text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-5xl font-bold mb-6">
          Engineering Exports from India
        </motion.h1>
        <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="max-w-xl mb-8">
          Export-ready engineering products supported by structured quality and documentation.
        </motion.p>
      </div>
    </section>
  );
}
