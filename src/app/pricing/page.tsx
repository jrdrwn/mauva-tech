import PricingSection from '@/components/layout/pricing/pricing-section';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function Pricing() {
  return (
    <>
      <Header />
      <Hero
        label="Pricing"
        title="Simple and Transparent"
        description="We offer a range of pricing plans to suit your needs. Choose the one that fits you best."
      />
      <PricingSection />
      <EndCTA />
      <Footer />
    </>
  );
}

