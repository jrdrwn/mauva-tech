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
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Blogs() {
  const blogs = [
    {
      title: 'How to build a successful startup',
      summary:
        'Learn how to build a successful startup from scratch with our step-by-step guide.',
      date: '2022-01-01',
      category: 'News',
      image:
        'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=matthew-smith-Rfflri94rs8-unsplash.jpg&w=640',
    },
    {
      title: 'The future of AI in business',
      summary:
        'Discover how AI is transforming businesses and what the future holds for this technology.',
      date: '2022-01-02',
      category: 'Technology',
      image:
        'https://images.unsplash.com/photo-1533518463843-d7d7e2b3c3b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=franck-v-2Q3P2Jh8J0-unsplash.jpg&w=640',
    },
    {
      title: 'Design trends to watch out for in 2022',
      summary:
        'Stay ahead of the curve with our list of design trends that will dominate 2022.',
      date: '2022-01-03',
      category: 'Design',
      image:
        'https://images.unsplash.com/photo-1556740739-887f6717d7e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=charles-deluvio-7lXJ6YQbc4Y-unsplash.jpg&w=640',
    },
    {
      title: 'The future of remote work',
      summary:
        'Explore the future of remote work and how it is reshaping the way we work.',
      date: '2022-01-04',
      category: 'Business',
      image:
        'https://images.unsplash.com/photo-1556740739-887f6717d7e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=charles-deluvio-7lXJ6YQbc4Y-unsplash.jpg&w=640',
    },
    {
      title: 'The impact of blockchain on the finance industry',
      summary:
        'Learn how blockchain technology is revolutionizing the finance industry and what the future holds.',
      date: '2022-01-05',
      category: 'Finance',
      image:
        'https://images.unsplash.com/photo-1556740739-887f6717d7e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=charles-deluvio-7lXJ6YQbc4Y-unsplash.jpg&w=640',
    },
  ];
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <h1 className="mb-2 px-2 text-center text-2xl font-medium md:text-4xl">
        Insights & Updates
      </h1>
      <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
        Stay ahead of the curve with our latest insights on technology, design,
        and business growth.
      </p>
      <ScrollContainer
        className="flex w-full cursor-grab gap-x-4  overflow-x-scroll  pb-4"
        horizontal={true}
        vertical={false}
        hideScrollbars={false}
        nativeMobileScroll={true}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </ScrollContainer>
      <Button variant={'outline'} className="mx-auto mt-8">
        View All Blogs
      </Button>
    </section>
  );
}

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}

function BlogCard(props: BlogCardProps) {
  return (
    <div className="w-96 min-w-96">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          alt="An Image"
          src={
            'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=matthew-smith-Rfflri94rs8-unsplash.jpg&w=640'
          }
          width={600}
          height={400}
          className="h-40 w-full max-w-96 rounded-lg object-cover object-center"
        />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          <Badge className="shadow-lg" variant={'secondary'}>
            {props.date &&
              new Date(props.date).toLocaleDateString('id', {
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
          <Button variant={'outline'} className="group/button">
            Read More
            <span>
              <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
