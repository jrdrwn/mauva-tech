'use client';

import Projects from '@/components/layout/projects/projects';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Hero
        label="Our Projects"
        title="Explore Our Work"
        description="Explore some of our recent projects and see how we've helped businesses achieve their goals."
        cta="Get in Touch"
      />
      <Projects />
      <EndCTA />
      <Footer />
    </>
  );
}
