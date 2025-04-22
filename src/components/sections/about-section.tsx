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
          🤖 I specialize in full-stack development, working with modern technologies such as React, Django, and various
          cloud services. With extensive experience in building scalable and responsive web applications, I focus on
          delivering high-quality solutions that meet both client and user needs. I am constantly learning and
          applying new techniques in software architecture and AI to stay ahead of the curve.
        </p>
      </div>
    </section>
  )
}
