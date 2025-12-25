"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          href="/"
          className="bg-navy px-4 py-2 rounded-lg flex items-center"
          >
          <Image
          src="/logo1.webp"
          alt="Celestia Global Trade"
          width={160}
          height={36}
          priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="text-gold border-b-2 border-gold pb-1">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/quality">Quality</Link>
          <Link href="/global-reach">Global Reach</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-gold text-white px-5 py-2 rounded-md font-medium"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
