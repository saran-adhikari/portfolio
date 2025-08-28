"use client"

import { Button } from "@/app-components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

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
      href: "https://github.com/johndoe",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/johndoe",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/johndoe",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:john.doe@example.com",
      label: "Email",
    },
  ]

  return (
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

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Let&apos;s connect:</span>
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

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Saran Adhikari. Made with</span>
              <Heart className="h-4 w-4 text-black-500 fill-current" />
              <span>and lots of motivation.</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  )
}
