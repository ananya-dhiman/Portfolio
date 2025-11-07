
"use client";

import React from "react";

export default function LoaderPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#111] text-gray-300 overflow-hidden relative">
      {/* Logo Section */}
      <div className="text-center max-w-[700px] px-10 animate-fadeIn">
        <div className="inline-block mb-14 scale-110">
          <svg
            className="w-40 h-40 mb-8 inline-block relative"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Green gradients */}
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff9d" stopOpacity="1" />
                <stop offset="50%" stopColor="#00e676" stopOpacity="1" />
                <stop offset="100%" stopColor="#00c853" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00c853" stopOpacity="1" />
                <stop offset="100%" stopColor="#a7ffeb" stopOpacity="1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g className="animate-float" filter="url(#glow)">
              <polygon
                points="50,10 78,40 50,90 22,40"
                fill="url(#grad1)"
                opacity="0.95"
              />
              <polygon
                points="22,40 50,10 50,90"
                fill="url(#grad2)"
                opacity="0.7"
              />
              <polygon
                points="50,10 78,40 50,90"
                fill="#00bfa5"
                opacity="0.8"
              />
              <polygon points="50,5 36,25 50,15" fill="#b9f6ca" opacity="0.8" />
              <polygon points="50,5 64,25 50,15" fill="#69f0ae" opacity="0.8" />
              <polygon points="50,25 60,45 50,65" fill="#ccff90" opacity="0.3" />
              <polygon points="50,28 42,44 50,60" fill="#e0f7fa" opacity="0.25" />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="#b9f6ca"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1="22"
                y1="40"
                x2="78"
                y2="40"
                stroke="#b9f6ca"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </g>
          </svg>

          <div className="text-sm font-light text-gray-400">
            Portfolio v1.0 — Inspired By Obsidian
          </div>

          <div className="text-base mb-8 mt-2 animate-pulse text-green-300">
            Loading workspace...
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[#1b1b1b] rounded-md overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-[#00c853] via-[#00e676] to-[#69f0ae] rounded-md animate-loading shadow-[0_0_20px_rgba(0,230,118,0.6)]" />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-10 flex gap-6 text-xs text-gray-500 animate-fadeIn opacity-70 tracking-wider">
        <span>0 backlinks</span>
        <span>0 words</span>
        <span>0 characters</span>
      </div>
    </div>
  );
}

