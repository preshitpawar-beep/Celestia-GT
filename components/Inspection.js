
export default function Inspection() {
  const steps = ["Raw Material Verification","In-Process Inspection","Dimensional Check","NDT Testing","Visual Inspection","Final Documentation"];
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">6-Stage Inspection Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=>(
            <div key={s} className="bg-white p-6 rounded shadow">
              <strong>{i+1}</strong>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
