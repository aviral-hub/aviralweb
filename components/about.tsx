"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Rocket, Mic } from "lucide-react"

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
            Entrepreneur, 2x published author, keynote speaker, and MBA candidate at Datta Meghe Institute of
            Management Studies (DMIMS), Nagpur. As Founder &amp; CEO of OpenBox Organization (OPENBOX) and Unlitify, I
            build AI-powered financial intelligence workflows, scalable web products, and student career ecosystems
            through Unlite Education—bridging technical execution with strategic business leadership.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <Card className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Automation &amp; Product</h3>
                  <p className="text-muted-foreground">
                    Architecting business financial intelligence pipelines in n8n, full-stack web apps with React and
                    Supabase, and award-winning automation systems.
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
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ventures &amp; Growth Strategy</h3>
                  <p className="text-muted-foreground">
                    Leading digital growth, SEO, and WhatsApp automation at Unlitify while empowering students across
                    Nagpur with career clarity via Unlite Education.
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
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Author, Speaker &amp; Podcaster</h3>
                  <p className="text-muted-foreground">
                    Author of two books on focus and life skills, host of <em>Great Ideas Great Life</em>, and keynote
                    speaker across 50+ events reaching 10,000+ community members.
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
