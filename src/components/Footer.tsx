import {  Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="font-mono text-emerald-400 font-bold text-sm">
          edwin.dev
        </p>

        <p className="text-zinc-500 text-sm">
          Built with React + Tailwind · Nairobi, Kenya
        </p>

        <div className="flex items-center gap-4">


          <a href="mailto:YOUR_EMAIL" className="text-zinc-500 hover:text-zinc-100 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}