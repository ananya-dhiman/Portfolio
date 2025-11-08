import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Server, Lightbulb } from "lucide-react";
import { useEffect } from "react";

type Experience = {
  title: string;
  role: string;
  year: string;
  description: string;
  tech: string[];
  shadowColor: string;
  accentColor: string;
  icon: React.ReactNode;
};
const experiences: Experience[] = [
  {
    title: "Valueye",
    role: "Backend Developer",
    year: "2025 ",
    description:
      "Building LangChain-powered AI trading assistant with caching, scraping, and PDF summarization flows for smarter stock analysis.",
    tech: ["LangChain", "Node.js", "MongoDB", "TypeScript"],
    shadowColor: "#059669",
    accentColor: "#34d399",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "In-House Internship",
    role: "Software Developer",
    year: "2023 – 2025",
    description:
      "Developed backend for a marks-entry system and placement portal streamlining data management for colleges.",
    tech: ["Express", "MongoDB", "Figma"],
    shadowColor: "#d97706",
    accentColor: "#fbbf24",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "CodeCell (Tech Council)",
    role: "Creative Member",
    year: "2024 – 2025",
    description:
      "Created designs, posters, and visuals for tech events reaching over 4,000+ attendees.",
    tech: ["Figma", "Canva", "Illustrator"],
    shadowColor: "#db2777",
    accentColor: "#f9a8d4",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Emifinity",
    role: "Creative Member",
    year: "2023 – 2024",
    description:
      "Contributed creative assets and helped design branding for hackathons and events.",
    tech: ["Figma", "Adobe Illustrator"],
    shadowColor: "#7c3aed",
    accentColor: "#a78bfa",
    icon: <Lightbulb className="w-6 h-6" />,
  },
];

export function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div className="relative flex items-start gap-6">
      <div className="relative flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-none p-6 hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 flex items-center justify-center z-10"
          style={{
            backgroundColor: "black",
            border: `3px solid ${exp.shadowColor}`,
            boxShadow: `4px 4px 0px 0px ${exp.shadowColor}`,
          }}
        >
          <div style={{ color: exp.shadowColor }}>{exp.icon}</div>
        </motion.div>

        {index < experiences.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="w-0.5 absolute top-12"
            style={{ 
              minHeight: "200px",
              backgroundColor: exp.accentColor,
            }}
          />
        )}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative w-full flex-1"
      >
        <div
          className="absolute top-1.5 left-1.5 w-full h-full z-0 rounded-none"
          style={{ background: exp.shadowColor }}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 1, y: 0 },
            visible: { opacity: 0, y: 20, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
          style={{ background: exp.shadowColor }}
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
          <div
            className="bg-[#0a0a0a] rounded-none p-6 hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
            style={{
              border: `3px solid ${exp.shadowColor}`,
            }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
                  {exp.title}
                </h2>
                <p className="text-sm font-medium" style={{ color: exp.accentColor }}>
                  {exp.role}
                </p>
              </div>
              <div
                className="text-xs px-3 py-1.5 font-bold uppercase rounded-none"
                style={{
                  backgroundColor: "black",
                  color: exp.shadowColor,
                  border: `2px solid ${exp.shadowColor}`,
                }}
              >
                {exp.year}
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-bold px-3 py-1.5 uppercase tracking-wide transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 rounded-none"
                  style={{
                    backgroundColor: "black",
                    color: exp.accentColor,
                    border: `2px solid ${exp.shadowColor}`,
                    boxShadow: `2px 2px 0px 0px ${exp.shadowColor}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}