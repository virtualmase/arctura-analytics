import Link from 'next/link'

type LogoVariant = 'dark' | 'light'

type Props = {
  size?: number
  priority?: boolean
  variant?: LogoVariant
  usePng?: boolean
  showText?: boolean
  textClassName?: string
  className?: string
  withLink?: boolean
  href?: string
  ariaLabel?: string
}

const gradients: Record<LogoVariant, { glow: string; text: string }> = {
  dark: {
    glow: 'drop-shadow-[0_0_16px_rgba(255,68,0,0.55)]',
    text: 'from-[#ff4d00] via-[#ff6121] to-[#ff8a3d]',
  },
  light: {
    glow: 'drop-shadow-[0_0_16px_rgba(255,68,0,0.35)]',
    text: 'from-[#cc2b00] via-[#ff4d00] to-[#ff8a3d]',
  },
}

export function Logo({
  size = 36,
  priority: _priority = true, // kept for backwards compatibility
  variant = 'dark',
  usePng: _usePng = false,
  showText = true,
  textClassName,
  className,
  withLink = true,
  href = '/',
  ariaLabel = 'Arctura Analytics home',
}: Props) {
  const containerClass = ['flex items-center gap-3', className].filter(Boolean).join(' ')

  const dimension = Math.round(size * 1.25)

  const content = (
    <>
      <span className={`relative inline-flex items-center justify-center ${gradients[variant].glow}`}>
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 120 120"
          role="img"
          aria-label="Arctura Analytics emblem"
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="arctura-fire" x1="14" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff3200" />
              <stop offset="55%" stopColor="#ff5a10" />
              <stop offset="100%" stopColor="#ff852d" />
            </linearGradient>
            <linearGradient id="arctura-ember" x1="32" y1="40" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1b0500" />
              <stop offset="100%" stopColor="#2d0903" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path
              d="M60 8 8 112h32.4l9.7-18.6c3.2-6.1 9.5-9.9 16.3-9.9h7.2c6.8 0 13.1 3.8 16.3 9.9l9.7 18.6H112L60 8Z"
              fill="url(#arctura-fire)"
            />
            <path
              d="M59.8 42.2 41.5 78.4h14.3l6.6-12.6c1.8-3.4 5.3-5.6 9.1-5.6h2c3.8 0 7.3 2.2 9.1 5.6l6.6 12.6h14.3L75.2 42.2c-3.4-6.6-12-6.6-15.4 0Z"
              fill="url(#arctura-ember)"
            />
            <path
              d="M74 85.6c-1.6-2.9-4.7-4.7-8-4.7h-4c-3.3 0-6.4 1.8-8 4.7l-5 9.4h30.1L74 85.6Z"
              fill="#ff6121"
              fillOpacity={0.4}
            />
            <path
              d="M38 92c10-8.8 23.7-13.8 37.1-12.9"
              stroke="#ff9550"
              strokeWidth={3.2}
              strokeLinecap="round"
              strokeOpacity={0.45}
            />
          </g>
        </svg>
        <span className="absolute inset-[-16%] rounded-[32px] bg-gradient-to-br from-[#ff4d00]/15 via-transparent to-[#ff8a3d]/5 blur-[14px]" />
      </span>
      {showText ? (
        <span
          className=
            {textClassName ?? `text-lg font-black tracking-[0.24em] uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]`}
        >
          <span className={`bg-gradient-to-r ${gradients[variant].text} bg-clip-text text-transparent`}>Arctura</span>
          <span className="text-white"> Analytics</span>
        </span>
      ) : null}
    </>
  )

  if (withLink) {
    return (
      <Link href={href} className={containerClass} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <span className={containerClass}>
      {content}
    </span>
  )
}
