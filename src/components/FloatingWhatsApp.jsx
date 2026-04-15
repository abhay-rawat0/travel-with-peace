export default function FloatingWhatsApp({ whatsapp }) {
  return (
    <a
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 px-5 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-2xl hover:scale-105 transition"
    >
      WhatsApp
    </a>
  )
}