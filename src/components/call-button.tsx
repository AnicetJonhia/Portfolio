"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import {CONTACT_DETAILS} from "@/lib/contact"

export function CallButton() {
  const phoneNumber = CONTACT_DETAILS.phone.value

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden cursor-pointer text-primary hover:bg-accent"
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