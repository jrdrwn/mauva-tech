'use client'
import Hero from '@/components/layout/home/hero'
import Projects from '@/components/layout/home/projects'
import Services from '@/components/layout/home/services'
import Header from '@/components/layout/shared/header'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
    </>
  )
}
