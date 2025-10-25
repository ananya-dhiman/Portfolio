
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { SiYoutubemusic } from "react-icons/si";
// import { RotatingVinyl } from "@/components/RotatingVinyl";

// export default function About() {
//   return (
//     <div className="relative w-full text-gray-200 flex flex-col justify-start items-start p-0  space-y-16">
      
      
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative w-full h-130 md:h-130 overflow-hidden "
//       >
//         <Image
//           src="/cover.gif"
//           alt="Cover Image"
//           fill
//           priority
//           className="object-cover object-center"
//         />
      
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
//       </motion.div>

//       {/* === Main Content === */}
//       <div className="relative w-full px-6 md:px-12 space-y-16">
      
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-5xl text-start space-y-8"
//         >
//           <h1 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-8">
//             🜂 About Me
//           </h1>

//           <blockquote className="text-gray-400 text-lg md:text-xl italic border-l-2 border-gray-600 pl-4">
//             “Building feels like breathing — whether it’s code, design, or ideas.”
//           </blockquote>

//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
//             Hey, I’m <span className="text-white font-medium">Ananya Dhiman</span> — a third-year
//             Computer Science student from
//             <span className="text-white font-medium"> KJ Somaiya College of Engineering</span>, driven by
//             the art of turning logic into experiences. My world blends{" "}
//             <span className="text-emerald-400">AI</span>,{" "}
//             <span className="text-blue-400">backend systems</span>, and{" "}
//             <span className="text-purple-400">creative design</span>, shaped by projects that merge
//             performance with emotion.
//           </p>
//         </motion.div>

       
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="w-full max-w-4xl"
//         >
//           <div className="bg-[#1a1a1a]/60 w-100 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 flex items-center justify-between hover:border-gray-700 transition-all">
//             <div>
//               <p className="text-gray-300 text-lg font-medium flex flex-row items-center gap-2">
//                 <RotatingVinyl /> <span className="ml-10">“Duvet” — Bôa</span>
//               </p>
//             </div>

//             <a
//               href="https://music.youtube.com/watch?v=o7fgFaXKVa0"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-red-400 hover:text-red-500 transition"
//               title="Listen on YouTube Music"
//             >
//               <SiYoutubemusic className="text-3xl" />
//             </a>
//           </div>
//         </motion.div>

//         {/* === Book Section === */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="w-full max-w-4xl"
//         >
//           <div className="flex items-center justify-center gap-4 bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 overflow-x-auto">
//             <div className="flex flex-col items-center min-w-[80px]">
//               <Image src="/atomic.png" alt="Atomic Habits" width={70} height={100} />
//             </div>
//             <div className="flex flex-col items-center min-w-[80px]">
//               <Image src="/alchemist.png" alt="The Alchemist" width={70} height={95} />
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* === Floating Ambient Dots === */}
//       <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-400 rounded-full blur-lg opacity-40 animate-pulse" />
//         <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full blur-md opacity-40 animate-pulse" />
//         <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse" />
//       </div>
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { SiYoutubemusic } from "react-icons/si";
// import { RotatingVinyl } from "@/components/RotatingVinyl";

// export default function About() {
//   return (
//     <div className="relative w-full text-gray-200 flex flex-col items-center overflow-hidden">
    
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-start"
//       >
//         {/* Cover GIF */}
//         <Image
//           src="/cover.gif"
//           alt="Cover Background"
//           fill
//           priority
//           className="object-cover object-center"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute  inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

//         {/* Text Overlay */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//           className="relative backdrop-blur-xs z-10 w-full px-10 md:px-12 space-y-8"
//         >
//           <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg">
//             🜂 About Me
//           </h1>

//           <blockquote className="text-gray-300 text-lg md:text-xl italic border-l-2 pl-4   py-2">
//             “Building feels like breathing — whether it’s code, design, or ideas.”
//           </blockquote>

//           <p className="text-gray-200 text-lg md:text-2xl leading-relaxed max-w-7xl">
//             Hey, I’m <span className="text-white font-medium">Ananya Dhiman</span> — a third-year
//             Computer Science student from{" "}
//             <span className="text-white font-medium">KJ Somaiya College of Engineering</span>, driven by
//             the art of turning logic into experiences. My world blends{" "}
//             <span className="text-emerald-400">AI</span>,{" "}
//             <span className="text-blue-400">backend systems</span>, and{" "}
//             <span className="text-purple-400">creative design</span>, shaped by projects that merge
//             performance with emotion.
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* === Main Content Below Hero === */}
//       <div className="relative w-full px-6 md:px-12 py-24 space-y-16 bg-black">
//         {/* === Music Section === */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-4xl mx-auto"
//         >
//           <div className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 flex items-center justify-between hover:border-gray-700 transition-all">
//             <div>
//               <p className="text-gray-300 text-lg font-medium flex flex-row items-center gap-2">
//                 <RotatingVinyl /> <span className="ml-8">“Duvet” — Bôa</span>
//               </p>
//             </div>

//             <a
//               href="https://music.youtube.com/watch?v=o7fgFaXKVa0"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-red-400 hover:text-red-500 transition"
//               title="Listen on YouTube Music"
//             >
//               <SiYoutubemusic className="text-3xl" />
//             </a>
//           </div>
//         </motion.div>

//         {/* === Books Section === */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="w-full max-w-4xl mx-auto"
//         >
//           <div className="flex items-center justify-center gap-4 bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 overflow-x-auto">
//             <div className="flex flex-col items-center min-w-[80px]">
//               <Image
//                 src="/atomic.png"
//                 alt="Atomic Habits"
//                 width={70}
//                 height={100}
//                 className="rounded-md border border-gray-700 shadow-sm"
//               />
//             </div>
//             <div className="flex flex-col items-center min-w-[80px]">
//               <Image
//                 src="/alchemist.png"
//                 alt="The Alchemist"
//                 width={70}
//                 height={95}
//                 className="rounded-md border border-gray-700 shadow-sm"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-400 rounded-full blur-lg opacity-40 animate-pulse" />
//         <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full blur-md opacity-40 animate-pulse" />
//         <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse" />
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiYoutubemusic } from "react-icons/si";
import { RotatingVinyl } from "@/components/RotatingVinyl";

export default function About() {
  return (
    <div className="relative w-full text-gray-200 flex flex-col items-center justify-center overflow-hidden">
      
      {/* === Hero Section with Cover === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-start"
      >
        {/* Cover GIF */}
        <Image
          src="/cover.gif"
          alt="Cover Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative z-10 w-full px-8 md:px-16 max-w-5xl space-y-8"
        >
          {/* Soft radial background for smoother blur */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-black/40 via-black/50 to-transparent backdrop-blur-xs shadow-lg border border-white/10">
            <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg mb-6">
              🜂 About Me
            </h1>

            <blockquote className="text-gray-300 text-lg md:text-xl italic border-l-2 border-gray-600 pl-4 mb-6">
              “Building feels like breathing — whether it’s code, design, or ideas.”
            </blockquote>

            <p className="text-gray-200 text-lg md:text-2xl leading-relaxed">
              Hey, I’m <span className="text-white font-medium">Ananya Dhiman</span> — a third-year
              Computer Science student
              driven by
              the art of turning logic into experiences. My world blends{" "}
              AI,{" "}
             backend systems, and{" "}
              creative design, shaped by projects that merge
              performance with emotion.
            </p>
          </div>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full relative max-w-4xl mx-auto"
        >
          <div className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 flex items-center justify-between hover:border-gray-700 transition-all">
            <div>
              <p className="text-gray-300 text-lg font-medium flex flex-row items-center gap-2">
                <RotatingVinyl /> <span className="ml-8">“Duvet” — Bôa</span>
              </p>
            </div>

            <a
              href="https://music.youtube.com/watch?v=o7fgFaXKVa0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-500 transition"
              title="Listen on YouTube Music"
            >
              <SiYoutubemusic className="text-3xl" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* === Main Content Below Hero === */}
      <div className="relative w-full px-6 md:px-12 py-24 space-y-16 bg-black">
        {/* === Music Section === */}
       

      </div>

      {/* Floating Ambient Dots */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-400 rounded-full blur-lg opacity-40 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full blur-md opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse" />
      </div>
    </div>
  );
}
