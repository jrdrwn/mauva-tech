import OurJourney from '@/components/layout/about/our-journey';
import Team from '@/components/layout/about/team';
import VisionMission from '@/components/layout/about/vision-mission';
import WhatDefinesUs from '@/components/layout/about/what-defines-us';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Hero
        label="Abous Us"
        title="Explore Our Journey"
        description="From a small team with big dreams to a trusted partner for businesses worldwide."
        cta="Meet the Team"
        ctaLink="#team"
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
