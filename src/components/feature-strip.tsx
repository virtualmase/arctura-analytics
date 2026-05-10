"use client"
import { Card, CardContent } from '@/components/ui/card'
import { HoverLift } from '@/components/hover-lift'
import { ShieldCheck, ScanText, GitBranch, LineChart, Zap, Bell } from 'lucide-react'

type Feature = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  { icon: ScanText, title: 'Digitize clearly', desc: 'OCR + metadata that you trust' },
  { icon: GitBranch, title: 'Integrate reliably', desc: 'Batch + CDC pipelines with tests' },
  { icon: ShieldCheck, title: 'Secure by design', desc: 'Lineage, roles, audit trails' },
  { icon: LineChart, title: 'Model + KPIs', desc: 'Shared semantics your team adopts' },
  { icon: Zap, title: 'Automate CI/CD', desc: 'Ship changes with confidence' },
  { icon: Bell, title: 'Observe health', desc: 'Freshness, quality, adoption' }
]

export function FeatureStrip() {
  return (
    <section className="relative isolate bg-white pb-10">
      <div className="container">
        <div className="mx-auto mb-6 max-w-2xl text-center text-slate-600">
          <p className="text-lg">The platform your team needs to power decisions.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map((f) => (
            <HoverLift key={f.title}>
              <Card tone="glass" interactive>
                <CardContent className="flex h-full flex-col items-start gap-2 p-4">
                  <div className="rounded-md bg-slate-100 p-2 ring-1 ring-slate-200" aria-hidden>
                    <f.icon className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="text-sm font-semibold text-slate-800">{f.title}</div>
                  <p className="text-xs text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  )
}

