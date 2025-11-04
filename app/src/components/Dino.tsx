"use client";
import { useEffect, useState } from "react";

export default function Dino() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    fetch("/dino.html")
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error("Error loading Dino:", err));
  }, []);

  if (!htmlContent)
    return <div className="text-green-400">Loading Dino Game...</div>;

  return (
    <div className="relative mt-6 border border-green-600 rounded-xl p-2 bg-black/90 text-green-400 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
      <div
        className="w-full max-w-2xl mx-auto aspect-[16/9] overflow-hidden bg-black rounded-md"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <style jsx global>{`
        /* Make sure the dino game fits nicely inside terminal */
        canvas {
          display: block !important;
          margin: 0 auto;
          background: black !important;
        }

        /* Remove unwanted white backgrounds */
        body, html {
          background: transparent !important;
        }

        /* Force green terminal text look */
        * {
          color: #00ff66 !important;
          font-family: "Courier New", monospace !important;
        }

        /* Center and size game */
        #game-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
        }
      `}</style>
    </div>
  );
}
