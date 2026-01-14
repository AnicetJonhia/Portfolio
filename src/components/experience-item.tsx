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
    <div className={`relative flex flex-col md:flex-row items-center w-full mb-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      

      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-md z-10 transform -translate-x-1/2 md:translate-x-[-8px] top-1"></div>


      <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <Card className={`hover:shadow-lg transition-shadow border-emerald-200 dark:border-emerald-800`}>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl text-emerald-700 dark:text-emerald-400">{title}</CardTitle>
            <CardDescription className="font-medium">
              {company} <br className="md:hidden" /> <span className="hidden md:inline">•</span> {period}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <ul className="list-disc ml-5 space-y-1">
              {description.map((item, index) => (
                <li key={index} className="text-sm md:text-base text-gray-600 dark:text-gray-400">
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