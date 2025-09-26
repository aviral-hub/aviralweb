import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Aviral Pathak's portfolio. Discover the journey of a B.Tech IT student, published author, and marketing leader passionate about technology and personal development.",
  openGraph: {
    title: "Aviral Pathak | B.Tech IT Student, Author & Marketing Lead",
    description:
      "Welcome to Aviral Pathak's portfolio. Discover the journey of a B.Tech IT student, published author, and marketing leader passionate about technology and personal development.",
    url: "https://aviralpathak.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aviral Pathak Portfolio Homepage",
      },
    ],
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aviral Pathak Portfolio",
    url: "https://aviralpathak.vercel.app",
    description: "Portfolio website of Aviral Pathak - B.Tech IT student, published author, and marketing leader",
    author: {
      "@type": "Person",
      name: "Aviral Pathak",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aviralpathak.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
    </>
  )
}
