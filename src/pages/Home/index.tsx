import { Hero } from './sections/Hero';
import { UseSupport } from './sections/UseSupport';
import { FAQ } from './sections/FAQ';
import { Footer } from '@/components/footer';
import { CTA } from './sections/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <UseSupport />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
