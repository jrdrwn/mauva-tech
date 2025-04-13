'use client';

import AboutUs from '@/components/layout/home/about-us';
import Blogs from '@/components/layout/home/blogs';
import Projects from '@/components/layout/home/projects';
import Services from '@/components/layout/home/services';
import Testimonial from '@/components/layout/services/testimonial';
import EndCTA from '@/components/layout/shared/end-cta';
import FAQSection from '@/components/layout/shared/faq';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { BorderBeam } from '@/components/ui/border-beam';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <>
      <Header />
      <Hero
        label="Welcome to Our Agency"
        title="Your Partner in Modern Digital Solutions"
        description="We build cutting-edge websites and mobile apps that drive results."
        cta="Explore Our Work"
        support={
          <div
            ref={containerRef}
            className="relative mt-8 w-full px-2 sm:mr-0 sm:mt-12 md:mt-20"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <motion.div
              style={{
                rotateX: rotate,
                scale,
              }}
              className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-1 shadow-lg  ring-1 ring-background "
            >
              <BorderBeam />
              <Image
                className="relative  aspect-video rounded-2xl bg-background object-cover object-top  "
                src="/hero.png"
                alt="app screen"
                width="1920"
                height="1080"
              />
            </motion.div>
          </div>
        }
      />
      <Services />
      <AboutUs />
      <Projects />
      <Testimonial />
      <Blogs />
      <FAQSection />
      <EndCTA />
      <Footer />
    </>
  );
}
