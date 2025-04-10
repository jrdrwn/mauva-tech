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
import useArticles, { ArticleCardProps } from '@/hooks/use-articles';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Articles() {
  const articles = useArticles();
  return (
    <section className="container mx-auto  py-16">
      <div className="relative flex w-full flex-wrap justify-center gap-4">
        {articles.map((blog) => (
          <ArticleCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
}

function ArticleCard(props: ArticleCardProps) {
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
  );
}
