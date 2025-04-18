import Testimonial from '@/components/layout/services/testimonial';
import WhatWeDo from '@/components/layout/services/what-we-do';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { getTranslations } from 'next-intl/server';

export default async function Services() {
  const t = await getTranslations('services');
  return (
    <>
      <Header />
      <Hero
        label={t('hero.label')}
        title={t('hero.title')}
        description={t('hero.description')}
        cta={t('hero.cta')}
        ctaLink="/contact"
      />
      <WhatWeDo />
      <Testimonial />
      <EndCTA />
      <Footer />
    </>
  );
}
