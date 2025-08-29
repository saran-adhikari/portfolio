"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { Progress } from "@/app-components/ui/progress"

export function SkillsSection() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 85, category: "Frontend" },
    { name: "React/Next.js", level: 80, category: "Frontend" },
    { name: "FastAPI", level: 70, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Google Firebase", level: 80, category: "Database" },
    { name: "AWS", level: 60, category: "DevOps" },
    { name: "Google Colab/Jupyter", level: 80, category: "Notebooks" },
    
  ]

  const designSkills = [
    { name: "UI/UX Design", level: 85 },
    { name: "Figma", level: 80 },
    { name: "Responsive Design", level: 90 }, 
    { name: "User Research", level: 70 },
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

  const tools = ["VS Code", "Git/GitHub","Slack", "Jira", "Slack", "Discord", "Notion", "Chrome DevTools","Swagger UI", "Vite","Trello"]

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
                      {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
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
                    {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
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
                  <Badge key={index} variant="outline" className="text-primary text-sm px-2 py-1 hover:scale-105 transition-transform bg-primary/10 hover:bg-primary/20 cursor-pointer">
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
