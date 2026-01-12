import type { Metadata } from 'next'
import LazyVideo from './LazyVideo'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function DemoPage() {
  const videoUrl = 'https://1fuvaseaoclg1cft.public.blob.vercel-storage.com/AI%20SDR%20Demo'
  const posterUrl = 'https://1fuvaseaoclg1cft.public.blob.vercel-storage.com/thumb.jpg'

  return (
    <main 
      className="flex flex-col min-h-screen items-center justify-start px-4 py-6 sm:py-8 md:py-12 overflow-x-hidden relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
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
      <div className="w-full max-w-5xl mb-6 sm:mb-8 md:mb-12 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl border border-white/10 mx-auto">
          <LazyVideo videoUrl={videoUrl} posterUrl={posterUrl} />
        </div>
      </div>

      {/* CTA and Note */}
      <div className="max-w-5xl w-full text-center space-y-3 mb-6 sm:mb-8 relative z-10">
        <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">
          Reply to my email for the next step
        </p>
        <p className="text-xs sm:text-sm md:text-base text-white/60 px-4">
          If you didn't request this demo, ignore this page
        </p>
      </div>

      {/* Footer */}
      <footer className="py-8 text-[10px] md:text-xs text-center text-[#000080] relative">
        {/* Gradient fade from black at top for seamless transition */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 30%, transparent 100%)',
          }}
        ></div>
        <div className="relative z-10">
          © 2026 Flowrex
        </div>
      </footer>
    </main>
  )
}

