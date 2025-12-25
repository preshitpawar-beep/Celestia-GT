
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold">CELESTIA GT</Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/quality">Quality</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="bg-gold text-white px-4 py-2 rounded">
          Request Quote
        </Link>
      </div>
    </header>
  );
}
