import { Timeline } from '@/components/ui/timeline';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReactNode } from 'react';

import TitleSubSection from '../shared/title-sub-section';

export default function OurJourney() {
  const t = useTranslations('pages.about.ourJourney');
  const data: { title: string; content: ReactNode }[] = [
    {
      title: '2020 - The Beginning',
      content: (
        <div>
          <h3 className="mb-2 text-2xl font-semibold">Founding of MauvaTech</h3>
          <p className="text-secondary-foreground/80">
            MauvaTech was founded by a small team of passionate developers and
            designers with a shared vision: to create digital solutions that
            inspire innovation and drive business growth.
          </p>
        </div>
      ),
    },
    {
      title: '2021 - First Major Project',
      content: (
        <div>
          <h3 className="mb-2 text-2xl font-semibold">
            E-commerce Platform for Fashionist
          </h3>
          <p className="text-secondary-foreground/80">
            We successfully delivered our first major project—a fully customized
            e-commerce platform for a leading fashion brand. This milestone
            marked the beginning of our journey as a trusted software house.
          </p>
          <Image
            src="/project-1.png"
            alt="A Project"
            width={800}
            height={533}
            className="mt-8 aspect-square w-full rounded-lg object-cover object-top"
          />
        </div>
      ),
    },
    {
      title: '2022 - Expanding Our Expertise',
      content: (
        <div>
          <h3 className="mb-2 text-2xl font-semibold">
            HealthTrack Mobile App Launch
          </h3>
          <p className="text-secondary-foreground/80">
            We expanded our expertise into mobile app development with the
            launch of HealthTrack, a health monitoring app that received rave
            reviews for its seamless user experience and innovative features.
          </p>
          <Image
            src="/project-2.png"
            alt="A Project"
            width={800}
            height={533}
            className="mt-8 aspect-square w-full rounded-lg object-cover object-top"
          />
          <h3 className="mb-2 mt-8 text-2xl font-semibold">Team Growth</h3>
          <p className="text-secondary-foreground/80">
            Our team grew to include top talent in UI/UX design, backend
            development, and project management, allowing us to take on more
            complex and diverse projects.
          </p>
        </div>
      ),
    },
    {
      title: '2023 - Recognition and Growth',
      content: (
        <div>
          <h3 className="mb-2 text-2xl font-semibold">
            Award-Winning Projects
          </h3>
          <p className="text-secondary-foreground/80">
            Our work on the GreenTech Solutions corporate website earned us
            recognition in the industry, solidifying our reputation for
            excellence in web development.
          </p>
          <h3 className="mb-2 mt-8 text-2xl font-semibold">Global Clients</h3>
          <p className="text-secondary-foreground/80">
            We began collaborating with international clients, helping
            businesses worldwide achieve their digital transformation goals.
          </p>
        </div>
      ),
    },
    {
      title: '2024 - Looking Ahead',
      content: (
        <div>
          <h3 className="mb-2 text-2xl font-semibold">Focus on Innovation</h3>
          <p className="text-secondary-foreground/80">
            As we move forward, we remain committed to pushing the boundaries of
            technology. Our focus is on leveraging AI, machine learning, and
            other cutting-edge technologies to deliver even more impactful
            solutions.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center pb-72 pt-20">
      <TitleSubSection title={t('title')} description={t('description')} />
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
