"use client";

import { motion } from "framer-motion";

export default function Pyramid() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        {/* Top triangle */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-lime-400
          transform translate-x-[10px] -translate-y-[10px] shadow-[4px_4px_0px_#fff]"
        />

        {/* Middle layer */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[110px] h-[35px] bg-sky-400 transform translate-x-[5px] -translate-y-[10px] shadow-[4px_4px_0px_#fff]"
        />

        {/* Bottom layer */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[130px] h-[35px] bg-lime-400 transform translate-x-[0px] shadow-[4px_4px_0px_#fff]"
        />

    
      </div>
    </div>
  );
}
// "use client";

// import { motion } from "framer-motion";

// export default function Pyramid() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <div className="relative flex flex-col items-center">
//         {/* Sparkles */}
//         <div className="absolute -top-12 flex space-x-2 text-yellow-400 text-lg">
//           <span>✨</span>
//           <span>✨</span>
//           <span>✨</span>
//         </div>

//         {/* Top Triangle */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="w-0 h-0 
//           border-l-[50px] border-r-[50px] border-b-[80px]
//           border-l-transparent border-r-transparent border-white
//           shadow-[5px_5px_0px_#000]"
//         />

//         {/* Middle Layer */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="w-[160px] h-[45px] bg-sky-400 
//           -translate-y-[8px] shadow-[5px_5px_0px_#000]"
//         />

//         {/* Bottom Layer */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="w-[190px] h-[45px] bg-lime-400 
//           -translate-y-[14px] shadow-[5px_5px_0px_#000]"
//         />
//       </div>
//     </div>
//   );
// }
