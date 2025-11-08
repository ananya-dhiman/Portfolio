
'use client';
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Heart, ExternalLink,VideoIcon } from "lucide-react";
import Image from "next/image";
import {  motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  name?: string;
  image?: string;
  description?: string;
  tech?: string[];
  completed?: boolean;
  shadowColor?: string;
  githubLink?: string;
  liveLink?: string;
  video?:string;
}

export default function ProjectCard({
  name = "Untitled",
  image = "",
  description = "",
  tech = [],
  completed = false,
  shadowColor = "#00BFFF",
  githubLink,
  liveLink,
  video
}: ProjectCardProps) {
  const [liked, setLiked] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div className="relative w-full max-w-sm mx-auto" ref={ref}>
      {/* Colored shadow rectangle */}
      <div
        className="absolute top-1.5 left-1.5 w-full h-full z-0 rounded-none"
        style={{ background: shadowColor }}
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
        style={{ background: shadowColor }}
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
        <Card className="bg-[#1a1a1a] border-3 border-white hover:border-gray-700 transition-all duration-200 rounded-none shadow-none">
          {/* Image smaller height */}
          <div className="relative w-full h-70 mb-0 rounded-none overflow-hidden border-b-2 border-black">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-none"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                No image
              </div>
            )}
          </div>

          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h2
                className="text-lg font-bold text-gray-100 uppercase tracking-tight"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {name}
              </h2>
              <div className="flex gap-2">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                      style={{ "--bg": shadowColor } as React.CSSProperties}
  className="border border-black p-1 bg-white transition-colors
             hover:[background-color:var(--bg)]"
                  >
                    <FaGithub className="w-4 h-4 text-black cursor-pointer" />
                  </a>
                )}
                  {video && (
                  <a
                  
                    href={video}
                    target="_blank"
                    rel="noopener noreferrer"
                     style={{ "--bg": shadowColor } as React.CSSProperties}
  className="border border-black p-1 bg-white transition-colors
             hover:[background-color:var(--bg)]"
                    
                  
                  >
                    <VideoIcon className="w-4 h-4 text-black cursor-pointer" />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--bg": shadowColor } as React.CSSProperties}
  className="border border-black p-1 bg-white transition-colors
             hover:[background-color:var(--bg)]"
                  >
                    <ExternalLink className="w-4 h-4 text-black cursor-pointer" />
                  </a>
                )}
              
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-3 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold bg-white px-2 py-1 text-black border border-black uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-800">
              <div className="flex items-center gap-1.5 text-gray-400">
                {completed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-gray-500" />
                )}
                <span className="text-[10px]">
                  {completed ? "Completed" : "In Progress"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLiked((s) => !s)}
                  className="hover:bg-transparent "
                >
                  <Heart
                    className={`w-4 h-4 transition-colors duration-200 ${
                      liked ? "text-pink-500" : "text-gray-500"
                    }`}
                  />
                </Button>
                <div className="text-[10px] text-gray-400 px-2 py-0.5 rounded-md border border-gray-700 bg-[#151515]">
                  {completed ? "Stable" : "WIP"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
