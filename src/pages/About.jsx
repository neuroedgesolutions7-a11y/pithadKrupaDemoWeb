import PageShell from '../components/PageShell.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'

export default function About() {
  return (
    <PageShell>
      <section className="pt-10">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            About
          </h1>
        </Reveal>

        <Reveal>
          <div className="mt-6 glass rounded-3xl p-8">
            <p className="text-slate-700 dark:text-white/75">
              Properties Tracker is built to simplify real estate deals. Whether you want to buy, sell, rent, or
              invest — we ensure smooth and profitable transactions.
            </p>

            <div className="mt-4 text-sm text-slate-600 dark:text-white/70">
              Founder: <span className="font-semibold text-slate-900 dark:text-white">Dharm</span> (Instagram: @dharm_z7)
            </div>

            <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
              <StaggerItem>
                <div className="glass-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Mission</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    Make real estate deals simple, fast, and transparent — with clear pricing and quick assistance.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Trust First</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    High-trust assistance from search to closure — helping you avoid delays and make confident decisions.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Proof</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    650+ clients served · 120+ premium listings · Fast responses via Call & WhatsApp.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </Reveal>
      </section>
    </PageShell>
  )
}
