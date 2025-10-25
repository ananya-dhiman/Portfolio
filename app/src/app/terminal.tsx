'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Connect() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col items-center justify-center px-6 py-12">
      {/* Terminal Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl bg-[#111] border border-[#2a2a2a] rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2 border-b border-[#2a2a2a]">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-sm text-gray-400">connect@ananya</p>
        </div>

        {/* Terminal Body */}
        <div className="px-6 py-8 font-mono">
          <p className="text-purple-400 text-lg mb-3">
            ➜  ~ <span className="text-gray-300">whoami</span>
          </p>
          <motion.p
            className="text-gray-300 text-base mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hey there 👋 I’m <span className="text-purple-400">Ananya Dhiman</span>, a
            creative developer passionate about building modern, minimal, and
            intelligent web experiences.
          </motion.p>

          <p className="text-purple-400 text-lg mb-3">
            ➜  ~ <span className="text-gray-300">connect --links</span>
          </p>

          <motion.div
            className="flex flex-wrap gap-6 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <Github size={20} /> <span>GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Linkedin size={20} /> <span>LinkedIn</span>
            </Link>

            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              className="flex items-center gap-2 hover:text-sky-400 transition"
            >
              <Twitter size={20} /> <span>Twitter</span>
            </Link>

            <Link
              href="mailto:yourmail@example.com"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              <Mail size={20} /> <span>Email Me</span>
            </Link>
          </motion.div>

          <p className="text-purple-400 text-lg mt-8 mb-2">
            ➜  ~ <span className="text-gray-300">status</span>
          </p>
          <motion.p
            className="text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Connection established successfully ✅
          </motion.p>

          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-purple-400 ml-1"
          >
            █
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}
