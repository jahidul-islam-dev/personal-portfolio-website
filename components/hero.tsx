'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ChevronDown, GitBranch, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Discord logo SVG (lucide-react does not include a Discord brand icon)
function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  )
}

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-8 pb-16">
      {/* Subtle background orbs (non-blocking) */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: 'rgba(6, 182, 212, 0.08)' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Photo with Floating Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center order-last lg:order-first"
          >
            {/* Premium Rounded-Square Profile Portrait */}
            <div className="relative w-72 h-[22rem] mx-auto">
              {/* Soft radial light behind portrait */}
              <motion.div
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-8 rounded-full blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.35) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)',
                }}
              />

              {/* Gradient Border Container */}
              <motion.div 
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative w-full h-full rounded-[1.75rem] p-[1.5px] overflow-hidden"
                style={{
                  background: 'linear-gradient(140deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.5) 45%, rgba(139, 92, 246, 0.8) 100%)',
                  boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.35), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                {/* Inner Content */}
                <div className="w-full h-full rounded-[1.65rem] overflow-hidden bg-background relative">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Jahidul Islam"
                    fill
                    quality={100}
                    sizes="288px"
                    className="object-cover"
                    priority
                  />
                  {/* Soft top light sheen */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 80%, rgba(9,9,11,0.4) 100%)' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Name below the profile image */}
            <motion.h2
              variants={itemVariants}
              className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              JAHIDUL ISLAM
            </motion.h2>

            {/* Discord button below the name */}
            <motion.a
              href="https://discord.com/users/jahidulislam_2"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord: jahidulislam_2"
              aria-label="Discord: jahidulislam_2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all"
              style={{
                backgroundColor: '#5865F2',
                boxShadow: '0 8px 24px rgba(88, 101, 242, 0.35)',
              }}
            >
              <DiscordIcon size={18} />
              Discord
            </motion.a>
          </motion.div>

          {/* Right Content */}
          <motion.div className="space-y-8 order-first lg:order-last">
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl sm:text-7xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                <motion.span
                  className="inline-block gradient-text"
                  animate={{ backgroundPosition: ['0% center', '100% center'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  Building
                </motion.span>
                <br />
                <span className="text-foreground">
                  the Future
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-text-secondary leading-relaxed max-w-2xl font-light"
            >
              Python enthusiast exploring DevOps, open-source contribution, and cloud technologies. Currently learning Docker, Kubernetes, and system design while building meaningful projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary/15 border border-primary/40 rounded-full text-sm text-primary font-semibold backdrop-blur-sm hover:border-primary/60 transition-colors"
              >
                🐍 Python Enthusiast
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-accent/15 border border-accent/40 rounded-full text-sm text-accent font-semibold backdrop-blur-sm hover:border-accent/60 transition-colors"
              >
                ⚙️ DevOps Learner
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-secondary/15 border border-secondary/40 rounded-full text-sm text-secondary font-semibold backdrop-blur-sm hover:border-secondary/60 transition-colors"
              >
                🌱 Open Source Explorer
              </motion.span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-base px-8 py-6 rounded-full font-semibold text-white button-gradient"
                >
                  View My Work <ArrowRight size={20} />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-base px-8 py-6 rounded-full font-semibold glass premium-border text-foreground hover:border-primary/50"
                >
                  Let&apos;s Connect
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8"
            >
              <a
                href="https://github.com/jahidul-islam-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
              >
                <GitBranch size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/coderjahidmec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
              >
                <Zap size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-primary/50" size={28} />
      </motion.div>
    </section>
  )
}