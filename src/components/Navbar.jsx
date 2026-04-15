import { useState } from 'react'

export default function Navbar({ brand, whatsapp }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-bold text-slate-900">
          {brand}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#destinations">Destinations</a>
          <a href="#fleet">Fleet</a>
          <a href="#packages">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:scale-105 transition"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden px-3 py-2 rounded-xl border border-slate-300"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
          <a href="#destinations">Destinations</a>
          <a href="#fleet">Fleet</a>
          <a href="#packages">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  )
}