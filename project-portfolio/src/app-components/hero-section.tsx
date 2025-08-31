"use client"

import { Button } from "@/app-components/ui/button"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-100 h-100 bg-accent/10 rounded-full animate-float" />
    <div
      className="absolute -bottom-40 -left-40 w-100 h-100 bg-secondary/10 rounded-full animate-float"
      style={{ animationDelay: "1s" }}
    />
  </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-secondary p-1">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <Image
                    src="/Images/profile.jpg"
                    alt="Saran Adhikari"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Saran Adhikari</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            First Class Honors Graduate | Full-Stack Developer (ReactJS, NextJS, FastAPI, MongoDB) | Research-Oriented | Building Scalable & Intelligent Systems
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="icon" className="rounded-full bg-transparent cursor-pointer">
              <Github className="h-5 w-5" onClick={() => window.open("https://github.com/saran-adhikari", "_blank")}/>
              
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent cursor-pointer">
              <Linkedin className="h-5 w-5" onClick={() => window.open("https://www.linkedin.com/in/saran-adhikari/", "_blank")}/>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent cursor-pointer">
              <Mail className="h-5 w-5"  onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&to=saranadhikari02@gmail.com&su=Contact Through Portfolio Website&body=Hi%20Saran",
                    "_blank"
                  )
                }/>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
