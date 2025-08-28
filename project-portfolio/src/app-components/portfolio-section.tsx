"use client"

import { useState } from "react"
import { Card, CardContent } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { Button } from "@/app-components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      category: "Web App",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/modern-ecommerce-dashboard.png",
      role: "Full-Stack Developer",
      duration: "3 months",
      links: {
        github: "#",
        live: "#",
        case: "#",
      },
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      category: "Web App",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/task-management-app.png",
      role: "Lead Developer",
      duration: "4 months",
      links: {
        github: "#",
        live: "#",
      },
      featured: true,
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete brand identity design for a tech startup including logo, colors, and style guide.",
      category: "Design",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop"],
      image: "/brand-identity-design-mockup.png",
      role: "UI/UX Designer",
      duration: "2 months",
      links: {
        behance: "#",
        case: "#",
      },
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and intuitive user experience.",
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "Firebase"],
      image: "/mobile-banking-app-screens.png",
      role: "Mobile Developer",
      duration: "5 months",
      links: {
        github: "#",
        case: "#",
      },
      featured: true,
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with real-time data visualization and reporting.",
      category: "Web App",
      technologies: ["D3.js", "React", "Python", "FastAPI"],
      image: "/data-dashboard-charts.png",
      role: "Frontend Developer",
      duration: "3 months",
      links: {
        github: "#",
        live: "#",
      },
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website Design",
      description: "Modern portfolio website design for a creative agency with smooth animations and interactions.",
      category: "Design",
      technologies: ["Figma", "Framer", "After Effects"],
      image: "/creative-portfolio-website.png",
      role: "UI/UX Designer",
      duration: "1 month",
      links: {
        figma: "#",
        behance: "#",
      },
      featured: false,
    },
  ]

  const categories = ["All", "Web App", "Mobile", "Design"]

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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.links.live && (
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
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

                  <div className="flex items-center gap-2 pt-2">
                    {project.links.case && (
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Case Study
                      </Button>
                    )}
                  </div>
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.links.live && (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button className="bg-accent hover:bg-accent/90">Get In Touch</Button>
        </div>
      </div>
    </section>
  )
}
