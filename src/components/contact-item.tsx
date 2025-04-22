import type React from "react"
export function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      <div className="text-emerald-600 dark:text-emerald-400 mr-3">{icon}</div>
      <span>{text}</span>
    </div>
  )
}
