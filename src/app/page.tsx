export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="flex flex-col items-center justify-center max-w-4xl w-full space-y-16">
        {/* Hero Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center leading-tight text-white">
          AI Automation Systems for Lead Generation & Sales
        </h1>

        {/* Sub-Headline */}
        <p className="text-lg md:text-xl lg:text-2xl font-normal text-center max-w-3xl leading-relaxed text-white">
          I build AI-driven SDR systems that qualify leads and book meetings automatically.
        </p>

        {/* Credibility Indicators */}
        <div className="flex flex-col items-center space-y-4 text-sm md:text-base text-center text-white opacity-80">
          <div>Built with n8n, Supabase, Vercel</div>
          <div>Modern AI automations for agencies & online businesses</div>
          <div>Done-for-you installation & support</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-sm text-white opacity-50">
        © 2025 Flowrex
      </footer>
    </main>
  )
}

