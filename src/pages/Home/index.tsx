import { Hero } from './sections/Hero';
import { UseSupport } from './sections/UseSupport';
import { FAQ } from './sections/FAQ';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CTA } from './sections/CTA';
import { Results } from './sections/Results';
import { MarketChallenges } from './sections/MarketChallenges';
import { BigNumbers } from './sections/BigNumbers';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarketChallenges />
      <BigNumbers />
      <Results />
      <UseSupport />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
