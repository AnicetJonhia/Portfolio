import { SectionTitle } from "@/components/section-title"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <SectionTitle>About Me</SectionTitle>
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
        <p className="text-lg leading-relaxed mb-4">
          My name is Tokiniaina Jean Anicet Jonhia RANDRIANAMBININA. I come from Fianarantsoa, Madagascar.
        </p><p className="text-lg leading-relaxed">
              🤖 Full-stack developer specializing in React, Django, and cloud services. Experienced in building scalable, responsive web apps, with a focus on high-quality solutions. Constantly learning and applying new techniques in software architecture and AI.
            </p>

      </div>
    </section>
  )
}
