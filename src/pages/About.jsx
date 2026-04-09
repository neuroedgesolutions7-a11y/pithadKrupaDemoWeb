import PageShell from '../components/PageShell.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'

export default function About() {
  return (
    <PageShell>
      <section className="pt-10">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            About Pithadkrupa Real Estate
          </h1>
        </Reveal>

        <Reveal>
          <div className="mt-6 glass rounded-3xl p-8">
            <p className="text-slate-700 dark:text-white/75">
              Pithadkrupa Real Estate & Investors is your trusted partner for real estate solutions in Ahmedabad. 
              With years of experience in the local market, we specialize in residential properties, commercial spaces, 
              pre-launch projects, and investment consulting. Where Dreams Come True...
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="text-sm text-slate-600 dark:text-white/70">
                <span className="font-semibold text-slate-900 dark:text-white">Sapna Pithadiya</span>
                <br />CEO
                <br />📞 <a href="tel:+919898208196" className="hover:text-brand-accent">+91 98982 08196</a>
              </div>
              <div className="text-sm text-slate-600 dark:text-white/70">
                <span className="font-semibold text-slate-900 dark:text-white">Vatsal Pithadiya</span>
                <br />Director
                <br />📞 <a href="tel:+919898218196" className="hover:text-brand-accent">+91 98982 18196</a>
              </div>
            </div>

            <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
              <StaggerItem>
                <div className="glass-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Our Mission</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    Provide exceptional real estate services with transparency, integrity, and personalized attention to help clients find their perfect property in Ahmedabad.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Local Expertise</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    Deep knowledge of Ahmedabad's real estate market with insights into prime locations, upcoming developments, and investment opportunities.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Our Success</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    500+ properties sold • 1000+ happy clients • 15+ years of experience • End-to-end real estate solutions in Ahmedabad.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Why Choose Pithadkrupa?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Trusted Consultants</div>
                  <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                    Reliable guidance with proven track record in Ahmedabad real estate
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Complete Solutions</div>
                  <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                    Residential, commercial, pre-launch, and investment services
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Personal Service</div>
                  <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                    Direct communication with Sapna and Vatsal for personalized attention
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">Best Deals</div>
                  <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                    Access to exclusive properties and pre-launch opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  )
}
