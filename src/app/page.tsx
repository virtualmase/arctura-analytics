'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Flame, Mountain, Sparkles } from 'lucide-react'

import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { HoverLift } from '@/components/hover-lift'
import { ParticleField } from '@/components/particles'
import { EmailCapture } from '@/components/email-capture'

const heroStats = [
  { value: '30+', label: 'Civic platforms reignited' },
  { value: '12M+', label: 'Residents served with confidence' },
  { value: '4.8 / 5', label: 'Executive partnership score' }
]

const commitments = [
  {
    title: 'Unified intelligence',
    description:
      'Fragmented registries, casework, and operations data fuse into a single, reliable signal for leadership.',
    icon: Flame
  },
  {
    title: 'Proof-first governance',
    description:
      'Oversight, security, and ethics rituals are embedded from the first workshop so every release withstands scrutiny.',
    icon: Mountain
  },
  {
    title: 'Momentum that endures',
    description:
      'Coaching, change communications, and modern delivery keep programmes resilient long after launch.',
    icon: Sparkles
  }
]

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <main id="content" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"
          alt="Team collaborating around a large data wall"
          fill
          priority
          quality={95}
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_-10%,rgba(255,100,60,0.32),transparent_45%),radial-gradient(circle_at_88%_8%,rgba(177,45,40,0.22),transparent_55%),linear-gradient(to_bottom,#050203,rgba(6,3,4,0.92),#040203)]"
          aria-hidden
        />
        <ParticleField className="absolute inset-0 opacity-30" aria-hidden />
        <Container className="relative z-[1] flex min-h-[90vh] flex-col justify-center gap-12 py-24">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
              Arctura Analytics
            </span>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Sovereign data platforms that let public leaders move with certainty.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              We unify fragmented civic systems into resilient, intelligence-ready infrastructure—human-centred,
              secure, and primed for the next mandate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--accent-start),var(--accent-mid),var(--accent-end))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#1a0505] shadow-[0_22px_64px_rgba(255,100,60,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_74px_rgba(255,100,60,0.46)]"
              >
                Plan a briefing
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--ink)]"
              >
                Discover our story
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="surface-card rounded-3xl p-5 text-muted transition"
              >
                <div className="text-2xl font-semibold text-[color:var(--ink)]">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.28em] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <div
            className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(255,108,68,0.24),transparent_70%)]"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(60%_120%_at_50%_120%,rgba(177,45,40,0.16),transparent_70%)]"
            aria-hidden
          />
        </div>
        <Container className="space-y-12">
          <div className="max-w-2xl space-y-5">
            <h2 className="text-3xl font-black sm:text-4xl">Strategy forged for national mandates.</h2>
            <p className="text-base text-muted sm:text-lg">
              Every programme is engineered to withstand scrutiny, scale gracefully, and elevate the people it
              serves. We keep the brief focused so the outcomes stay measurable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item) => (
              <HoverLift key={item.title}>
                <div className="surface-card h-full rounded-[28px] border border-[color:var(--border)] p-7 transition">
                  <item.icon className="h-8 w-8 text-[color:var(--accent-amber)]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-[color:var(--ink)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </HoverLift>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-[-15%] top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,112,70,0.22),transparent_68%)] blur-[120px]"
            aria-hidden
          />
          <div
            className="absolute right-[-12%] bottom-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(150,48,44,0.18),transparent_70%)] blur-[120px]"
            aria-hidden
          />
        </div>

        <Container>
          <div className="grid gap-10 rounded-[40px] border border-[color:var(--border)] bg-[linear-gradient(140deg,rgba(20,10,14,0.92),rgba(8,4,6,0.9))] p-8 shadow-[0_50px_160px_rgba(8,3,6,0.66)] backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-muted">
                Begin the ascent
              </span>
              <h2 className="text-3xl font-black text-[color:var(--ink)] sm:text-4xl">
                Let’s turn your next mandate into measurable progress.
              </h2>
              <p className="text-base text-muted sm:text-lg">
                Share the outcomes you need. We respond with a tailored squad, transparent governance, and proof-driven delivery from spark to steady state.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted">
                <span className="rounded-full border border-[color:var(--border)] px-4 py-2 uppercase tracking-[0.32em]">
                  Briefing in 10 days
                </span>
                <span className="rounded-full border border-[color:var(--border)] px-4 py-2 uppercase tracking-[0.32em]">
                  Policy-ready roadmaps
                </span>
                <span className="rounded-full border border-[color:var(--border)] px-4 py-2 uppercase tracking-[0.32em]">
                  Hybrid on-site + remote squads
                </span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-muted transition hover:text-[color:var(--ink)]"
              >
                Meet the people behind the work
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="surface-panel space-y-6 rounded-[28px] border border-[color:var(--border)] p-8 shadow-[0_36px_110px_rgba(8,3,6,0.55)] lg:border-l lg:pl-12">
              <h3 className="text-2xl font-semibold text-[color:var(--ink)]">Plan your briefing.</h3>
              <p className="text-sm text-muted sm:text-base">
                Outline your objectives and timelines—we will align the specialists and choreograph the engagement.
              </p>
              <div className="grid gap-3 text-[0.68rem] uppercase tracking-[0.32em] text-muted sm:text-xs">
                <span className="flex items-center gap-2">↗︎ Executive alignment in week one</span>
                <span className="flex items-center gap-2">↗︎ Delivery blueprint within 30 days</span>
              </div>
              <EmailCapture className="pt-1" submitLabel="Request your briefing" />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
