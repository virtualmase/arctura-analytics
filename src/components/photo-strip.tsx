"use client"
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Glow } from '@/components/glow'

type Photo = { src: string; alt: string; width: number; height: number }

const photos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    alt: 'Data center corridor with blue lights',
    width: 1200,
    height: 800
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Abstract gradient light trails',
    width: 1200,
    height: 800
  },
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Team collaborating around a laptop',
    width: 1200,
    height: 800
  }
]

export function PhotoStrip() {
  const r = useReducedMotion()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {photos.map((p, i) => (
        <Glow key={p.src}>
          <motion.figure
            initial={r ? undefined : { opacity: 0, y: 12 }}
            whileInView={r ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.05 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              className="h-auto w-full object-cover"
              priority={i === 0}
            />
            <figcaption className="sr-only">{p.alt}</figcaption>
          </motion.figure>
        </Glow>
      ))}
    </div>
  )
}

