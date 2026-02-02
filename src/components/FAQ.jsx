import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started with Axiom?',
    answer: 'Getting started is simple. Sign up for a free trial on our website, follow the onboarding wizard, and you\'ll be deploying your first application in minutes. We provide comprehensive documentation and 24/7 support.',
  },
  {
    question: 'What happens to my data if I cancel my subscription?',
    answer: 'We provide a 30-day grace period to download all your data. After that, your data will be securely deleted from our servers. You have complete control over your information at all times.',
  },
  {
    question: 'Can I integrate Axiom with my existing tools?',
    answer: 'Yes! Axiom integrates with popular tools like GitHub, GitLab, Slack, Datadog, and many others. We also provide a comprehensive REST API for custom integrations.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support. Professional and Enterprise plans get priority support and phone access. Enterprise customers receive a dedicated account manager available 24/7.',
  },
  {
    question: 'Is there a self-hosted option available?',
    answer: 'Yes, our Enterprise plan includes on-premise deployment options. Contact our sales team to discuss your specific infrastructure requirements.',
  },
  {
    question: 'How does Axiom handle security and compliance?',
    answer: 'We maintain SOC 2 Type II certification, GDPR compliance, and HIPAA eligibility. All data is encrypted in transit and at rest using industry-standard protocols.',
  },
]

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-slate-light last:border-b-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between hover:bg-slate-light/50 transition-colors px-6 -mx-6"
        whileHover={{ paddingLeft: '1.75rem', paddingRight: '1.75rem' }}
      >
        <h3 className="text-lg font-display font-black text-charcoal text-left">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 mt-0.5"
        >
          <ChevronDown size={24} className="text-teal" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden px-6"
      >
        <motion.p
          className="text-charcoal/70 pb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {faq.answer}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 lg:px-8 bg-slate-light relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-teal/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black text-charcoal mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-charcoal/60">
            Everything you need to know about Axiom.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="rounded-2xl border border-slate-light bg-white overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-charcoal/60 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-block text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}