
export default function Products() {
  const items = [
    "Machined Components",
    "Industrial Castings",
    "Fabricated Assemblies",
    "Aluminium & Steel Products",
    "Engineering Services"
  ];
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10">Products & Capabilities</h1>
      <ul className="grid md:grid-cols-2 gap-6">
        {items.map(i => (
          <li key={i} className="p-6 shadow rounded">{i}</li>
        ))}
      </ul>
    </section>
  );
}
