'use client'
import Header from '@/components/layout/header'
import Hero from '@/components/layout/hero'
import Services from '@/components/layout/services'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Tabs, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent, TabsList } from '@radix-ui/react-tabs'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: 'E-commerce Platform for Fashionista',
      description: 'A fully customized e-commerce solution designed to boost sales and enhance user experience.',
      image: 'https://cdn.prod.website-files.com/654dc98c7ed0b1941418f88a/675e89d17eafee5d56c50a02_nextarena-thumbnail-p-800.webp',
      category: 'Website',
    },
    {
      title: 'HealthTrack Mobile App',
      description: 'A health monitoring app that empowers users to take control of their wellness journey.',
      image: 'https://cdn.prod.website-files.com/654dc98c7ed0b1941418f88a/675e89d17eafee5d56c50a02_nextarena-thumbnail-p-800.webp',
      category: 'Mobile',
    },
    {
      title: 'Corporate Website for GreenTech Solutions',
      description: 'A modern and informative website that reflects the company’s commitment to sustainability.',
      image: 'https://cdn.prod.website-files.com/654dc98c7ed0b1941418f88a/675e89d17eafee5d56c50a02_nextarena-thumbnail-p-800.webp',
      category: 'UI/UX',
    },
  ]
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <section className="container mx-auto min-h-[calc(100dvh-65px)]">
        <h1 className="text-center text-4xl font-medium mb-2">Our Latest Creations</h1>
        <p className="text-center text-lg mb-6 text-foreground/80">Explore some of our recent projects and see how we&apos;ve helped businesses achieve their goals.</p>
        <Tabs defaultValue="all" className="flex justify-center gap-4 mb-8 flex-col mx-auto items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="ui/ux">UI/UX</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="flex flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>
          <TabsContent value="website"></TabsContent>
          <TabsContent value="mobile"></TabsContent>
          <TabsContent value="ui/ux"></TabsContent>
        </Tabs>
      </section>
    </>
  )
}

function ProjectCard({ title, description, image, category }) {
  return (
    <Card className="max-w-96 w-full relative">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image className="rounded-lg w-full object-cover object-center" src={image} alt="Hero" width={300} height={200} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant={'outline'}>{category}</Badge>
        <Button variant={'ghost'} className="group/button">
          Read more
          <span>
            <MoveUpRight className="w-4 group-hover/button:rotate-45 group-hover/button:size-5 transition-all duration-300" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
