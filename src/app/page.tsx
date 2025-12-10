export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-12 md:py-16 px-4">
      <div className="flex flex-col items-center max-w-4xl w-full px-4">
        {/* Hero Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight text-white tracking-tight">
          AI Automation Systems for Lead Generation & Sales
        </h1>

        {/* Sub-Headline */}
        <p className="mt-8 text-lg md:text-2xl font-normal text-center text-neutral-200">
          I build AI-driven SDR systems that qualify leads and book meetings automatically.
        </p>

        {/* Credibility Indicators */}
        <div className="mt-12 flex flex-col items-center space-y-2 text-sm md:text-base text-center text-white opacity-75">
          <div>Built with n8n, Supabase, Vercel</div>
          <div>Modern AI automations for agencies & online businesses</div>
          <div>Done-for-you installation & support</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-[10px] md:text-xs text-center text-neutral-500">
        © 2025 Flowrex
      </footer>
    </main>
  )
}

