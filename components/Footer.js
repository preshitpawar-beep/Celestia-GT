import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">

        {/* Brand */}
        <div>
          <Image
            src="/logo1.webp"
            alt="Celestia Global Trade"
            width={160}
            height={40}
          />
          <p className="mt-4 text-slate-300">
            Precision Engineering. Global Supply.
            <br />
            Engineering exports from India to global industries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/quality">Quality</Link></li>
            <li><Link href="/global-reach">Global Reach</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-gold font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2">
            <li>Machined Components</li>
            <li>Industrial Castings</li>
            <li>Fabricated Assemblies</li>
            <li>Aluminium & Steel Products</li>
            <li>Engineering Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
          <p>📧 harsh.jaiswal@celestiagt.com</p>
          <p>🌍 India & United Kingdom</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-16 py-6 text-center text-xs text-slate-400">
        <Image
          src="/devraj-group.webp"
          alt="Devraj Group"
          width={120}
          height={40}
          className="mx-auto mb-3"
        />
        © 2025 Celestia GT. All enquiries governed by ICC NDAs.
      </div>
    </footer>
  );
}
