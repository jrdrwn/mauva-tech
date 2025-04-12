'use client';

import FadeBlur from '@/components/animations/fade-blur';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Skeleton } from '@/components/ui/skeleton';
import { useFetch } from '@/hooks/use-fetch';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  created_at: string;
  category: string;
  image: string;
}

export function ArticleCardSkeleton() {
  return (
    <FadeBlur>
      <div className="h-full w-96 min-w-96">
        <div className="relative overflow-hidden rounded-lg">
          <Skeleton className="h-40 w-full max-w-96 rounded-lg" />
        </div>
        <Card className="relative mt-1 flex h-[230px] flex-col">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <CardHeader>
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardFooter className="relative flex-1 items-end">
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </FadeBlur>
  );
}

export default function Articles() {
  const { data, loading, error } =
    useFetch<ArticleCardProps[]>('/api/articles');
  return (
    <section className="container mx-auto  py-16">
      <div className="relative flex w-full flex-wrap justify-center gap-4">
        {loading &&
          Array(3)
            .fill(0)
            .map((_, index) => <ArticleCardSkeleton key={index} />)}
        {error && <p>Error: {error}</p>}
        {data?.length === 0 && (
          <div className="flex size-full items-center justify-center">
            <p className="text-lg">No articles found</p>
          </div>
        )}
        {data?.map((blog) => <ArticleCard key={blog.title} {...blog} />)}
      </div>
    </section>
  );
}

export function ArticleCard(props: ArticleCardProps) {
  return (
    <FadeBlur>
      <div className="h-full w-96 min-w-96">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            alt="An Image"
            src={props.image}
            width={600}
            height={400}
            className="h-40 w-full max-w-96 rounded-lg object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <Badge className="shadow-lg" variant={'secondary'}>
              {props.created_at &&
                new Date(props.created_at).toLocaleDateString('id', {
                  dateStyle: 'medium',
                })}
            </Badge>
            <Badge className="uppercase shadow-lg" variant={'secondary'}>
              {props.category}
            </Badge>
          </div>
        </div>
        <Card className="relative mt-1 flex h-[230px] flex-col">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <CardHeader>
            <CardTitle className="line-clamp-2 text-ellipsis text-xl md:text-2xl">
              {props.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-ellipsis">
              {props.summary}
            </CardDescription>
          </CardHeader>
          <CardFooter className="relative flex-1 items-end">
            <Link href={`/blog/${props.id}`}>
              <Button variant={'outline'} className="group/button">
                Read More
                <span>
                  <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
                </span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </FadeBlur>
  );
}
