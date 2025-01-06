'use client'

import { motion } from 'framer-motion'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { 
  LinkedInIcon, 
  TwitterIcon 
} from '@heroicons/react/24/outline'

const founders = [
  {
    name: "Founder Name",
    role: "CEO & Co-Founder",
    bio: "Your founder bio here. Describe their journey, vision, and what drives them to revolutionize the dating industry through AI technology.",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Founder Name",
    role: "CTO & Co-Founder",
    bio: "Your founder bio here. Share their technical expertise, innovations, and passion for creating AI solutions that enhance human connections.",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-heading font-bold text-center mb-16"
          style={{ color: '#76356D' }}
        >
          Meet the Founders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 w-full bg-gradient-to-br from-[#76356D] to-[#a14d99] p-8">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-md bg-white/10 flex items-center justify-center">
                    <UserCircleIcon 
                      className="w-full h-full text-white/80"
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 
                  className="text-2xl font-heading font-bold text-center mb-2"
                  style={{ color: '#76356D' }}
                >
                  {founder.name}
                </h3>
                <p 
                  className="text-xl font-semibold text-center mb-8"
                  style={{ color: '#76356D' }}
                >
                  {founder.role}
                </p>
                
                <div className="flex justify-center space-x-6 mb-8">
                  <a 
                    href={founder.socials.linkedin}
                    className="text-gray-400 hover:text-[#76356D] transition-colors duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <svg 
                      className="w-6 h-6"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={founder.socials.twitter}
                    className="text-gray-400 hover:text-[#76356D] transition-colors duration-300"
                    aria-label="Twitter Profile"
                  >
                    <svg 
                      className="w-6 h-6"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
                
                <p 
                  className="text-lg font-medium text-center leading-relaxed"
                  style={{ color: '#76356D' }}
                >
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

