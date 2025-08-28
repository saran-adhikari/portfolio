"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app-components/ui/card"
import { Badge } from "@/app-components/ui/badge"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Boston, MA",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      honors: ["Magna Cum Laude", "Dean's List (6 semesters)"],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Computer Networks",
        "Machine Learning",
      ],
      projects: [
        "Senior Capstone: E-commerce Platform with React and Node.js",
        "Database Design Project: Library Management System",
        "Machine Learning Project: Sentiment Analysis Tool",
      ],
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
      status: "Active",
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-045",
      status: "Active",
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-789",
      status: "Active",
    },
    {
      id: 4,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-RD-2021-123",
      status: "Active",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Outstanding Student Award",
      organization: "Computer Science Department",
      year: "2019",
      description: "Awarded for academic excellence and contribution to student community",
    },
    {
      id: 2,
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      year: "2019",
      description: "First place for developing an AI-powered accessibility tool",
    },
    {
      id: 3,
      title: "Research Publication",
      organization: "IEEE Conference",
      year: "2018",
      description: "Co-authored paper on 'Optimizing Web Performance through Machine Learning'",
    },
    {
      id: 4,
      title: "Programming Contest",
      organization: "ACM ICPC Regional",
      year: "2018",
      description: "Top 10 finish in regional programming competition",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Academic foundation, continuous learning, and recognition for excellence in technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h3>
            {education.map((edu) => (
              <Card key={edu.id} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-medium text-accent">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">GPA:</span>
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Honors & Recognition:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, idx) => (
                          <Badge key={idx} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                            {honor}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-foreground mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-foreground mb-2">Notable Projects:</h5>
                      <ul className="space-y-1">
                        {edu.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.id} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {cert.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Award className="h-6 w-6 text-accent" />
            Awards & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-accent">{achievement.organization}</span>
                      <span>•</span>
                      <span>{achievement.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
