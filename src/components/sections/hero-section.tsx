"use client"

import {Download} from "lucide-react"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import {useState} from "react"
import Link from "next/link"

export function HeroSection() {
  const [imageError, setImageError] = useState<boolean>(false)
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            I am <span className="text-emerald-600 dark:text-emerald-500 text-sm sm:text-base md:text-lg">
              Anicet RANDRIANAMBININA
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">Software / AI Developer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            Competent, motivated and dedicated in the field of Information Technology.
          </p>
          <Link href={"https://cvdesignr.com/p/655471e67b6d9"}>
              <Button className="group bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce " />
                Download CV
              </Button>
          </Link>
        </div>
             <div className="relative flex justify-center items-center">
              {/* Background effet 3D flouté */}
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]
                              bg-gradient-to-br from-primary via-[#149911] to-primary
                              rounded-full blur-3xl opacity-40 animate-pulse z-0 shadow-xl" />

              {/* Hero Image sans background */}
              <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]
                              rounded-full overflow-hidden flex items-center justify-center
                              text-6xl font-bold text-primary shadow-lg ring-2 ring-primary/20">
                {!imageError ? (
                  <Image
                    src="/images/hero.png"
                    alt="Anicet RANDRIANAMBININA"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />

                ) : (
                  <>AR</>
                )}
              </div>

            </div>

      </div>
    </section>
  )
}
