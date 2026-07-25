"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionTitle } from "@/components/section-title"
import { StackCard } from "@/components/stack-card"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function StackSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = Array.from(gridRef.current!.children)
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      })
    })
  }, { scope: gridRef })

  return (
    <section id="stack" className="py-20">
      <SectionTitle>Technical Stacks</SectionTitle>
      <div ref={gridRef} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StackCard
          title="Frontend"
          skills={["React", "Next.js", "React Native", "TypeScript"]}
          icon="🌐"
        />


        <StackCard
          title="Backend"
          skills={["Python", "Django", "FastAPI"]}
          icon="⚙️"
        />


        <StackCard
          title="AI & Data"
          skills={["Pandas", "Scikit-learn", "TensorFlow", "NumPy"]}
          icon="🧠"
        />


        <StackCard
          title="Database & Tools"
          skills={["SQL", "NoSQL", "Docker", "Git"]}
          icon="🛠️"
        />
      </div>
    </section>
  )
}
