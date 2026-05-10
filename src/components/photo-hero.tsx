'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'

const deliveryMetrics = [
  { value: '98%', label: 'Solution adoption' },
  { value: '30 days', label: 'Average time-to-value' },
  { value: '24/7', label: 'Managed care' }
]

const solutionCards = [
  {
    title: 'Platform modernisation',
    label: 'Data foundations',
    image: '/brand/hero-laptop.jpg',
    description: 'Design and implement cloud-native data estates with governance, lineage, and observability built in.'
  },
  {
    title: 'Decision intelligence',
    label: 'Analytics products',
    image: '/brand/georgie-cobbs-muOHbrFGEQY-unsplash.jpg',
    description: 'Ship dashboards and decision workflows that combine business context with trusted metrics and alerts.'
  },
  {
    title: 'Applied AI + automation',
    label: 'Operational excellence',
    image: '/brand/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg',
    description: 'Deliver governed AI use cases with evaluation, risk controls, and enablement for operations teams.'
  }
]

export function PhotoHero() {
  const r = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,63,46,0.25),transparent_70%)] blur-[160px]" aria-hidden />
        <div className="absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,111,60,0.22),transparent_70%)] blur-[160px]" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/10 to-transparent" aria-hidden />
      </div>
      <div className="container relative">
        <motion.div
          initial={r ? undefined : { opacity: 0, y: 18 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,20,30,0.94),rgba(8,9,15,0.9))] px-6 py-10 shadow-[0_40px_120px_rgba(3,4,9,0.7)] md:px-12 lg:px-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,63,46,0.22),transparent_60%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,111,60,0.18),transparent_60%)]" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between gap-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/70">
                  <ShieldCheck className="h-4 w-4 text-[var(--accent-amber)]" />
                  Trusted data delivery
                </div>
                <motion.h1
                  initial={r ? undefined : { opacity: 0, y: 12 }}
                  animate={r ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                  className="text-4xl font-black text-white sm:text-5xl md:text-6xl"
                >
                  Data platforms engineered for decisive operations
                </motion.h1>
                <motion.p
                  initial={r ? undefined : { opacity: 0, y: 12 }}
                  animate={r ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="max-w-2xl text-base text-white/75 sm:text-lg"
                >
                  Arctura Analytics designs, builds, and runs modern data estates for regulated and growth-stage enterprises. We align strategy, engineering, and change management so leadership can trust every decision.
                </motion.p>
                <motion.div
                  initial={r ? undefined : { opacity: 0, y: 12 }}
                  animate={r ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.14 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    asChild
                    variant="gradient"
                    shape="pill"
                    className="h-12 items-center gap-3 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.32em] text-black"
                  >
                    <Link href="/contact">Schedule Discovery</Link>
                  </Button>
                  <Link
                    href="#what"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    Explore capabilities
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
              <motion.dl
                initial={r ? undefined : { opacity: 0, y: 12 }}
                animate={r ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.18 }}
                className="grid grid-cols-2 gap-6 text-white sm:grid-cols-3"
              >
                {deliveryMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                    <dd className="text-2xl font-bold">{metric.value}</dd>
                    <dt className="mt-1 text-xs uppercase tracking-[0.28em] text-white/60">{metric.label}</dt>
                  </div>
                ))}
              </motion.dl>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {solutionCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={r ? undefined : { opacity: 0, y: 20 }}
                  animate={r ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 + 0.1 }}
                  className="group relative overflow-hidden rounded-[26px] border border-white/12 bg-[color:rgba(12,15,23,0.92)] p-1"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-[22px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/85" aria-hidden />
                  </div>
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 flex flex-col gap-1 text-white">
                    <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
                      {card.label}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{card.title}</h3>
                    <p className="text-sm text-white/70">{card.description}</p>
                  </div>
                </motion.article>
              ))}
              <div className="mt-2 flex items-center justify-between rounded-full border border-white/12 bg-white/10 px-4 py-3 text-xs uppercase tracking-[0.34em] text-white/70">
                <div className="inline-flex items-center gap-2">
                  <Workflow className="h-4 w-4" />
                  Programme governance
                </div>
                <span>ISO-ready playbooks</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
