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
import { useEffect, useState } from 'react';

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
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <section className="container mx-auto flex h-full flex-col  justify-center py-10">
      <Tabs defaultValue="all" className="flex flex-col items-center">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ui/ux">UI/UX</TabsTrigger>
        </TabsList>
        <TabsContent
          value="all"
          className="relative mt-0 flex w-full flex-wrap justify-center gap-4 "
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </TabsContent>
        <TabsContent
          value="website"
          className="relative mt-0 flex w-full flex-wrap justify-center gap-4 "
        >
          {projects
            .filter((project) => project.category === 'Website')
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </TabsContent>
        <TabsContent
          value="mobile"
          className="relative mt-0 flex w-full flex-wrap justify-center gap-4 "
        >
          {projects
            .filter((project) => project.category === 'Mobile')
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </TabsContent>
        <TabsContent
          value="ui/ux"
          className="relative mt-0 flex w-full flex-wrap justify-center gap-4 "
        >
          {projects
            .filter((project) => project.category === 'UI/UX')
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}
