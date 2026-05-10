import Script from 'next/script'

export function Analytics() {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const umami = process.env.NEXT_PUBLIC_UMAMI_SRC

  if (plausible) {
    return (
      <Script
        defer
        data-domain={plausible}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    )
  }

  if (umami) {
    return <Script defer data-website-id={umami} src="https://us.umami.is/script.js" />
  }

  return null
}
