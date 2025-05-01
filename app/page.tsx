import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
