import { promises as fs } from 'node:fs'
import path from 'node:path'

const BASE = process.env.SITE_URL || 'https://www.arctura-analytics.example'

const highlights = [
  {
    title: 'National registry backbone modernisation',
    url: `${BASE}/about#registry`,
    date: new Date('2024-05-01T00:00:00Z').toUTCString()
  },
  {
    title: 'Digital service fabric for state agencies',
    url: `${BASE}/about#service-fabric`,
    date: new Date('2024-06-15T00:00:00Z').toUTCString()
  },
  {
    title: 'Trust and verification labs in production',
    url: `${BASE}/about#trust-labs`,
    date: new Date('2024-08-09T00:00:00Z').toUTCString()
  }
]

async function run() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Arctura Analytics – Civic Programmes</title>
    <link>${BASE}</link>
    <description>Spotlights on digital public infrastructure we run with partners.</description>
    ${highlights
      .map(
        (i) => `
    <item>
      <title>${i.title}</title>
      <link>${i.url}</link>
      <pubDate>${i.date}</pubDate>
      <guid>${i.url}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`
  await fs.writeFile(path.join(process.cwd(), 'public', 'rss.xml'), rss)
  console.log('rss.xml generated')
}

run()

