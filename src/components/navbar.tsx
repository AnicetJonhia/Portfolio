"use client"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {CallButton} from "@/components/call-button"


const navItems = ["Home", "About", "Stack", "Experience", "Portfolio", "Contact"]

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Anicet.dev</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <CallButton />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        className="p-2"
        onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
      <div
        id="mobile-menu"
        className="hidden absolute top-16 right-4 bg-popover shadow-lg rounded-lg p-4 w-48 z-50"
      >
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              {item}
            </a>
          ))}

        </div>
      </div>
    </div>
  )
}
