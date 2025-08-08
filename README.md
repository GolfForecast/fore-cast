# Fore‑Cast (starter)

Broadsheet‑style golf weather + social hub with vertical video, course pages, weather‑aware tips, **Guess This Course**, and **Mental Fitness** cards.

## What’s in this starter
- **Next.js (App Router)** scaffold (feed, courses, holes, guess, mental)  
- **Supabase** schema (users, courses, holes, videos, weather, guess game)  
- **Weather rules JSON** (+ tiny runtime matcher stub)  
- **Sample AU courses** (Royal Melbourne West, Barnbougle Dunes)  
- Basic **playability score** function

## Run locally
```bash
npm i
cp .env.example .env.local
npm run dev
```

## Deploy
1. Create a **GitHub repo** and upload these files.
2. In **Vercel**, import the repo → deploy.
3. Create a **Supabase** project and run `supabase/schema.sql` in the SQL editor.
4. Add env vars in Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. (Optional) Configure **Mux/Cloudflare Stream** for video.

— Generated 2025-08-08
