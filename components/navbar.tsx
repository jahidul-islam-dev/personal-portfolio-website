'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Share2, FileText, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true

    const stored = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return stored ? stored === 'dark' : prefersDark
  })
  const { scrollY } = useScroll()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 100) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#learning-journey', id: 'learning-journey' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: isHidden ? -120 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="w-full max-w-4xl">
          <div 
            className="py-3 px-6 flex justify-between items-center rounded-full border backdrop-blur-md transition-all"
            style={{
              backgroundColor: 'var(--glass-bg-08)',
              borderColor: 'var(--glass-border)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Left: Profile (circular photo only) */}
            <motion.a
              href="#hero"
              className="flex items-center flex-shrink-0"
              onClick={() => handleNavClick('hero')}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Jahidul Islam"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.a>

            {/* Center: Navigation */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-2.5 py-1.5 text-xs font-medium transition-colors text-text-secondary hover:text-foreground"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://www.linkedin.com/in/coderjahidmec/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg text-text-secondary hover:text-primary hover:bg-white/10 transition-all"
              >
                <Share2 size={16} />
              </a>

              <button
                onClick={toggleTheme}
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg text-text-secondary hover:text-primary hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <motion.a
                href="/Jahid_CV.pdf"
                download="Jahid_CV.pdf"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white font-medium text-xs transition-all"
                style={{ backgroundImage: 'linear-gradient(to right, #3B82F6, #8B5CF6)', boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={14} />
                Resume
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-8 h-8 flex items-center justify-center text-foreground hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-4 right-4 mt-3 rounded-2xl border backdrop-blur-md py-4 px-4 space-y-2 max-w-xs mx-auto"
              style={{
                backgroundColor: 'var(--glass-bg-08)',
                borderColor: 'var(--glass-border)',
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors text-text-secondary hover:text-foreground hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/coderjahidmec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-text-secondary hover:text-primary transition-colors"
                >
                  <Share2 size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  )
}