'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      title: 'Comfortable With',
      description: 'Technologies I work with confidently',
      skills: ['Python', 'C', 'Git', 'GitHub', 'Linux (Ubuntu)'],
      accentColor: '#3B82F6',
      accentRgba: 'rgba(59, 130, 246, ',
    },
    {
      title: 'Currently Learning',
      description: 'Building expertise in these areas',
      skills: ['Docker', 'DevOps', 'FastAPI', 'CI/CD', 'Kubernetes', 'Cloud Fundamentals'],
      accentColor: '#06B6D4',
      accentRgba: 'rgba(6, 182, 212, ',
    },
    {
      title: 'Academic Exposure',
      description: 'Technologies from coursework and projects',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      accentColor: '#8B5CF6',
      accentRgba: 'rgba(139, 92, 246, ',
    },
  ]

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Organized by proficiency level and learning journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.1 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-1.5 h-8 rounded-full"
                    style={{ backgroundColor: category.accentColor }}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                    whileHover={{ scale: 1.04 }}
                    className="group"
                  >
                    <div
                      className="px-4 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300 cursor-default"
                      style={{
                        backgroundColor: `${category.accentRgba}0.05)`,
                        borderColor: `${category.accentRgba}0.3)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${category.accentRgba}0.15)`;
                        e.currentTarget.style.borderColor = `${category.accentRgba}0.6)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${category.accentRgba}0.05)`;
                        e.currentTarget.style.borderColor = `${category.accentRgba}0.3)`;
                      }}
                    >
                      <p className="text-sm font-medium text-foreground">
                        {skill}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
