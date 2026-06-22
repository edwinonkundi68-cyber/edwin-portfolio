import Navbar from './Navbar';
import Footer from './Footer';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
}