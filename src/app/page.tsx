import AboutUs from '@/components/layout/home/about-us';
import Blogs from '@/components/layout/home/blogs';
import Projects from '@/components/layout/home/projects';
import Services from '@/components/layout/home/services';
import SupportSection from '@/components/layout/home/supportSection';
import Testimonial from '@/components/layout/services/testimonial';
import EndCTA from '@/components/layout/shared/end-cta';
import FAQSection from '@/components/layout/shared/faq';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const reviews = {
    count: 200,
    rating: 4.5,
    avatars: [
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-1.webp',
        alt: 'Avatar 1',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-2.webp',
        alt: 'Avatar 2',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-3.webp',
        alt: 'Avatar 3',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-4.webp',
        alt: 'Avatar 4',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-5.webp',
        alt: 'Avatar 5',
      },
    ],
  };

  return (
    <>
      <Header />
      <Hero
        label="Welcome to Our Agency"
        title="Your Partner in Modern Digital Solutions"
        description="We build cutting-edge websites and mobile apps that drive results."
        support={<SupportSection />}
        startSupportCta={
          <Link href="/projects">
            <Button variant="default" className="flex items-center gap-2">
              Explore Our Work
              <Badge variant={'secondary'} className="size-6 rounded-full p-0">
                <ArrowRight className="mx-auto" />
              </Badge>
            </Button>
          </Link>
        }
        EndSupportCta={
          <div className="mx-auto  flex w-fit  flex-wrap items-center justify-center gap-2">
            <span className="mr-2 inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index}>
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-orange-400 text-orange-400"
                  />
                ))}
                <span className="mr-1 font-semibold ">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from {reviews.count}+{' '}
                <Link
                  href="/#testimonial"
                  className="underline underline-offset-2 "
                >
                  {' '}
                  reviews
                </Link>
              </p>
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
