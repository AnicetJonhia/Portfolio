"use client"

import Link from "next/link"
import { Code, CodeXml } from 'lucide-react';
import { SocialButton } from "./social-button"

export function Footer() {
  return (
    <footer className="bg-foreground dark:bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-emerald-500" />
              <span className="text-xl text-white font-bold">Anicet R.</span>
              <CodeXml className="h-6 w-6 text-emerald-500" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Python & TypeScript Developer specializing in AI, Data Science, and building high-performance automation systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-emerald-500 transition-colors">About</Link></li>
              <li><Link href="#stack" className="text-gray-400 hover:text-emerald-500 transition-colors">Stack</Link></li>
              <li><Link href="#experience" className="text-gray-400 hover:text-emerald-500 transition-colors">Experience</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-emerald-500 transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Expertises</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-emerald-500 transition-colors">Python (FastAPI & Django)</li>
              <li className="hover:text-emerald-500 transition-colors">AI & Machine Learning</li>
              <li className="hover:text-emerald-500 transition-colors">Data Analysis & ETL</li>
              <li className="hover:text-emerald-500 transition-colors">React & Next.js</li>
              <li className="hover:text-emerald-500 transition-colors">Mobile (React Native)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Follow me</h3>
            <div className="flex space-x-4">
              <SocialButton href="https://github.com/AnicetJonhia" icon="github" />
              <SocialButton href="https://www.linkedin.com/in/anicet-jonhia-randrianambinina-266628244/" icon="linkedin" />
              <SocialButton href="https://www.facebook.com/anicet.jonhia/" icon="facebook" />
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">Based in Antananarivo, MG</p>
            </div>
          </div>
        </div>

     
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Anicet RANDRIANAMBININA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}