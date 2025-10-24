"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="  text-gray-200 flex flex-col justify-start items-start p-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-start space-y-10"
      >
        <h1 className="text-3xl font-bold text-gray-100 mb-10">🜂 About Me</h1>

        <blockquote className="text-gray-400 italic border-l-2 border-gray-600  mb-10 pl-4">
          “Building feels like breathing — whether it’s code, design, or ideas.”
        </blockquote>

        <p className="text-gray-300 leading-relaxed">
          Hey, I’m <span className="text-white">Ananya Dhiman</span> — a third year
           Computer Science Student from
          <span className="text-white "> KJ Somaiya College of Engineering</span>, driven by the art of
          turning logic into experiences. My world blends <span className="text-emerald-400">AI</span>,
          <span className="text-blue-400"> backend systems</span>, and <span className="text-purple-400">creative design</span>,
          shaped by projects that merge performance with emotion.
        </p>
      </motion.div>

      {/* Subtle glowing dots background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-400 rounded-full blur-lg opacity-40 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full blur-md opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse" />
      </div>
    </div>
  );
}