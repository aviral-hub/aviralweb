"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Award } from "lucide-react"

const experiences = [
  {
    title: "Marketing Lead",
    company: "IEEE Computer Society - GHRCE",
    location: "Nagpur, Maharashtra",
    period: "Sep 2023 - Sep 2024",
    description:
      "Successfully established a vibrant community within the college to promote IEEE's mission. Spearheaded initiatives to raise awareness about IEEE activities, research opportunities, and technological advancements among students. Organized and promoted technical events and workshops.",
    skills: ["Community Building", "Event Management", "Marketing", "Leadership"],
  },
  {
    title: "Social Media & Campaigning In-charge",
    company: "BITS Forum (Department of Information Technology)",
    location: "Nagpur, Maharashtra",
    period: "Aug 2023 - May 2024",
    description:
      "Managed the BITS forum's social media presence across multiple platforms. Developed and executed innovative marketing strategies that significantly increased visibility and student engagement. Coordinated campaigns and promotions, driving high turnout and active participation in forum events.",
    skills: ["Social Media Marketing", "Campaign Management", "Content Strategy", "Analytics"],
  },
  {
    title: "Vice President",
    company: "Faith Forum (First Year Department)",
    location: "Nagpur, Maharashtra",
    period: "Nov 2022 - Aug 2023",
    description:
      "Led efforts to promote collaboration, growth, and innovation among peers. Directed meaningful projects and encouraged dynamic discussions. Facilitated integration of first-year students into college activities.",
    skills: ["Leadership", "Project Management", "Student Integration", "Team Building"],
  },
]

const achievements = [
  {
    title: "Speaker for Startup Spark",
    organization: "MBA Department Forum",
    date: "Nov 2023",
    description: "Delivered keynote presentation on entrepreneurship and innovation to MBA students.",
  },
  {
    title: "Event Lead, Education",
    organization: "ELEVATE 2.0, IEEE CS GHRCE",
    date: "Sep 2024",
    description: "Led educational initiatives and workshops for the annual technical symposium.",
  },
  {
    title: "Event Lead, Education",
    organization: "Techotsav, GHRCE",
    date: "Mar 2025",
    description: "Organizing educational events and technical competitions for the college fest.",
  },
]

const certifications = [
  {
    title: "Space Science and Technology Awareness Training (START)",
    issuer: "ISRO",
    description: "Comprehensive training program on space science and technology applications.",
  },
  {
    title: "SQL v/s NoSQL Course",
    issuer: "Scaler",
    description: "Advanced course covering database technologies and their practical applications.",
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
          Experience & <span className="gradient-text">Leadership</span>
        </motion.h2>

        <motion.div variants={containerVariants} className="max-w-4xl mx-auto space-y-8">
          {/* Leadership Experience */}
          <div className="space-y-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold">
              Leadership Roles
            </motion.h3>
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
          </div>

          {/* Achievements & Awards */}
          <div className="space-y-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold">
              Achievements & Awards
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.organization}</p>
                          <p className="text-sm">{achievement.description}</p>
                          <Badge variant="outline" className="mt-2">
                            {achievement.date}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold">
              Certifications
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                      <p className="text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
