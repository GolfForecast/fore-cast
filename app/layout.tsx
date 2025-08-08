import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Fore-Cast',
  description: 'Broadsheet-style golf weather + social hub',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="px-4 py-3 border-b">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="masthead text-2xl md:text-3xl font-semibold">Fore‑Cast</div>
            <nav className="text-sm flex gap-4">
              <a href="/" className="hover:underline">Feed</a>
              <a href="/guess" className="hover:underline">Guess This Course</a>
              <a href="/mental" className="hover:underline">Mental Fitness</a>
            </nav>
          </div>
        </header>
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
