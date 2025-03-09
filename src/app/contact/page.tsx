'use client';

import ContactDetail from '@/components/layout/contact/contact-detail';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function Contact() {
  return (
    <>
      <Header />
      <Hero
        label="Contact Us"
        title="Get in touch with us"
        description="We are here to help you with any questions you may have. Reach out to us and we will get back to you as soon as possible."
        cta="Send us a message"
      />
      <ContactDetail />
      <EndCTA />
      <Footer />
    </>
  );
}
