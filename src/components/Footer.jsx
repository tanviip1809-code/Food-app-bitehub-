export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} BiteHub. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-emerald-700">Privacy</a>
          <a href="#" className="hover:text-emerald-700">Terms</a>
          <a href="#" className="hover:text-emerald-700">Support</a>
        </nav>
      </div>
    </footer>
  )
}
