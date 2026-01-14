import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectCard({
  title,
  year,
  description,
  image,
  tags,
}: {
  title: string
  year: string
  description: string
  image: string
  tags: string[]
}) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-emerald-100 dark:border-emerald-900">
      {/* Container Image avec zoom au survol */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Badge Année - Gardé en emerald-600 comme demandé */}
        <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {year}
        </div>
      </div>

      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 pt-0">
        {/* line-clamp-3 permet de garder toutes les cartes à la même hauteur */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-[11px] font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}