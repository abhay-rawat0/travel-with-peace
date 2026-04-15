function HeroSection({ brand }) {
  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white">
        <p className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs md:text-sm font-medium backdrop-blur-sm">
          Explore Uttarakhand & Himachal with Comfort
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Travel With Peace
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
          Reliable mountain travel for Char Dham, Chopta, Manali, family trips,
          pilgrimage tours, and peaceful getaways.
        </p>

        <p className="mt-4 text-sm md:text-base font-medium text-emerald-300">
          Pickup available from Delhi • Dehradun • Haridwar
        </p>

        <p className="mt-2 text-sm text-slate-300">
          Family trips • Pilgrimage tours • Comfortable mountain travel
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${brand.phone}`}
            className="rounded-2xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition"
          >
            Call Now
          </a>

          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-emerald-500 text-white px-6 py-3 font-semibold hover:bg-emerald-600 transition"
          >
            Book on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-xs md:text-sm text-slate-300">
          Trusted by families • Comfortable mountain travel • Quick WhatsApp support
        </p>
      </div>
    </section>
  )
}

export default HeroSection