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
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {year}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-gray-100 dark:bg-gray-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
