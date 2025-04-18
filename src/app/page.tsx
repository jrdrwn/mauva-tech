import AboutUs from '@/components/layout/home/about-us';
import Articles from '@/components/layout/home/articles';
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
import { FlipWords } from '@/components/ui/flip-words';
import { ArrowRight, Star } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home() {
  const t = await getTranslations('pages.home');
  const reviews = {
    count: 200,
    rating: 4.5,
    avatars: [
      {
        src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        alt: 'Avatar 1',
      },
      {
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        alt: 'Avatar 2',
      },
      {
        src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        alt: 'Avatar 3',
      },
      {
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        alt: 'Avatar 4',
      },
      {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        alt: 'Avatar 5',
      },
    ],
  };

  const words = ['Partner', 'Guide', 'Resource', 'Expert', 'Advisor'].sort(
    () => Math.random() - 0.5,
  );

  return (
    <>
      <Header />
      <Hero
        label={t('hero.label')}
        title={
          <>
            {t.rich('hero.title', {
              words: () => <FlipWords words={words} />,
            })}
          </>
        }
        description={t('hero.description')}
        support={<SupportSection />}
        startSupportCta={
          <Link href="/projects">
            <Button variant="default" className="flex items-center gap-2">
              {t('hero.startSupportCta')}
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
                  <AvatarImage
                    src={avatar.src}
                    alt={avatar.alt}
                    className="object-cover object-center"
                  />
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
              <p className="text-left text-sm font-medium text-muted-foreground md:text-base">
                {t('hero.endSupportCta', {
                  count: reviews.count,
                })}{' '}
                <Link
                  href="/#testimonial"
                  className="underline underline-offset-2 "
                >
                  {' '}
                  {t('hero.reviews.text')}
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
      <Articles />
      <FAQSection />
      <EndCTA />
      <Footer />
    </>
  );
}
