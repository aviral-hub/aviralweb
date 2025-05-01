"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Linkedin, Youtube, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Aviral Pathak
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering Lives Through Mindset, Habits & Innovation
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="#contact">
              Contact me here
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Media Kit
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild variant="ghost" size="icon" className="rounded-full h-12 w-12">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full h-12 w-12">
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full h-12 w-12">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BookOpen className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="scroll-indicator" />
    </section>
  )
}
