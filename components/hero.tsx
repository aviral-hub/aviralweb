"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, BookOpen, Github, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  const posts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7242195748442890241",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7239756491651293185",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7240565282130294784",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextPost = () => setIndex((prev) => (prev + 1) % posts.length);
  const prevPost = () => setIndex((prev) => (prev - 1 + posts.length) % posts.length);

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative pt-16 bg-gradient-to-b from-blue-50 via-white to-blue-100"
      >
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
            B.Tech IT Student | Author | Marketing Lead | Public Speaker
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="https://wa.link/badqmp">
                Contact me here
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://drive.google.com/file/d/1MAIlzisLvbjspovFFVuC9mCfj5q-Ga0K/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aviralpathak/",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/aviral-hub",
                label: "GitHub",
              },
              {
                icon: BookOpen,
                href: "https://aviralpathak1.medium.com",
                label: "Medium",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/aviral_pathak_/",
                label: "Instagram",
              },
            ].map((social, idx) => (
              <Button
                asChild
                variant="ghost"
                size="icon"
                key={idx}
                className="rounded-full h-12 w-12 hover:bg-blue-50 transition-colors duration-300"
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="scroll-indicator" />
      </section>

      {/* ---------- LINKEDIN POST VIEWER (Minimal & Centered) ---------- */}
      <section id="linkedin" className="py-20 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-10 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Recent LinkedIn Posts
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button variant="ghost" size="icon" onClick={prevPost}>
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="w-[350px] md:w-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              key={index}
              src={posts[index]}
              height="500"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title={`LinkedIn Post ${index + 1}`}
            ></iframe>
          </div>

          <Button variant="ghost" size="icon" onClick={nextPost}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </section>
    </>
  );
}
