'use client';
import { useState } from 'react';
import courses from '@/data/courses_au_sample.json';

export default function Guess() {
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<'idle'|'correct'|'wrong'>('idle');
  const answer = 'royal-melbourne-west';

  return (
    <section className="px-2 py-6">
      <h1 className="masthead text-3xl font-semibold mb-4">Guess This Course</h1>
      <div className="aspect-video bg-black/5 grid place-items-center mb-3">Mystery clip placeholder</div>
      <input className="border rounded px-3 py-2 w-full mb-2" list="courses" placeholder="Start typing a course…" value={guess} onChange={e=>setGuess(e.target.value)} />
      <datalist id="courses">
        {(courses as any[]).map(c => <option key={c.slug} value={c.name} />)}
      </datalist>
      <button className="px-3 py-2 border rounded" onClick={()=>{
        setStatus(guess.toLowerCase().includes('royal melbourne') ? 'correct':'wrong');
      }}>Submit</button>
      {status==='correct' && <div className="mt-2 text-green-600">Correct! 🎉</div>}
      {status==='wrong' && <div className="mt-2 text-red-600">Not quite. Another clue unlocks in 6h.</div>}
    </section>
  );
}
