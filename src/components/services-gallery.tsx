import Link from 'next/link'

type Service = {
  title: string
  desc: string
  href?: string
}

const SERVICES: Service[] = [
  { title: 'Data operating models', desc: 'Assessment, strategy, and governance frameworks that align boards, business units, and technology.' },
  { title: 'Cloud platform engineering', desc: 'Landing zones, ingestion, transformation, and quality pipelines delivered with automation and resilience.' },
  { title: 'Analytics product delivery', desc: 'Design, build, and adoption of dashboards, applications, and decision workflows.' },
  { title: 'Data governance & risk', desc: 'Policy, lineage, access management, and controls across regulated and high-growth environments.' },
  { title: 'AI and automation', desc: 'Responsible AI use cases, evaluation harnesses, and operational runbooks for production scale.' },
  { title: 'Managed services', desc: '24/7 support, platform optimisation, and enablement to keep teams confident and outcomes reliable.' }
]

export function ServicesGallery() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Volcanic glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-96 w-96 bg-[#ff4d4d]/5 blur-[128px] animate-pulse" aria-hidden />
        <div className="absolute bottom-1/3 left-1/4 h-72 w-72 bg-[#ff6b00]/5 blur-[96px] animate-pulse delay-700" aria-hidden />
      </div>
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff4d4d]/20 bg-[#ff4d4d]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-white/90">
            Service catalogue
          </span>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl bg-gradient-to-r from-white via-[#ff6b00] to-[#ff4d4d] bg-clip-text text-transparent">
            End-to-end coverage for data platform, analytics, and AI programmes
          </h2>
          <p className="mt-4 text-base text-[#ffded1] sm:text-lg">
            Blend only the services you need. Our teams plug into your delivery model and bring accelerators, playbooks, and specialists ready to execute.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#ff4d4d]/10 bg-[#160809]/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff4d4d]/30 hover:bg-[#ff4d4d]/5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ff4d4d]/20 bg-[#ff4d4d]/5 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-[#ffded1]/90">{service.desc}</p>
              {service.href ? (
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffded1]/80 transition group-hover:text-white"
                >
                  Learn more
                  <span className="block h-px w-8 bg-[#ff4d4d]/40 transition-all group-hover:w-10 group-hover:bg-[#ff4d4d]" />
                </Link>
              ) : null}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-[#ff4d4d] via-[#ff6b00]/40 to-[#ff4d4d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
