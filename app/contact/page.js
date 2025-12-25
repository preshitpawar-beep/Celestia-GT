
export default function Contact() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Get a Quote</h1>
      <form className="grid gap-4 max-w-md">
        <input placeholder="Name" className="border p-3" />
        <input placeholder="Company" className="border p-3" />
        <input placeholder="Email" className="border p-3" />
        <textarea placeholder="Requirement" className="border p-3" />
        <button className="bg-gold text-white px-6 py-3">Submit</button>
      </form>
    </section>
  );
}
