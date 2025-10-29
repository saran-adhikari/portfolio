"use client"

import { Button } from "@/app-components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Resume", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  }

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/saran-adhikari",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/saran-adhikari",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/saran_adhikari/",
      label: "Instagram",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:saranadhikari02@gmail.com",
      label: "Email",
    },
  ]

  return (

    <>
    
    
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Saran Adhikari</h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Full-Stack Developer & AI/ML Enthusiast passionate about creating beautiful, functional web experiences
                that solve real problems.
              </p>
            </div>

            
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="space-y-4">
            
            <span className="font-semibold text-foreground">Let&apos;s connect</span>
            <p className="text-muted-foreground mb-2 py-2">
              Follow on socials and reach out anytime!
            </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
          </div>
        </div>

        {/* Bottom Footer */}
          <div className="py-6 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
              {/* Left side */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Saran Adhikari. Made with</span>
                <Heart className="h-4 w-4 text-black-500 fill-current" />
                <span>and listening to lofi music.</span>
              </div>

              {/* Right side */}
              {/* <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sitemap
                </a>
              </div> */}
            </div>
          </div>

             
      </div>

       
    </footer>
    {/* Back to top button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="#top"
            className="bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>

    </> 
  )
}
