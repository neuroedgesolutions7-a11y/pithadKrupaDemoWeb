import { Outlet } from 'react-router-dom'

import FloatingButtons from '../components/FloatingButtons.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function MainLayout() {
  const phone = '+919898208196'

  return (
    <div className="min-h-svh pb-16 md:pb-0">
      <Navbar />
      <div className="border-b border-slate-900/5 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-2 text-xs md:text-sm md:px-6 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div className="font-semibold text-slate-900 dark:text-white">
              Limited Time Property Deals Available!
            </div>
            <a
              href={`tel:${phone}`}
              className="text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
            >
              Call now: {phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
        <Outlet />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
