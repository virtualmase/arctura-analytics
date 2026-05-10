import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'
import { buildPageMetadata } from '@/lib/seo'

describe('cn()', () => {
  it('merges class names', () => {
    expect(cn('a', undefined, 'b', { c: true, d: false })).toContain('a')
  })
})

describe('buildPageMetadata()', () => {
  it('builds canonical URL when path provided', () => {
    const meta = buildPageMetadata({ title: 'Test', path: '/about' })
    // @ts-expect-error canonical isn't strongly typed
    expect(meta.alternates?.canonical).toContain('/about')
  })
})

