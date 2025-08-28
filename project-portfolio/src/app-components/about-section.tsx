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
    "UI/UX Design",
    "Web Performance",
    "Accessibility",
    "Photography",
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
            Passionate developer with a keen eye for design and a love for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in web development, I've had the privilege of working with startups
                  and established companies to bring their digital visions to life. My journey began with a curiosity
                  for how things work, which led me to discover the perfect blend of logic and creativity in web
                  development.
                </p>
                <p>
                  I specialize in full-stack development with a strong focus on user experience. Whether it's crafting
                  pixel-perfect interfaces or architecting scalable backend systems, I believe in building products that
                  not only look great but perform exceptionally.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new coffee shops, capturing moments through photography,
                  or contributing to open-source projects. I believe in continuous learning and sharing knowledge with
                  the developer community.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-3">
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
