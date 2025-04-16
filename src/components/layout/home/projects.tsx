'use client';

import { Button } from '@/components/ui/button';
import { useFetch } from '@/hooks/use-fetch';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';

import {
  ProjectCard,
  ProjectCardProps,
  ProjectCardSkeleton,
} from '../projects/projects';
import TitleSubSection from '../shared/title-sub-section';

export default function Projects() {
  const t = useTranslations('home.projects');
  const { data, loading, error } =
    useFetch<ProjectCardProps[]>('/api/projects');
  return (
    <section className="container mx-auto flex h-full flex-col  justify-center py-20">
      <TitleSubSection
        title={t('title')}
        description={t('description')}
      />
      <div className="relative mt-0 w-full ">
        <div className="absolute inset-y-0 left-0 z-10 w-[5%] bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-background to-transparent" />
        <ScrollContainer
          className="flex w-full cursor-grab gap-x-4  overflow-x-scroll  px-4 pb-4  "
          horizontal={true}
          vertical={false}
          hideScrollbars={false}
        >
          {loading &&
            Array(3)
              .fill(0)
              .map((_, index) => <ProjectCardSkeleton key={index} />)}
          {error && <p>{t('error')}: {error}</p>}
          {data?.length === 0 && (
            <div className="flex size-full items-center justify-center">
              <p className="text-lg">{t('noProjects')}</p>
            </div>
          )}
          {data?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ScrollContainer>
      </div>

      <Link className="mx-auto mt-8" href="/projects" scroll={false}>
        <Button>{t('viewAllProjects')}</Button>
      </Link>
    </section>
  );
}
