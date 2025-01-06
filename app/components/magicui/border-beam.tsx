'use client'

import { useEffect, useRef } from 'react'

export const BorderBeam = ({ 
  colorFrom = "#76356D",
  colorTo = "#a14d99",
  borderWidth = 2
}) => {
  const beamRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const beam = beamRef.current
    if (!beam) return

    let position = 0
    let direction = 1
    const speed = 2
    const totalLength = beam.getTotalLength()

    const animate = () => {
      position += speed * direction
      
      if (position > totalLength) {
        position = totalLength
        direction = -1
      } else if (position < 0) {
        position = 0
        direction = 1
      }

      beam.style.strokeDashoffset = String(position)
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={beamRef}
          d="M 0,0 L 100,0 L 100,100 L 0,100 Z"
          stroke="url(#gradient)"
          strokeWidth={borderWidth}
          pathLength="400"
          className="[stroke-dasharray:400] [stroke-dashoffset:400]"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
} 