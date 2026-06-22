import { useState, useEffect } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const commands = [
  { text: 'npm create vite@5 edwin-portfolio', type: 'cmd' },
  { text: 'Tailwind v4 configured', type: 'ok' },
  { text: 'React Router installed', type: 'ok' },
  { text: 'git push origin main', type: 'cmd' },
  { text: 'Deployed to Vercel ✓', type: 'ok' },
  { text: 'status: building, always_', type: 'final' },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<typeof commands>([]);

  useEffect(() => {
    if (lineIndex >= commands.length) {
      const t = setTimeout(() => {
        setDisplayedLines([]);
        setLineIndex(0);
        setCharIndex(0);
      }, 2500);
      return () => clearTimeout(t);
    }

    const current = commands[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, current]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  const prefix = (type: string) =>
    type === 'cmd' ? '$ ' : type === 'ok' ? '✔ ' : '> ';

  const lineColor = (type: string) =>
    type === 'ok' ? 'text-emerald-400' : 'text-zinc-300';

  return (
    <section className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden flex items-center">
      {/* Glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500 opacity-10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500 opacity-5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left — identity */}
        <div>
          <p className="font-mono text-sm text-emerald-400 mb-4">
            edwin@nairobi:~$ whoami
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            I'm Edwin.
          </h1>

          <p className="text-lg text-zinc-400 mb-2">
            Frontend Developer · JavaScript Instructor
          </p>
          <p className="text-zinc-500 max-w-md mb-8">
            Apmi  developer building real client work in React and
            teaching the next wave of junior developers in Nairobi, Kenya.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-emerald-500 text-zinc-950 font-medium px-5 py-3 rounded-md hover:bg-emerald-400 transition-colors"
            >
              View my work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
            
              href="/cv.pdf"
              className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-200 font-medium px-5 py-3 rounded-md hover:border-zinc-500 transition-colors"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-zinc-400 border border-zinc-800 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently building: Otenga JNR Foundation site
          </div>
        </div>

        {/* Right — terminal */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden">
          {/* Terminal top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-amber-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-zinc-500 font-mono">
              edwin — zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-sm space-y-2 min-h-64">
            {displayedLines.map((line, i) => (
              <div key={i} className={lineColor(line.type)}>
                {prefix(line.type)}{line.text}
              </div>
            ))}
            {lineIndex < commands.length && (
              <div className={lineColor(commands[lineIndex].type)}>
                {prefix(commands[lineIndex].type)}
                {commands[lineIndex].text.slice(0, charIndex)}
                <span className="animate-pulse">_</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}