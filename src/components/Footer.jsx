import { Link } from 'react-router-dom'

import logo from '../assets/logo/image.png'

const phone = '+91 98982 08196'
const phoneDial = '+919898208196'
const email = 'info@pkrealestateandinvestors.com'
const website = 'www.pkrealestateandinvestors.com'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-brand-primary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              <img src={logo} alt="Pithadkrupa Real Estate" className="h-full w-full object-contain" />
            </div>
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              Pithadkrupa Real Estate
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
            Pithadkrupa Real Estate & Investors - Where Dreams Come True... Buy • Sell • Invest with end-to-end real estate assistance in Ahmedabad.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white/90">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-white/70">
            <Link className="hover:text-brand-accent" to="/properties">
              Explore Deals
            </Link>
            <Link className="hover:text-brand-accent" to="/list-property">
              List Property
            </Link>
            <Link className="hover:text-brand-accent" to="/about">
              About
            </Link>
            <Link className="hover:text-brand-accent" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white/90">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-white/70">
            <a className="hover:text-brand-accent" href={`tel:${phoneDial}`}>
              Phone: {phone}
            </a>
            <a className="hover:text-brand-accent" href={`mailto:${email}`}>
              Email: {email}
            </a>
            <a className="hover:text-brand-accent" href={`https://${website}`} target="_blank" rel="noopener noreferrer">
              Website: {website}
            </a>
            <div>Working Hours: 10 AM to 7 PM</div>
            <div>Location: Ahmedabad, India</div>
            <div className="text-xs text-slate-500 dark:text-white/50">
              © {new Date().getFullYear()} Pithadkrupa Real Estate & Investors
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
