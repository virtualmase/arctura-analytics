"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useReducedMotion, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function SigmaHero() {
  const r = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Soft gradient edges for Sigma look */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(46,52,87,.25),transparent),radial-gradient(60%_60%_at_100%_0%,rgba(188,154,127,.25),transparent)]" />

      <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
        {/* Left: Headline + actions */}
        <motion.div
          initial={r ? undefined : { opacity: 0, y: 16 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-800 md:text-5xl">
            Data wrangling that makes messy simple
          </h1>
          <p className="lead mt-4 max-w-xl text-muted">
            Arctura turns PDFs, spreadsheets, and siloed systems into clean, connected, analysis‑ready datasets your team can trust — fast.
          </p>
          <ul className="mt-4 max-w-xl list-disc pl-5 text-slate-600">
            <li>Digitize with OCR, lineage, and versioning</li>
            <li>Integrate sources with reliable, observable pipelines</li>
            <li>Model shared metrics so decisions stick</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="coral" shape="pill" className="h-11 px-6">
              <Link href="/contact">Talk to an engineer</Link>
            </Button>
            <Button asChild variant="outline" shape="pill" className="h-11 px-6 border-slate-300 text-slate-700">
              <Link href="#what">See capabilities</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: Image card */}
        <motion.div
          initial={r ? undefined : { opacity: 0, x: 14 }}
          animate={r ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut', delay: 0.05 }}
          aria-hidden
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft-lg">
            <Image
              src="/brand/hero-laptop.jpg"
              alt="Laptop showing a clean, modeled dataset"
              width={880}
              height={660}
              priority
              sizes="(min-width:1024px) 44vw, (min-width:768px) 60vw, 92vw"
              quality={70}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
