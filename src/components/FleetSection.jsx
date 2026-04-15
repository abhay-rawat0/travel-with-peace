import SectionTitle from './SectionTitle'

export default function FleetSection({ fleet }) {
  return (
    <section id="fleet" className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title="Our Vehicles"
        subtitle="Comfortable rides for family tours, pilgrimage trips, and group travel"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((v) => (
          <div key={v.id} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold">{v.name}</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                {v.type}
              </span>
            </div>

            <p className="mt-2 text-emerald-700 font-medium">{v.seats}</p>
            <p className="mt-3 text-slate-600">{v.use}</p>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold">Luggage:</span> {v.luggage}
              </p>
              <p>
                <span className="font-semibold">Availability:</span> {v.availability}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {v.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-slate-200 text-slate-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}