
import { NextResponse } from 'next/server'

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  const res = await fetch(`${url}/rest/v1/reviews?select=*&approved=eq.true&order=created_at.desc`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    cache: 'no-store'
  })
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  const payload = await request.json()
  const res = await fetch(`${url}/rest/v1/reviews`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation'
    },
    body: JSON.stringify({
      name: payload.name,
      rating: payload.rating,
      message: payload.message,
      approved: false
    })
  })
  const data = await res.json()
  return NextResponse.json(data, { status: 201 })
}
