'use client'

import { BorderBeam } from "./magicui/border-beam"

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'FEATURES', href: '#features' },
  { name: 'ROADMAP', href: '#roadmap' },
  { name: 'TEAM', href: '#team' },
  { name: 'CONTACT', href: '#contact' }
]

export default function Footer() {
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

  return (
    <footer style={{ backgroundColor: '#76356D' }} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="relative">
            <div className="relative px-6 py-2 rounded-full">
              <BorderBeam 
                colorFrom="white" 
                colorTo="rgba(255,255,255,0.6)" 
                borderWidth={3}
              />
              <span className="text-2xl font-heading font-extrabold text-white">
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
                    className="text-white hover:opacity-80 transition-opacity duration-300 text-lg font-bold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-6">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/90 hover:text-white transition-opacity duration-300 font-bold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-white/90 font-bold">
          © 2024 GoFlirt AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

