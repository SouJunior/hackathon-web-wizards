import { Hero } from './sections/Hero';
import { UseSupport } from './sections/UseSupport';
import { FAQ } from './sections/FAQ';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CTA } from './sections/CTA';
import { Results } from './sections/Results';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Results />
      <UseSupport />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
