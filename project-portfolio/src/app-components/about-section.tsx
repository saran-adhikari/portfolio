"use client"

import { Card, CardContent } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { Code, Palette, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "User-Centered Design",
      description: "Creating intuitive experiences that users love and understand",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Innovation",
      description: "Embracing new technologies and pushing creative boundaries",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Building great products through teamwork and communication",
    },
  ]

  const interests = [
    "Open Source",
    "LLMs",
    "Web Development",
    "AI & Machine Learning",
    "Music",
    "Travel",
    "Coffee",
    "Minimalism",
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A passionate full-stack developer with a keen eye for building scalable & intelligent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I&apos;m Saran Adhikari, a First Class Honors graduate in BSc (Hons) Computer Science from Herald College Kathmandu (affiliated with the University of Wolverhampton, UK). With a strong academic foundation and a deep passion for machine learning, optimization, and large-scale intelligent systems, I am currently exploring fully funded GA/TA opportunities for Master&apos;s and Ph.D. programs in the U.S..
                </p>
                <p>
                  My core technical skill set includes Python, JavaScript, React.js, and Mongodb, enabling me to develop scalable, responsive, and user-centered web applications. Beyond web technologies, I am increasingly focused on applied machine learning, deep learning, large language models (LLMs), and algorithmic problem-solving, I&apos;ve explored both in coursework and through my independent research interests.

                </p>
                <p>
                  I am particularly driven by research that combines statistical learning, trustworthy AI, optimization theory, and human-computer interaction. I&apos;ve reviewed and aligned myself with the work of professors in areas such as deep learning, multimodal learning, time series forecasting, and more. I am now seeking graduate-level research roles or scholarships to contribute meaningfully to academic projects.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-foreground">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="default" className="text-primary text-sm px-2 py-1 hover:scale-105 transition-transform bg-primary/10 hover:bg-primary/20 cursor-pointer">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 space-y-4 ">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
