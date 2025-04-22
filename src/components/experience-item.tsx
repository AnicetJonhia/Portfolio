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
    <div className={`relative ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"} md:w-1/2`}>
      <div className="absolute top-0 md:top-2 left-0 md:left-auto md:right-auto md:-translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-md"></div>
      <Card
        className={`${isLeft ? "md:mr-6" : "md:ml-6"} hover:shadow-lg transition-shadow border-emerald-200 dark:border-emerald-800`}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {company} • {period}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className={`list-disc ${isLeft ? "md:mr-4" : "ml-4"}`}>
            {description.map((item, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
