'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const founders = [
  {
    name: "Founder Name",
    role: "CEO & Co-Founder",
    image: "/founders/founder1.jpg",
    bio: "Your founder bio here. Describe their journey, vision, and what drives them to revolutionize the dating industry through AI technology.",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Founder Name",
    role: "CTO & Co-Founder",
    image: "/founders/founder2.jpg",
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
          className="text-4xl font-heading font-extrabold text-center mb-16"
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
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
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
                <p className="text-[#76356D] text-center mb-6">{founder.role}</p>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <a 
                    href={founder.socials.linkedin}
                    className="text-gray-600 hover:text-[#76356D] transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={founder.socials.twitter}
                    className="text-gray-600 hover:text-[#76356D] transition-colors duration-300"
                  >
                    Twitter
                  </a>
                </div>
                
                <p className="text-[#76356D] text-center leading-relaxed font-bold">
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

