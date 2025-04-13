import Testimonial from '@/components/layout/services/testimonial';
import WhatWeDo from '@/components/layout/services/what-we-do';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function Services() {
  return (
    <>
      <Header />
      <Hero
        label="What We Offer"
        title="Empowering Your Business with Cutting-Edge Digital Solutions"
        description="From custom websites to mobile apps, we provide tailored solutions that drive growth, efficiency, and innovation. Let us help you transform your ideas into reality."
        cta="Get a Free Consultation"
        ctaLink="/contact"
      />
      <WhatWeDo />
      <Testimonial />
      <EndCTA />
      <Footer />
    </>
  );
}
