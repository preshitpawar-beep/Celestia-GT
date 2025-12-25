
export default function QualityCommitment() {
  const items = ["ISO-aligned supplier network","Multi-stage inspection","Complete documentation","Confidentiality under NDAs"];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {items.map(i=>(<div key={i} className="p-8 shadow rounded-xl">{i}</div>))}
      </div>
    </section>
  );
}
