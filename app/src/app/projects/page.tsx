'use client'
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const projects = [
    {
      name: "VibeScape",
      image: "/file.svg",
      description:
        "A one-stop platform that analyzes places and generates vibe-based reports from aggregated reviews using RAG.",
      tech: ["React", "Node.js", "MongoDB", "LangChain"],
      completed: true,
    },
    {
      name: "AI-THLETE",
      image: "/file.svg",
      description:
        "An AI-powered fitness assessment app with real-time exercise analysis using TensorFlow Lite.",
      tech: ["Flutter", "Next.js", "TensorFlow Lite"],
      completed: true,
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots();
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotSpacing = 40; // Distance between dots
      const dotRadius = 2; // Size of dots
      const primaryColor = "rgb(139, 92, 246)"; // Primary purple color

      // Draw grid of dots
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.globalAlpha = 0.3;
          ctx.fill();
        }
      }

      // Draw connecting lines between nearby dots (Obsidian style)
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 1;

      // for (let x = 0; x < canvas.width; x += dotSpacing) {
      //   for (let y = 0; y < canvas.height; y += dotSpacing) {
      //     // Draw horizontal line to next dot
      //     if (x + dotSpacing < canvas.width) {
      //       ctx.beginPath();
      //       ctx.moveTo(x, y);
      //       ctx.lineTo(x + dotSpacing, y);
      //       ctx.stroke();
      //     }
      //     // Draw vertical line to next dot
      //     if (y + dotSpacing < canvas.height) {
      //       ctx.beginPath();
      //       ctx.moveTo(x, y);
      //       ctx.lineTo(x, y + dotSpacing);
      //       ctx.stroke();
      //     }
      //   }
      // }

      ctx.globalAlpha = 1;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-gray-200 p-8 overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
          Projects
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}