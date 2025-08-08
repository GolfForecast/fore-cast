// app/courses/[slug]/page.tsx
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const { data: course } = await supabase
    .from("courses")
    .select("slug,name,country,state,city,lat,lon")
    .eq("slug", params.slug)
    .maybeSingle();

  if (!course) return notFound();

  return (
    <section className="px-2 py-6">
      <h1 className="masthead text-3xl font-semibold mb-1">{course.name}</h1>
      <div className="text-sm opacity-80 mb-4">
        {[course.city, course.state, course.country].filter(Boolean).join(", ")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="border rounded p-3">
          <div className="text-sm font-medium mb-1">Playability</div>
          <div className="text-2xl">—</div>
          <div className="text-xs opacity-70">Based on wind, rain, temp, gusts</div>
        </div>
        <div className="border rounded p-3 md:col-span-2">
          <div className="text-sm font-medium mb-2">Signature hole</div>
          <div className="opacity-70">Coming soon</div>
        </div>
      </div>

      <div className="mt-4">
        <Link className="underline" href="/courses">← Back to all courses</Link>
      </div>
    </section>
  );
}
