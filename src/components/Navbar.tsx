'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CalendarClock, Menu, Search, BriefcaseBusiness, X } from 'lucide-react'
import { Logo } from './logo'
import { Container } from './container'
import { Button } from './ui/button'
import { mainNav } from '@/lib/links'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const r = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }, [open])

  const headerBase = 'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out'
  const headerTone = scrolled ? 'pt-3' : 'pt-6'

  const navLinkClass = (active: boolean) =>
    cn(
      'group relative overflow-hidden rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] transition-all duration-200',
      active
        ? 'nav-chip text-white shadow-[0_0_0_1px_rgba(255,111,60,0.34)]'
        : 'text-white/65 hover:text-white hover:bg-white/5'
    )

  const iconButtonClass =
    'relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white'

  return (
    <header className={`${headerBase} ${headerTone}`}>
      <Container className="pointer-events-none">
        <motion.div
          initial={r ? undefined : { opacity: 0, y: -10 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="pointer-events-auto relative w-full rounded-[28px] border border-white/10 bg-[color:rgba(9,10,17,0.86)] px-4 py-3 transition-all duration-300 md:px-6"
          style={
            scrolled
              ? { boxShadow: '0 24px 60px rgba(2, 3, 9, 0.6)', backdropFilter: 'blur(16px)' }
              : { boxShadow: '0 0 0 1px rgba(255, 111, 60, 0.26), 0 32px 70px rgba(2, 3, 9, 0.7)' }
          }
        >
          <div className="flex items-center justify-between md:hidden">
            <Logo size={42} />
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-white/30 hover:bg-white/10"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden items-center justify-between md:flex">
            <div className="flex items-center gap-4">
              <Logo size={46} />
              <span className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-white/60">
                Data platform specialists
              </span>
            </div>
            <nav className="flex items-center gap-1" aria-label="Primary">
              {mainNav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link key={item.href} href={item.href} className={navLinkClass(active)}>
                    {item.label}
                    <span
                      className={cn(
                        'pointer-events-none absolute inset-x-1 bottom-0 h-px origin-center scale-x-0 bg-[color:rgba(255,111,60,0.5)] transition-transform duration-200',
                        active ? 'scale-x-100' : 'group-hover:scale-x-100'
                      )}
                    />
                  </Link>
                )
              })}
            </nav>
            <div className="flex items-center gap-2">
              <button className={iconButtonClass} aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button className={iconButtonClass} aria-label="View resources">
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent-amber)] text-[10px] font-bold text-black">
                  0
                </span>
              </button>
              <Button
                asChild
                variant="gradient"
                shape="pill"
                className="hidden h-11 items-center gap-2 rounded-full px-5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-black md:inline-flex"
              >
                <Link href="/contact">
                  <CalendarClock className="h-4 w-4" />
                  Book consult
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={r ? undefined : { x: '100%', opacity: 0 }}
            animate={r ? undefined : { x: 0, opacity: 1 }}
            exit={r ? undefined : { x: '100%', opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-y-4 right-4 z-50 flex h-[92vh] max-w-sm flex-col rounded-3xl border border-white/10 bg-[color:rgba(7,9,14,0.96)] p-6 shadow-[0_28px_80px_rgba(2,3,9,0.75)] md:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <Logo size={40} />
              <button
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-white/40 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="grid gap-3" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/75 transition',
                    pathname === item.href ? 'bg-white/10 text-white' : 'hover:bg-white/5'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto grid gap-3 pt-8">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                <Search className="h-5 w-5" />
                Search the site
              </div>
              <Button asChild variant="gradient" shape="pill" className="h-12 text-[0.78rem] font-semibold uppercase tracking-[0.3em]">
                <Link href="/contact">
                  <CalendarClock className="h-5 w-5" /> Book consult
                </Link>
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}
