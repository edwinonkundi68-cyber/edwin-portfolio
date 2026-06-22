import Navbar from './Navbar';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}