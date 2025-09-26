"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Code, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Practical Life Skills for Students",
    description:
      "A comprehensive book emphasizing the importance of developing essential life skills beyond academics to help students thrive in real-world situations.",
    image: "/book-cover-practical-life-skills.jpg",
    tags: ["Self-Help", "Life Skills", "Student Development"],
    liveUrl: "https://notionpress.com/in/read/practical-life-skills-for-students",
    type: "book",
    date: "May 2024",
  },
  {
    title: "Why Can't You Pay Attention",
    description:
      "An exploration of attention challenges in the digital age with practical strategies to overcome mental restlessness and improve focus.",
    image: "/book-cover-attention-focus.jpg",
    tags: ["Psychology", "Focus", "Digital Wellness"],
    liveUrl: "https://amzn.in/d/gXbGg7a",
    type: "book",
    date: "January 2022",
  },
  {
    title: "Data Quality Analysis Tool",
    description:
      "A React-based tool for analyzing datasets and identifying data quality issues with intuitive interface for data upload and analysis.",
    image: "/data-analysis-dashboard.png",
    tags: ["React", "Data Analysis", "Web Development"],
    liveUrl: "https://datavtool.vercel.app/",
    githubUrl: "https://github.com/aviral-hub/datavtool",
    type: "project",
    date: "2025",
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref} className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2 variants={itemVariants} className="section-heading">
          My <span className="gradient-text">Work</span>
        </motion.h2>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105 leading-7 border-border"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {project.type === "book" ? (
                        <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                      ) : (
                        <Code className="h-4 w-4 mr-2 text-orange-500" />
                      )}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.githubUrl && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm" className={project.githubUrl ? "" : "w-full"}>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="h-4 w-4 mr-2" />
                      {project.type === "book" ? "Learn More" : "View Project"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="https://github.com/aviral-hub" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
