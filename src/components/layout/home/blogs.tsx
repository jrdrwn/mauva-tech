'use client';

import { Button } from '@/components/ui/button';
import { useFetch } from '@/hooks/use-fetch';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';

import { useTranslations } from 'next-intl';
import {
  ArticleCard,
  ArticleCardProps,
  ArticleCardSkeleton,
} from '../blog/articles';
import TitleSubSection from '../shared/title-sub-section';

export default function Blogs() {
  const t = useTranslations('home.articles');
  const { data, loading, error } =
    useFetch<ArticleCardProps[]>('/api/articles');
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-20">
      <TitleSubSection
        title={t('title')}
        description={t('description')}
      />
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 z-10 w-[5%] bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-background to-transparent" />
        <ScrollContainer
          className="relative flex w-full cursor-grab  gap-x-4  overflow-x-scroll px-4 pb-4"
          horizontal={true}
          vertical={false}
          hideScrollbars={false}
          nativeMobileScroll={true}
        >
          {loading &&
            Array(3)
              .fill(0)
              .map((_, index) => <ArticleCardSkeleton key={index} />)}
          {error && <p>Error: {error}</p>}
          {data?.length === 0 && (
            <div className="flex size-full items-center justify-center">
              <p className="text-lg">{t('not-found')}</p>
            </div>
          )}
          {data?.map((blog) => <ArticleCard key={blog.title} {...blog} />)}
        </ScrollContainer>
      </div>
      <Link href="/blog" scroll={false} className="mx-auto mt-8">
        <Button>{t('cta')}</Button>
      </Link>
    </section>
  );
}
