
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RotatingVinylPlayer from "@/components/RotatingVinyl";
type AboutProps = {
  mobVinylOpen?: boolean; 
  setMobVinylOpen?: (value: boolean) => void;
};

export default function AboutContent({mobVinylOpen, setMobVinylOpen}:AboutProps) {
 

  return (
    <div className="relative w-full text-gray-200 flex flex-col items-center justify-center overflow-hidden">
      {/* === Hero Section with Cover === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[85vh] sm:h-[90vh] flex items-center justify-center md:justify-start"
      >
        {/* Background Image */}
        <Image
          src="/cover.svg"
          alt="Cover Background"
          fill
          priority
          className="object-cover object-right md:object-center opacity-90"
        />

        {/* === Vinyl Player === */}
        <div className="relative">
          <RotatingVinylPlayer
            songUrl="/playlist/Duvet.mp3"
            songName="Duvet"
            artistName="Bôa"
            mobVinylOpen={mobVinylOpen}
            setMobVinylOpen={setMobVinylOpen}
          />
        </div>


        {/* === About Me Card === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="
            relative z-10 
            w-full 
            px-6 sm:px-8 md:px-16 
            max-w-4xl 
            mt-10 sm:mt-6 md:mt-10
            flex justify-start md:justify-start
          "
        >
          <div
            className="relative bottom-10 bg-zinc-950 bg-opacity-10 w-full sm:w-[90%] md:w-[80%] p-6 sm:p-8 rounded-sm border-gray-950 border-2"
           
          >
       

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Hey, I’m{" "}
             
                Ananya Dhiman
           
              , a third-year Computer Science student at KJ Somaiya School Of Engineering. 
              <span>Just building and breaking things, mostly.</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* === Floating Ambient Dots === */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-400 rounded-full blur-lg opacity-40 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full blur-md opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse" />
      </div>
    </div>
  );
}
export function About() {
  return <AboutContent />;
}