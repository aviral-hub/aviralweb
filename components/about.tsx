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
            Currently pursuing B.Tech in Information Technology at GH Raisoni College of Engineering, Nagpur. I'm a
            published author with two books, a marketing leader, and passionate about helping students develop essential
            life skills. I combine technical knowledge with leadership experience to create meaningful impact in
            academic and professional communities.
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
                  <h3 className="text-xl font-semibold mb-2">Technical Development</h3>
                  <p className="text-muted-foreground">
                    Building expertise in programming languages like C++, Java, and web technologies, with hands-on
                    project experience in data analysis tools.
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
                  <h3 className="text-xl font-semibold mb-2">Leadership & Marketing</h3>
                  <p className="text-muted-foreground">
                    Experienced in leading teams, managing social media campaigns, and organizing technical events that
                    drive student engagement.
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
                  <h3 className="text-xl font-semibold mb-2">Author & Speaker</h3>
                  <p className="text-muted-foreground">
                    Published author of two books focusing on life skills and attention management, with experience in
                    public speaking and workshops.
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
