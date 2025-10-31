

// "use client";

// import { useState, useEffect } from "react";
// import { Zap, Code, Award, Coffee, Trophy, Lightbulb, Camera } from "lucide-react";
// import Pyramid from "@/components/Pyramid";
// import Image from "next/image";

// const achievementCards = [
//   {
//     icon: Camera,
//     title: "Innovathon 2025",
//     subtitle: "WINNER",
//     desc: "Built fraud detection MVP for small businesses in just 36 hours. Developed complete solution with real-time analytics.",
//     color: "from-green-600 to-emerald-800",
//     accent: "#22c55e",
//   },
//   {
//     icon: Camera,
//     title: "GSSoC 2025",
//     subtitle: "RANK 205",
//     desc: "National open source contributor — contributed across multiple repositories. Ranked among top contributors nationwide.",
//     color: "from-lime-600 to-green-700",
//     accent: "#84cc16",
//   },
// ];

// const statCards = [
//   {
//     icon: Code,
//     title: "10+",
//     subtitle: "PROJECTS",
//     desc: "Full-stack applications shipped and deployed in production",
//   },
//   {
//     icon: Zap,
//     title: "120K+",
//     subtitle: "LINES",
//     desc: "Code written and deployed across various technologies",
//   },
//   {
//     icon: Coffee,
//     title: "∞",
//     subtitle: "CAFFEINE",
//     desc: "Cups consumed during late-night coding sessions",
//   }
// ];

// export default function Activities() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouse = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouse);
//     return () => window.removeEventListener("mousemove", handleMouse);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-black py-20  px-10 overflow-hidden">
//       {/* Animated grid background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
//       {/* Spotlight effect */}
//       <div 
//         className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-300"
//         style={{
//           background: "radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)",
//           left: mousePos.x - 192,
//           top: mousePos.y - 192,
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
           
//             <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
//               STATS
//             </span>
//           </h2>
          
//         </div>

//         {/* Top Two Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
//           {achievementCards.map((card, i) => (
//             <div
//               key={i}
//               className="group relative bg-zinc-950 border-4 border-white rounded-none p-8 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
//               style={{
//                 boxShadow: `12px 12px 0px ${card.accent}`,
//               }}
//             >
//               <div className="mb-6">
//                 <div 
//                   className={`p-4 rounded-none bg-gradient-to-br ${card.color} border-2 border-white inline-block group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <card.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <h3 className="text-4xl font-black text-white tracking-tight">{card.title}</h3>
//                 <p className="text-xs font-bold text-green-400 tracking-widest">{card.subtitle}</p>
//                 <p className="text-base text-gray-400 leading-relaxed">{card.desc}</p>
//                 <div className="pt-4">
//                   <span className="text-white font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
//                     {card.title.split(' ')[0]} <span className="text-xl">›</span>
//                   </span>
//                 </div>
//               </div>

//               <div className="absolute top-6 right-6 flex gap-1">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse delay-75" />
//                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-150" />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//             </div>
//           ))}
//         </div>

//         {/* Bottom Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mb-16 mt-15">
//           {statCards.map((card, i) => (
//             <div
//               key={i}
//               className="group relative w-70 bg-zinc-950 border-4 border-zinc-800 rounded-none p-6 hover:border-zinc-600 transition-all duration-200"
//               style={{
//                 boxShadow: `6px 6px 0px rgba(39, 39, 42, 1)`,
//               }}
//             >
//               {/* Icon */}
//               <div className="mb-4">
//                 <div className="p-3 rounded-none bg-zinc-900 border-2 border-zinc-800 inline-block">
//                   <card.icon className="w-5 h-5 text-zinc-600" strokeWidth={2.5} />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-black text-zinc-400 tracking-tight">{card.title}</h3>
//                 <p className="text-xs font-bold text-zinc-600 tracking-widest">{card.subtitle}</p>
//                 <p className="text-sm text-zinc-700 leading-relaxed">{card.desc}</p>
                
//                 {/* Arrow Link */}
//                 <div className="pt-2">
//                   <span className="text-zinc-600 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
//                     {card.subtitle} <span className="text-lg">›</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center items-center gap-10">
//          <Image  src="/cube2.gif"
//                 alt="Spinning Cube" 
//                 width={275}
//                 height={275}
//                 style={{ objectFit: "cover" }}
//                 className="rounded-none relative bottom-81 left-120"
//                 />
//           </div>
        
//       </div>

//       <style jsx>{`
//         .delay-75 { animation-delay: 75ms; }
//         .delay-150 { animation-delay: 150ms; }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Zap, Code, Award, Coffee, Trophy, Lightbulb, Camera } from "lucide-react";

const achievementCards = [
  {
    icon: Camera,
    title: "Innovathon 2025",
    subtitle: "WINNER",
    desc: "Built fraud detection MVP for small businesses in just 36 hours. Developed complete solution with real-time analytics.",
    color: "from-green-600 to-emerald-800",
    accent: "#22c55e",
  },
  {
    icon: Camera,
    title: "GSSoC 2025",
    subtitle: "RANK 205",
    desc: "National open source contributor — contributed across multiple repositories. Ranked among top contributors nationwide.",
    color: "from-lime-600 to-green-700",
    accent: "#84cc16",
  },
];

const statCards = [
  {
    icon: Code,
    title: "10+",
    subtitle: "PROJECTS",
    desc: "Full-stack applications shipped and deployed in production",
  },
  {
    icon: Zap,
    title: "120K+",
    subtitle: "LINES",
    desc: "Code written and deployed across various technologies",
  },
  {
    icon: Coffee,
    title: "∞",
    subtitle: "CAFFEINE",
    desc: "Cups consumed during late-night coding sessions",
  }
];

export default function Activities() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Spotlight effect */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)",
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              STATS
            </span>
          </h2>
        </div>

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
          {achievementCards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-zinc-950 border-2 sm:border-4 border-white rounded-none p-6 sm:p-8 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
              style={{
                boxShadow: `8px 8px 0px ${card.accent}`,
              }}
            >
              <div className="mb-6">
                <div 
                  className={`p-3 sm:p-4 rounded-none bg-gradient-to-br ${card.color} border-2 border-white inline-block group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">{card.title}</h3>
                <p className="text-xs font-bold text-green-400 tracking-widest">{card.subtitle}</p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{card.desc}</p>
                <div className="pt-4">
                  <span className="text-white font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                    {card.title.split(' ')[0]} <span className="text-xl">›</span>
                  </span>
                </div>
              </div>

              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse delay-75" />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-150" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-zinc-950 border-2 sm:border-4 border-zinc-800 rounded-none p-6 hover:border-zinc-600 transition-all duration-200"
              style={{
                boxShadow: `6px 6px 0px rgba(39, 39, 42, 1)`,
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="p-3 rounded-none bg-zinc-900 border-2 border-zinc-800 inline-block">
                  <card.icon className="w-5 h-5 text-zinc-600" strokeWidth={2.5} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-zinc-400 tracking-tight">{card.title}</h3>
                <p className="text-xs font-bold text-zinc-600 tracking-widest">{card.subtitle}</p>
                <p className="text-sm text-zinc-700 leading-relaxed">{card.desc}</p>
                
                {/* Arrow Link */}
                <div className="pt-2">
                  <span className="text-zinc-600 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                    {card.subtitle} <span className="text-lg">›</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cube Image - Responsive */}
        <div className="flex justify-center items-center mt-8 sm:mt-12">
          <img  
            src="/cube2.gif"
            alt="Spinning Cube" 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[275px] lg:h-[275px] object-cover rounded-none"
          />
        </div>
      </div>

      <style jsx>{`
        .delay-75 { animation-delay: 75ms; }
        .delay-150 { animation-delay: 150ms; }
      `}</style>
    </section>
  );
}