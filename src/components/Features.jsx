import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Gauge, GitBranch, Lock, Cloud } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-millisecond response times with global CDN infrastructure and edge computing.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, compliance certifications, and advanced threat detection.'
  },
  {
    icon: Gauge,
    title: 'Real-Time Analytics',
    description: 'Live dashboards and instant insights into your platform performance metrics.'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Track every change with built-in git integration and rollback capabilities.'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Fine-grained permissions and role-based access management for teams.'
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Ready',
    description: 'Deploy anywhere—AWS, GCP, Azure, or on-premise infrastructure.'
  },
]

function FeatureCard({ feature, index }) {
  const Icon = feature.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex-1">
        <motion.div
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal/10 to-teal/5 border border-teal/20 flex items-center justify-center mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8 text-teal" />
        </motion.div>
        <h3 className="text-2xl font-display font-black text-charcoal mb-3">
          {feature.title}
        </h3>
        <p className="text-charcoal/60 leading-relaxed">
          {feature.description}
        </p>
      </div>
      
      <div className="flex-1">
        <div className="aspect-square rounded-xl overflow-hidden border border-slate-light bg-gradient-to-br from-slate-light to-teal/3">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-slate-light/40 font-display text-sm">Feature</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-white relative">
      {/* Diagonal divider accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-light to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black text-charcoal mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl">
            Comprehensive tools and infrastructure built for modern teams.
          </p>
        </motion.div>

        {/* Features Grid - Asymmetric */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}