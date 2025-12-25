
export default function Documentation() {
  const docs = ["MTC","FAI","NDT Reports","Quality Photos","Dimensional Reports"];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Complete Documentation Package</h2>
        <ul className="space-y-3">
          {docs.map(d=>(<li key={d}>{d}</li>))}
        </ul>
      </div>
    </section>
  );
}
