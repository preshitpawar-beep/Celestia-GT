
"use client";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold">CELESTIA GT</div>
        <nav className="hidden md:flex gap-8">
          <a>Home</a><a>About</a><a>Products</a><a>Quality</a><a>Contact</a>
        </nav>
        <button className="bg-gold text-white px-4 py-2 rounded">Request Quote</button>
      </div>
    </header>
  );
}
