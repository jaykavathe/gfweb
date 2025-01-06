'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChatBubbleBottomCenterTextIcon, 
  HeartIcon, 
  SparklesIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    id: 1,
    title: "Freedom to be what you are",
    description: "Be authentic and true to yourself while flirting",
    icon: ChatBubbleBottomCenterTextIcon,
    content: {
      title: "Express Your True Self",
      description: "Our AI adapts to your personality and style, helping you express yourself authentically without pretense or forced behavior.",
      benefits: [
        "Personality-driven suggestions",
        "Natural conversation flow",
        "Style matching",
        "Authentic expressions"
      ],
      mockupImage: "/mockups/authentic-chat.png"
    }
  },
  {
    id: 2,
    title: "Freedom to flirt with who you want",
    description: "Connect with anyone, anytime, confidently",
    icon: HeartIcon,
    content: {
      title: "Confident Connections",
      description: "Get the confidence to approach and engage with anyone you're interested in, with smart suggestions tailored to different situations.",
      benefits: [
        "Situation-aware tips",
        "Confidence boosting",
        "Ice breakers",
        "Dynamic responses"
      ],
      mockupImage: "/mockups/flirt-chat.png"
    }
  },
  {
    id: 3,
    title: "Freedom to be who you want",
    description: "Explore and develop your flirting style",
    icon: SparklesIcon,
    content: {
      title: "Develop Your Style",
      description: "Whether you're shy, bold, or somewhere in between, develop and refine your unique flirting style with personalized guidance.",
      benefits: [
        "Style development",
        "Personality growth",
        "Adaptive learning",
        "Skill enhancement"
      ],
      mockupImage: "/mockups/develop-style.png"
    }
  },
  {
    id: 4,
    title: "Freedom to have a friend on your side",
    description: "Your AI wingman, always there to help",
    icon: ShieldCheckIcon,
    content: {
      title: "Your Trusted Companion",
      description: "Have a supportive friend by your side 24/7, ready to help you navigate any social situation with confidence and charm.",
      benefits: [
        "24/7 availability",
        "Supportive guidance",
        "Real-time advice",
        "Judgment-free zone"
      ],
      mockupImage: "/mockups/trusted-companion.png"
    }
  }
]

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0]>(features[0])

  if (!selectedFeature) return null

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-heading font-bold text-center mb-12"
          style={{ color: '#76356D' }}
        >
          Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`cursor-pointer p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                selectedFeature?.id === feature.id 
                  ? 'bg-white shadow-lg border-2' 
                  : 'hover:shadow-md'
              }`}
              style={{ 
                backgroundColor: selectedFeature?.id === feature.id ? 'white' : 'rgba(118, 53, 109, 0.05)',
                borderColor: selectedFeature?.id === feature.id ? '#76356D' : 'transparent'
              }}
            >
              {feature.icon && (
                <feature.icon 
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: '#76356D' }}
                />
              )}
              <h3 
                className="text-xl font-heading font-bold text-center mb-2"
                style={{ color: '#76356D' }}
              >
                {feature.title}
              </h3>
              <p className="text-center text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <AnimatePresence mode='wait'>
          {selectedFeature && (
            <motion.div
              key={selectedFeature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 mt-8"
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 
                      className="text-3xl font-heading font-bold mb-4"
                      style={{ color: '#76356D' }}
                    >
                      {selectedFeature.content.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {selectedFeature.content.description}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedFeature.content.benefits.map((benefit, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <SparklesIcon 
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: '#76356D' }}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-[600px] w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-[280px] h-[580px]">
                        {/* Phone outer frame */}
                        <div 
                          className="absolute inset-0 rounded-[3.5rem] shadow-xl"
                          style={{
                            background: 'linear-gradient(145deg, #8d4483 0%, #76356D 100%)',
                            boxShadow: '0 25px 50px -12px rgba(118, 53, 109, 0.25)'
                          }}
                        />
                        
                        {/* Inner frame */}
                        <div 
                          className="absolute inset-[3px] rounded-[3.4rem] bg-black"
                        />

                        {/* Screen */}
                        <div className="absolute inset-[6px] rounded-[3.3rem] bg-white" />

                        {/* Dynamic Island */}
                        <div 
                          className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[95px] h-[25px] bg-black rounded-full z-10"
                        />

                        {/* Side buttons */}
                        <div className="absolute -left-[2px] top-[100px] w-[4px] h-[65px] bg-[#684662] rounded-l-lg" />
                        <div className="absolute -left-[2px] top-[180px] w-[4px] h-[65px] bg-[#684662] rounded-l-lg" />
                        <div className="absolute -right-[2px] top-[120px] w-[4px] h-[90px] bg-[#684662] rounded-r-lg" />

                        {/* Reflections */}
                        <div 
                          className="absolute inset-0 rounded-[3.5rem] opacity-30"
                          style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, transparent 40%)'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 