import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryTabs from './components/CategoryTabs.jsx'
import FoodGrid from './components/FoodGrid.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import foods from './data/foods.js'

const CATEGORIES = ['All', 'Pizza', 'Burger', 'Drinks', 'Dessert']

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return foods.filter(f => 
      (category === 'All' || f.category === category) &&
      (f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q))
    )
  }, [query, category])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={setQuery} />
      <main className="flex-1">
        <Hero />
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <CategoryTabs selected={category} onChange={setCategory} items={CATEGORIES} />
          <FoodGrid items={filtered} />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
