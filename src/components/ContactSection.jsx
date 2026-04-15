import SectionTitle from './SectionTitle'

export default function ContactSection({ brand }) {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          eyebrow="Contact Us"
          title="Plan Your Next Journey"
          subtitle="Get quick responses for bookings, pilgrimage tours, family trips, and hill station travel."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-bold mb-4">Travel With Peace</h3>
            <div className="space-y-3 text-slate-300">
              <p><strong className="text-white">Phone:</strong> 8448621262</p>
              <p><strong className="text-white">WhatsApp:</strong> 9315692621</p>
              <p><strong className="text-white">Pickup Cities:</strong> Delhi, Dehradun, Haridwar</p>
              <p><strong className="text-white">Service Area:</strong> Uttarakhand & Himachal Tours</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918448621262"
                className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-bold mb-4">Why Travel With Peace?</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Comfortable mountain travel for families and groups</li>
              <li>• Pilgrimage and leisure tours across Uttarakhand & Himachal</li>
              <li>• Flexible pickup options from Delhi, Dehradun & Haridwar</li>
              <li>• Fast booking support on WhatsApp and phone call</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}