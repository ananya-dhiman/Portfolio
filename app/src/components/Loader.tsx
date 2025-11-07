"use client";

import React from "react";

export default function LoaderPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#1e1e1e] text-gray-300 overflow-hidden relative">
      {/* Logo Section */}
      <div className="text-center max-w-[600px] px-10 animate-fadeIn">
        <div className="inline-block mb-10">
          <svg
            className="w-28 h-28 mb-6 inline-block relative"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="1" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
                <stop offset="100%" stopColor="#6b21a8" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6b21a8" stopOpacity="1" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g className="animate-float" filter="url(#glow)">
              <polygon
                points="50,15 75,40 50,85 25,40"
                fill="url(#grad1)"
                opacity="0.9"
              />
              <polygon
                points="25,40 50,15 50,85"
                fill="url(#grad2)"
                opacity="0.7"
              />
              <polygon
                points="50,15 75,40 50,85"
                fill="#5b21b6"
                opacity="0.8"
              />
              <polygon points="50,10 38,25 50,15" fill="#a78bfa" opacity="0.9" />
              <polygon points="50,10 62,25 50,15" fill="#7c3aed" opacity="0.8" />
              <polygon points="50,20 60,35 50,60" fill="#c4b5fd" opacity="0.3" />
              <polygon points="50,25 42,38 50,55" fill="#e9d5ff" opacity="0.2" />
              <line
                x1="50"
                y1="15"
                x2="50"
                y2="85"
                stroke="#ddd6fe"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1="25"
                y1="40"
                x2="75"
                y2="40"
                stroke="#ddd6fe"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </g>
          </svg>
          <div className="text-sm font-light text-gray-300">
            Notes - Obsidian v1.4.6
          </div>
        </div>

        <div className="text-base mb-6 animate-pulse">Loading workspace...</div>

        <div className="w-full h-1 bg-[#2d2d30] rounded-md overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-md animate-loading shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 flex gap-6 text-xs text-gray-500 animate-fadeIn opacity-70">
        <span>0 backlinks</span>
        <span>0 words</span>
        <span>0 characters</span>
      </div>
    </div>
  );
}
