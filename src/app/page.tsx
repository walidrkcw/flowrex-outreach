import FadeInSection from './components/FadeInSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Section 1: Hero Headline */}
      <FadeInSection
        className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Gradient fade to black at bottom for seamless transition */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.7) 90%, black 100%)',
          }}
        ></div>
        <div className="max-w-4xl w-full px-4 relative z-10 flex flex-col items-center">
          {/* Premium Profile Photo Container */}
          <div className="mb-8 md:mb-12 relative">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm bg-gradient-to-br from-white/10 via-white/5 to-transparent relative">
              {/* Inner ring for premium effect */}
              <div className="absolute inset-0 rounded-full border border-white/10"></div>
              {/* REX Logo */}
              <div className="w-full h-full bg-black relative">
                <Image
                  src="/rex-logo.png"
                  alt="REX Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain p-3"
                  priority
                />
              </div>
            </div>
            {/* Subtle outer glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl -z-10 scale-110"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight text-white tracking-tight">
            AI Automation Systems for Lead Generation & Sales
          </h1>
        </div>
      </FadeInSection>

      {/* Section 2: Sub-Headline */}
      <FadeInSection
        className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/section2-background.jpg)',
        }}
        delay={100}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Gradient fade to black at top and bottom for seamless transitions */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 20%, transparent 40%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.7) 90%, black 100%)',
          }}
        ></div>
        <div className="max-w-4xl w-full px-4 relative z-10">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight text-white tracking-tight">
            I build AI-driven SDR systems that qualify leads and book meetings automatically.
          </p>
        </div>
      </FadeInSection>

      {/* Section 3: Credibility Indicators */}
      <FadeInSection
        className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/section3-background.jpg)',
        }}
        delay={200}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Gradient fade to black at top and bottom for seamless transitions */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 20%, transparent 40%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.7) 90%, black 100%)',
          }}
        ></div>
        <div className="max-w-4xl w-full px-4 relative z-10">
          <div className="flex flex-col items-center space-y-8 md:space-y-10 text-center text-white">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Built with n8n, Supabase, Vercel</div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Modern AI automations for agencies & online businesses</div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Done-for-you installation & support</div>
          </div>
        </div>
      </FadeInSection>

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
          © 2025 Flowrex
        </div>
      </footer>
    </main>
  )
}

