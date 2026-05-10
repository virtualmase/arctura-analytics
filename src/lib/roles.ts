import fs from 'node:fs/promises'
import path from 'node:path'

export type Role = {
  slug: string
  title: string
  location: string
  type: string
  summary: string
  responsibilities?: string[]
  requirements?: string[]
}

const ROLES_PATH = path.join(process.cwd(), 'content', 'roles.json')

export async function getRoles(): Promise<Role[]> {
  const raw = await fs.readFile(ROLES_PATH, 'utf8')
  const data = JSON.parse(raw) as Role[]
  return data
}

export async function getRole(slug: string): Promise<Role | null> {
  const roles = await getRoles()
  return roles.find((r) => r.slug === slug) ?? null
}

