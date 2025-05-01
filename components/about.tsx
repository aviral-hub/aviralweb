"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Brain, Lightbulb } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" ref={ref} className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2 variants={itemVariants} className="section-heading">
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">Hi, I&apos;m Aviral Pathak 👋</p>
          <p className="mt-4">
            I started my journey as a self-help author and entrepreneur at just 15. What began as a personal search for
            clarity and direction evolved into a mission to guide others toward purpose, productivity, and progress.
            Today, I share practical tools, powerful mindsets, and real stories through books, podcasts, and platforms
            that inspire.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mindset Rewiring</h3>
                  <p className="text-muted-foreground">
                    Helping individuals develop a growth mindset that empowers them to overcome challenges and achieve
                    their goals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Productivity Without Burnout</h3>
                  <p className="text-muted-foreground">
                    Teaching sustainable productivity strategies that help you achieve more without sacrificing your
                    wellbeing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Youth Entrepreneurship</h3>
                  <p className="text-muted-foreground">
                    Guiding young entrepreneurs with practical advice and strategies to turn their ideas into successful
                    ventures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
