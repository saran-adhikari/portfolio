"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { Button } from "@/app-components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "PlayDeals: Games Price Insights",
      description: "A full-stack game price solution with modern UI, ML embedded forecasting, admin dashboard and event organizing system.",
      category: "Web App",
      technologies: ["React.js", "FastAPI", "MongoDB"],
      image: "/Images/playdeals.jpg",
      role: "Full-Stack Developer",
      duration: "3 months",
      links: {
        live: "https://playdeals.vercel.app/",
        github: "https://github.com/saran-adhikari/playdeals",
        
      },
      featured: true,
    },
    {
      id: 2,
      title: "Divine Guest House",
      description: "Web application with booking features and hospitality information.",
      category: "Web App",
      technologies: ["React.js", "Node.js", "Email.js", "MongoDB"],
      image: "/Images/dgh.png",
      role: "Lead Developer",
      duration: "3 months",
      links: {
        // github: "#",
        live: "https://dgh.com.np/",
      },
      featured: false,
    },
    {
      id: 3,
      title: "AI-ML Projects",
      description: "AI-ML project on image classification and sentiment analysis",
      category: "AI/ML",
      technologies: ["TensorFlow", "Keras", "Gradio", "Python", "Google Colab"],
      image: "/Images/ai-ml.png",
      role: "AI Developer",
      duration: "12 weeks",
      links: {
        github: "https://github.com/saran-adhikari/courseworks-aiml",
        
      },
      featured: true,
    },
    {
      id: 4,
      title: "Nepal Travel Co",
      description: "Secure web application with treks information, booking features and intuitive user experience.",
      category: "Web App",
      technologies: ["Next.js", "TypeScript", "Node.js"],
      image: "/Images/ntc.png",
      role: "Full-Stack Developer",
      duration: "Currently Ongoing",
      links: {
        live: "https://nepaltravelco.netlify.app/",
        // github: "#",
        // case: "#",
        
      },
      featured: true,
    },
    {
      id: 5,
      title: "Human Resource Management System",
      description: "Interactive dashboard for Human Resource analytics with real-time data visualization and reporting.",
      category: "Web App",
      technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "Express.js"],
      image: "/Images/hrms.png",
      role: "Project Manager",
      duration: "12 Weeks",
      links: {
        // github: "#",
        // live: "#",
      },
      featured: false,
    },
    {
      id: 6,
      title: "ModernFoot: E-Commerce Platform",
      description: "Modern e-commerce website design for displaying items with seamless user interactions.",
      category: "Web App",
      technologies: ["React.js", "Framer", "After Effects"],
      image: "/Images/mf.png",
      role: "Frontend Developer",
      duration: "1 month",
      links: {
        github: "https://github.com/saran-adhikari/ModernFoot",
        live: "https://modernfoot.netlify.app/",
        figma: "#",
        behance: "#",
      },
      featured: false,
    },
    {
      id: 7,
      title: "AI-ML Workshops",
      description: "Hands on AI-ML workshops",
      category: "AI/ML",
      technologies: ["Keras", "TensorFlow", "Python"],
      image: "/Images/ai-ml-workshops.png",
      role: "AI Developer",
      duration: "12 weeks",
      links: {
        github: "https://github.com/saran-adhikari/AI-ML",
        
      },
      featured: false,
    },
  ]

  const categories = ["All", "Web App", "Mobile", "AI/ML"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of projects that showcase my skills in development, design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.links.live && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-accent/90 hover:bg-accent cursor-pointer"
                          onClick={() => window.open(project.links.live, "_blank", "noopener,noreferrer")}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-accent/90 hover:bg-accent cursor-pointer"
                        onClick={() => window.open(project.links.github, "_blank", "noopener,noreferrer")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">{project.category}</Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Role:</span>
                      <span>{project.role}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex items-center gap-2 pt-2">
                    {project.links.case && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-accent hover:text-accent/80"
                          onClick={() => window.open(project.links.case, "_blank", "noopener,noreferrer")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Case Study
                        </Button>
                      )}
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects with Filter */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <h3 className="text-2xl font-semibold text-foreground">All Projects</h3>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-40 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                  <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{project.role}</span>
                    <div className="flex items-center gap-1">
                      {project.links.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 cursor-pointer"
                          onClick={() => window.open(project.links.github, "_blank", "noopener,noreferrer")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.links.live && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 cursor-pointer"
                          onClick={() => window.open(project.links.live, "_blank", "noopener,noreferrer")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted/20 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-2">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <Button className="text-primary bg-accent hover:bg-accent/90 cursor-pointer" onClick={() => window.open("/#contact", "_self")}>Get In Touch</Button>
        </div>
      </div>
    </section>
  )
}
