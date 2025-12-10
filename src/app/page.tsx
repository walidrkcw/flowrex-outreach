export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Section 1: Hero Headline */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="max-w-4xl w-full px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight text-white tracking-tight">
            AI Automation Systems for Lead Generation & Sales
          </h1>
        </div>
      </section>

      {/* Section 2: Sub-Headline */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="max-w-4xl w-full px-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight text-white tracking-tight">
            I build AI-driven SDR systems that qualify leads and book meetings automatically.
          </p>
        </div>
      </section>

      {/* Section 3: Credibility Indicators */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="max-w-4xl w-full px-4">
          <div className="flex flex-col items-center space-y-8 md:space-y-10 text-center text-white">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Built with n8n, Supabase, Vercel</div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Modern AI automations for agencies & online businesses</div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Done-for-you installation & support</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-[10px] md:text-xs text-center text-[#000080]">
        © 2025 Flowrex
      </footer>
    </main>
  )
}

