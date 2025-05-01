"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Headphones } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Habits That Transform",
    description:
      "A comprehensive guide to building positive habits that lead to lasting personal and professional growth.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Self-Help", "Habits", "Personal Growth"],
    liveUrl: "#",
    type: "book",
  },
  {
    title: "Mindset Matters Podcast",
    description:
      "Weekly podcast featuring conversations with thought leaders, entrepreneurs, and experts on mindset and personal development.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Podcast", "Interviews", "Mindset"],
    liveUrl: "#",
    type: "podcast",
  },
  {
    title: "Youth Entrepreneur's Handbook",
    description: "A practical guide for young entrepreneurs looking to start and grow their first business.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Entrepreneurship", "Business", "Youth"],
    liveUrl: "#",
    type: "book",
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
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-2">
                    {project.type === "book" ? (
                      <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    ) : (
                      <Headphones className="h-4 w-4 mr-2 text-orange-500" />
                    )}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
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
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="h-4 w-4 mr-2" />
                      {project.type === "book" ? "Learn More" : "Listen Now"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <BookOpen className="h-4 w-4 mr-2" />
              View All Books & Resources
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
