"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, CheckCircle2 } from "lucide-react"

export function ProjectCard({
  title,
  year,
  description,
  image,
  tags,
  features = [],
}: {
  title: string
  year: string
  description: string
  image: string
  tags: string[]
  features?: string[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-emerald-100 dark:border-emerald-900 flex flex-col h-full">
        <div className="relative h-52 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {year}
          </div>
        </div>

        <CardHeader className="p-5 pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-5 pt-0 flex flex-col flex-grow">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-[10px] font-medium uppercase">
                {tag}
              </Badge>
            ))}
          </div>

          <Button 
            onClick={() => setIsOpen(true)}
            variant="outline" 
            className="mt-auto w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider"
          >
            View Details
          </Button>
        </CardContent>
      </Card>


      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-950 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative">
            
           
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

        
            <div className="w-full h-64 md:h-96 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <Badge className="bg-emerald-600">{year}</Badge>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>

              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-emerald-600 uppercase tracking-wide">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <Button onClick={() => setIsOpen(false)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}