import SectionTitle from './SectionTitle'

export default function DestinationsSection({ destinations }) {
  const whatsapp = '919315692621'

  const createWhatsAppLink = (destinationName) => {
    const message = `Hello Travel With Peace, I want details for ${destinationName}. Pickup cities: Delhi / Dehradun / Haridwar.`
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="destinations" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Popular Tours"
          title="Explore Uttarakhand & Himachal"
          subtitle="Pilgrimage, mountain escapes, snow trips, and family tours with comfortable vehicles."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-md border border-slate-100 hover:shadow-xl transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-emerald-700">
                    {item.region}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.name}
                </h3>

                <p className="text-slate-600 mb-4 leading-7">
                  {item.description}
                </p>

                <div className="space-y-2 text-sm text-slate-700 mb-5">
                  <p><strong>Duration:</strong> {item.duration}</p>
                  <p><strong>Best Time:</strong> {item.bestTime}</p>
                  <div className="flex items-center gap-2">
  <strong>Pricing:</strong>
  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
    {item.pricing}
  </span>
</div>
                  <p><strong>Pickup:</strong> {item.pickup?.join(', ')}</p>
                </div>

                <a
                  href={createWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-white font-semibold hover:bg-emerald-700 transition"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}