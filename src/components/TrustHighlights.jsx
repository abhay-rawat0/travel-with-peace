export default function TrustHighlights() {
  const items = [
    {
      title: '24/7 Booking Support',
      text: 'Quick response on call and WhatsApp for urgent travel plans.',
    },
    {
      title: 'Safe Mountain Travel',
      text: 'Comfortable rides for family trips, pilgrimage tours, and hill journeys.',
    },
    {
      title: 'Flexible Pickup',
      text: 'Pickup available from Delhi, Dehradun, and Haridwar.',
    },
    {
      title: 'Trusted Tour Routes',
      text: 'Char Dham, Chopta, Manali, and Uttarakhand–Himachal trips.',
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}