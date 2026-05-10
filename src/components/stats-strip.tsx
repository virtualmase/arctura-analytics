export function StatsStrip() {
  const stats = [
    { label: 'Pipelines uptime', value: '99.95%' },
    { label: 'Data sources integrated', value: '120+' },
    { label: 'Faster iterations', value: '8×' },
    { label: 'Churn reduction', value: '15%' }
  ]
  return (
    <section className="bg-[var(--bistre)] py-10 text-white">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="mt-1 text-sm text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

