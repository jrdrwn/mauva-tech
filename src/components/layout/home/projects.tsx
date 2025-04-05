'use client';

import { Button } from '@/components/ui/button';
import { GridLayout } from '@/components/ui/grid-layout';
import useProjects from '@/hooks/use-projects';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';
import { ProjectCard } from '../projects/projects';


export default function Projects() {
  const projects =  useProjects()
  return (
    <section className="container mx-auto flex h-full flex-col  justify-center py-10">
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
          Our Latest Creations
        </GridLayout>
      </h1>
      <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
        Explore some of our recent projects and see how we&apos;ve helped
        businesses achieve their goals.
      </p>

      <div className="relative mt-0 w-full ">
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
      </div>

      <Link className="mx-auto mt-8" href="/projects" scroll={false}>
        <Button>View All Projects</Button>
      </Link>
    </section>
  );
}
