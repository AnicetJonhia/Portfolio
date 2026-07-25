"use client"

import { motion } from "motion/react"
import { MessageCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {CONTACT_DETAILS} from "@/lib/contact"

export function WhatsAppButton() {
  const phoneNumber = CONTACT_DETAILS.phone.value
  const message = "Hello Anicet, I saw your portfolio and I would like to discuss a project with you."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-26 right-6 z-50">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_10px_25px_rgba(25,118,210,0.4)] transition-colors relative group cursor-pointer"
              aria-label="Contact on WhatsApp"
            >
              {/* Effet de pulse animé */}
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25 group-hover:hidden"></span>

              <MessageCircle className="h-7 w-7 relative z-10" />
            </motion.a>
          </TooltipTrigger>

          <TooltipContent
            side="left"
            className="bg-popover text-primary border-primary/20 font-bold shadow-xl mr-2"
          >
            <p>Chat with me on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}