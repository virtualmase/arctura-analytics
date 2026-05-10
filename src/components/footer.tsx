import Link from 'next/link'
import { Container } from './container'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Logo size={24} showText={false} variant="light" withLink={false} />
          <span className="text-sm font-medium text-muted">
            Arctura Analytics Limited
          </span>
        </Link>
        <nav className="text-sm text-muted">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/about" className="hover:text-[color:var(--ink)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[color:var(--ink)]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-muted">
          {'\u00A9'} {new Date().getFullYear()} Arctura Analytics Limited
        </p>
      </Container>
    </footer>
  )
}
