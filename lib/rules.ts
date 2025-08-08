import type { WeatherSnapshot, Advice } from './types';

export function getPlayabilityAdvice(w: WeatherSnapshot): Advice {
  if (w.wind_kts >= 20) return { headline: 'Windy out there', tip: 'Knock-down time: three-quarter swing, keep the flight down.' };
  if (w.feels_like_c <= 6) return { headline: 'Cold conditions', tip: 'Layer up. Expect half a club shorter carry.' };
  if (w.uv >= 10) return { headline: 'High UV', tip: 'SPF 30+ and reapply at the turn.' };
  return { headline: 'Playable', tip: 'Fair conditions—pick smart targets.' };
}
