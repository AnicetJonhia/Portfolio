"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionTitle } from "@/components/section-title"
import { ExperienceItem } from "@/components/experience-item"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: "FullStack Developer",
      company: "Bay Consulting, Madagascar",
      period: "April 2026 to present",
      description: [
        "End-to-end feature development across frontend and backend",
        "Design and maintenance of scalable client solutions",
      ],
      isLeft: true,
    },
    {
      title: "Python Developer",
      company: "Futurmap, Madagascar",
      period: "March 2024 to December 2025",
      description: [
        "Development of a quality tracking system",
        "Internal process automation",
        "ETL and data analysis",
      ],
      isLeft: false,
    },
    {
      title: "Freelance JavaScript Developer",
      company: "NextRocket, Dubai",
      period: "January 2024",
      description: [
        "Data collection automation (Web Scraping)",
      ],
      isLeft: true,
    },
    {
      title: "UI/UX Designer & React Developer Intern",
      company: "LCom Corporation, Madagascar",
      period: "August 2023 to October 2023",
      description: [
        "Designing UI mockups on Figma",
        "Developing targeted features in React"
      ],
      isLeft: false,
    },
  ]

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 0.6,
        },
      }
    )

    gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      })
    })
  }, { scope: containerRef })

  return (
    <section id="experience" className="py-20 px-4 md:px-0">
      <SectionTitle>Professional Experiences</SectionTitle>

      <div ref={containerRef} className="mt-12 relative max-w-6xl mx-auto">

        <div ref={lineRef} className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/20 transform md:translate-x-[-1px]"></div>

        <div className="space-y-4 md:space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <ExperienceItem
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isLeft={exp.isLeft}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
