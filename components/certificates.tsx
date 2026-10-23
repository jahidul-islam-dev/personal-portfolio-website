'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles } from 'lucide-react'

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learning milestones and achievements I&apos;ll add here as I complete more courses and challenges.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="glass rounded-2xl border border-white/10 p-8 md:p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Coming Soon
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            This section is ready for your future certificates, courses, badges, and technical achievements.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            Add your certificates later here
          </div>
        </motion.div>
      </div>
    </section>
  )
}
