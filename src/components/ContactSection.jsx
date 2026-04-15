import BookingForm from './BookingForm'

export default function ContactSection({ brand }) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <h2 className="text-3xl md:text-4xl font-bold">Contact {brand.name}</h2>

          <p className="mt-4 text-slate-600 text-lg">
            Call or WhatsApp us to book your trip. We create custom packages for family tours,
            pilgrimages, and group travel.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold">Phone</p>
              <p className="text-slate-600 mt-2">{brand.phone}</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold">Service Areas</p>
              <p className="text-slate-600 mt-2">{brand.serviceAreas.join(' • ')}</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold">Special Trips</p>
              <p className="text-slate-600 mt-2">{brand.specialTrips.join(' • ')}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold text-center hover:scale-105 transition"
            >
              Book on WhatsApp
            </a>

            <a
              href={`tel:${brand.phone.replace(/\s/g, '')}`}
              className="px-6 py-3 rounded-2xl border border-slate-300 text-slate-900 font-semibold text-center hover:bg-slate-50 transition"
            >
              Call Now
            </a>
          </div>
        </div>

        <BookingForm whatsapp={brand.whatsapp} />
      </div>
    </section>
  )
}