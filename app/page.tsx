'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { CurrentFocus } from '@/components/current-focus'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CurrentFocus />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}