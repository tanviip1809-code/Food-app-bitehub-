export default function CategoryTabs({ items = [], selected, onChange }) {
  return (
    <div className="py-8" id="menu">
      <div className="flex flex-wrap items-center gap-2">
        {items.map(cat => (
          <button
            key={cat}
            onClick={() => onChange?.(cat)}
            className={[
              "px-4 py-2 rounded-xl border transition",
              selected === cat
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border-neutral-300 hover:bg-neutral-100"
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
