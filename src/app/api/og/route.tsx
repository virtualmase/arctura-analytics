import { ImageResponse } from '@vercel/og'
export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Arctura Analytics'
  const tag = searchParams.get('tag') || 'From Data to Decisions'
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          backgroundColor: '#0B1020',
          color: 'white'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* Gradient "A" mark */}
          <svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="A">
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B4E8" />
                <stop offset="50%" stopColor="#2970FF" />
                <stop offset="100%" stopColor="#6C4DF6" />
              </linearGradient>
            </defs>
            <text x="50%" y="72%" textAnchor="middle" fontSize="96" fontWeight="800" fill="url(#g)">
              A
            </text>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
            <div style={{ marginTop: 10, fontSize: 28, color: '#C7D2FE' }}>{tag}</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
