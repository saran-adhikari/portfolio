"use client"

import { Card, CardContent } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { CalendarDays, MapPin, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      responsibilities: [
        "Architected and developed 5+ full-stack applications using React, Node.js, and PostgreSQL",
        "Led a team of 4 developers and improved code quality through comprehensive code reviews",
        "Reduced application load time by 40% through performance optimization and caching strategies",
        "Implemented CI/CD pipelines that decreased deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Employee of the Quarter Q3 2023",
        "Led migration to microservices architecture",
        "Mentored 6 junior developers",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with design teams.",
      responsibilities: [
        "Built and maintained 10+ responsive web applications using React and Vue.js",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Improved website performance by 35% through code splitting and lazy loading",
        "Established component library used across 3 different products",
      ],
      technologies: ["React", "Vue.js", "JavaScript", "SASS", "Webpack", "Jest"],
      achievements: [
        "Increased user engagement by 25%",
        "Built reusable component library",
        "Reduced bug reports by 30%",
      ],
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Developed client websites and learned modern web development practices.",
      responsibilities: [
        "Developed 15+ client websites using HTML, CSS, JavaScript, and WordPress",
        "Collaborated with designers to create responsive and accessible web experiences",
        "Maintained and updated existing client websites",
        "Participated in client meetings and provided technical recommendations",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
      achievements: [
        "Delivered all projects on time",
        "Received positive client feedback",
        "Learned 5+ new technologies",
      ],
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Innovation Labs",
      location: "Boston, MA",
      period: "Summer 2019",
      type: "Internship",
      description: "Gained hands-on experience in web development and agile methodologies.",
      responsibilities: [
        "Assisted in developing internal tools using React and Express.js",
        "Participated in daily standups and sprint planning meetings",
        "Wrote unit tests and documentation for existing codebase",
        "Contributed to open-source projects maintained by the company",
      ],
      technologies: ["React", "Express.js", "MongoDB", "Git", "Jira"],
      achievements: [
        "Completed internship with excellent review",
        "Contributed to 3 open-source projects",
        "Received return offer",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
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
