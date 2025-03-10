'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

function ProjectCard({
  title,
  description,
  image,
  category,
}: ProjectCardProps) {
  return (
    <Card className="relative flex w-full max-w-96 shrink-0 flex-col">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <CardHeader className="flex-1">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="aspect-video w-full rounded-lg object-cover object-center"
          src={image}
          alt="Hero"
          width={300}
          height={200}
        />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge variant={'outline'}>{category}</Badge>
        <Button variant={'ghost'} className="group/button">
          Read more
          <span>
            <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform for Fashionista',
      description:
        'A fully customized e-commerce solution designed to boost sales and enhance user experience.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Website',
    },
    {
      title: 'E-commerce Platform for Fashionista',
      description:
        'A fully customized e-commerce solution designed to boost sales and enhance user experience.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Website',
    },
    {
      title: 'HealthTrack Mobile App',
      description:
        'A health monitoring app that empowers users to take control of their wellness journey.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Mobile',
    },
    {
      title: 'HealthTrack Mobile App',
      description:
        'A health monitoring app that empowers users to take control of their wellness journey.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'Mobile',
    },
    {
      title: 'Corporate Website for GreenTech Solutions',
      description:
        'A modern and informative website that reflects the company’s commitment to sustainability.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'UI/UX',
    },
    {
      title: 'Corporate Website for GreenTech Solutions',
      description:
        'A modern and informative website that reflects the company’s commitment to sustainability.',
      image:
        'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=niclas-illg-FJ5e_2f96h4-unsplash.jpg&w=640',
      category: 'UI/UX',
    },
  ];
  return (
    <section className="container mx-auto flex h-full flex-col  justify-center py-10">
      <h1 className="mb-2 px-2 text-center text-2xl font-medium md:text-4xl">
        Our Latest Creations
      </h1>
      <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
        Explore some of our recent projects and see how we&apos;ve helped
        businesses achieve their goals.
      </p>
      <Tabs defaultValue="all" className="flex flex-col items-center">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ui/ux">UI/UX</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="relative mt-0 w-full ">
          <div className="absolute inset-y-0 left-0 z-10 w-[5%] bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-background to-transparent" />
          <ScrollContainer
            className="flex w-full cursor-grab gap-x-4  overflow-x-scroll  px-4 pb-4  "
            horizontal={true}
            vertical={false}
            hideScrollbars={false}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </ScrollContainer>
        </TabsContent>
        <TabsContent value="website" className="relative mt-0 w-full">
          <div className="absolute inset-y-0 left-0 z-10 w-[5%] bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-background to-transparent" />
          <ScrollContainer
            className="flex w-full cursor-grab gap-x-4  overflow-x-scroll  px-4 pb-4  "
            horizontal={true}
            vertical={false}
            hideScrollbars={false}
          >
            {projects
              .filter((project) => project.category === 'Website')
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </ScrollContainer>
        </TabsContent>
        <TabsContent value="mobile" className="relative mt-0 w-full">
          <div className="absolute inset-y-0 left-0 z-10 w-[5%] bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-background to-transparent" />
          <ScrollContainer
            className="flex w-full cursor-grab gap-x-4  overflow-x-scroll  px-4 pb-4  "
            horizontal={true}
            vertical={false}
            hideScrollbars={false}
          >
            {projects
              .filter((project) => project.category === 'Mobile')
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </ScrollContainer>
        </TabsContent>
        <TabsContent value="ui/ux" className="relative mt-0 w-full">
          <div className="absolute inset-y-0 left-0 z-10 w-[5%] bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-background to-transparent" />
          <ScrollContainer
            className="flex w-full cursor-grab gap-x-4  overflow-x-scroll  px-4 pb-4  "
            horizontal={true}
            vertical={false}
            hideScrollbars={false}
          >
            {projects
              .filter((project) => project.category === 'UI/UX')
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </ScrollContainer>
        </TabsContent>
      </Tabs>
      <Button variant={'outline'} className="mx-auto mt-8">
        View All Projects
      </Button>
    </section>
  );
}
