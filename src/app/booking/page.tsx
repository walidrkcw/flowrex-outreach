import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function BookingPage() {
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
          Book a Call
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 tracking-tight px-2">
          Schedule a time to discuss your AI automation needs
        </p>
      </div>

      {/* Calendar Container */}
      <div className="w-full max-w-6xl mb-8 sm:mb-10 md:mb-12 relative z-10">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-white/5 blur-2xl -z-10 scale-105 rounded-2xl"></div>
          {/* Premium container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 shadow-[0_0_40px_rgba(255,255,255,0.15)] border-2 border-white/20 relative overflow-hidden min-h-[600px]">
            {/* Inner ring for premium effect */}
            <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none"></div>
            
            {/* Cal.com Calendar Embed */}
            <div style={{width:'100%',height:'100%',overflow:'scroll'}} id="my-cal-inline-intro"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-[10px] md:text-xs text-center text-[#000080] relative z-10">
        © 2026 Flowrex
      </footer>

      {/* Cal.com Embed Script */}
      <Script
        id="cal-com-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) { 
              let p = function (a, ar) { a.q.push(ar); }; 
              let d = C.document; 
              C.Cal = C.Cal || function () { 
                let cal = C.Cal; 
                let ar = arguments; 
                if (!cal.loaded) { 
                  cal.ns = {}; 
                  cal.q = cal.q || []; 
                  d.head.appendChild(d.createElement("script")).src = A; 
                  cal.loaded = true; 
                } 
                if (ar[0] === L) { 
                  const api = function () { p(api, arguments); }; 
                  const namespace = ar[1]; 
                  api.q = api.q || []; 
                  if(typeof namespace === "string"){
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar); 
                  return;
                } 
                p(cal, ar); 
              }; 
            })(window, "https://app.cal.com/embed/embed.js", "init");
            
            Cal("init", "intro", {origin:"https://app.cal.com"});
            
            Cal.ns.intro("inline", {
              elementOrSelector:"#my-cal-inline-intro",
              config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
              calLink: "rex-hale-e6vhrh/intro",
            });
            
            Cal.ns.intro("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          `,
        }}
      />
    </main>
  )
}
