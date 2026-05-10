"use client"
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Glow } from '@/components/glow'

export function BillboardHero() {
  const r = useReducedMotion()
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-midnight">
      <Image
        src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2400&auto=format&fit=crop"
        alt="Abstract technology background"
        fill
        priority
        className="pointer-events-none object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-midnight/30 to-transparent" />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          initial={r ? undefined : { opacity: 0, y: 14 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="h1-fluid font-bold text-glacier">From data to decisions.</h1>
          <p className="subhead-fluid mt-4 text-glacier/90">
            We design platforms, analytics, and AI that deliver real outcomes — fast.
          </p>
          <div className="mt-8 flex gap-3">
            <Glow>
              <Button asChild variant="gradient" shape="pill">
                <Link href="/contact">Start a conversation</Link>
              </Button>
            </Glow>
            <Button asChild variant="outline" shape="pill">
              <Link href="/about">Explore our programmes</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

