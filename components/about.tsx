'use client'

import { motion } from 'framer-motion'

export function About() {
  const interests = [
    'Backend Development',
    'Automation & DevOps',
    'Linux & Shell Scripting',
    'Open Source',
    'System Design',
    'Physical Design (Learning)',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Understanding my journey, values, and what drives my growth as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;m a Computer Science student actively learning and building in the Python and DevOps space. I started my coding journey with a passion for problem-solving and have been exploring backend development, automation, and infrastructure concepts along the way.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Recently, I&apos;ve been diving deeper into Docker, Linux, and cloud fundamentals. I&apos;m also interested in exploring VLSI Physical Design (PnR) as a secondary learning area. I contribute to open-source projects and enjoy learning from the community.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Beyond coding, I document my journey as a Google Maps Local Guide, and I&apos;m involved in the Mechatronics & Embedded System Lab at my university. I believe in learning by building and sharing what I discover along the way.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {interests.map((interest) => (
                <motion.div
                  key={interest}
                  variants={itemVariants}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-secondary text-sm">{interest}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="premium-card"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Learning?</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I&apos;m at an exciting stage where I can contribute to meaningful projects while continuously expanding my knowledge. Every project teaches me something new, and I&apos;m eager to grow as a developer.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="premium-card"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">What Drives Me</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I&apos;m motivated by building tools that solve real problems, contributing to projects bigger than myself, and learning from experienced developers in the open-source community.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="premium-card"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Next Steps</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I&apos;m actively working towards mastering DevOps fundamentals and making meaningful open-source contributions while exploring cloud technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
