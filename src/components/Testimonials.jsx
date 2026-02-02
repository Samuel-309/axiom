import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Axiom transformed how we deploy applications. We went from hours of manual configuration to minutes.',
    author: 'Sarah Chen',
    role: 'VP Engineering, TechCorp',
  },
  {
    quote: 'The reliability and speed are unmatched. Our infrastructure costs dropped by 40% in the first month.',
    author: 'Marcus Johnson',
    role: 'Founder & CTO, DataFlow',
  },
  {
    quote: 'Supporting our 10x growth was seamless. Axiom scaled with us without any performance degradation.',
    author: 'Emma Rodriguez',
    role: 'CTO, CloudScale Inc',
  },
  {
    quote: 'Best platform decision we made. The team adoption rate was instant because of the intuitive design.',
    author: 'Alex Patel',
    role: 'Head of DevOps, FinanceHub',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-white relative">
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-r from-teal/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black text-charcoal mb-6">
            Loved by teams worldwide
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-light to-white border border-slate-light">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="p-12 lg:p-16"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Mark */}
                <div className="text-4xl text-teal/20 mb-6 font-display">
                  "
                </div>

                {/* Quote */}
                <p className="text-2xl lg:text-3xl font-display font-black text-charcoal leading-tight mb-8">
                  {testimonials[current].quote}
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-charcoal">
                    {testimonials[current].author}
                  </p>
                  <p className="text-charcoal/60 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-charcoal w-8' : 'bg-charcoal/20'
                  }`}
                  onClick={() => setCurrent(i)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-lg border border-slate-light hover:border-charcoal hover:bg-slate-light transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-lg border border-slate-light hover:border-charcoal hover:bg-slate-light transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}