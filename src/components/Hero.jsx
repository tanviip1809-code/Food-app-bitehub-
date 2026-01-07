export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-medium">Super fast delivery</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Crave it. <span className="text-emerald-600">Get it.</span> Love it.
          </h1>
          <p className="mt-4 text-neutral-600">Order from the best restaurants near you. Fresh, hot, and delivered to your door in minutes.</p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">Order now</a>
            <a href="#" className="px-5 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100">View offers</a>
          </div>
          <div className="mt-6 text-sm text-neutral-500">Free delivery on orders over ₹299 • 30–40 min average</div>
        </div>
        <div className="relative">
          <img
            src="/images/Hero-img.png"
            alt="Food delivery hero"
            className="w-full h-80 md:h-[28rem] object-cover rounded-3xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
