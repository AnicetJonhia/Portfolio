import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function StackCard({ title, skills, icon }: { title: string; skills: string[]; icon: string }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card py-4">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">

        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="bg-accent text-accent-foreground border-primary/20 font-medium px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}