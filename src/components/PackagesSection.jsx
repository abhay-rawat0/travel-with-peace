import SectionTitle from './SectionTitle'

export default function PackagesSection({ packages }) {
  return (
    <section id="packages" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Popular Packages"
          subtitle="Prices can be added later. Contact on WhatsApp for instant quote."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-50 rounded-3xl p-6 shadow-md border border-slate-100"
            >
              <h3 className="text-2xl font-bold">{pkg.title}</h3>

              <p className="mt-3 text-slate-600">
                <span className="font-semibold">Duration:</span> {pkg.duration}
              </p>

              <p className="mt-2 text-emerald-700 font-semibold">{pkg.price}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.includes.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}