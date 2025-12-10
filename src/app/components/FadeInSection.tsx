'use client'

import { useEffect, useRef, useState, CSSProperties } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
}

export default function FadeInSection({ children, className = '', style, delay = 0 }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // For the first section (hero), fade in with a delay on initial load
    if (delay === 0) {
      setTimeout(() => {
        setIsVisible(true)
      }, 300) // 300ms delay for smooth hero fade-in
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  return (
    <section
      ref={sectionRef}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={style}
    >
      {children}
    </section>
  )
}

