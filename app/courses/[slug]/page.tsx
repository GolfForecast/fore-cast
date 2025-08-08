import { notFound } from 'next/navigation';
import courses from '@/data/courses_au_sample.json';
import Link from 'next/link';

export default function CoursePage({ params }: { params: { slug: string }}) {
  const course = (courses as any[]).find(c => c.slug === params.slug);
  if (!course) return notFound();

  return (
    <section className="px-2 py-6">
      <h1 className="masthead text-3xl font-semibold mb-1">{course.name}</h1>
      <div className="text-sm opacity-80 mb-4">{course.city}, {course.state}, {course.country}</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="border rounded p-3">
          <div className="text-sm font-medium mb-1">Playability</div>
          <div className="text-2xl">—</div>
          <div className="text-xs opacity-70">Based on wind, rain, temp, gusts</div>
        </div>
        <div className="border rounded p-3 md:col-span-2">
          <div className="text-sm font-medium mb-2">Signature hole</div>
          {course.signature_hole ? (
            <Link className="underline" href={`/courses/${course.slug}/holes/${course.signature_hole.number}`}>
              Hole {course.signature_hole.number} • {course.signature_hole.name}
            </Link>
          ) : <div className="opacity-70">Coming soon</div>}
        </div>
      </div>
    </section>
  );
}
