import type React from "react"

export function ContactItem({ 
  icon, 
  text, 
  href 
}: { 
  icon: React.ReactNode; 
  text: string; 
  href?: string 
}) {
  
  const Content = (
    <>
      <div className=" mr-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="break-all">{text}</span>
    </>
  )

  
  if (href) {
    return (
      <a 
        href={href} 
        className="flex items-center group transition-colors cursor-pointer"
      >
        {Content}
      </a>
    )
  }

  return (
    <div className="flex items-center">
      {Content}
    </div>
  )
}