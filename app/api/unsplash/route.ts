// app/api/unsplash/route.ts
import { NextResponse } from 'next/server';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function GET(req: Request) {
    console.log("what!",UNSPLASH_ACCESS_KEY);
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || 'cat';

  if (!UNSPLASH_ACCESS_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch from Unsplash' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
