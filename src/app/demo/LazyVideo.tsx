'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  videoUrl: string
}

export default function LazyVideo({ videoUrl }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px', // Start loading slightly before entering viewport
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%', minHeight: '200px' }}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full"
          controls
          playsInline
          preload="metadata"
          style={{
            transform: 'translateZ(0)',
            objectFit: 'contain',
          }}
        >
          <source src={videoUrl} />
          <p className="text-white text-center p-4">
            Your browser doesn't support video playback.{' '}
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Download or open the video
            </a>
          </p>
        </video>
      ) : null}
    </div>
  )
}

