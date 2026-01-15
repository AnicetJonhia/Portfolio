import { SectionTitle } from "@/components/section-title"
import { StackCard } from "@/components/stack-card"

export function StackSection() {
  return (
    <section id="stack" className="py-20">
      <SectionTitle>Technical Stack</SectionTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
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