'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, Link, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@example.com',
      color: 'hover:text-red-400',
    },
    {
      name: 'GitHub',
      icon: GitBranch,
      href: 'https://github.com/jahidul-islam-dev',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Link,
      href: 'https://www.linkedin.com/in/coderjahidmec/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Message',
      icon: MessageCircle,
      href: '#',
      color: 'hover:text-cyan-400',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center gap-3 group"
                    >
                      <Icon className={`w-8 h-8 text-text-secondary ${link.color} transition-colors`} />
                      <span className="text-sm font-medium text-text-secondary group-hover:text-foreground transition-colors">
                        {link.name}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 glass rounded-lg p-6 border border-primary/30 bg-primary/5"
            >
              <p className="text-sm text-text-secondary mb-2">Location</p>
              <p className="text-foreground font-semibold">Mymensingh Division, Bangladesh</p>
              <p className="text-text-secondary text-sm mt-4">
                Open to remote opportunities and collaborations worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
