import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal/5 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Headline */}
          <h1 className="text-6xl lg:text-7xl font-display font-black text-charcoal leading-tight text-justify-display">
            Build faster. Ship smarter. Scale infinitely.
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-lg text-charcoal/60 max-w-2xl font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The modern platform designed for ambitious teams. Axiom simplifies complex workflows, accelerates deployment, and gives you the infrastructure to scale without limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="bg-charcoal text-white px-8 py-3.5 rounded-lg font-medium text-base hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2 group">
              Start Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-charcoal text-charcoal px-8 py-3.5 rounded-lg font-medium text-base hover:bg-slate-light transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="mt-24 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-light bg-gradient-to-br from-slate-light via-white to-teal/5">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal/10 border border-teal/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-teal-dark" />
                </div>
                <p className="text-charcoal/60 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}