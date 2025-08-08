import type { WeatherSnapshot } from './types';

export function scorePlayability(w: WeatherSnapshot): number {
  let s = 100;
  s -= Math.max(0, (w.wind_kts - 8)) * 1.5;
  s -= Math.max(0, (w.gust_kts - 15)) * 0.8;
  if (w.feels_like_c < 8) s -= (8 - w.feels_like_c) * 1.2;
  if (w.feels_like_c > 32) s -= (w.feels_like_c - 32) * 1.0;
  s -= Math.min(20, w.rain_mm_3h * 3);
  return Math.max(0, Math.min(100, Math.round(s)));
}
