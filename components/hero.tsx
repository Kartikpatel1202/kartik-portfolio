"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Kartik Patel</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
              BTech Computer Science Student & Software Developer passionate about solving real-world problems through
              technology
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Specializing in Machine Learning, Cloud Computing, and Data-Driven Solutions
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToProjects} size="lg" className="text-lg px-8">
                View My Work
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:kartik@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/kartikpatel" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Kartik Patel"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-3">
                <Download className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
