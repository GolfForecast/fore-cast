-- Fore-Cast Supabase schema (minimal)
create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  handle text unique,
  name text,
  home_course_slug text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

create table if not exists courses (
  id bigserial primary key,
  slug text unique not null,
  name text not null,
  country text,
  state text,
  city text,
  lat double precision,
  lon double precision
);

create table if not exists holes (
  id bigserial primary key,
  course_id bigint references courses(id) on delete cascade,
  number int not null,
  par int,
  yards int,
  si int,
  name text,
  azimuth_deg int,
  description text
);

create table if not exists videos (
  id bigserial primary key,
  user_id uuid references users(id) on delete set null,
  course_id bigint references courses(id) on delete set null,
  hole_id bigint references holes(id) on delete set null,
  asset_url text,
  caption text,
  tags text[],
  created_at timestamp with time zone default now()
);

create table if not exists weather_snapshots (
  id bigserial primary key,
  course_id bigint references courses(id) on delete cascade,
  ts timestamp with time zone not null,
  payload_json jsonb,
  playability_score int
);

create table if not exists weather_rules (
  id bigserial primary key,
  code text unique,
  rule_json jsonb not null,
  created_at timestamp with time zone default now()
);

create table if not exists guesses_rounds (
  id bigserial primary key,
  week_start date unique,
  answer_course_slug text not null,
  clues jsonb
);

create table if not exists guesses (
  id bigserial primary key,
  round_id bigint references guesses_rounds(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  guess_course_slug text not null,
  created_at timestamp with time zone default now(),
  is_correct boolean default false
);

create index if not exists idx_courses_slug on courses(slug);
create index if not exists idx_holes_course_number on holes(course_id, number);
create index if not exists idx_videos_course_created on videos(course_id, created_at desc);
create index if not exists idx_weather_snapshots_course_ts on weather_snapshots(course_id, ts desc);
