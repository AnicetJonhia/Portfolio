"use client"

import Link from "next/link"
import {Code, CodeXml } from 'lucide-react';
import {SocialButton} from "./social-button"

export function Footer() {
  return (
    <footer className="bg-foreground dark:bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl text-muted-foreground font-bold">Anicet Randrianambinina</span>
              <CodeXml className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground mb-4">
              Modern web, mobile & AI development — innovation, performance, and tailor-made design.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-muted-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="#stack" className="text-muted-foreground hover:text-primary">Stack</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary">Experience</Link></li>
                            <li><Link href="#portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
                <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-muted-foreground mb-4">Expertises</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-primary">React & Next.js</li>
              <li className="text-muted-foreground hover:text-primary">Django & DRF</li>
              <li className="text-muted-foreground hover:text-primary">PWA & Offline Apps</li>
              <li className="text-muted-foreground hover:text-primary">UI/UX Design</li>
              <li className="text-muted-foreground hover:text-primary">AI (Artificial Intelligence)</li>

            </ul>
          </div>
          <div>
            <h3 className="font-semibold  text-muted-foreground mb-4">Follow me</h3>
            <div className="flex space-x-4">
            <SocialButton href="https://github.com/AnicetJonhia" icon="github" />
            <SocialButton href="https://www.linkedin.com/in/anicet-jonhia-randrianambinina-266628244/" icon="linkedin" />
            <SocialButton href="https://www.facebook.com/anicet.jonhia/?locale=fr_FR" icon="facebook" />

            </div>
          </div>

        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Anicet RANDRIANAMBININA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
