"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/global-reach", label: "Global Reach" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-80 bg-navy">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.webp"
            alt="Celestia Global Trade"
            width={160}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition pb-1 ${
                  isActive
                    ? "text-gold border-b-2 border-gold"
                    : "text-slate-200 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-gold text-navy px-5 py-2 rounded-md font-medium"
        >
          Request Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={isActive ? "text-gold" : "text-slate-200"}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gold text-navy px-4 py-2 rounded text-center font-medium"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
