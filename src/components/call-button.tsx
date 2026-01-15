"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export function CallButton() {
  const phoneNumber = "+261344822412"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden cursor-pointer text-emerald-600 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
      asChild
    >
      <motion.a 
        href={`tel:${phoneNumber}`}
        whileTap={{ scale: 0.9 }}
        aria-label="Call me"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </Button>
  )
}