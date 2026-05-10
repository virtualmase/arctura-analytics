"use client"
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (prefersReducedMotion) {
      try { v.pause() } catch {}
    } else {
      // attempt to play on mount (may be blocked if not muted/inline)
      v.play().catch(() => {})
    }
  }, [prefersReducedMotion])

  const container = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.22, ease: 'easeOut', staggerChildren: 0.05 }
      }

  const item = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.2, ease: 'easeOut' }
      }

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        muted
        loop
        playsInline
        autoPlay={!prefersReducedMotion}
        poster="/brand/hero-laptop.jpg"
        aria-hidden
      >
        <source src="/brand/data-abstract.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/30 to-slate-950/80" />

      {/* Accessible alt text for the background */}
      <span className="sr-only">
        Looping abstract data visual used as decorative background. Content follows.
      </span>

      <div className="container flex min-h-screen flex-col items-center justify-center text-center">
        <motion.div {...container}>
          <motion.h1 className="text-balance text-h1 font-bold tracking-tight text-white" {...item}>
            Strong &amp; Reliable Data Solutions
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-2xl text-lead text-white/90" {...item}>
            We digitize, integrate, and analyze data so teams move faster and decide with confidence.
          </motion.p>
          <motion.div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" {...item}>
            <Button asChild variant="gradient" shape="pill" className="shadow-soft-lg">
              <Link href="/contact">Start now</Link>
            </Button>
            <Button asChild variant="outline" shape="pill" className="border-white/80 text-white hover:bg-white/10">
              <Link href="#what">Get in touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
