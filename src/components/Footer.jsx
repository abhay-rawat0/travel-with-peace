export default function Footer({ brand }) {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold">{brand.name}</h3>
          <p className="mt-3 text-slate-300">
            Safe, comfortable, and peaceful travel for Uttarakhand and Himachal tours.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Quick Contact</h4>
          <p className="mt-3 text-slate-300">Phone: {brand.phone}</p>
          <p className="mt-2 text-slate-300">WhatsApp: +{brand.whatsapp}</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Pickup Cities</h4>
          <p className="mt-3 text-slate-300">Delhi • Dehradun • Haridwar</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-700 text-sm text-slate-400">
        © 2026 Travel With Peace. All rights reserved.
      </div>
    </footer>
  )
}