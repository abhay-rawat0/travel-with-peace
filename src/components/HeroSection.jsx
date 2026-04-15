export default function HeroSection({ brand }) {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.65)), url('${brand.heroImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <p className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm tracking-wide mb-5">
          {brand.tagline}
        </p>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight">{brand.heroTitle}</h1>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-slate-200">
          {brand.heroSubtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinations"
            className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Tours
          </a>

          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur font-semibold hover:bg-white/20 transition"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}