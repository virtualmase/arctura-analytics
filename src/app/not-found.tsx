import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-300">The page you’re looking for doesn’t exist.</p>
      <div className="mt-6">
        <Link href="/" className="underline">
          Go home
        </Link>
      </div>
    </main>
  )
}

