"use client"

import { motion } from "motion/react"

export function StatCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card border border-border p-5 rounded-2xl flex flex-col gap-3 transition-colors hover:border-emerald-500/50"
    >
      <div className="p-2 w-fit bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-tight font-bold">{title}</p>
        <p className="text-sm font-semibold text-foreground leading-tight">{value}</p>
      </div>
    </motion.div>
  )
}