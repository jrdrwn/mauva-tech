import EndCTA from '@/components/layout/shared/end-cta';
import FAQSection from '@/components/layout/shared/faq';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function FAQ() {
  return (
    <>
      <Header />
      <Hero
        label="Help Center"
        title="Frequently Asked Questions"
        description="Quick answers to common questions about our products & services."
        cta="Have a question that is not listed here?"
      />
      <FAQSection onlyFaq={true} />
      <EndCTA />
      <Footer />
    </>
  );
}
