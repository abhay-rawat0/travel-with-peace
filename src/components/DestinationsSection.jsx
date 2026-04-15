import SectionTitle from './SectionTitle'

export default function DestinationsSection({ destinations }) {
  return (
    <section id="destinations" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Popular Destinations"
          subtitle="Discover spiritual tours, hill stations, and peaceful mountain getaways"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div
              key={d.id}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition"
            >
              <img src={d.image} alt={d.name} className="w-full h-52 object-cover" />

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-emerald-700">{d.state}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {d.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-3">{d.name}</h3>

                <p className="mt-3 text-slate-600">{d.desc}</p>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Duration:</span> {d.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Best Time:</span> {d.bestTime}
                  </p>
                  <p>
                    <span className="font-semibold">Pricing:</span> {d.priceNote}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {d.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-slate-200 text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}