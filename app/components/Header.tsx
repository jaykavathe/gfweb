'use client'

import { useEffect, useState } from 'react'
import { BorderBeam } from "./magicui/border-beam"

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'FEATURES', href: '#features' },
  { name: 'ROADMAP', href: '#roadmap' },
  { name: 'TEAM', href: '#team' },
  { name: 'CONTACT', href: '#contact' }
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.name.toLowerCase(),
        element: document.querySelector(item.href)
      }))

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="relative">
          <div className="relative px-6 py-2 rounded-full bg-white">
            <BorderBeam />
            <span className="text-2xl font-heading font-bold" style={{ color: '#76356D' }}>
              GoFlirt AI
            </span>
          </div>
        </a>
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative text-lg font-bold tracking-wide transition-all duration-300 group ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-[#76356D]'
                      : 'text-gray-600 hover:text-[#76356D]'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#76356D] transform origin-left transition-transform duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

