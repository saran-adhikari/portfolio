"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { Progress } from "@/app-components/ui/progress"

export function SkillsSection() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
    { name: "React/Next.js", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "PostgreSQL/MongoDB", level: 85, category: "Database" },
    { name: "AWS/Vercel", level: 75, category: "DevOps" },
    { name: "Docker", level: 70, category: "DevOps" },
    { name: "GraphQL", level: 80, category: "API" },
  ]

  const designSkills = [
    { name: "UI/UX Design", level: 85 },
    { name: "Figma/Adobe XD", level: 80 },
    { name: "Responsive Design", level: 95 },
    { name: "Design Systems", level: 85 },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Project Management",
    "Communication",
    "Mentoring",
    "Agile/Scrum",
    "Code Review",
    "Technical Writing",
  ]

  const tools = ["VS Code", "Git", "Postman", "Jira", "Slack", "Linear", "Notion", "Chrome DevTools", "Webpack", "Vite"]

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "API"]

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Design Skills */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Design Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
