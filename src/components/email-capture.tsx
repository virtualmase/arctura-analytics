'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { cn } from '@/lib/utils'

interface EmailCaptureProps {
  className?: string
  submitLabel?: string
}

export function EmailCapture({ className, submitLabel }: EmailCaptureProps) {
  return (
    <section className={cn('relative py-24 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f1f] via-[#160809] to-[#0a0a0a]" />

      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[#ff4d4d]/10 blur-[120px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to transform your
            <span className="block bg-gradient-to-r from-[#ff4d4d] via-[#ff6b00] to-white bg-clip-text text-transparent">
              data operations?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#ffded1] text-lg mb-8"
          >
            Join forward-thinking organizations that are already leveraging our expertise to drive their data strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white/5 border border-white/10 px-6 py-5">
              <p className="text-base sm:text-lg text-[#ffded1] text-center sm:text-left">
                Join 200+ companies already enhancing their data capabilities—message us and our team will respond promptly.
              </p>
              <a
                href="mailto:hello@arctura-analytics.com"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#ff6b00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff4d4d]/10 transition-transform duration-300 hover:scale-[1.02]"
              >
                {submitLabel ?? 'Email hello@arctura-analytics.com'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
