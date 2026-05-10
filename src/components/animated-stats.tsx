'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 140, label: 'Enterprise Projects', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 12, label: 'Industry Playbooks', suffix: '' }
]

export function AnimatedStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
          className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-[#ff4d4d]/10 bg-[#ff4d4d]/5 p-6 backdrop-blur-sm"
        >
          <motion.span 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          >
            {stat.value}{stat.suffix}
          </motion.span>
          <span className="text-sm text-[#ffded1]/80 text-center">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}