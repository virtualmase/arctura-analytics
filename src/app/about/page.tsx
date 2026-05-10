'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'

const heroMetrics = [
  {
    value: '60 days',
    label: 'Mandate to launch',
    copy: 'Policy, procurement, and platform tracks run in one lane so progress never stalls.',
  },
  {
    value: '3 continents',
    label: 'Delivery footprint',
    copy: 'On-site squads across Africa, Europe, and North America keep ministries, citizens, and partners in lockstep.',
  },
  {
    value: '0 lock-in',
    label: 'Sovereign control',
    copy: 'Open standards, transparent code, and graceful handovers mean every client steers their own roadmap.',
  },
]

const serviceTracks = [
  {
    kicker: 'Government mandates',
    title: 'Leaders stay accountable',
    description:
      'Cabinet priorities translate into dashboards, playbooks, and legislation-ready documentation that withstand scrutiny.',
    highlights: [
      'Portfolio control rooms tuned for ministers and boards',
      'Procurement-ready architectures with audited security patterns',
      'Embedded advisors who stay through handover',
    ],
  },
  {
    kicker: 'Civic life',
    title: 'People feel the difference',
    description:
      'Services speak the language of residents, entrepreneurs, and caregivers, reducing friction on every channel.',
    highlights: [
      'Unified journeys for permits, benefits, and relief',
      'Offline-ready enrolment for rural and informal communities',
      'Accessibility rituals that build long-term trust',
    ],
  },
  {
    kicker: 'Enterprise ecosystem',
    title: 'Markets gain clarity',
    description:
      'Banks, logistics firms, and innovators integrate once and operate with confidence in the data they receive.',
    highlights: [
      'Resilient APIs with real-time verification signals',
      'Fraud, risk, and trade analytics that unlock investment',
      'Change communications choreographed with industry bodies',
    ],
  },
]

const programmeLayers = [
  {
    id: 'confidence',
    title: 'Confidence by design',
    copy: 'We harden registries, signatures, and audit trails so decisions hold in cabinet, in court, and in public perception.',
  },
  {
    id: 'continuity',
    title: 'Continuity in motion',
    copy: 'Hybrid operations centres and incident rituals keep critical services steady through elections, transitions, and crises.',
  },
  {
    id: 'clarity',
    title: 'Clarity for every stakeholder',
    copy: 'Telemetry, storytelling, and policy notes translate complex delivery work into signals that citizens and investors understand.',
  },
]

const operatingPrinciples = [
  {
    title: 'Stay close to the street',
    detail:
      'Community interviews, executive roundtables, and industry briefings feed each release so impact is tangible.',
  },
  {
    title: 'Engineer for oversight',
    detail:
      'Traceable architectures, compliance artefacts, and open repositories give regulators and partners full visibility.',
  },
  {
    title: 'Measure what matters',
    detail:
      'We report on citizens served, hours saved, and capital unlocked—not vanity metrics.',
  },
]

export default function AboutPage() {
  const reduceMotion = useReducedMotion()

  return (
    <main id="content" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
          alt="Arctura team collaborating on digital public infrastructure"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(110%_160%_at_50%_-20%,rgba(255,104,64,0.28),transparent_55%),linear-gradient(to_bottom,#050203,rgba(6,3,4,0.92),#050203)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(20,6,8,0.55)] via-[rgba(10,4,6,0.8)] to-[rgba(6,2,4,0.65)]"
          aria-hidden
        />
        <Container className="relative z-[1] space-y-12 py-28 sm:py-32">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              About Arctura
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              We design sovereign digital infrastructure that earns confidence from cabinet rooms,
              citizens, and markets alike.
            </h1>
            <p className="max-w-2xl text-balance text-base text-muted sm:text-lg">
              Our squads align policy, engineering, and service design so every mandate—whether national ID,
              digital permitting, or investor onboarding—moves from briefing to measurable progress.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 + 0.2 }}
                className="surface-card rounded-3xl border border-[color:var(--border)] p-6"
              >
                <div className="text-2xl font-semibold text-[color:var(--ink)] sm:text-3xl">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">
                  {metric.label}
                </div>
                <p className="mt-3 text-sm text-muted">{metric.copy}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(75%_120%_at_50%_0%,rgba(255,112,68,0.2),transparent_70%)]"
            aria-hidden
          />
        </div>
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              Who we empower
            </span>
            <h2 className="text-3xl font-black sm:text-4xl">
              One programme serving governments, residents, and enterprise allies.
            </h2>
            <p className="text-base text-muted sm:text-lg">
              Every engagement blends regulatory rigour with human-centred delivery so leadership
              can move decisively and the public feels the shift immediately.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceTracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                className="surface-card flex h-full flex-col gap-4 rounded-[28px] border border-[color:var(--border)] p-8"
              >
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-[0.62rem] uppercase tracking-[0.32em] text-muted">
                  {track.kicker}
                </span>
                <h3 className="text-xl font-semibold text-[color:var(--ink)]">{track.title}</h3>
                <p className="text-sm text-muted">{track.description}</p>
                <ul className="space-y-2 text-sm text-muted">
                  {track.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-amber)]"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(120%_160%_at_50%_0%,rgba(255,112,68,0.18),transparent_70%),linear-gradient(180deg,rgba(20,8,10,0.96),rgba(8,4,6,0.92))]"
          aria-hidden
        />
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              What you gain
            </span>
            <h2 className="text-3xl font-black sm:text-4xl">
              Three pillars that keep transformation steady.
            </h2>
            <p className="text-base text-muted sm:text-lg">
              Confidence, continuity, and clarity are engineered together so mandates survive
              elections, audits, and public opinion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {programmeLayers.map((layer, index) => (
              <motion.article
                id={layer.id}
                key={layer.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
                className="surface-panel flex h-full flex-col gap-4 rounded-[24px] border border-[color:var(--border)] p-6"
              >
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">{layer.title}</h3>
                <p className="text-sm text-muted">{layer.copy}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute left-[-20%] top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,108,68,0.18),transparent_70%)] blur-[120px]"
            aria-hidden
          />
          <div
            className="absolute right-[-10%] bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(140,46,42,0.18),transparent_70%)] blur-[120px]"
            aria-hidden
          />
        </div>
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              How we work
            </span>
            <h2 className="text-3xl font-black sm:text-4xl">
              Guardrails that keep delivery human, secure, and provable.
            </h2>
            <p className="text-base text-muted sm:text-lg">
              We stay embedded from charter to steady state, building the rituals and evidence your
              teams need to lead with conviction.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {operatingPrinciples.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                className="surface-card flex h-full flex-col gap-4 rounded-[28px] border border-[color:var(--border)] p-8"
              >
                <h3 className="text-xl font-semibold text-[color:var(--ink)]">{principle.title}</h3>
                <p className="text-sm text-muted">{principle.detail}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-[20%] h-48 bg-[radial-gradient(65%_140%_at_50%_0%,rgba(255,112,68,0.18),transparent_70%)]"
            aria-hidden
          />
        </div>
        <Container className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              Partner with Arctura
            </span>
            <h2 className="text-3xl font-black sm:text-4xl">
              Bring us the mandate you cannot afford to fumble.
            </h2>
            <p className="text-base text-muted sm:text-lg">
              We assemble a tailored squad—policy strategists, engineers, storytellers—to move the
              nation, the community, and the market in unison.
            </p>
          </div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto flex max-w-3xl flex-col items-center rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(125deg,rgba(24,12,16,0.95),rgba(10,5,8,0.9))] p-10 text-center shadow-[0_40px_120px_rgba(6,3,5,0.6)]"
          >
            <h3 className="text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">
              Ready to move policy, people, and partners together?
            </h3>
            <p className="mt-4 text-sm text-muted sm:text-base">
              Tell us where outcomes are stuck. We script the path from pilot to national proof
              with you.
            </p>
            <Button
              asChild
              variant="gradient"
              shape="pill"
              className="mt-6 h-12 items-center gap-3 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.3em]"
            >
              <a href="/contact">Start a conversation</a>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </main>
  )
}
