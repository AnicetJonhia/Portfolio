import type React from "react"
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center">
      <h2 className="text-3xl font-bold">{children}</h2>
      <div className="ml-4 h-0.5 flex-grow bg-primary/20"></div>
    </div>
  )
}
