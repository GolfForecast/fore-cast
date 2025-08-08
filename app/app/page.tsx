'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import feed from '@/data/mock_feed.json';

type FeedItem = {
  id: string;
  type: 'video' | 'guess';
  course?: string;
  slug?: string;
  caption: string;
  user?: string;
  likes?: number;
  clue?: string;
};

export default function Feed() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [tip, setTip] = useState<string>('');

  // tiny rotating weather/mental tip (mocked)
  useEffect(() => {
    const tips = [
      'Gusty this arvo – knock-down shots, finish low.',
      'Feels cool: expect ~½ club shorter carry.',
      'Hydrate: sip every 2–3 holes. SPF on hands & ears.',
      'Reset after a blow-up: two breaths, one clear target.'
    ];
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  const toggleLike = (id: string) =>
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="h-[calc(100vh-56px)] overflow-y-scroll snap-y snap-mandatory">
      {/* sticky banner tip */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b px-3 py-2 text-sm">
        {tip}
      </div>

      {(feed as FeedItem[]).map((item, idx) => (
        <div key={item.id} className="snap-start min-h-[calc(100vh-56px)] flex items-center justify-center">
          {item.type === 'video' ? (
            <article className="w-full max-w-md mx-auto border rounded overflow-hidden">
              {/* fake video area */}
              <div className="aspect-[9/16] bg-black/5 grid place-items-center relative">
                <div className="absolute right-2 top-1/3 flex flex-col gap-3">
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="px-3 py-2 border rounded bg-white"
                    aria-label="Like"
                  >
                    {liked[item.id] ? '♥' : '♡'}
                  </button>
                  <button className="px-3 py-2 border rounded bg-white">💬</button>
                  <button className="px-3 py-2 border rounded bg-white">↗</button>
                </div>
                <div className="text-center px-6">
                  <div className="text-xs uppercase tracking-wide opacity-70 mb-2">Clip</div>
                  <div className="text-xl font-semibold">{item.course}</div>
                  <div className="opacity-80 mt-1">{item.caption}</div>
                </div>
                {/* bottom overlay meta */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-white">
                  <div className="flex items-center justify-between text-sm">
                    <div className="opacity-70">by {item.user}</div>
                    <div className="opacity-70">{(item.likes ?? 0) + (liked[item.id] ? 1 : 0)} likes</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 text-sm">
                <Link href={`/courses/${item.slug}`} className="underline">Open course</Link>
                <div className="opacity-70">Save ▸</div>
              </div>
            </article>
          ) : (
            <article className="w-full max-w-md mx-auto border rounded overflow-hidden">
              <div className="aspect-[9/16] grid place-items-center bg-black/5 text-center px-6">
                <div className="text-xs uppercase tracking-wide opacity-70 mb-2">Weekly Game</div>
                <div className="text-2xl font-semibold mb-2">Guess This Course</div>
                <div className="opacity-80">{item.clue}</div>
                <Link href="/guess" className="mt-4 inline-block border px-3 py-2 rounded underline">
                  Make your guess →
                </Link>
              </div>
            </article>
          )}
        </div>
      ))}
    </section>
  );
}
