import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

import Head from "next/head"

export const metadata: Metadata = {

  title: "Anicet Randrianambinina - Software / AI Developer",
  description: "Anicet Randrianambinina is a Software and AI Developer, motivated and dedicated in the field of Information Technology. Explore his portfolio.",
  keywords: [
    "Software Developer",
    "AI Developer",
    "Web Development",
    "Portfolio",
    "Anicet Randrianambinina",
    "Anicet",
    "Anicet Jonhia",
    "Anicet Jonhia Randrianambinina",
    "Randrianambinina",
  ],
    icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://anicetjonhia.vercel.app"),

  openGraph: {
    title: "Anicet Randrianambinina - Software / AI Developer",
    description: "Explore the portfolio of Anicet Randrianambinina, a skilled and passionate Software and AI Developer.",
    url: "https://anicetjonhia.vercel.app/",
    images: [
      {
        url: "/images/hero.png",
        alt: "Anicet Randrianambinina Portfolio Image",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <Head>
            <meta name="google-site-verification" content="1kWonT8tdal8JxBDAqzW51OuVm7bBtd3o9dAdZuJPcs" />
            <link rel="icon" href="/logo.png" />
          </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
           <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
