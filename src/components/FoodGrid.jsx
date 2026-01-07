export default function FoodGrid({ items = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
      {items.map(item => (
        <article key={item.id} className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <div className="relative">
            <img src={item.image} alt={item.name} className="h-52 w-full object-cover group-hover:scale-[1.02] transition" loading="lazy"/>
            <div className="absolute top-3 left-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium">{item.category}</div>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-neutral-600 line-clamp-2">{item.desc}</p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-bold">₹{item.price}</span>
              <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Add</button>
            </div>
          </div>
        </article>
      ))}
      {items.length === 0 && (
        <p className="col-span-full text-neutral-500">No items match your search.</p>
      )}
    </div>
  )
}
