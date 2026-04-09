import PageShell from '../components/PageShell.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'
import Reveal from '../components/motion/Reveal.jsx'

const phone = '+91 98982 08196'
const phoneDial = '+919898208196'
const whatsappNumber = '919898208196'

export default function Contact() {
  return (
    <PageShell>
      <section className="pt-10">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Contact
          </h1>
          <p className="mt-2 text-slate-600 dark:text-white/70 text-sm">
            Phone: {phone} · Available: 10 AM to 7 PM
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-6 lg:grid-cols-2">
          <StaggerItem>
            <div className="glass rounded-3xl p-8">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Get in touch</div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${phoneDial}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
                >
                  Click to Call
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    'Hi PROPERTIES TRACKER, I want the best deal. Please contact me.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>

              <form className="mt-5 grid gap-4">
                <input
                  className="w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Your Name"
                />
                <input
                  className="w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Phone"
                />
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Message"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
                >
                  Send (UI Only)
                </button>
              </form>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass rounded-3xl overflow-hidden">
              <iframe
                title="PROPERTIES TRACKER Ahmedabad Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8776889208!2d72.5144!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b4b4b4b4b4%3A0xb4b4b4b4b4b4b4b4!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </section>
    </PageShell>
  )
}
