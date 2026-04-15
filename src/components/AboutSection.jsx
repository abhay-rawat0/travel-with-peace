export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Mountain Travel Partner</h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We provide safe, comfortable, and peaceful travel experiences across Uttarakhand and
            Himachal Pradesh. Whether you are planning a spiritual journey, a family holiday, or a
            group mountain trip, we have the right vehicle and local experience for you.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Comfortable vehicles for hills & long routes</li>
            <li>✔ Pilgrimage, family, and group tours available</li>
            <li>✔ Affordable pricing with reliable drivers</li>
            <li>✔ Pickup from Delhi, Dehradun & Haridwar</li>
          </ul>
        </div>
      </div>
    </section>
  )
}