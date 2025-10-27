// "use client";

// import { motion } from "framer-motion";
// import { FaCode, FaPaintBrush, FaServer, FaLightbulb } from "react-icons/fa";

// type Experience = {
//   title: string;
//   role: string;
//   year: string;
//   description: string;
//   tech: string[];
//   icon: string;
// };

// const experiences: Experience[] = [
//   {
//     title: "Valueye",
//     role: "Backend Developer",
//     year: "2025 – Present",
//     description:
//       "Building LangChain-powered AI trading assistant with caching, scraping, and PDF summarization flows for smarter stock analysis.",
//     tech: ["LangChain", "Node.js", "MongoDB", "TypeScript"],
//     icon: "",
//   },
//   {
//     title: "In-House Internship",
//     role: "Software Developer",
//     year: "2023 – 2025",
//     description:
//       "Developed backend for a marks-entry system and placement portal streamlining data management for colleges.",
//     tech: ["Express", "MongoDB", "Figma"],
//     icon: "",
//   },
//   {
//     title: "CodeCell (Tech Council)",
//     role: "Creative Member",
//     year: "2024 – 2025",
//     description:
//       "Created designs, posters, and visuals for tech events reaching over 4,000+ attendees.",
//     tech: ["Figma", "Canva", "Illustrator"],
//     icon: "",
//   },
//   {
//     title: "Emifinity",
//     role: "Creative Member",
//     year: "2023 – 2024",
//     description:
//       "Contributed creative assets and helped design branding for hackathons and events.",
//     tech: ["Figma", "Adobe Illustrator"],
//     icon: "",
//   },
// ];

// export default function ExperienceTimeline() {
//   return (
//     <div className="min-h-screen  text-gray-200 p-6 md:p-10">
//       <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-transparent bg-clip-text bg-white">
//         Experience
//       </h1>

//       <div className="relative max-w-4xl mx-auto">
    
//         <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-primary to-sidebar-primary-foreground rounded-full" />

//         <div className="space-y-10">
//           {experiences.map((exp, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="relative flex items-start"
//             >
//               {/* Timeline Icon */}
//               <div className="absolute right-210 z-10 flex items-center justify-center w-15 h-15 bg-[#1a1a1f] rounded-full border border-[#2a2a2d] shadow-md">
//                 {exp.icon}
//               </div>

//               {/* Card */}
//               <div className="ml-20 bg-[#16161a]/80 backdrop-blur-md border border-[#2a2a2d] rounded-2xl p-5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(89, 252, 110, 0.91)] transition-all w-full">
//                 <div>
//                   <h2 className="text-xl font-medium text-primary">{exp.title}</h2>
//                   <p className="text-sm text-gray-400 mb-1">{exp.role}</p>
//                   <p className="text-xs text-gray-500 mb-3">{exp.year}</p>
//                   <p className="text-sm text-gray-300">{exp.description}</p>
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {exp.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs px-2 py-1 rounded-md bg-[#1e1e22] border border-[#2b2b2f] text-gray-400 hover:text-purple-300 transition"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaCode, FaPaintBrush, FaServer, FaLightbulb } from "react-icons/fa";
// import { useEffect } from "react";

// type Experience = {
//   title: string;
//   role: string;
//   year: string;
//   description: string;
//   tech: string[];
//   shadowColor: string;
// };

// const experiences: Experience[] = [
//   {
//     title: "Valueye",
//     role: "Backend Developer",
//     year: "2025 – Present",
//     description:
//       "Building LangChain-powered AI trading assistant with caching, scraping, and PDF summarization flows for smarter stock analysis.",
//     tech: ["LangChain", "Node.js", "MongoDB", "TypeScript"],
//     shadowColor: "#00BFFF",
//   },
//   {
//     title: "In-House Internship",
//     role: "Software Developer",
//     year: "2023 – 2025",
//     description:
//       "Developed backend for a marks-entry system and placement portal streamlining data management for colleges.",
//     tech: ["Express", "MongoDB", "Figma"],
//     shadowColor: "#FF6B6B",
//   },
//   {
//     title: "CodeCell (Tech Council)",
//     role: "Creative Member",
//     year: "2024 – 2025",
//     description:
//       "Created designs, posters, and visuals for tech events reaching over 4,000+ attendees.",
//     tech: ["Figma", "Canva", "Illustrator"],
//     shadowColor: "#FFD93D",
//   },
//   {
//     title: "Emifinity",
//     role: "Creative Member",
//     year: "2023 – 2024",
//     description:
//       "Contributed creative assets and helped design branding for hackathons and events.",
//     tech: ["Figma", "Adobe Illustrator"],
//     shadowColor: "#A78BFA",
//   },
// ];

// function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="relative w-full"
//     >
//       {/* Colored shadow rectangle */}
//       <div
//         className="absolute top-1.5 left-1.5 w-full h-full z-0 rounded-none"
//         style={{ background: exp.shadowColor }}
//       />

//       {/* Fade overlay animation */}
//       <motion.div
//         initial="hidden"
//         animate={controls}
//         variants={{
//           hidden: { opacity: 1, y: 0 },
//           visible: { opacity: 0, y: 20, transition: { duration: 0.6, ease: "easeOut" } },
//         }}
//         className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
//         style={{ background: exp.shadowColor }}
//       />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={controls}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1, transition: { delay: 0.25, duration: 0.5 } },
//         }}
//         className="relative z-10"
//       >
//         <div className="bg-[#1a1a1a] border-2 border-black hover:border-gray-700 transition-all duration-200 rounded-none shadow-none p-5">
//           <div className="flex justify-between items-start mb-3">
//             <div>
//               <h2
//                 className="text-xl font-bold text-gray-100 uppercase tracking-tight mb-1"
//                 style={{ fontFamily: "Orbitron, sans-serif" }}
//               >
//                 {exp.title}
//               </h2>
//               <p className="text-sm font-medium text-gray-400">{exp.role}</p>
//             </div>
//             <div className="text-xs text-gray-400 px-3 py-1.5 border-2 border-black bg-white font-bold uppercase">
//               {exp.year}
//             </div>
//           </div>

//           <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//             {exp.description}
//           </p>

//           <div className="flex flex-wrap gap-2">
//             {exp.tech.map((t, i) => (
//               <span
//                 key={i}
//                 className="text-xs font-bold bg-white px-3 py-1.5 text-black border-2 border-black uppercase tracking-wide"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function Experience() {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-200 p-6 md:p-10">
//       <h1
//         className="text-4xl md:text-5xl font-bold mb-12 text-center text-white uppercase tracking-tight"
//         style={{ fontFamily: "Orbitron, sans-serif" }}
//       >
//         Experience
//       </h1>

//       <div className="max-w-3xl mx-auto space-y-8">
//         {experiences.map((exp, idx) => (
//           <ExperienceCard key={idx} exp={exp} index={idx} />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaPaintBrush, FaServer, FaLightbulb } from "react-icons/fa";
import { useEffect,useRef } from "react";

type Experience = {
  title: string;
  role: string;
  year: string;
  description: string;
  tech: string[];
  shadowColor: string;
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
    shadowColor: "#064E3B",
    icon: <Image src="/org/value.png" alt="Valueye logo" width={30} height={30} className="w-10 h-10" />,
  },
  {
    title: "In-House Internship",
    role: "Software Developer",
    year: "2023 – 2025",
    description:
      "Developed backend for a marks-entry system and placement portal streamlining data management for colleges.",
    tech: ["Express", "MongoDB", "Figma"],
    shadowColor: "#7F1D1D",
    icon: <Image src="/org/value.png" alt="Valueye logo" width={20} height={20} className="w-10 h-10" />,
  },
  {
    title: "CodeCell (Tech Council)",
    role: "Creative Member",
    year: "2024 – 2025",
    description:
      "Created designs, posters, and visuals for tech events reaching over 4,000+ attendees.",
    tech: ["Figma", "Canva", "Illustrator"],
    shadowColor: "#B45309",
    icon: <Image src="/org/value.png" alt="Valueye logo" width={20} height={20} className="w-10 h-10" />,
  },
  {
    title: "Emifinity",
    role: "Creative Member",
    year: "2023 – 2024",
    description:
      "Contributed creative assets and helped design branding for hackathons and events.",
    tech: ["Figma", "Adobe Illustrator"],
    shadowColor: "#0C4A6E",
    icon: <Image src="/org/value.png" alt="Valueye logo" width={20} height={20} className="w-10 h-10" />,
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const controls = useAnimation();
  
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div className="relative flex items-start gap-6">
      {/* Timeline icon with line */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-12 h-12 bg-black  text-black border-2 border-black flex items-center justify-center z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          {exp.icon}
        </motion.div>
        
        {/* Vertical line - don't show for last item */}
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="w-0.5 bg-white absolute top-12"
            style={{ minHeight: "120px" }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative w-full flex-1"
      >
        {/* Colored shadow rectangle */}
        <div
          className="absolute top-1.5 left-1.5 w-full h-full z-0 rounded-none"
          style={{ background: exp.shadowColor }}
        />

        {/* Fade overlay animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 1, y: 0 },
            visible: { opacity: 0, y: 20, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
          style={{ background: exp.shadowColor }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.25, duration: 0.5 } },
          }}
          className="relative z-10"
        >
          <div    
        className="bg-[#1a1a1a] border-2 border-black  transition-all duration-200 rounded-none shadow-none p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2
                  className="text-xl font-bold text-gray-100 uppercase tracking-tight mb-1"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {exp.title}
                </h2>
                <p className="text-sm font-medium text-gray-400">{exp.role}</p>
              </div>
              <div className="text-xs text-gray-800 px-3 py-1.5 border-2 border-black bg-white font-bold uppercase text-black">
                {exp.year}
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-bold bg-white px-3 py-1.5 text-black border-2 border-black uppercase tracking-wide hover:text-black transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

 

export default function ExperienceTimeline() {
     const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots();
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotSpacing = 40;
      const dotRadius = 2;
      const primaryColor = "rgb(139, 92, 246)";

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.globalAlpha = 0.25;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);
  return (
    <div className="relative w-full text-gray-200 p-6 md:p-10">
          <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white uppercase tracking-tight"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Experience
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </div>
  );
}