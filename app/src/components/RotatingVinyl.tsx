import { motion } from "framer-motion";
import Image from "next/image";

export function RotatingVinyl() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 6,
      }}
      className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[2px] border-gray-700 shadow-md"
    >
      <Image
        src="/vinyl.png" 
        alt="Vinyl Disc"
        width={64}
        height={64}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
