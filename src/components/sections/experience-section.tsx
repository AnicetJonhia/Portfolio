import { SectionTitle } from "@/components/section-title"
import { ExperienceItem } from "@/components/experience-item"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Python Developer",
      company: "Futurmap, Madagascar",
      period: "Since March 2024",
      description: [
        "Developing and maintaining scripts and extensions with PyRevit",
        "Automating tasks in Autodesk Revit",
      ],
      isLeft: true,
    },
    {
      title: "Freelance JavaScript Developer",
      company: "NextRocket, Dubai",
      period: "January 2024",
      description: ["Automation via Web Scraping"],
      isLeft: false,
    },
    {
      title: "Internship",
      company: "LCom Corporation, Madagascar",
      period: "September to November 2023",
      description: ["UX / UI Design", "Getting to Know ReactJs"],
      isLeft: true,
    },
    {
      title: "Internship",
      company: "LCom Corporation, Madagascar",
      period: "October to November 2022",
      description: ["Showcase Site", "Introduction to OOP in PHP"],
      isLeft: false,
    },
    {
      title: "Professional Discovery Course",
      company: "Ibonia, Madagascar",
      period: "July 2022",
      description: ["Observation", "Understanding the Agile Method"],
      isLeft: true,
    },
  ]

  return (
    <section id="experience" className="py-20">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="mt-8 relative">
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-emerald-200 dark:bg-emerald-800 transform md:translate-x-[-0.5px]"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isLeft={exp.isLeft}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
