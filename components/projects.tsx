'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Projects() {
  const projects = [
    {
      title: 'Cart Mates',
      description: 'University Group Buying Platform',
      tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'CPUVision',
      description: 'CPU Architecture Simulator',
      tech: ['SystemVerilog', 'Digital Design', 'Simulation'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Bus Media Project',
      description: 'Professional Bus Photography & Editing Portfolio',
      tech: ['Next.js', 'React', 'Image Processing'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Open Source Contributions',
      description: 'Active contributor to various open-source projects',
      tech: ['Python', 'JavaScript', 'DevOps'],
      github: 'https://github.com/jahidul-islam-dev',
      live: '#',
      featured: false,
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Real-world applications where I&apos;ve explored new technologies and solved meaningful problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group premium-card overflow-hidden flex flex-col h-full glow"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"
                />
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-3">
                    {project.featured ? '✨' : '🚀'}
                  </div>
                  <p className="text-text-secondary text-sm font-medium">
                    {project.featured ? 'Featured Project' : 'Project'}
                  </p>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-md text-xs text-primary font-semibold hover:bg-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 glass premium-border text-foreground font-medium rounded-lg h-7 px-2.5 text-[0.8rem]"
                    >
                      <GitBranch size={16} /> Code
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 button-gradient text-white font-medium rounded-lg h-7 px-2.5 text-[0.8rem]"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
