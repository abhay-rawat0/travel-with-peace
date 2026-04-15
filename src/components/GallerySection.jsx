import SectionTitle from './SectionTitle'

export default function GallerySection({ gallery }) {
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Travel Gallery"
          subtitle="A glimpse of peaceful mountain journeys"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl shadow-md border border-slate-100 bg-white"
            >
              <img
                src={img}
                alt={`Travel gallery ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}