
'use client'
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const projects = [
    {
      name: "VibeScape",
      image: "/file.svg",
      description:
        "A one-stop platform that generates concise vibe reports based on atmosphere, trends, and reviews using RAG.",
      tech: ["React", "Node.js", "MongoDB", "LangChain"],
      completed: true,
      githubLink: "https://github.com/ananya-dhiman/Vibe-Scape",
      shadowColor: "#39FF14",
      liveLink: "https://vibe-scape-kappa.vercel.app/",
      video:"https://www.youtube.com/watch?v=4BcVZ33jgdE"
    },
    {
      name: "AI-THLETE",
      image: "/file.svg",
      description:
        "An AI-powered fitness assessment app with 7+ automated physical tests using TensorFlow Lite for real-time, on-device analysis.",
      tech: ["Flutter", "Next.js", "TensorFlow Lite"],
      completed: true,
      githubLink: "https://github.com/ananya-dhiman/AI-Thlete-Frontend",
      shadowColor: "#FF6F61",
      video:"https://youtu.be/LwGMCFHdbeI"
    },
    {
      name: "Fasal Forecast",
      image: "/file.svg",
      description:
        "A crop disease prediction app designed to help farmers diagnose plant illnesses with a gamified, multi-platform interface.",
      tech: ["React Native", "Flask", "TensorFlow", "Firebase"],
      completed: true,
         shadowColor: "#FF6F61",
      githubLink:"https://github.com/ananya-dhiman/Fasal-Forecast",
      video:"https://youtu.be/BSjhfsoY2yo"
    },
    {
      name: "Blog Universe",
      image: "/file.svg",
      description:
        "A MERN-powered platform for bloggers to easily create personal websites, publish posts, and engage with readers.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      completed: true,
         shadowColor: "#FF6F61",
      githubLink:"https://github.com/ananya-dhiman/Blog-Universe",
      liveLink:"https://blog-universe-olive.vercel.app/"
    },
    {
      name: "F-Shield",
      image: "/file.svg",
      description:
        "A secure transaction monitoring system built for small businesses, featuring robust authentication and real-time anomaly detection.",
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      completed: true,
         shadowColor: "#FF6F61",
        githubLink:"https://github.com/Raunakg2005/F-Shield",
      liveLink:"https://f-shield.vercel.app/"
    },
    {
      name: "CIS Portal",
      image: "/file.svg",
      description:
        "A role-based academic and placement management system converting Excel data into structured records for streamlined college administration.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      completed: true,
       shadowColor: "#FF6F61",
      
    },
  ];

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const drawDots = () => {
    const dotSpacing = 40;
    const dotRadius = 1.5;
    const primaryColor = "rgb(248,248,255)"; // Tailwind's gray

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.25;

    for (let x = 0; x < canvas.width; x += dotSpacing) {
      for (let y = 0; y < canvas.height; y += dotSpacing) {
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
  };

  const resizeCanvas = () => {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    drawDots();
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  return () => window.removeEventListener("resize", resizeCanvas);
}, []);


  return (
    <div
      id="projects-section"
      className="relative w-full text-gray-200 py-16 px-8 overflow-visible"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mt-5 mb-15 text-center text-gray-100">
          Projects
        </h1>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
