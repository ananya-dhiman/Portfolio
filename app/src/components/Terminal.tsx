
"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { ChevronRight, Wifi, Clock } from "lucide-react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(new Date());
  const [history, setHistory] = useState<string[]>([
    "╔══════════════════════════════════╗",
    "║  Welcome to Dev Terminal v2.0    ║",
    "╚══════════════════════════════════╝",
    "",
    "Type 'help' for available commands.",
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getProgressBar = (percentage: number, length: number = 10) => {
    const filled = Math.round((percentage / 100) * length);
    const empty = length - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  const handleCommand = () => {
    if (!input.trim()) return;

    let output = "";
    const cmd = input.trim().toLowerCase();
    
    switch (cmd) {
      case "help":
        output = `╔═══════════════════════════════════════╗
║        AVAILABLE COMMANDS            ║
╚═══════════════════════════════════════╝
  dino       - Launch the Dino Game
  
  stats      - System statistics
  about      - About this website
  whoami     - User information
  clear      - Clear the terminal `;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "about":
  output = `╭────────────────────────────────────────────╮
            │              DEV TERMINAL v1.0             │
            │────────────────────────────────────────────│
            │  Developed in Next.js,                     │
            │  TypeScript, and Tailwind CSS.             │
            │                                            │
            │  Communication layer: EmailJS              │
            │  Rendering engine: React                   │
            │  Theme: Obsidian Inspired                  │
            │  Status: Online — awaiting input...        │
            ╰────────────────────────────────────────────╯`;
  break;

      case "dino":
     
        output = 'Coming soon!';
        break;
     
     case "whoami":
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const lang = navigator.language || "en-US";
  const platform = navigator.platform || "Unknown";
  const userAgent = navigator.userAgent || "Unknown";
  const onlineStatus = navigator.onLine ? "Online" : "Offline";

  output = `⫸ USER PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━
User:        guest@dev.terminal
Time Zone:   ${timezone}
Platform:    ${platform}
Language:    ${lang}
Network:     ${onlineStatus}
Browser:     ${userAgent.split(")")[0].replace("(", "")}

`;
  break;

      case "stats":
                 
 type NavigatorWithExtras = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
  };
  mozConnection?: {
    effectiveType?: string;
  };
  webkitConnection?: {
    effectiveType?: string;
  };
};
        const getSystemStats = () => {



  const nav = navigator as NavigatorWithExtras;

  

        
  const memory = nav.deviceMemory ?? 4;
  const cores = nav.hardwareConcurrency ?? 4;
  const connection =
    nav.connection || nav.mozConnection || nav.webkitConnection;
  const connectionType = connection?.effectiveType ?? "4g";
  const platform = nav.platform ?? "Unknown";
          
          const uptimeMs = performance.now();
          const uptimeHours = Math.floor(uptimeMs / (1000 * 60 * 60));
          const uptimeMinutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));
         
          const cpuUsage = Math.min(95, 40 + (cores * 5) + Math.floor(Math.random() * 20));
          const memoryUsage = Math.min(90, 30 + (memory * 8) + Math.floor(Math.random() * 15));
          const diskUsage = 45 + Math.floor(Math.random() * 20);
          
          return ` ❒ SYSTEM STATISTICS 
━━━━━━━━━━━━━━━━━━━━━━━━━
Platform:      ${platform}
Cores:         ${cores} logical processors

CPU Usage:     ${getProgressBar(cpuUsage)} ${cpuUsage}%
Memory:        ${getProgressBar(memoryUsage)} ${memoryUsage}% (${memory}GB)
Disk:          ${getProgressBar(diskUsage)} ${diskUsage}%
Connection:    ${getProgressBar(connectionType === '4g' ? 85 : 60)} ${connectionType.toUpperCase()}

⏱  Uptime:    ${uptimeHours}h ${uptimeMinutes}m
✓  Status:     All systems operational`;
        };
        output = getSystemStats();
        break;
      
      default:
        output = ` Command not found: '${input}'
━━━━━━━━━━━━━━━━━━━━━━━━━
Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, `> ${input}`, output]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand();
    }
  };

  return (
    <div className=" w-full h-400 bg-gradient-to-br from-black via-gray-950 to-black text-primary font-mono p-6">
    
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 backdrop-blur-xl rounded-t-sm border-x border-t  border-primary/20  p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            
              <span className="text-xs text-primary font-semibold tracking-wider">OBSIDIAN TERMINAL</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-primary/90">
              <div className="flex items-center gap-2">
                <Wifi size={14} className="animate-pulse" />
                <span>ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{time.toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-gradient-to-br from-black/95 via-gray-950/95 to-black/95 backdrop-blur-xl rounded-b-sm border-x border-b border-primary/20 p-6 min-h-[525px] max-h-[500px] overflow-y-auto custom-scrollbar">
          <div className="space-y-1">
            {history.map((line, i) => (
              <div 
                key={i} 
                className="whitespace-pre-wrap leading-relaxed text-sm animate-fadeIn"
                style={{ 
                  animationDelay: `${i * 0.02}s`,
                  textShadow: line.startsWith('>') ? '0 0 10px rgba(74, 222, 128, 0.3)' : 'none'
                }}
              >
                {line}
              </div>
            ))}
          </div>


        
          <div className="flex items-center mt-4 group">
            <ChevronRight 
              size={16} 
              className="text-primary mr-2 animate-pulse group-hover:text-primary transition-colors" 
            />
            <span className="text-primary mr-2">$</span>
            <input
              className="bg-transparent outline-none flex-1 text-primary placeholder-primary/50 caret-primary text-sm tracking-wide"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command..."
              autoFocus
              style={{ textShadow: '0 0 8px rgba(74, 222, 128, 0.4)' }}
            />
          </div>

       
        </div>

        <div className="mt-4 text-center text-xs text-green-500/40">
          Press <kbd className="px-2 py-1 bg-green-500/10 rounded border border-green-500/30">Enter</kbd> to execute commands
  
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateX(-10px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.5);
        }
        kbd {
          font-family: inherit;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}