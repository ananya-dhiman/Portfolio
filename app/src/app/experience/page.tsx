
//!Obsidian themed techy
// "use client";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Code, Palette, Server, Lightbulb } from "lucide-react";
// import { useEffect, useRef } from "react";

// type Experience = {
//   title: string;
//   role: string;
//   year: string;
//   description: string;
//   tech: string[];
//   accentColor: string;
//   bgGradient: string;
//   icon: React.ReactNode;
// };

// const experiences: Experience[] = [
//   {
//     title: "Valueye",
//     role: "Backend Developer",
//     year: "2025 – Present",
//     description:
//       "Building LangChain-powered AI trading assistant with caching, scraping, and PDF summarization flows for smarter stock analysis.",
//     tech: ["LangChain", "Node.js", "MongoDB", "TypeScript"],
//     accentColor: "#10b981",
//     bgGradient: "from-emerald-500/10 to-emerald-600/5",
//     icon: <Server className="w-6 h-6" />,
//   },
//   {
//     title: "In-House Internship",
//     role: "Software Developer",
//     year: "2023 – 2025",
//     description:
//       "Developed backend for a marks-entry system and placement portal streamlining data management for colleges.",
//     tech: ["Express", "MongoDB", "Figma"],
//     accentColor: "#f59e0b",
//     bgGradient: "from-amber-500/10 to-amber-600/5",
//     icon: <Code className="w-6 h-6" />,
//   },
//   {
//     title: "CodeCell (Tech Council)",
//     role: "Creative Member",
//     year: "2024 – 2025",
//     description:
//       "Created designs, posters, and visuals for tech events reaching over 4,000+ attendees.",
//     tech: ["Figma", "Canva", "Illustrator"],
//     accentColor: "#ec4899",
//     bgGradient: "from-pink-500/10 to-pink-600/5",
//     icon: <Palette className="w-6 h-6" />,
//   },
//   {
//     title: "Emifinity",
//     role: "Creative Member",
//     year: "2023 – 2024",
//     description:
//       "Contributed creative assets and helped design branding for hackathons and events.",
//     tech: ["Figma", "Adobe Illustrator"],
//     accentColor: "#8b5cf6",
//     bgGradient: "from-violet-500/10 to-violet-600/5",
//     icon: <Lightbulb className="w-6 h-6" />,
//   },
// ];

// function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   return (
//     <div className="relative flex items-start gap-6">
//       <div className="relative flex flex-col items-center flex-shrink-0">
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           className="w-14 h-14 rounded-xl flex items-center justify-center z-10 border-2 transition-all duration-300 hover:scale-110"
//           style={{
//             backgroundColor: exp.accentColor,
//             borderColor: exp.accentColor,
//             boxShadow: `0 0 20px ${exp.accentColor}40`,
//           }}
//         >
//           <div className="text-white">{exp.icon}</div>
//         </motion.div>

//         {index < experiences.length - 1 && (
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
//             viewport={{ once: true }}
//             className="w-0.5 bg-gradient-to-b from-zinc-600 to-zinc-800 absolute top-14"
//             style={{ minHeight: "120px" }}
//           />
//         )}
//       </div>

//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         className="relative w-full flex-1"
//       >
//         <motion.div
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { opacity: 1, y: 0 },
//             visible: { opacity: 0, y: 20, transition: { duration: 0.6, ease: "easeOut" } },
//           }}
//           className="absolute -inset-0.5 rounded-xl blur-sm z-0 pointer-events-none"
//           style={{ backgroundColor: exp.accentColor }}
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { delay: 0.25, duration: 0.5 } },
//           }}
//           className="relative z-10"
//         >
//           <div
//             className={`bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm border-2 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]`}
//             style={{
//               backgroundColor: '#18181b',
//               borderColor: `${exp.accentColor}40`,
//             }}
//           >
//             <div className="flex justify-between items-start mb-3">
//               <div>
//                 <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
//                   {exp.title}
//                 </h2>
//                 <p className="text-sm font-medium text-zinc-400">{exp.role}</p>
//               </div>
//               <div
//                 className="text-xs px-3 py-1.5 rounded-lg font-bold uppercase"
//                 style={{
//                   backgroundColor: `${exp.accentColor}20`,
//                   color: exp.accentColor,
//                   border: `2px solid ${exp.accentColor}40`,
//                 }}
//               >
//                 {exp.year}
//               </div>
//             </div>

//             <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
//               {exp.description}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {exp.tech.map((t, i) => (
//                 <span
//                   key={i}
//                   className="text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wide transition-all duration-200 hover:scale-105"
//                   style={{
//                     backgroundColor: `${exp.accentColor}15`,
//                     color: exp.accentColor,
//                     border: `1px solid ${exp.accentColor}30`,
//                   }}
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default function ExperienceTimeline() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const drawDots = () => {
//       const dotSpacing = 30;
//       const dotRadius = 1;
//       const primaryColor = "rgb(113, 113, 122)";

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.globalAlpha = 0.15;

//       for (let x = 0; x < canvas.width; x += dotSpacing) {
//         for (let y = 0; y < canvas.height; y += dotSpacing) {
//           ctx.beginPath();
//           ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
//           ctx.fillStyle = primaryColor;
//           ctx.fill();
//         }
//       }

//       ctx.globalAlpha = 1;
//     };

//     const resizeCanvas = () => {
//       const dpr = window.devicePixelRatio || 1;
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
//       ctx.scale(dpr, dpr);
//       drawDots();
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-zinc-950 text-gray-200 p-6 md:p-10">
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
//       />

//       <div className="relative z-10">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 uppercase tracking-tight mb-4">
//             Experience
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-pink-500 to-violet-500 mx-auto rounded-full" />
//         </div>

//         <div className="max-w-3xl mx-auto space-y-12">
//           {experiences.map((exp, idx) => (
//             <ExperienceCard key={idx} exp={exp} index={idx} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

//!Neo brutal
"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Server, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
type Experience = {
  title: string;
  role: string;
  year: string;
  description: string;
  tech: string[];
  shadowColor: string;
  accentColor: string;
  icon: React.ReactNode;
};

const experiences: Experience[] = [
  {
    title: "Valueye",
    role: "Backend Developer",
    year: "2025 – Present",
    description:
      "Building LangChain-powered AI trading assistant with caching, scraping, and PDF summarization flows for smarter stock analysis.",
    tech: ["LangChain", "Node.js", "MongoDB", "TypeScript"],
    shadowColor: "#059669",
    accentColor: "#34d399",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "In-House Internship",
    role: "Software Developer",
    year: "2023 – 2025",
    description:
      "Developed backend for a marks-entry system and placement portal streamlining data management for colleges.",
    tech: ["Express", "MongoDB", "Figma"],
    shadowColor: "#d97706",
    accentColor: "#fbbf24",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "CodeCell (Tech Council)",
    role: "Creative Member",
    year: "2024 – 2025",
    description:
      "Created designs, posters, and visuals for tech events reaching over 4,000+ attendees.",
    tech: ["Figma", "Canva", "Illustrator"],
    shadowColor: "#db2777",
    accentColor: "#f9a8d4",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Emifinity",
    role: "Creative Member",
    year: "2023 – 2024",
    description:
      "Contributed creative assets and helped design branding for hackathons and events.",
    tech: ["Figma", "Adobe Illustrator"],
    shadowColor: "#7c3aed",
    accentColor: "#a78bfa",
    icon: <Lightbulb className="w-6 h-6" />,
  },
];


export default function ExperienceTimeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawDots = () => {
      const dotSpacing = 40;
      const dotRadius = 1.5;
      const primaryColor = "rgb(248,248,255)";

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.15;

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      drawDots();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative w-full bg-zinc-950 text-gray-200 p-6 md:p-10">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-12 text-center text-white tracking-tight relative z-10">
        Experience
      </h3>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </div>
  );
}