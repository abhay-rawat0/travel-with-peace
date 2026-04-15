export default function BookingForm({ whatsapp }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)

    const name = form.get('name')
    const phone = form.get('phone')
    const trip = form.get('trip')
    const pickup = form.get('pickup')

    const message = `Hello, I want to book a trip.%0AName: ${name}%0APhone: ${phone}%0ATrip: ${trip}%0APickup: ${pickup}`

    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank')
  }

  return (
    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
      <h3 className="text-2xl font-bold">Quick Booking Enquiry</h3>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none"
        />

        <input
          name="phone"
          required
          placeholder="Your Phone Number"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none"
        />

        <input
          name="trip"
          required
          placeholder="Trip Name (e.g. Char Dham / Manali)"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none"
        />

        <select
          name="pickup"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none"
        >
          <option>Delhi Pickup</option>
          <option>Dehradun Pickup</option>
          <option>Haridwar Pickup</option>
        </select>

        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold hover:scale-[1.02] transition"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  )
}