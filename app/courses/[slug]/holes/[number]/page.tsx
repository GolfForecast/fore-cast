import { notFound } from 'next/navigation';
import courses from '@/data/courses_au_sample.json';

export default function HolePage({ params }: { params: { slug: string, number: string }}) {
  const course = (courses as any[]).find(c => c.slug === params.slug);
  if (!course) return notFound();
  const hole = course.holes?.find((h:any) => String(h.number) === params.number) || course.signature_hole;
  if (!hole) return notFound();

  return (
    <section className="px-2 py-6">
      <h1 className="masthead text-2xl font-semibold mb-1">{course.name}</h1>
      <div className="opacity-80 mb-4">Hole {hole.number} • Par {hole.par} • {hole.name}</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="border rounded p-3">
          <div className="text-sm font-medium mb-2">Tee plan</div>
          <div className="opacity-80 text-sm">Wind-dependent advice will appear here.</div>
        </div>
        <div className="border rounded p-3">
          <div className="text-sm font-medium mb-2">Approach</div>
          <div className="opacity-80 text-sm">Flight window & landing zones.</div>
        </div>
        <div className="border rounded p-3">
          <div className="text-sm font-medium mb-2">Miss safe</div>
          <div className="opacity-80 text-sm">Where to miss if you must.</div>
        </div>
      </div>
    </section>
  );
}
