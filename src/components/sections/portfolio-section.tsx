"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function PortfolioSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "Agridi",
      year: "2023",
      description: "Bridging Producers and consumers through agri-tech app.",
      image: "/images/agridi.png",
      tags: ["React", "Django"],
      features: [
        "Real-time marketplace for agricultural products",
        "Direct communication between farmers and consumers",
        "Inventory management for producers",
        "Geolocated search for local products"
      ]
    },
    {
      title: "ToBib",
      year: "2024",
      description: "AI as medical assistant helping achieve UN Sustainable Development Goal 3.",
      image: "/images/tobib.png",
      tags: ["Next.js", "AI", "Python | Django"],
      features: [
        "AI-powered medical symptoms analysis",
        "Instant medical advice based on reliable data",
        "Secure storage of consultation history",
        "Optimized user interface for quick access to information"
      ]
    },
    {
      title: "Feosync",
      year: "2026",
      description: "Unified social network management platform for scheduling, publishing and tracking content across multiple channels.",
      image: "/images/feosync.svg",
      tags: ["Next.js", "TypeScript", "Python | Django"],
      features: [
        "Multi-account scheduling and publishing",
        "Centralized dashboard for all connected social networks",
        "Engagement and performance analytics",
        "Team collaboration on content planning"
      ]
    },
  ]

  useGSAP(() => {
    Array.from(gridRef.current!.children).forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: i * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      })
    })
  }, { scope: gridRef })

  return (
    <section id="portfolio" className="py-20">
      <SectionTitle>Personal Projects</SectionTitle>
      <div ref={gridRef} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}
