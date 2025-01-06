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
            className="text-4xl font-heading font-bold text-center mb-4"
            style={{ color: '#76356D' }}
          >
            Get in Touch
          </h2>
          <p 
            className="text-xl font-medium text-center mb-12"
            style={{ color: '#76356D' }}
          >
            Have questions about GoFlirt AI? We'd love to hear from you.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label 
                  className="block mb-2 text-lg font-semibold"
                  style={{ color: '#76356D' }}
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon 
                      className="h-6 w-6"
                      style={{ color: '#76356D' }}
                    />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-4 py-4 text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76356D] focus:border-transparent transition-all duration-200"
                    style={{ color: '#76356D' }}
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block mb-2 text-lg font-semibold"
                  style={{ color: '#76356D' }}
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon 
                      className="h-6 w-6"
                      style={{ color: '#76356D' }}
                    />
                  </div>
                  <input
                    type="email"
                    className="block w-full pl-12 pr-4 py-4 text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76356D] focus:border-transparent transition-all duration-200"
                    style={{ color: '#76356D' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block mb-2 text-lg font-semibold"
                  style={{ color: '#76356D' }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  className="block w-full px-4 py-4 text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76356D] focus:border-transparent transition-all duration-200"
                  style={{ color: '#76356D' }}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 rounded-lg text-white text-lg font-bold flex items-center justify-center space-x-3 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to right, #76356D, #a14d99)'
                }}
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="h-6 w-6" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 