import OurJourney from '@/components/layout/about/our-journey';
import Team from '@/components/layout/about/team';
import VisionMission from '@/components/layout/about/vision-mission';
import WhatDefinesUs from '@/components/layout/about/what-defines-us';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('pages.about.hero');

  return (
    <>
      <Header />
      <Hero
        label={t('label')}
        title={t('title')}
        description={t('description')}
        cta={t('cta')}
        ctaLink={t('ctaLink')}
      />
      <VisionMission />
      <OurJourney />
      <WhatDefinesUs />
      <Team />
      <EndCTA />
      <Footer />
    </>
  );
}
