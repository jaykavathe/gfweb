'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #76356D, #a14d99, #c766c7)' }}>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          />
        ))}
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
        <motion.h1
          className="text-7xl md:text-8xl font-heading font-black mb-8 tracking-wider text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          GoFlirt AI
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-12 tracking-wide font-semibold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revolutionize Your Flirting Game
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 tracking-wide"
            style={{ color: '#76356D' }}
          >
            Get Started
          </button>
          <button 
            className="border-2 border-white text-white text-lg font-bold py-4 px-10 rounded-full hover:bg-white hover:text-[#76356D] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 tracking-wide"
          >
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

