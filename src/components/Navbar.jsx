import { useState } from 'react'
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-emerald-600 text-white">B</span>
          <span>Bitehub</span>
        </a>
        <div className="hidden md:flex items-center gap-4">
          <input
            onChange={(e)=>onSearch?.(e.target.value)}
            className="w-72 rounded-xl border border-neutral-300 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Search burgers, pizza..."
          />
          <a href="#menu" className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">Menu</a>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100">
            <FiShoppingBag /><span className="hidden sm:inline">Cart</span>
          </button>
        </div>
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2">{open ? <FiX/> : <FiMenu/>}</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 px-4 pb-4 space-y-3">
          <input
            onChange={(e)=>onSearch?.(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Search burgers, pizza..."
          />
          <div className="flex gap-3">
            <a href="#menu" className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">Menu</a>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100">
              <FiShoppingBag /> Cart
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
