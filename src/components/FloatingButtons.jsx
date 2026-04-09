import { PhoneCall, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const phone = '+919898208196'
const whatsappNumber = '919898208196'

export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden md:flex flex-col gap-3">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            'Hi Pithadkrupa Real Estate, I am interested in a property deal.'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="glass-soft group inline-flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-white/80 dark:hover:bg-white/10"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="text-brand-blue group-hover:scale-105 transition" size={20} />
        </a>

        <a
          href={`tel:${phone}`}
          className="glass-soft group inline-flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-white/80 dark:hover:bg-white/10"
          aria-label="Call"
        >
          <PhoneCall className="text-brand-accent group-hover:scale-105 transition" size={20} />
        </a>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-900/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-brand-primary/70">
        <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-3 gap-2">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-accent px-4 py-3 text-sm font-semibold text-slate-900 shadow-soft"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              'Hi Pithadkrupa Real Estate, I want the best deal. Please call me back.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-white"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900/5 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white dark:ring-white/15"
          >
            Visit
          </Link>
        </div>
      </div>
    </>
  )
}
