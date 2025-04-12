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
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        label="Welcome to Our Agency"
        title="Your Partner in Modern Digital Solutions"
        description="We build cutting-edge websites and mobile apps that drive results."
        cta="Explore Our Work"
        support={
          <div className="relative mt-8 w-full overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-1 shadow-lg  ring-1 ring-background ">
              <BorderBeam />
              <Image
                className="relative  aspect-video rounded-2xl bg-background object-cover object-top  "
                src="/hero.png"
                alt="app screen"
                width="1920"
                height="1080"
              />
            </div>
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
