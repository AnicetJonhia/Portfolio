"use client"

import type React from "react"
import {Navbar} from "@/components/navbar"
import {HeroSection} from "@/components/sections/hero-section"
import {AboutSection} from "@/components/sections/about-section"
import {StackSection} from "@/components/sections/stack-section"
import {ExperienceSection} from "@/components/sections/experience-section"
import {PortfolioSection} from "@/components/sections/portfolio-section"
import {ContactSection} from "@/components/sections/contact-section"
import {Footer} from "@/components/footer"


export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />

      </main>
      <Footer />
    </div>
  )
}
