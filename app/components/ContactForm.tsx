'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, UserIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className="text-4xl font-heading font-bold text-center mb-8"
            style={{ color: '#76356D' }}
          >
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Have questions about GoFlirt AI? We'd love to hear from you.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76356D] focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76356D] focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76356D] focus:border-transparent transition-all duration-200"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 shadow-lg"
                style={{ 
                  background: 'linear-gradient(to right, #76356D, #a14d99)'
                }}
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 