import PricingSection from '@/components/layout/pricing/pricing-section';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pages.pricing.hero');

  return (
    <>
      <Header />
      <Hero
        label={t('label')}
        title={t('title')}
        description={t('description')}
      />
      <PricingSection />
      <EndCTA />
      <Footer />
    </>
  );
}

