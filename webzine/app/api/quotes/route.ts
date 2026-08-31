import { createClient } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const kv = createClient({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export type Quote = {
  id: string;
  bookTitle: string;
  bookAuthor?: string;
  content: string;
  createdAt: number;
  bookLink?: string;
  pageLocation?: string;
};

export async function GET() {
  const KEY = 'webzine_quotes';
  let quotes = await kv.get<Quote[]>(KEY);
  if (!quotes || quotes.length === 0) {
    // Seed with a default quote
    quotes = [
      {
        id: 'q1',
        bookTitle: '아주 먼 산책',
        bookAuthor: '최수향',
        content: '한 사람의 사랑이 먼저 땅에 묻히고, 그 사랑이 자라나 석달 전 고양이를 묻은 나의 마음을 다독인다. 저마다의 지구를 가득 채우는 것은 다름 아닌 한 존재를 향한 사랑이다.',
        createdAt: Date.now(),
      },
    ];
    await kv.set(KEY, quotes);
  } else {
    // Deduplicate by content to prevent identical quotes
    const uniqueQuotes: Quote[] = [];
    const seen = new Set();
    for (const q of quotes) {
       const hash = q.bookTitle + '|' + q.content;
       if (!seen.has(hash)) {
           seen.add(hash);
           uniqueQuotes.push(q);
       }
    }
    if (uniqueQuotes.length !== quotes.length) {
       await kv.set(KEY, uniqueQuotes);
       quotes = uniqueQuotes;
    }
  }
  return NextResponse.json(quotes);
}

export async function POST(request: Request) {
  const KEY = 'webzine_quotes';
  const { bookTitle, bookAuthor, content, bookLink, pageLocation } = (await request.json()) as Omit<Quote, 'id' | 'createdAt'>;
  const quotes = (await kv.get<Quote[]>(KEY)) ?? [];
  const newQuote: Quote = {
    id: Math.random().toString(36).substring(2, 11),
    bookTitle,
    bookAuthor,
    content,
    bookLink,
    pageLocation,
    createdAt: Date.now(),
  };
  const updated = [newQuote, ...quotes];
  await kv.set(KEY, updated);
  return NextResponse.json(newQuote, { status: 201 });
}

export async function DELETE() {
  // Placeholder for future delete support
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
