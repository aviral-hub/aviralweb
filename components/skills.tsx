"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    name: "Technical Skills",
    skills: [
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 75 },
      { name: "HTML/CSS", level: 80 },
      { name: "React", level: 70 },
      { name: "Git", level: 75 },
    ],
  },
  {
    name: "Leadership & Marketing",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Social Media Marketing", level: 85 },
      { name: "Event Management", level: 85 },
      { name: "Campaign Strategy", level: 80 },
      { name: "Community Building", level: 90 },
      { name: "Project Management", level: 85 },
    ],
  },
  {
    name: "Communication & Soft Skills",
    skills: [
      { name: "Public Speaking", level: 90 },
      { name: "Written Communication", level: 95 },
      { name: "Goal-oriented Mindset", level: 90 },
      { name: "Multitasking", level: 85 },
      { name: "Organization", level: 85 },
      { name: "Student Mentoring", level: 80 },
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
          My <span className="gradient-text">Skills</span>
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
