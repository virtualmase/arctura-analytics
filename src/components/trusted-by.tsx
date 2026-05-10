import Image from 'next/image'

const logos = [
  { src: '/logo.svg', alt: 'Logo 1' },
  { src: '/logo.svg', alt: 'Logo 2' },
  { src: '/logo.svg', alt: 'Logo 3' },
  { src: '/logo.svg', alt: 'Logo 4' },
  { src: '/logo.svg', alt: 'Logo 5' }
]

export function TrustedBy() {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <p className="mb-6 text-center text-sm font-medium text-slate-500">Trusted by teams who ship real outcomes</p>
        <div className="grid grid-cols-2 place-items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l, idx) => (
            <Image key={idx} src={l.src} alt={l.alt} width={110} height={24} className="opacity-70" />
          ))}
        </div>
      </div>
    </section>
  )
}

