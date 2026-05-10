"use client"
import { useEffect, useState } from 'react'

export function Toc() {
  const [items, setItems] = useState<{ id: string; text: string }[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const hs = Array.from(document.querySelectorAll('article h2, article h3')) as HTMLElement[]
    const mapped = hs.map((h) => ({ id: h.id || h.textContent!.replace(/\s+/g, '-').toLowerCase(), text: h.textContent || '' }))
    // Ensure ids
    hs.forEach((h, i) => {
      if (!h.id) h.id = mapped[i].id
    })
    setItems(mapped)

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive((visible[0].target as HTMLElement).id)
      },
      { rootMargin: '0px 0px -70% 0px' }
    )
    hs.forEach((h) => obs.observe(h))
    return () => obs.disconnect()
  }, [])

  if (!items.length) return null
  return (
    <aside className="top-24 hidden w-64 shrink-0 md:sticky md:block">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
        <div className="mb-2 font-semibold">On this page</div>
        <ul className="space-y-1">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className={`hover:underline ${active === i.id ? 'text-white' : 'text-slate-300'}`}
              >
                {i.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
