"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Author & Podcast Host",
    company: "Self-Help Publishing",
    location: "Mumbai, India",
    period: "Jan 2022 - Present",
    description:
      "Publishing books on personal development and hosting a weekly podcast featuring conversations with thought leaders and experts in the field of mindset and personal growth.",
    skills: ["Book Writing", "Podcasting", "Public Speaking", "Content Creation"],
  },
  {
    title: "Youth Entrepreneurship Mentor",
    company: "Young Founders Initiative",
    location: "Delhi, India",
    period: "Mar 2020 - Dec 2021",
    description:
      "Mentored young entrepreneurs aged 15-25 in launching their first businesses. Conducted workshops on mindset, productivity, and business fundamentals.",
    skills: ["Mentoring", "Workshop Facilitation", "Business Strategy", "Leadership"],
  },
  {
    title: "Self-Help Author",
    company: "Independent Publishing",
    location: "Bangalore, India",
    period: "Jun 2018 - Feb 2020",
    description:
      "Published my first book on habit formation and personal growth at age 15. Developed content strategy and marketing plan for book launch.",
    skills: ["Writing", "Self-Publishing", "Marketing", "Personal Development"],
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref} className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2 variants={itemVariants} className="section-heading">
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <motion.div variants={containerVariants} className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="text-lg font-medium">{exp.company}</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {exp.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
