import { FAQ } from './sections/FAQ';
import { UseSupport } from './sections/UseSupport';
import { Footer } from '@/components/footer';

export function Home() {
  return (
    <>
      <UseSupport />
      <FAQ />
      <Footer />
    </>
  );
}
