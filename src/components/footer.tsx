"use client"

import Link from "next/link"
import { Code, CodeXml } from 'lucide-react';
import { SocialButton } from "./social-button"
import { SOCIAL_HREFS } from "@/lib/contact"

export function Footer() {
  return (
    <footer className="bg-foreground dark:bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl text-white font-bold">Anicet R.</span>
              <CodeXml className="h-6 w-6 text-primary" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Python & TypeScript Developer specializing in AI, Data Science, and building high-performance automation systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="text-white/60 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-white/60 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#stack" className="text-white/60 hover:text-primary transition-colors">Stack</Link></li>
              <li><Link href="#experience" className="text-white/60 hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="#portfolio" className="text-white/60 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-white/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Expertises</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-primary transition-colors">Python (FastAPI & Django)</li>
              <li className="hover:text-primary transition-colors">AI & Machine Learning</li>
              <li className="hover:text-primary transition-colors">Data Analysis & ETL</li>
              <li className="hover:text-primary transition-colors">React & Next.js</li>
              <li className="hover:text-primary transition-colors">Mobile (React Native)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Follow me</h3>
            <div className="flex space-x-4">
              <SocialButton href={SOCIAL_HREFS.github} icon="github" />
              <SocialButton href={SOCIAL_HREFS.linkedin} icon="linkedin" />
              <SocialButton href={SOCIAL_HREFS.facebook} icon="facebook" />
            </div>
            <div className="mt-6">
              <p className="text-xs text-white/40">Based in Antananarivo, MG</p>
            </div>
          </div>
        </div>

     
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Anicet RANDRIANAMBININA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}