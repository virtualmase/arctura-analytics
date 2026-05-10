'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function FloatingImages() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main hero laptop image with glow effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 right-[5%] transform -translate-y-1/2 w-[45%] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4d4d]/20 to-[#ff6b00]/20 mix-blend-overlay" />
        <Image
          src="/brand/hero-laptop.jpg"
          alt="Data Analytics Dashboard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80" />
      </motion.div>

      {/* Floating geometric illustration */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-[15%] right-[15%] w-[25%] h-auto"
      >
        <Image
          src="/illustrations/hero-illustration.svg"
          alt="Geometric Pattern"
          width={400}
          height={400}
          className="w-full h-auto opacity-60"
        />
      </motion.div>

      {/* Professional team image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-[10%] right-[35%] w-[20%] aspect-square rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src="/brand/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
          alt="Professional Analytics Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/60" />
      </motion.div>

      {/* Floating phone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute top-[25%] right-[28%] w-[15%]"
      >
        <Image
          src="/illustrations/phone-mock.svg"
          alt="Mobile Analytics"
          width={200}
          height={400}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Abstract patterns */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.6, rotate: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute top-[5%] right-[8%] w-[35%]"
      >
        <Image
          src="/illustrations/hero-playful.svg"
          alt="Abstract Pattern"
          width={500}
          height={500}
          className="w-full h-auto opacity-30"
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute top-[20%] right-[25%] w-72 h-72 bg-[#ff4d4d] rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="absolute bottom-[30%] right-[15%] w-96 h-96 bg-[#ff6b00] rounded-full blur-[150px]"
        />
      </div>
    </div>
  )
}