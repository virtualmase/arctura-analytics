"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useReducedMotion, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Glow } from '@/components/glow'

export function SplitHero() {
  const r = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-midnight">
      {/* Right diagonal accent */}
      <div className="absolute inset-y-0 right-0 w-2/3">
        <div className="clip-diagonal h-full w-full gradient opacity-80" />
      </div>

      <div className="container relative z-10 grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={r ? undefined : { opacity: 0, y: 12 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <h1 className="h1-fluid font-bold text-glacier drop-shadow-[0_2px_8px_rgba(0,0,0,.35)]">
            Committed to <span className="text-gradient">digital</span> data quality
          </h1>
          <p className="subhead-fluid mt-4 text-glacier/95">
            We digitize, integrate, and analyze data so teams move faster and decide with confidence.
          </p>
          <div className="mt-8 flex gap-3">
            <Glow>
              <Button asChild variant="gradient" shape="pill">
                <Link href="/contact">Get started</Link>
              </Button>
            </Glow>
            <Button asChild variant="outline" shape="pill">
              <Link href="#what">What we do</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={r ? undefined : { opacity: 0, x: 12 }}
          animate={r ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
          className="relative"
          aria-hidden
        >
          <Image
            src="/illustrations/hero-playful.svg"
            alt=""
            width={800}
            height={600}
            className="h-auto w-full drop-shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            priority
          />
        </motion.div>
      </div>

      {/* Slanted bottom divider */}
      <svg className="absolute -bottom-1 left-0 right-0" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 80L1440 0V80H0Z" fill="currentColor" className="text-midnight"/>
      </svg>
    </section>
  )
}
