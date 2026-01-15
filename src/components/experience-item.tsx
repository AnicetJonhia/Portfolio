import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceItem({
  title,
  company,
  period,
  description,
  isLeft,
}: {
  title: string
  company: string
  period: string
  description: string[]
  isLeft: boolean
}) {
  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full mb-12 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      
      
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-10 transform -translate-x-1/2 md:translate-x-[-8px] top-1 md:top-6"></div>

     
      <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-emerald-200 dark:border-emerald-800 bg-card">
          <CardHeader className="p-5 pb-3">
           
            <CardTitle className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-foreground font-semibold flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-emerald-800 dark:text-emerald-100/80">{company}</span>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground font-normal italic">{period}</span>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-5 pt-0">
            <ul className="space-y-2">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                 
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

     
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  )
}