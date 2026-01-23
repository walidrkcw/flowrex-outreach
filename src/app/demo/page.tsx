import type { Metadata } from 'next'
import LazyVideo from './LazyVideo'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

// Force dynamic rendering to prevent SSG timeout
export const dynamic = 'force-dynamic'

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
      {/* Gradient fade for seamless transitions */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.7) 90%, black 100%)',
        }}
      ></div>
      
      {/* Header Section */}
      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center justify-center text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight mb-4 sm:mb-6">
          AI SDR Demo
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 tracking-tight px-2">
          Qualify leads + book meetings automatically
        </p>
      </div>

      {/* Highlight - Premium Styling */}
      <div className="max-w-4xl w-full text-center mb-6 sm:mb-8 md:mb-10 relative z-10 px-4">
        <div className="inline-block px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium tracking-tight">
            Installed into your stack, so you own it. No SaaS lock-in
          </p>
        </div>
      </div>

      {/* Video Container - Premium Styling */}
      <div className="w-full max-w-5xl mb-8 sm:mb-10 md:mb-12 relative z-10">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-white/5 blur-2xl -z-10 scale-105 rounded-2xl"></div>
          {/* Premium container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 shadow-[0_0_40px_rgba(255,255,255,0.15)] border-2 border-white/20 relative overflow-hidden">
            {/* Inner ring for premium effect */}
            <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none"></div>
            <LazyVideo videoUrl={videoUrl} posterUrl={posterUrl} />
          </div>
        </div>
      </div>

      {/* Book a Call Button - Premium CTA */}
      <div className="w-full max-w-5xl mb-8 sm:mb-10 md:mb-12 relative z-10 flex justify-center">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-white/20 blur-3xl -z-10 scale-110 rounded-full"></div>
          {/* Secondary glow */}
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl -z-10 scale-105 rounded-full opacity-60"></div>

          <a
            href="https://cal.com/rex-hale-e6vhrh/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-10 py-5 sm:px-12 sm:py-6 rounded-full bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg sm:text-xl transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3),0_0_80px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:border-white/50"
          >
            <span className="relative z-10 block">Book a call</span>
          </a>
        </div>
      </div>

      {/* Note */}
      <div className="max-w-5xl w-full text-center mb-8 sm:mb-10 relative z-10">
        <p className="text-xs sm:text-sm md:text-base text-white/50 px-4">
          Reply to my email if you have any questions
        </p>
      </div>

      {/* Footer */}
      <footer className="py-8 text-[10px] md:text-xs text-center text-[#000080] relative z-10">
        © 2026 Flowrex
      </footer>
    </main>
  )
}

