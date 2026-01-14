import { SectionTitle } from "@/components/section-title"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <SectionTitle>About Me</SectionTitle>
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
        <p className="text-lg leading-relaxed mb-4">
          My name is Tokiniaina Jean Anicet Jonhia RANDRIANAMBININA. I come from Fianarantsoa, Madagascar.
        </p>
        <p className="text-lg leading-relaxed">
          🚀 Fullstack Developer specializing in Python, TypeScript, and AI & Data Science. 
          Experienced in building scalable applications with Django, FastAPI, React, Next.js, React Native,
          while designing efficient automation systems and ETL pipelines. 
          Awarded 3rd place at Devfest 2024 for an AI-powered medical assistant, 
          I am dedicated to bridging robust software architecture with innovative Machine Learning solutions.
        </p>

      </div>
    </section>
  )
}
