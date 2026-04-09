import { motion } from 'framer-motion'
import { Bath, BedDouble, MapPin, Ruler, CarFront, PhoneCall, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const phone = '+919898208196'
const whatsappNumber = '919898208196'

export default function PropertyCard({ property }) {
  const badges = property.badges || []

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="glass group overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.images?.[0]}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <div className="rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
            {property.status}
          </div>
          {badges.map((b) => (
            <div
              key={b}
              className={[
                'rounded-full px-3 py-1 text-xs font-semibold ring-1',
                b.toLowerCase().includes('hot')
                  ? 'bg-brand-accent/95 text-slate-900 ring-brand-accent/40'
                  : b.toLowerCase().includes('best')
                    ? 'bg-emerald-500/95 text-slate-900 ring-emerald-400/35'
                    : 'bg-white/90 text-slate-900 ring-white/40',
              ].join(' ')}
            >
              {b}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 rounded-2xl bg-black/55 px-4 py-2 text-sm font-semibold text-brand-accent ring-1 ring-white/15">
          {property.priceLabel}
        </div>
      </div>

      <div className="p-5">
        <div className="text-sm text-slate-600 dark:text-white/70 flex items-center gap-2">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
        <h3 className="mt-2 text-base font-semibold tracking-tight text-slate-900 dark:text-white">
          {property.title}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-white/70">
          <div className="flex items-center gap-2 rounded-xl bg-slate-900/5 px-3 py-2 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
            <Ruler size={14} className="text-brand-accent" />
            <span>{property.area}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-900/5 px-3 py-2 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
            <BedDouble size={14} className="text-brand-blue" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-900/5 px-3 py-2 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
            <Bath size={14} className="text-brand-accent" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-900/5 px-3 py-2 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
            <CarFront size={14} className="text-brand-blue" />
            <span>{property.parking} Parking</span>
          </div>
        </div>

        <p className="mt-4 max-h-10 overflow-hidden text-sm text-slate-600 dark:text-white/70">
          {property.description}
        </p>

        <div className="mt-5 grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-accent px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
            >
              <PhoneCall size={16} />
              Call
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi PROPERTIES TRACKER, I am interested in: ${property.title} (${property.location}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <Link
            to={`/properties/${property.id}`}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900/5 px-4 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 transition hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
