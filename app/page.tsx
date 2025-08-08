'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPlayabilityAdvice } from '@/lib/rules';
import type { WeatherSnapshot } from '@/lib/types';

export default function Feed() {
  const [items] = useState<any[]>([
    { id: 'vid1', course: 'Royal Melbourne (West)', slug: 'royal-melbourne-west', caption: 'Windy day bombs', hole: 1 },
    { id: 'vid2', course: 'Barnbougle Dunes', slug: 'barnbougle-dunes', caption: 'Bump-and-run heaven', hole: 3 },
  ]);
  const [weather, setWeather] = useState<WeatherSnapshot | null>(null);

  useEffect(() => {
    setWeather({ ts: new Date().toISOString(), wind_kts: 22, wind_dir_deg: 250, gust_kts: 30, temp_c: 12, feels_like_c: 9, rain_mm_3h: 0, uv: 5 });
  }, []);

  const advice = weather ? getPlayabilityAdvice(weather) : null;

  return (
    <section className="px-2 py-4">
      <div className="mb-4 p-3 border rounded">
        <div className="text-sm">Now • Wind {weather?.wind_kts ?? '--'} kts • Feels {weather?.feels_like_c ?? '--'}°C</div>
        <div className="text-lg font-medium">{advice?.headline}</div>
        <div className="text-sm opacity-80">{advice?.tip}</div>
      </div>

      <div className="flex flex-col gap-6 pb-24">
        {items.map(item => (
          <article key={item.id} className="border rounded overflow-hidden">
            <div className="aspect-[9/16] bg-black/5 grid place-items-center">
              <div className="text-center px-6">
                <div className="text-xs uppercase tracking-wide opacity-70 mb-2">Video</div>
                <div className="text-xl font-semibold">{item.course}</div>
                <div className="opacity-80">{item.caption}</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 text-sm">
              <Link href={`/courses/${item.slug}`} className="underline">Open course</Link>
              <div className="opacity-70">Hole {item.hole}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
