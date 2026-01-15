"use client"

import { motion } from "motion/react"
import { MessageCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function WhatsAppButton() {
  const phoneNumber = "261344822412"
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
              className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.4)] transition-colors relative group cursor-pointer"
              aria-label="Contact on WhatsApp"
            >
              {/* Effet de pulse animé */}
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:hidden"></span>
              
              <MessageCircle className="h-7 w-7 relative z-10" />
            </motion.a>
          </TooltipTrigger>
          
          <TooltipContent 
            side="left" 
            className="bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 font-bold shadow-xl mr-2"
          >
            <p>Chat with me on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}