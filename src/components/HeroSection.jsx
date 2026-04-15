export default function HeroSection({ brand }) {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 6, 23, 0.65), rgba(2, 6, 23, 0.65)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          Explore Uttarakhand & Himachal with Comfort
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Travel With Peace
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
          Reliable mountain travel for Char Dham, Chopta, Manali, family trips,
          pilgrimage tours, and peaceful getaways.
        </p>

        <p className="mt-4 text-sm md:text-base font-medium text-emerald-300">
          Pickup available from Delhi • Dehradun • Haridwar
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+918448621262"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition"
          >
            Call Now
          </a>

          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}