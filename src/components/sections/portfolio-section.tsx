import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"

export function PortfolioSection() {
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
  ]

  return (
    <section id="portfolio" className="py-20">
      <SectionTitle>Personal Projects</SectionTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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