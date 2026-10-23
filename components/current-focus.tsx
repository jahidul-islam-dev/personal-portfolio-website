'use client'

import { motion } from 'framer-motion'
import { Code2, Terminal, GitBranch, Box, Cloud, Users } from 'lucide-react'

export function CurrentFocus() {
  const focusAreas = [
    {
      icon: Code2,
      title: 'Python',
      description: 'Building backend applications and automation scripts',
      gradient: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
    },
    {
      icon: Terminal,
      title: 'Linux',
      description: 'Command-line proficiency and system administration',
      gradient: 'linear-gradient(135deg, #F97316, #DC2626)',
    },
    {
      icon: GitBranch,
      title: 'Git & GitHub',
      description: 'Version control and collaborative development',
      gradient: 'linear-gradient(135deg, #4B5563, #2D3748)',
    },
    {
      icon: Box,
      title: 'Docker',
      description: 'Containerization and deployment fundamentals',
      gradient: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'CI/CD pipelines and cloud fundamentals',
      gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
    },
    {
      icon: Users,
      title: 'Open Source',
      description: 'Contributing to community-driven projects',
      gradient: 'linear-gradient(135deg, #22C55E, #059669)',
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="current-focus" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--section-alt-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Current Focus</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            The areas I&apos;m actively learning and working on right now
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {focusAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: area.gradient }}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
