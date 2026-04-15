import { useState } from 'react'
import SectionTitle from './SectionTitle'

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    trip: '',
    pickup: '',
    travelers: '',
    message: '',
  })

  const whatsapp = '919315692621'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `
Hello Travel With Peace,

New Booking Enquiry

Name: ${form.name}
Phone: ${form.phone}
Trip: ${form.trip}
Pickup City: ${form.pickup}
Travelers: ${form.travelers}
Message: ${form.message}
    `.trim()

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          eyebrow="Quick Enquiry"
          title="Book Your Trip"
          subtitle="Send your travel details directly to WhatsApp and get a fast response."
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="trip"
              placeholder="Destination / Package"
              value={form.trip}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <select
              name="pickup"
              value={form.pickup}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="">Select Pickup City</option>
              <option value="Delhi">Delhi</option>
              <option value="Dehradun">Dehradun</option>
              <option value="Haridwar">Haridwar</option>
            </select>
          </div>

          <input
            type="number"
            name="travelers"
            placeholder="Number of Travelers"
            value={form.travelers}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Extra details (dates, vehicle preference, hotel needs, etc.)"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Send Booking on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}