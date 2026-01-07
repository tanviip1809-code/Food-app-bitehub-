export default function CTA() {
  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">Download the BiteHub App</h2>
          <p className="mt-2 text-emerald-50">Track orders in real-time, unlock exclusive offers, and reorder in a tap.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-4 py-2 rounded-xl bg-white text-emerald-700 font-semibold">Get on Play Store</a>
            <a href="#" className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/40">Get on App Store</a>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop" alt="App mockup" className="rounded-3xl shadow-lg object-cover h-72 md:h-80"/>
      </div>
    </section>
  )
}
