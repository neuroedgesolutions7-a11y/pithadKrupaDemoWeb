import { Link } from 'react-router-dom'

import AnimatedCounter from '../components/AnimatedCounter.jsx'
import CTASection from '../components/CTASection.jsx'
import FeaturedCarousel from '../components/FeaturedCarousel.jsx'
import PageShell from '../components/PageShell.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import properties from '../data/properties.js'
import testimonials from '../data/testimonials.js'
import Reveal from '../components/motion/Reveal.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'

export default function Home() {
  return (
    <PageShell>
      <section className="pt-14 md:pt-20">
        <Reveal>
          <div className="glass rounded-3xl overflow-hidden relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="absolute inset-0 block dark:hidden"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.88) 70%, rgba(255,255,255,0.94) 100%)',
              }}
            />
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgba(17,24,39,0.25) 0%, rgba(17,24,39,0.86) 100%)',
              }}
            />
            <div
              className="absolute inset-0 block dark:hidden"
              style={{
                backgroundImage:
                  'radial-gradient(760px 280px at 18% 10%, rgba(245,158,11,0.18), transparent 60%), radial-gradient(900px 320px at 92% 18%, rgba(16,185,129,0.14), transparent 55%)',
              }}
            />
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage:
                  'radial-gradient(700px 260px at 18% 12%, rgba(245,158,11,0.22), transparent 60%), radial-gradient(900px 320px at 90% 20%, rgba(16,185,129,0.22), transparent 55%)',
              }}
            />

            <div className="relative p-8 md:p-12">
              <p className="text-slate-600 dark:text-white/70 text-sm font-semibold">
                Residential • Commercial • Pre-Launch • Investment
              </p>
              <h1 className="mt-3 text-3xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Pithadkrupa Real Estate & Investors
              </h1>
              <h2 className="mt-2 text-xl md:text-3xl font-medium text-brand-primary dark:text-brand-secondary">
                Where Dreams Come True...
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-white/70">
                Trusted real estate consultants in Ahmedabad. Your trusted partner for residential, commercial & pre-launch properties with expert investment guidance.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/properties"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
                >
                  View Properties
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>

              <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
                <StaggerItem>
                  <AnimatedCounter label="Properties Sold" value={500} suffix="+" />
                </StaggerItem>
                <StaggerItem>
                  <AnimatedCounter label="Happy Clients" value={1000} suffix="+" />
                </StaggerItem>
                <StaggerItem>
                  <AnimatedCounter label="Years Experience" value={15} suffix="+" />
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <FeaturedCarousel properties={properties} />
      </Reveal>

      <section className="mt-16">
        <Reveal>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Our Services</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Comprehensive Real Estate Solutions
          </h2>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StaggerItem>
            <div className="glass rounded-3xl p-7 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Residential Properties</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Premium homes, apartments, and villas in prime Ahmedabad locations
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass rounded-3xl p-7 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Commercial Properties</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Office spaces, retail shops, and commercial investments
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass rounded-3xl p-7 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Pre Launch Projects</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Exclusive pre-launch deals with best pricing and early bird benefits
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass rounded-3xl p-7 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Investment Consulting</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Expert guidance for profitable real estate investments in Ahmedabad
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Meet Our Team</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Expert Real Estate Consultants
          </h2>
        </Reveal>
        <Stagger className="mt-6 grid gap-6 md:grid-cols-2">
          <StaggerItem>
            <div className="glass rounded-3xl p-8 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SP</span>
              </div>
              <div className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Sapna Pithadiya</div>
              <div className="text-sm text-brand-primary dark:text-brand-secondary font-medium">CEO</div>
              <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-white/70">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919898208196" className="hover:text-brand-accent">+91 98982 08196</a>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass rounded-3xl p-8 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">VP</span>
              </div>
              <div className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Vatsal Pithadiya</div>
              <div className="text-sm text-brand-primary dark:text-brand-secondary font-medium">Director</div>
              <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-white/70">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919898218196" className="hover:text-brand-accent">+91 98982 18196</a>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Testimonials</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Loved by Ahmedabad clients
          </h2>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Our Location</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Serving Ahmedabad with Local Expertise
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-white/70">
            With deep knowledge of Ahmedabad's real estate market, we provide personalized service to help you find the perfect property in prime locations across the city.
          </p>
        </Reveal>
        <div className="mt-6 glass rounded-3xl p-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1234567890!2d72.1234567890!3d23.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '1.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pithadkrupa Real Estate Location - Ahmedabad"
            className="w-full"
          />
        </div>
      </section>

      <Reveal>
        <CTASection />
      </Reveal>
    </PageShell>
  )
}
