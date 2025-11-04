
// "use client";

// import { useState, KeyboardEvent } from "react";
// import { ChevronRight } from "lucide-react";

// export default function Terminal() {
//   const [input, setInput] = useState("");
//   const [history, setHistory] = useState<string[]>([
//     "╔══════════════════════════════════╗",
//     "║  Welcome to Dev Terminal v2.0    ║",
//     "╚══════════════════════════════════╝",
//     "",
//     "Type 'help' for available commands.",
//   ]);

//   const handleCommand = () => {
//     if (!input.trim()) return;

//     let output = "";
//     const cmd = input.trim().toLowerCase();
    
//     switch (cmd) {
//       case "help":
//         output = `╔═══════════════════════════════════════╗
// ║        AVAILABLE COMMANDS            ║
// ╚═══════════════════════════════════════╝
//   dino       - Launch the Dino Game
//   portfolio  - View my portfolio
//   stats      - System statistics
//   matrix     - Enter the Matrix
//   about      - About this terminal
//   clear      - Clear the terminal `;
//         break;
//       case "clear":
//         setHistory([]);
//         setInput("");
//         return;
//       case "about":
//         output = `╭─────────────────────────────────╮
// │   DEV TERMINAL v2.0.1          │
// │   Built with React & TypeScript │
// │   Status: 🟢 Online             │
// ╰─────────────────────────────────╯`;
//         break;
//       case "dino":
//         output = `Launching Dino Game...
// Press SPACE to jump! 
// [Feature coming soon...]`;
//         break;
//       case "portfolio":
//         output = `📁 Opening Portfolio...
//   ├── Projects/
//   ├── Skills/
//   ├── Experience/
//   └── Contact/
// [Redirecting...]`;
//         break;
//       case "stats":
//         output = `📊 SYSTEM STATISTICS
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// CPU Usage:     ████████░░ 82%
// Memory:        ██████░░░░ 64%
// Disk:          ████░░░░░░ 45%
// Uptime:        ${Math.floor(Math.random() * 48)}h ${Math.floor(Math.random() * 60)}m
// Status:        ✓ All systems operational`;
//         break;
//       case "matrix":
//         output = `Entering the Matrix...
// 01001000 01100101 01101100 01101100 01101111
// Wake up, Neo... 🕶️
// The Matrix has you...`;
//         break;
//       default:
//         output = `❌ Command not found: '${input}'
// Type 'help' to see available commands.`;
//     }

//     setHistory((prev) => [...prev, `> ${input}`, output]);
//     setInput("");
//   };

//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleCommand();
//     }
//   };

//   return (
//     <div className="h-full w-full bg-gradient-to-b from-[#0a0a0a] to-[#1e1e1e] text-green-400 font-mono text-sm p-4 overflow-y-auto rounded-lg border border-green-900/30 shadow-2xl shadow-green-900/20">
//       <div className="mb-4 border-b border-green-900/30 pb-2">
//         <div className="flex items-center gap-2 text-xs text-green-500/70">
//           <div className="w-3 h-3 rounded-full bg-red-500/50 animate-pulse"></div>
//           <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
//           <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
//           <span className="ml-2">Terminal - Connected</span>
//         </div>
//       </div>
      
//       {history.map((line, i) => (
//         <div key={i} className="whitespace-pre-wrap leading-relaxed animate-fadeIn">
//           {line}
//         </div>
//       ))}

//       <div className="flex items-center mt-2">
//         <ChevronRight size={14} className="text-green-400 mr-1 animate-pulse" />
//         <input
//           className="bg-transparent outline-none flex-1 text-green-300 placeholder-neutral-600 caret-green-400"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Type a command..."
//           autoFocus
//         />
//       </div>
      
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateX(-5px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { ChevronRight, Cpu, HardDrive, Wifi, Clock } from "lucide-react";
import Dino from "../components/Dino"

export default function Terminal() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(new Date());
  const [showDino,setShowDino]=useState<boolean>(false);
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
  portfolio  - View my portfolio
  stats      - System statistics
  matrix     - Enter the Matrix
  about      - About this terminal
  whoami     - User information
  clear      - Clear the terminal `;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "about":
        output = `╭─────────────────────────────────╮
│   DEV TERMINAL v2.0.1          │
│   Built with React & TypeScript │
│   Status: 🟢 Online             │
╰─────────────────────────────────╯`;
        break;
      case "dino":
        setShowDino(true);
        output = `🦖 Launching Dino Game...
━━━━━━━━━━━━━━━━━━━━━━━━━
Press SPACE to jump! 
[Feature coming soon...]`;
        break;
      case "portfolio":
        output = `📁 Opening Portfolio...
━━━━━━━━━━━━━━━━━━━━━━━━━
  ├── 🚀 Projects/
  ├── 💡 Skills/
  ├── 💼 Experience/
  └── 📧 Contact/
[Redirecting...]`;
        break;
      case "whoami":
        output = `👤 USER PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━
User:          guest@terminal
Location:      ${Intl.DateTimeFormat().resolvedOptions().timeZone}
Permissions:   Standard User
Shell:         DevTerminal v2.0`;
        break;
      case "stats":
        const getSystemStats = () => {
          const nav = navigator as any;
          const memory = nav.deviceMemory || 4;
          const cores = nav.hardwareConcurrency || 4;
          const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
          const connectionType = connection?.effectiveType || '4g';
          const platform = nav.platform || 'Unknown';
          
          // Calculate uptime (time since page load)
          const uptimeMs = performance.now();
          const uptimeHours = Math.floor(uptimeMs / (1000 * 60 * 60));
          const uptimeMinutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));
          
          // Simulate realistic usage percentages based on actual system info
          const cpuUsage = Math.min(95, 40 + (cores * 5) + Math.floor(Math.random() * 20));
          const memoryUsage = Math.min(90, 30 + (memory * 8) + Math.floor(Math.random() * 15));
          const diskUsage = 45 + Math.floor(Math.random() * 20);
          
          return ` ▨ SYSTEM STATISTICS 
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
      case "matrix":
        output = ` Entering the Matrix...
━━━━━━━━━━━━━━━━━━━━━━━━━
01001000 01100101 01101100 01101100 01101111
01010111 01100001 01101011 01100101 00100000
Wake up, Neo... 
The Matrix has you...
Follow the white rabbit`;
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
    <div className=" w-full h-400 bg-gradient-to-br from-black via-gray-950 to-black text-green-400 font-mono p-6">
    
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 backdrop-blur-xl rounded-t-sm border-x border-t  border-green-500/20  p-4">
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
        <div className="bg-gradient-to-br from-black/95 via-gray-950/95 to-black/95 backdrop-blur-xl rounded-b-sm border-x border-b border-green-500/20 p-6 min-h-[525px] max-h-[500px] overflow-y-auto custom-scrollbar">
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

            {showDino && (
          <div className="mt-6 border-t border-green-700 pt-4">
            <Dino /> {/* 👈 Renders the game inline */}
          </div>
        )}

        
          <div className="flex items-center mt-4 group">
            <ChevronRight 
              size={16} 
              className="text-green-400 mr-2 animate-pulse group-hover:text-green-300 transition-colors" 
            />
            <span className="text-green-500 mr-2">$</span>
            <input
              className="bg-transparent outline-none flex-1 text-green-300 placeholder-green-900/50 caret-green-400 text-sm tracking-wide"
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