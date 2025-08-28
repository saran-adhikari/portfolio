import { Navigation } from "@/app-components/navigation"
import { HeroSection } from "@/app-components/hero-section"
import { AboutSection } from "@/app-components/about-section"
import { SkillsSection } from "@/app-components/skills-section"
import { PortfolioSection } from "@/app-components/portfolio-section"
import { ExperienceSection } from "@/app-components/experience-section"
import { EducationSection } from "@/app-components/education-section"
import { ContactSection } from "@/app-components/contact-section"
import { Footer } from "@/app-components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
