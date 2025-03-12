'use client';

import AboutUs from '@/components/layout/home/about-us';
import Blogs from '@/components/layout/home/blogs';
import Hero from '@/components/layout/home/hero';
import Projects from '@/components/layout/home/projects';
import Services from '@/components/layout/home/services';
import Testimonials from '@/components/layout/home/tesminonials';
import EndCTA from '@/components/layout/shared/end-cta';
import FAQSection from '@/components/layout/shared/faq';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <AboutUs />
      <Blogs />
      <FAQSection />
      <EndCTA />
      <Footer />
    </>
  );
}
