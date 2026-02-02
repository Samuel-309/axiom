import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Guides', 'Community'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Compliance'],
  }

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-2xl font-display font-black mb-4">axiom</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Modern infrastructure for ambitious teams.
            </p>
          </motion.div>

          {/* Links Grid */}
          {Object.entries(footerLinks).map((column, i) => (
            <motion.div
              key={column[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.05 }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                {column[0]}
              </h4>
              <ul className="space-y-3">
                {column[1].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-white/60 text-sm">
            © {currentYear} Axiom. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}