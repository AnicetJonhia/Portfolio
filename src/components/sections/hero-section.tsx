"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Download, ArrowRight, MousePointer2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [imageError, setImageError] = useState<boolean>(false)

  // Variantes pour les animations d'entrée
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- TEXTE (GAUCHE) --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8 text-center lg:text-left z-10"
        >
          {/* Badge de disponibilité */}
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-100 uppercase tracking-widest">
              Available for New Projects
            </span>
          </motion.div>

          <motion.div  className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Hello, I am <br />
              <span className="text-emerald-600 dark:text-emerald-500 drop-shadow-sm">
                Anicet RANDRIANAMBININA
              </span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-muted-foreground flex items-center justify-center lg:justify-start gap-3">
              <span className="h-px w-8 bg-emerald-600 hidden md:block" />
              Fullstack & AI Developer
            </h2>
          </motion.div>

          <motion.p  className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Bridging the gap between <span className="text-foreground font-medium">robust software architecture</span> and 
            <span className="text-foreground font-medium"> innovative AI solutions</span>. Expert in Python, Data Science & Fullstack development.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link href="https://cvdesignr.com/p/655471e67b6d9" target="_blank">
              <Button  className="cursor-pointer transition-all active:scale-95">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </Link>
            
            <Link href="#portfolio">
              <Button  variant="outline" className="cursor-pointer">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* --- VISUEL (DROITE) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Cercles décoratifs animés */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px]
                          bg-gradient-to-tr from-emerald-600/30 via-emerald-400/10 to-transparent
                          rounded-full blur-[80px] animate-pulse z-0" />
          
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px]
                          border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite] z-0" />

          {/* Container Image avec bordure technique */}
          <div className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px] p-2
                          rounded-full border-2 border-emerald-500/30 backdrop-blur-sm shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center text-6xl font-black text-emerald-600">
              {!imageError ? (
                <Image
                  src="/images/hero.png"
                  alt="Anicet RANDRIANAMBININA"
                  fill
                  className="object-cover scale-105"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <>AR</>
              )}
            </div>
            
            {/* Petit badge flottant sur l'image */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/20 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <MousePointer2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Focus</p>
                  <p className="text-sm font-bold">AI Engineering</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}