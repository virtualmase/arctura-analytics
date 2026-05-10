'use client'

import { motion } from 'framer-motion'
import { BarChart3, Database, Network, Shield, Cpu, Users, type LucideIcon } from 'lucide-react'

type IconWrapperProps = {
  icon: LucideIcon
  label: string
  description: string
}

const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  hover: { 
    scale: 1.05,
    y: -5,
    transition: { duration: 0.2 }
  }
}

function IconWrapper({ icon: Icon, label, description }: IconWrapperProps) {
  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#ff4d4d]/10 bg-[#ff4d4d]/5 backdrop-blur-sm transition-all duration-300 hover:border-[#ff4d4d]/30 hover:bg-[#ff4d4d]/10"
    >
      <motion.div
        className="relative mb-4"
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[#ff6b00] blur-[20px] opacity-20 rounded-full" />
        <Icon 
          size={32} 
          className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#ff6b00]" 
        />
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2">{label}</h3>
      <p className="text-sm text-[#ffded1]/80">{description}</p>
    </motion.div>
  )
}

export function IconGrid() {
  const features = [
    {
      icon: BarChart3,
      label: 'Advanced Analytics',
      description: 'Transform complex data into actionable insights with our cutting-edge analytics solutions.'
    },
    {
      icon: Database,
      label: 'Data Engineering',
      description: 'Build robust data pipelines and warehouses that scale with your business needs.'
    },
    {
      icon: Network,
      label: 'AI Integration',
      description: 'Leverage artificial intelligence to unlock predictive capabilities and automation.'
    },
    {
      icon: Shield,
      label: 'Data Security',
      description: 'Protect your valuable information with enterprise-grade security measures.'
    },
    {
      icon: Cpu,
      label: 'Cloud Solutions',
      description: 'Deploy and optimize your data infrastructure in the cloud for maximum efficiency.'
    },
    {
      icon: Users,
      label: 'Team Enablement',
      description: 'Empower your teams with tools and training for data-driven decision making.'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <IconWrapper
          key={feature.label}
          icon={feature.icon}
          label={feature.label}
          description={feature.description}
        />
      ))}
    </div>
  )
}