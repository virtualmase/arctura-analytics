'use client'

import { ArrowUpRight, Clock, Handshake, Megaphone, Sparkles } from 'lucide-react'

import { Container } from '@/components/container'
import { Section, SectionHeader } from '@/components/section'
import { ParticleField } from '@/components/particles'

const contactStreams = [
  {
    title: 'Mission partnerships',
    description:
      'Executive leaders preparing to fortify data platforms, redesign services, or stabilise critical infrastructure.',
    icon: Handshake,
    email: 'mission@arctura-analytics.com',
    meta: ['Dedicated partner in 48 hours', 'Strategic briefing deck in 10 days'],
    cta: { label: 'Schedule a briefing', href: 'mailto:mission@arctura-analytics.com' },
    // optional visual used in other variants; harmless if unused here
    gradient: 'from-[#FF8A65]/50 via-[#E75A7C]/40 to-[#6D5CE7]/40'
  },
  {
    title: 'Media & speaking',
    description:
      'Press, event curators, and policy forums exploring resilient civic technology and analytics.',
    icon: Megaphone,
    email: 'press@arctura-analytics.com',
    meta: ['Keynotes, panels, op-eds', 'Rapid insights & research highlights'],
    cta: { label: 'Request commentary', href: 'mailto:press@arctura-analytics.com' },
    gradient: 'from-[#FDD835]/35 via-[#FF7043]/40 to-[#AB47BC]/40'
  },
  {
    title: 'Alliances & talent collaborations',
    description:
      'Leaders and specialists ready to co-create civic impact as fractional partners, advisors, or future teammates.',
    icon: Sparkles,
    email: 'talent@arctura-analytics.com',
    meta: ['Invite-only talent constellation', 'Co-create sprints & fellowships'],
    cta: { label: 'Explore talent collaborations', href: 'mailto:talent@arctura-analytics.com' },
    gradient: 'from-[#5EEAD4]/40 via-[#38BDF8]/35 to-[#A855F7]/35'
  }
]

export default function ContactPage() {
  return (
    <main id="content" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <Section bleed tone="light" className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,118,78,0.32),transparent_56%),radial-gradient(circle_at_90%_12%,rgba(174,60,56,0.28),transparent_58%),linear-gradient(160deg,rgba(18,6,8,0.96),rgba(5,2,3,0.88))]"
          aria-hidden
        />
        <ParticleField className="absolute inset-0 opacity-25" aria-hidden />
        <Container className="relative z-[1] grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              Plan your briefing
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
              Let’s plan the briefing that unlocks your next mandate.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Whether you are stabilising critical services, weaving data into decisive policy, or building the next platform for millions, our team assembles fast, listens deeply, and co-creates a path built to endure.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card rounded-3xl border border-[color:var(--border)] p-6 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-muted">Average response</h2>
                <p className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">&lt; 18 hours</p>
                <p className="mt-2 text-sm text-muted">
                  Every inquiry is triaged by a partner who has led large-scale civic transformations.
                </p>
              </div>
              <div className="surface-card rounded-3xl border border-[color:var(--border)] p-6 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-muted">Engagement footprint</h2>
                <p className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">30+ municipalities</p>
                <p className="mt-2 text-sm text-muted">
                  From rapid response war rooms to long-horizon modernisation, we cover the spectrum.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-panel h-full rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(150deg,rgba(20,10,14,0.9),rgba(8,4,6,0.88))] p-8 shadow-[0_46px_140px_rgba(8,3,6,0.5)]">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-muted">
              <ArrowUpRight className="h-4 w-4 text-[color:var(--accent-amber)]" aria-hidden />
              Direct partner access
            </div>
            <p className="mt-5 text-lg font-semibold text-[color:var(--ink)]">hello@arctura-analytics.com</p>
            <p className="mt-2 text-sm text-muted">
              Prefer a direct channel? Email us and the right team will respond with next steps and a briefing agenda.
            </p>
            <dl className="mt-6 grid gap-4 text-sm text-muted">
              <div className="flex items-start gap-3">
                <Clock className="mt-[2px] h-4 w-4 text-[color:var(--accent-amber)]" aria-hidden />
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">Response window</dt>
                  <dd className="mt-1">Monday–Friday, 8:00–20:00 ET</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-[2px] h-4 w-4 text-[color:var(--accent-amber)]" aria-hidden />
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">Special handling</dt>
                  <dd className="mt-1">Critical incidents receive an executive response within 2 hours.</dd>
                </div>
              </div>
            </dl>
            <a
              href="mailto:talent@arctura-analytics.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted transition hover:text-[color:var(--ink)]"
            >
              Join the talent collective
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </Container>
      </Section>

      <Section tone="light" className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,138,101,0.28),transparent_58%),radial-gradient(circle_at_85%_15%,rgba(167,51,117,0.22),transparent_60%),linear-gradient(180deg,rgba(7,3,5,0.92),rgba(5,2,3,0.88))]"
          aria-hidden
        />
        <Container className="relative z-[1] space-y-10">
          <SectionHeader
            title="Choose the stream that matches your mission"
            subtitle="Each pathway connects you directly to a specialist crew—no generic forms, just informed guidance from day one."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {contactStreams.map((stream) => (
              <div
                key={stream.title}
                className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] bg-[color:var(--surface)] p-7 shadow-[0_30px_120px_rgba(8,3,6,0.45)] transition hover:-translate-y-1"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${stream.gradient} opacity-70`}
                  aria-hidden
                />
                <div className="relative z-[1] flex h-full flex-col">
                  <stream.icon className="h-8 w-8 text-[color:var(--accent-amber)]" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink)]">{stream.title}</h3>
                  <p className="mt-3 text-sm text-muted">{stream.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[color:var(--ink)]">{stream.email}</p>
                  <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.28em] text-muted">
                    {stream.meta.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-amber)]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={stream.cta.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted transition hover:text-[color:var(--ink)]"
                  >
                    {stream.cta.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
