"use client"

import { Card, CardContent } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { CalendarDays, MapPin, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Nepal Travel Co & The International Centre for Compliance and Development (ICCD)",
      location: "Kathmandu, BA 44600",
      period: "July 2025 - Present",
      type: "Remote",
      description: "Leading development of scalable web applications and monitoring SEO performance for Nepal Travel Co and ICCD, a premier institution dedicated to strengthening AML/CFT regimes and compliance frameworks across financial institutions worldwide.",
      responsibilities: [
        "Developing fully responsive, user-centric web applications using Next.js for the frontend and FastAPI for the backend.",
        "Integrating third-party services such as Google Maps for location-based experiences and image galleries to enhance visual appeal.",
        "Ensuring performance optimization, mobile responsiveness, and accessibility across all major browsers and devices.",
        "Collaborating with UI/UX designers and content teams to deliver a seamless and engaging user journey.",
        "Prioritizing code quality, security best practices, and API efficiency to support scalable deployment and future feature integration.",
        "Contributing to ICCD's mission by supporting digital initiatives that enhance education and practical solutions in financial compliance."
      ],
      technologies: ["React.js", "Node.js", "TypeScript", "Next.js", "Netlify", "FastAPI", "Git", "SEO", "Figma", "Trello"],
      achievements: [
        "Improved seamless user engagement across platforms",
        "Built a reusable component library for faster development",
        "Reduced bugs and optimized performance for critical workflows"
      ],
    },
    
    {
      id: 2,
      title: "Junior Web Developer",
      company: "Shreepech International",
      location: "Lalitpur, BA 44600",
      period: "September 2024 - February 2025",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with design teams.",
      responsibilities: [
        "Designed and developed a dynamic booking platform to manageguesthouse reservations. Implemented features to showcase room packages, gallery, memberships, anddetailed facility information, improving user accessibility and engagement.",
        "Built a responsive company portfolio website to highlight services, packages, and organizational profile. Ensured brand consistency through clean UI/UX design andoptimized performance for diverse devices.",
        "Developed a modern, informative web application for the National People Awareness Development Society of Nepal. Integrated content modules for blog updates, organizational approach, and an online donation feature to drive social engagement.",
        "Delivered a professional web presence for YS-Builders, incorporating servicedescriptions and a comprehensive project portfolio. Enhanced the company's online visibility and communication with potential clients.",
      ],
      technologies: ["React.js", "Vite", "JavaScript", "SCSS", "SEO", "Git","Figma", "Trello"],
      achievements: [
        "Increased user engagement by 25%",
        "Built reusable component library",
        "Reduced bug reports by 30%",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A journey of growth, learning, and contributing to meaningful projects across different organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>

                <Card className="md:ml-16 border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-accent">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Key Achievements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs bg-accent/10 text-accent border-accent/20"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
