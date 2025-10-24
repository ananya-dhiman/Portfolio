'use client';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Heart, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

// Add shadowColor, githubLink, liveLink props
interface ProjectCardProps {
  name?: string;
  image?: string;
  description?: string;
  tech?: string[];
  completed?: boolean;
  shadowColor?: string;
  githubLink?: string;
  liveLink?: string;
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
}: ProjectCardProps) {
  const [liked, setLiked] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Neo-brutalism colored rectangle shadow - static position */}
      <div
        className="absolute top-2 left-2 w-full h-full z-0"
        style={{ background: shadowColor }}
      />
      
      {/* Overlay that covers and fades down */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 1, y: 0 },
          visible: { opacity: 0, y: 20, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
        style={{ background: shadowColor }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.3, duration: 0.6 } },
        }}
        className="relative z-10"
      >
        <Card className="bg-[#1a1a1a] border-4 border-black hover:border-gray-700 transition-all duration-200 rounded-none shadow-none">
          <div className="relative w-full h-56 mb-0 rounded-none overflow-hidden border-b-4 border-black">
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
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>{name}</h2>
              <div className="flex gap-3">
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors border-2 border-black p-1.5 bg-white hover:bg-blue-100">
                    <Github className="w-5 h-5 text-black" />
                  </a>
                )}
                {liveLink && (
                  <a href={liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors border-2 border-black p-1.5 bg-white hover:bg-green-100">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-bold bg-white px-3 py-1.5 text-black border-2 border-black uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-gray-800">
              <div className="flex items-center gap-2 text-gray-400">
                {completed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-500" />
                )}
                <span className="text-xs">
                  {completed ? "Completed" : "In Progress"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLiked((s) => !s)}
                  className="hover:bg-transparent"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-200 ${
                      liked ? "text-pink-500" : "text-gray-500"
                    }`}
                  />
                </Button>
                <div className="text-xs text-gray-400 px-2 py-1 rounded-md border border-gray-700 bg-[#151515]">
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