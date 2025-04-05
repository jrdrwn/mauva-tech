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
import { GridLayout } from '@/components/ui/grid-layout';
import useArticles, { ArticleCardProps } from '@/hooks/use-articles';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Blogs() {
  const blogs = useArticles();
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <h1 className="mb-2 px-2 text-center text-2xl font-medium md:text-4xl">
        <GridLayout
          crosshairs={{
            topLeft: true,
            topRight: true,
            bottomLeft: true,
            bottomRight: true,
          }}
          lineVariant="none"
          className="mx-auto max-w-max p-2"
        >
          Insights & Updates
        </GridLayout>
      </h1>
      <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
        Stay ahead of the curve with our latest insights on technology, design,
        and business growth.
      </p>
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
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </ScrollContainer>
      </div>
      <Link href="/blog" scroll={false} className="mx-auto mt-8">
        <Button>View All Blogs</Button>
      </Link>
    </section>
  );
}

function BlogCard(props: ArticleCardProps) {
  return (
    <div className="w-96 min-w-96">
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
          <Link href={`/blog/${props.id}`} scroll={false}>
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
  );
}
