import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"

export function PortfolioSection() {
  const projects = [
    {
      title: "Agridi",
      year: "2023",
      description: "Bridging Producers and consumers through agri-tech app",
      image: "/images/agridi.png",
      tags: ["React", "Django", "SQLite"],
    },
    {
      title: "ToBib",
      year: "2024",
      description: "AI as medical assistant",
      image: "/images/tobib.png",
      tags: ["Next.js", "AI", "Python | Django"],
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <SectionTitle>My Projects</SectionTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            year={project.year}
            description={project.description}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  )
}
