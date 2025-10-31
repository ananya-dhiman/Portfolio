// "use client";

// import { useState } from "react";
// import { ChevronRight } from "lucide-react";

// export default function Terminal() {
//   const [input, setInput] = useState("");
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Dev Terminal ⚡",
//     "Type 'help' for available commands.",
//   ]);

//   const handleCommand = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     let output = "";
//     switch (input.trim().toLowerCase()) {
//       case "help":
//         output = "Available commands: help, clear, about";
//         break;
//       case "clear":
//         setHistory([]);
//         setInput("");
//         return;
//       case "about":
//         output = "This is your integrated project terminal 💻";
//         break;
//       default:
//         output = `Command not found: ${input}`;
//     }

//     setHistory((prev) => [...prev, `> ${input}`, output]);
//     setInput("");
//   };

//   return (
//     <div className="h-full w-full bg-[#1e1e1e] text-green-400 font-mono text-sm p-4 overflow-y-auto rounded-lg border border-neutral-800 shadow-inner">
//       {history.map((line, i) => (
//         <div key={i} className="whitespace-pre-wrap">
//           {line}
//         </div>
//       ))}

//       <form onSubmit={handleCommand} className="flex items-center mt-2">
//         <ChevronRight size={14} className="text-green-400 mr-1" />
//         <input
//           className="bg-transparent outline-none flex-1 text-green-300 placeholder-neutral-500"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a command..."
//         />
//       </form>
//     </div>
//   );
// }
"use client";

import { useState, KeyboardEvent } from "react";
import { ChevronRight } from "lucide-react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "╔════════════════════════════════════╗",
    "║  Welcome to Dev Terminal v2.0  ⚡  ║",
    "╚════════════════════════════════════╝",
    "",
    "Type 'help' for available commands.",
  ]);

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
        output = `🦖 Launching Dino Game...
Press SPACE to jump! 
[Feature coming soon...]`;
        break;
      case "portfolio":
        output = `📁 Opening Portfolio...
  ├── Projects/
  ├── Skills/
  ├── Experience/
  └── Contact/
[Redirecting...]`;
        break;
      case "stats":
        output = `📊 SYSTEM STATISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━
CPU Usage:     ████████░░ 82%
Memory:        ██████░░░░ 64%
Disk:          ████░░░░░░ 45%
Uptime:        ${Math.floor(Math.random() * 48)}h ${Math.floor(Math.random() * 60)}m
Status:        ✓ All systems operational`;
        break;
      case "matrix":
        output = `Entering the Matrix...
01001000 01100101 01101100 01101100 01101111
Wake up, Neo... 🕶️
The Matrix has you...`;
        break;
      default:
        output = `❌ Command not found: '${input}'
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
    <div className="h-full w-full bg-gradient-to-b from-[#0a0a0a] to-[#1e1e1e] text-green-400 font-mono text-sm p-4 overflow-y-auto rounded-lg border border-green-900/30 shadow-2xl shadow-green-900/20">
      <div className="mb-4 border-b border-green-900/30 pb-2">
        <div className="flex items-center gap-2 text-xs text-green-500/70">
          <div className="w-3 h-3 rounded-full bg-red-500/50 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <span className="ml-2">Terminal - Connected</span>
        </div>
      </div>
      
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap leading-relaxed animate-fadeIn">
          {line}
        </div>
      ))}

      <div className="flex items-center mt-2">
        <ChevronRight size={14} className="text-green-400 mr-1 animate-pulse" />
        <input
          className="bg-transparent outline-none flex-1 text-green-300 placeholder-neutral-600 caret-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command..."
          autoFocus
        />
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}