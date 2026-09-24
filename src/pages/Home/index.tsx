import { Hero } from './sections/Hero';
import { UseSupport } from './sections/UseSupport';
import { FAQ } from './sections/FAQ';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CTA } from './sections/CTA';
import { Results } from './sections/Results';
import { MarketChallenges } from './sections/MarketChallenges';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarketChallenges />
      <Results />
      <UseSupport />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
