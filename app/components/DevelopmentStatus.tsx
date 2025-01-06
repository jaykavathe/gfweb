'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  ClockIcon, 
  CogIcon,
  RocketLaunchIcon,
  SparklesIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

const developmentStatus = {
  completedFeatures: [
    "AI Chat Engine Integration",
    "User Profile System",
    "Smart Response Generation",
    "Privacy Controls",
  ],
  inProgress: [
    "Advanced Matching Algorithm",
    "Real-time Chat Features",
    "Profile Customization",
  ],
  upcomingFeatures: [
    "Voice Message Support",
    "Multi-language Support",
    "Advanced Analytics",
  ],
  launchDetails: {
    date: "Q2 2024",
    platform: "iOS & Android",
    status: "Beta Testing Phase"
  }
}

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export default function DevelopmentStatus() {
  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-heading font-extrabold text-center mb-16"
          style={{ color: '#76356D' }}
        >
          Development Status
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Status Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 
                className="text-2xl font-heading font-bold"
                style={{ color: '#76356D' }}
              >
                Launch Details
              </h3>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
              >
                <RocketLaunchIcon 
                  className="w-8 h-8"
                  style={{ color: '#76356D' }}
                />
              </motion.div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-bold">{developmentStatus.launchDetails.date}</span>
              </div>
              <div className="flex items-center space-x-3">
                <DevicePhoneMobileIcon className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-bold">{developmentStatus.launchDetails.platform}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CogIcon className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-bold">{developmentStatus.launchDetails.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 
                className="text-2xl font-heading font-bold"
                style={{ color: '#76356D' }}
              >
                Feature Progress
              </h3>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
              >
                <SparklesIcon 
                  className="w-8 h-8"
                  style={{ color: '#76356D' }}
                />
              </motion.div>
            </div>

            <div className="space-y-8">
              {/* Completed Features */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  Completed
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {developmentStatus.completedFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-[#76356D]"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* In Progress Features */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <CogIcon className="w-5 h-5 mr-2 text-blue-500 animate-spin" />
                  In Progress
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {developmentStatus.inProgress.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-[#76356D]"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Upcoming Features */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2 text-orange-500" />
                  Upcoming
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {developmentStatus.upcomingFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-[#76356D]"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 