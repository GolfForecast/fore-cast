// app/courses/page.tsx (server component)
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("slug,name,country,state,city,lat,lon")
    .order("name", { ascending: true })
    .limit(200);

  if (error) {
    return <div className="p-4">Failed to load courses: {error.message}</div>;
  }

  return (
    <section className="px-2 py-6">
      <h1 className="masthead text-3xl font-semibold mb-3">Courses</h1>
      <div className="text-sm opacity-70 mb-4">{courses?.length ?? 0} loaded</div>

      <ul className="divide-y border rounded">
        {courses?.map((c) => (
          <li key={c.slug} className="p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm opacity-70">{[c.city, c.state, c.country].filter(Boolean).join(", ")}</div>
            </div>
            <Link className="underline" href={`/courses/${c.slug}`}>Open</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
