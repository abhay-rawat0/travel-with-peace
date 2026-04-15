import SectionTitle from './SectionTitle'

export default function ReviewsSection({ reviews }) {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title="Customer Reviews"
        subtitle="Showcasing trust, comfort, and reliable travel experience"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-100"
          >
            <p className="text-slate-600 leading-relaxed">“{review.text}”</p>
            <p className="mt-4 font-semibold text-slate-900">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}