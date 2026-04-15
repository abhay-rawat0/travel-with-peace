export default function Footer({ brand }) {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
            <p className="mt-3 text-sm leading-6">
              Trusted mountain travel for Char Dham, Chopta, Manali, family tours,
              pilgrimage trips, and peaceful Uttarakhand–Himachal journeys.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Contact</h4>
            <div className="mt-3 space-y-2 text-sm">
              <p>Phone: 8448621262</p>
              <p>WhatsApp: 9315692621</p>
              <p>Pickup: Delhi, Dehradun, Haridwar</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Popular Routes</h4>
            <div className="mt-3 space-y-2 text-sm">
              <p>Char Dham Yatra</p>
              <p>Chopta & Tungnath</p>
              <p>Manali Tour</p>
              <p>Uttarakhand & Himachal Trips</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}