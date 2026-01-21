export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 crt-effect">
      <main className="w-full max-w-4xl terminal-border rounded-lg p-8 bg-black/90 flicker">
        {/* ASCII Art Logo */}
        <div className="ascii-art text-[#00ff00] glow text-center mb-8">
          {`
 ██████╗  █████╗ ██████╗ ██╗███████╗
 ██╔══██╗██╔══██╗██╔══██╗╚██╗██╔════╝
 ██║  ██║███████║██║  ██║ ╚═╝███████╗
 ██║  ██║██╔══██║██║  ██║ ██╗╚════██║
 ██████╔╝██║  ██║██████╔╝██╔╝███████║
 ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝ ╚══════╝
                                     
  █████╗ ██████╗  ██████╗ █████╗ ██████╗ ███████╗
 ██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝
 ███████║██████╔╝██║     ███████║██║  ██║█████╗  
 ██╔══██║██╔══██╗██║     ██╔══██║██║  ██║██╔══╝  
 ██║  ██║██║  ██║╚██████╗██║  ██║██████╔╝███████╗
 ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
          `}
        </div>

        {/* Decorative Line */}
        <div className="text-[#00ff00] text-center mb-6 glow-subtle">
          ═══════════════════════════════════════════════════════
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-[#00ff00] text-2xl font-mono glow mb-4">
            ▓▓▓ WELCOME TO THE ARCADE ▓▓▓
          </h1>
          <p className="text-[#00aa00] font-mono text-lg">
            A retro-styled web arcade cabinet hosting ASCII-based games
          </p>
        </div>

        {/* Info Box */}
        <div className="border border-[#00ff00] rounded p-6 mb-8 bg-black/50">
          <div className="text-[#33ff33] font-mono mb-4 text-center">
            ┌─────────────────────────────────────────────────────┐
          </div>
          
          <div className="text-[#00ff00] font-mono space-y-3 px-4">
            <p className="flex items-start">
              <span className="text-[#33ff33] mr-2">▸</span>
              <span>Classic green-on-black terminal aesthetic</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#33ff33] mr-2">▸</span>
              <span>80×40 character game screen</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#33ff33] mr-2">▸</span>
              <span>Retro sound effects with Web Audio API</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#33ff33] mr-2">▸</span>
              <span>Weekly game additions</span>
            </p>
          </div>

          <div className="text-[#33ff33] font-mono mt-4 text-center">
            └─────────────────────────────────────────────────────┘
          </div>
        </div>

        {/* Controls Section */}
        <div className="text-center mb-8">
          <h2 className="text-[#00ff00] font-mono text-xl mb-4 glow-subtle">
            ═══ CONTROLS ═══
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-[#00aa00] font-mono">
            <div className="text-right pr-4">WASD</div>
            <div className="text-left pl-4 text-[#00ff00]">Movement</div>
            <div className="text-right pr-4">1, 2, 3</div>
            <div className="text-left pl-4 text-[#00ff00]">Action Buttons</div>
            <div className="text-right pr-4">↑↓←→</div>
            <div className="text-left pl-4 text-[#00ff00]">Menu Navigation</div>
            <div className="text-right pr-4">ENTER</div>
            <div className="text-left pl-4 text-[#00ff00]">Confirm</div>
            <div className="text-right pr-4">ESC</div>
            <div className="text-left pl-4 text-[#00ff00]">Exit Game</div>
          </div>
        </div>

        {/* Insert Quarter Animation */}
        <div className="text-center">
          <p className="text-[#00ff00] font-mono text-xl glow blink">
            ▶ INSERT QUARTER TO PLAY ◀
          </p>
        </div>

        {/* Footer */}
        <div className="text-[#00aa00] text-center mt-8 font-mono text-sm">
          ═══════════════════════════════════════════════════════
          <p className="mt-2">Built with Next.js • Powered by ASCII • v0.1.0</p>
          <p className="text-[#006600] mt-1">© 2026 Dad&apos;s Arcade</p>
        </div>
      </main>
    </div>
  );
}
