"use client"

import { motion } from "motion/react"
import { SectionTitle } from "@/components/section-title"
import { MapPin, Award, Terminal, Code2, GraduationCap } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <SectionTitle>About Me</SectionTitle>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        
        <div className="lg:col-span-7 bg-card/50 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800 p-8 rounded-3xl shadow-sm flex flex-col justify-center">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-foreground">
             #<span className="text-emerald-600">Anicet</span>
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-muted-foreground mb-6">
            Based in <span className="font-semibold text-foreground">Antananarivo</span>, I am a 
            <span className="text-emerald-600 font-bold"> Fullstack Developer</span> with a deep passion for 
            Artificial Intelligence and Data Science.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-muted-foreground">
            My expertise lies in bridging the gap between robust software architecture (Django, FastAPI, React) 
            and innovative Machine Learning solutions. Whether it's building complex ETL pipelines or 
            designing AI-powered medical assistants, I focus on creating high-performance, tailor-made tools 
            that solve real-world problems.
          </motion.p>

          
        </div>

        
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <StatCard 
            icon={<MapPin className="text-emerald-600" />} 
            title="Origin" 
            value="Fianarantsoa, MG" 
          />
          <StatCard 
            icon={<Award className="text-emerald-600" />} 
            title="Devfest 2024" 
            value="3rd Place Winner" 
          />
          <StatCard 
            icon={<GraduationCap className="text-emerald-600" />} 
            title="Education" 
            value="ESTI" 
          />
          <StatCard 
            icon={<Terminal className="text-emerald-600" />} 
            title="Focus" 
            value="AI & Automation" 
          />

           <motion.div variants={itemVariants} className="group  relative sm:col-span-2">
            <Link href="#contact" className="block w-full ">
              <Button 
                className="cursor-pointer w-full"
              >
                <span className="text-base">Let's Connect</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />   
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

