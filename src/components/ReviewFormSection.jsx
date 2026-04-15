import { useState } from 'react'
import SectionTitle from './SectionTitle'

function ReviewFormSection({ whatsapp }) {
  const [form, setForm] = useState({
    name: '',
    trip: '',
    rating: '5',
    review: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hello Travel With Peace, I want to submit my review.

Name: ${form.name}
Trip: ${form.trip}
Rating: ${form.rating}/5
Review: ${form.review}`

    const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          eyebrow="Share Your Experience"
          title="Leave a Review"
          subtitle="Completed your trip with us? Send your review directly on WhatsApp."
        />

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Trip Name
              </label>
              <input
                type="text"
                name="trip"
                value={form.trip}
                onChange={handleChange}
                required
                placeholder="e.g. Char Dham Yatra"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Rating
            </label>
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
              <option value="4">⭐⭐⭐⭐ (4/5)</option>
              <option value="3">⭐⭐⭐ (3/5)</option>
              <option value="2">⭐⭐ (2/5)</option>
              <option value="1">⭐ (1/5)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Review
            </label>
            <textarea
              name="review"
              value={form.review}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your experience with Travel With Peace..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Send Review on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default ReviewFormSection