
"use client";
import { motion } from "framer-motion";
const items = ["Machined Components","Industrial Castings","Fabricated Assemblies","Aluminium & Steel Products","Engineering Services"];
export default function Products() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12">Products & Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((i,idx)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.1}} className="bg-navy text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{i}</h3>
              <p className="text-sm">Export-ready engineering solutions aligned to specifications.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
