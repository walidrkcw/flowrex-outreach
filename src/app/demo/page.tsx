import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function DemoPage() {
  // YouTube embed with mobile-friendly parameters
  const videoUrl = 'https://www.youtube.com/embed/vKbJK-O8-co?playsinline=1&modestbranding=1&rel=0'

  return (
    <main className="flex flex-col min-h-screen items-center justify-start px-4 py-6 sm:py-8 md:py-12 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center justify-center text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight mb-4 sm:mb-6">
          AI SDR Demo
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 tracking-tight px-2">
          Qualify leads + book meetings automatically
        </p>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-5xl mb-6 sm:mb-8 md:mb-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl border border-white/10 mx-auto">
          {/* Responsive 16:9 Video Embed - optimized for mobile */}
          <div 
            className="relative w-full overflow-hidden rounded-lg"
            style={{ 
              paddingBottom: '56.25%', /* 16:9 aspect ratio */
              minHeight: '200px',
            }}
          >
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              title="AI SDR Demo Video"
              style={{
                transform: 'translateZ(0)', // Hardware acceleration for smooth playback
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA and Note */}
      <div className="max-w-5xl w-full text-center space-y-3 mb-6 sm:mb-8">
        <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">
          Reply to my email for the next step
        </p>
        <p className="text-xs sm:text-sm md:text-base text-white/60 px-4">
          If you didn't request this demo, ignore this page
        </p>
      </div>

    </main>
  )
}

