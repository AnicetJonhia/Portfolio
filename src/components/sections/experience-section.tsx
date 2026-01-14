import { SectionTitle } from "@/components/section-title"
import { ExperienceItem } from "@/components/experience-item"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Python Developer",
      company: "Futurmap, Madagascar",
      period: "March 2024 to December 2025",
      description: [
        "Development of a quality tracking system",
        "Internal process automation",
        "ETL and data analysis",
      ],
      isLeft: true,
    },
    {
      title: "Freelance JavaScript Developer",
      company: "NextRocket, Dubai",
      period: "January 2024",
      description: [
        "Data collection automation (Web Scraping)",
      ],
      isLeft: false,
    },
    {
      title: "UI/UX Designer & React Developer Intern",
      company: "LCom Corporation, Madagascar",
      period: "August 2023 to October 2023",
      description: [
        "Designing UI mockups on Figma", 
        "Developing targeted features in React"
      ],
      isLeft: true,
    },
    {
      title: "Web Development Intern",
      company: "LCom Corporation, Madagascar",
      period: "October 2022 to November 2022",
      description: [
        "Creation of showcase websites", 
        "Object-Oriented Programming (OOP) concepts"
      ],
      isLeft: false,
    },
    {
      title: "Professional Discovery Internship",
      company: "Ibonia, Madagascar",
      period: "July 2022",
      description: [
        "Discovery of professional roles and internal business processes"
      ],
      isLeft: true,
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-0">
      <SectionTitle>Professional Experience</SectionTitle>
      
      <div className="mt-12 relative max-w-6xl mx-auto">
        
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-emerald-100 dark:bg-emerald-900 transform md:translate-x-[-1px]"></div>
        
        <div className="space-y-4 md:space-y-0">
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
