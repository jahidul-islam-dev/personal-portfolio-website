'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, BookOpen } from 'lucide-react'

export function Experience() {
  const learningJourney = [
    {
      phase: 'Getting Started',
      timeline: '2021-2022',
      milestones: ['Discovered programming', 'Learned Python basics', 'Built first projects'],
      status: 'completed',
    },
    {
      phase: 'Building Foundations',
      timeline: '2022-2023',
      milestones: ['Data structures & algorithms', 'Backend development', 'Database concepts'],
      status: 'completed',
    },
    {
      phase: 'Exploring DevOps',
      timeline: '2023-2024',
      milestones: ['Docker fundamentals', 'Linux deep dive', 'Git mastery', 'CI/CD basics'],
      status: 'in-progress',
    },
    {
      phase: 'Open Source & Cloud',
      timeline: '2024-2025',
      milestones: ['Active OSS contributions', 'Cloud fundamentals', 'System design thinking'],
      status: 'in-progress',
    },
    {
      phase: 'Advanced Specialization',
      timeline: '2025+',
      milestones: ['Kubernetes mastery', 'VLSI Physical Design', 'Leadership in projects'],
      status: 'upcoming',
    },
  ]

  const currentFocusItems = [
    { label: 'Deep dive into Docker', progress: 70 },
    { label: 'Contributing to open source', progress: 50 },
    { label: 'AWS cloud fundamentals', progress: 40 },
    { label: 'System design principles', progress: 45 },
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
    <section id="learning-journey" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            My path from starting out to becoming a skilled developer and open-source contributor
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Timeline</h3>
            <div className="space-y-6">
              {learningJourney.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full glow" style={{
                      backgroundColor: phase.status === 'completed' ? '#22C55E' : 
                                     phase.status === 'in-progress' ? '#3B82F6' : 
                                     '#A1A1A1'
                    }} />
                    {index < learningJourney.length - 1 && (
                      <div className="w-1 h-24 mt-2" style={{
                        backgroundImage: phase.status === 'completed' ? 'linear-gradient(to bottom, #22C55E, #3B82F6)' :
                                       phase.status === 'in-progress' ? 'linear-gradient(to bottom, #3B82F6, rgba(161, 161, 161, 0.3))' :
                                       'rgba(161, 161, 161, 0.2)'
                      }} />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {phase.phase}
                      </h4>
                      {phase.status === 'completed' && (
                        <CheckCircle2 size={18} className="text-green-500" />
                      )}
                      {phase.status === 'in-progress' && (
                        <Zap size={18} className="text-primary" />
                      )}
                      {phase.status === 'upcoming' && (
                        <BookOpen size={18} className="text-text-secondary" />
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mb-3">
                      {phase.timeline}
                    </p>
                    <ul className="space-y-1">
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Current Progress</h3>
            <div className="space-y-6">
              {currentFocusItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-sm text-primary font-semibold">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 glass rounded-lg border border-primary/30 bg-primary/5"
            >
              <p className="text-primary font-semibold text-sm mb-2">🎯 Vision</p>
              <p className="text-foreground font-medium text-sm leading-relaxed">
                Become a skilled full-stack developer with expertise in DevOps, open-source contributions, and a secondary focus on VLSI Physical Design. I want to build tools that empower other developers and contribute meaningfully to the tech community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
