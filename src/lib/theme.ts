export function gradientAccent(extra?: string) {
  const base = 'bg-gradient-to-r from-[var(--accent-start)] via-[var(--accent-mid)] to-[var(--accent-end)]'
  return extra ? `${base} ${extra}` : base
}

export type ThemeMode = 'light' | 'dark'

export function themeClass(mode: ThemeMode) {
  return mode === 'light' ? 'theme-light' : 'theme-dark'
}

