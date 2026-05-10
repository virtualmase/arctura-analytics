"use client"
import { motion, useReducedMotion } from 'framer-motion'
import * as React from 'react'

export function HoverLift({ children }: { children: React.ReactNode }) {
  const r = useReducedMotion()
  return (
    <motion.div whileHover={r ? undefined : { y: -4 }} whileFocus={r ? undefined : { y: -4 }} transition={{ duration: 0.18, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}
