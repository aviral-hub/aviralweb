"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    name: "Content Creation",
    skills: [
      { name: "Book Writing", level: 90 },
      { name: "Podcasting", level: 85 },
      { name: "Public Speaking", level: 80 },
      { name: "Content Strategy", level: 85 },
      { name: "Storytelling", level: 90 },
      { name: "Digital Marketing", level: 75 },
    ],
  },
  {
    name: "Personal Development",
    skills: [
      { name: "Habit Formation", level: 95 },
      { name: "Mindset Coaching", level: 90 },
      { name: "Goal Setting", level: 85 },
      { name: "Time Management", level: 90 },
      { name: "Productivity Systems", level: 85 },
      { name: "Emotional Intelligence", level: 80 },
    ],
  },
  {
    name: "Entrepreneurship",
    skills: [
      { name: "Business Strategy", level: 85 },
      { name: "Brand Building", level: 80 },
      { name: "Leadership", level: 85 },
      { name: "Marketing", level: 75 },
      { name: "Community Building", level: 90 },
      { name: "Youth Mentoring", level: 95 },
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" ref={ref} className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2 variants={itemVariants} className="section-heading">
          My <span className="gradient-text">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={containerVariants} className="space-y-6">
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center mb-6">
                {category.name}
              </motion.h3>

              {category.skills.map((skill, skillIndex) => (
                <motion.div key={skillIndex} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
