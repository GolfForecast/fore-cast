export type WeatherSnapshot = {
  ts: string;
  wind_kts: number;
  wind_dir_deg: number;
  gust_kts: number;
  temp_c: number;
  feels_like_c: number;
  rain_mm_3h: number;
  uv: number;
};

export type Advice = { headline: string; tip: string };
