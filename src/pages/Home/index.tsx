import { Hero } from './sections/Hero';
import { UseSupport } from './sections/UseSupport';
import { FAQ } from './sections/FAQ';
import { Footer } from '@/components/footer';

export function Home() {
  return (
    <>
      <Hero />
      <UseSupport />
      <FAQ />
      <Footer />
    </>
  );
}
