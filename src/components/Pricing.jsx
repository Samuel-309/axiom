import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      'Up to 10,000 requests/month',
      'Basic analytics',
      'Standard support',
      '2 team members',
      'API access',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing teams',
    features: [
      'Unlimited requests',
      'Advanced analytics',
      'Priority support',
      'Unlimited team members',
      'API + Webhooks',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom contracts',
      'On-premise deployment',
      'Advanced security',
      'Custom SLA',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

function PricingCard({ plan, index }) {
  return (
    <motion.div
      className={`relative rounded-2xl border transition-all duration-300 ${
        plan.featured
          ? 'border-teal/30 bg-gradient-to-br from-teal/5 via-white to-white shadow-2xl lg:scale-105'
          : 'border-slate-light bg-white shadow-sm hover:shadow-md'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {plan.featured && (
        <motion.div
          className="absolute -top-4 left-6 inline-block"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        >
          <div className="px-3 py-1 rounded-full bg-teal text-white text-xs font-semibold">
            Most Popular
          </div>
        </motion.div>
      )}

      <div className="p-8 lg:p-10">
        <h3 className="text-2xl font-display font-black text-charcoal mb-2">
          {plan.name}
        </h3>
        <p className="text-charcoal/60 text-sm mb-6">{plan.description}</p>

        {/* Price */}
        <div className="mb-8">
          <span className="text-5xl font-display font-black text-charcoal">
            {plan.price}
          </span>
          <span className="text-charcoal/60 text-sm ml-2">{plan.period}</span>
        </div>

        {/* CTA */}
        <motion.button
          className={`w-full py-3.5 rounded-lg font-medium text-base transition-colors mb-8 ${
            plan.featured
              ? 'bg-charcoal text-white hover:bg-charcoal/90'
              : 'border-2 border-charcoal text-charcoal hover:bg-slate-light'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {plan.cta}
        </motion.button>

        {/* Features List */}
        <div className="space-y-4">
          {plan.features.map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            >
              <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <span className="text-charcoal/80 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-slate-light relative">
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-teal/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black text-charcoal mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}