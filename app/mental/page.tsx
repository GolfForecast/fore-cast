'use client';
import { useState } from 'react';

export default function Mental() {
  const [mood, setMood] = useState<'low'|'ok'|'high'|''>('');
  const [tip, setTip] = useState<string>('');

  const tips: Record<string,string> = {
    low: 'Reset: two deep breaths, narrow your target, one swing thought.',
    ok: 'Keep it simple: commit to the shot, accept the result, move on.',
    high: 'Play to your feels: choose the shot you can picture clearly.'
  };

  return (
    <section className="px-2 py-6">
      <h1 className="masthead text-3xl font-semibold mb-3">Mental Fitness</h1>
      <div className="mb-2 text-sm opacity-80">Quick check-in</div>
      <div className="flex gap-2 mb-3">
        {(['low','ok','high'] as const).map(k => (
          <button key={k} className={`px-3 py-2 border rounded ${mood===k?'bg-black text-white':''}`} onClick={()=>{setMood(k); setTip(tips[k]);}}>
            {k.toUpperCase()}
          </button>
        ))}
      </div>
      {tip && <div className="p-3 border rounded">{tip}</div>}
    </section>
  );
}
