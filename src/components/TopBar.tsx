"use client"
import { useEffect, useState } from 'react'
import { Container } from './container'
import { Globe, Clock, Mail, X } from 'lucide-react'

export function TopBar() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Only show on >= md and if not dismissed
    const dismissed = typeof window !== 'undefined' && localStorage.getItem('topbar-dismissed') === '1'
    setHidden(dismissed)
  }, [])

  function dismiss() {
    try { localStorage.setItem('topbar-dismissed', '1') } catch {}
    setHidden(true)
  }

  if (hidden) return null

  return (
    <div className="hidden md:block border-b border-white/10 bg-black/25 text-xs text-white/80 backdrop-blur">
      <Container className="flex h-8 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Remote‑first</span>
          <span aria-hidden className="opacity-50">•</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Mon–Fri 9–5</span>
          <span aria-hidden className="opacity-50">•</span>
          <a href="mailto:hello@arctura-analytics.com" className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" /> hello@arctura-analytics.com
          </a>
        </div>
        <button aria-label="Dismiss info bar" onClick={dismiss} className="rounded p-1 text-white/70 hover:text-white">
          <X className="h-3.5 w-3.5" />
        </button>
      </Container>
    </div>
  )
}

