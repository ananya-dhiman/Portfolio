// 'use client'
// import React, { useRef, useCallback, useState, useEffect } from 'react';
// import ForceGraph2D from 'react-force-graph-2d';
// import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
// import { SiNextdotjs, SiTailwindcss, SiExpress, SiFlask, SiPostgresql, SiFirebase } from 'react-icons/si';

// const techGraph = {
//   nodes: [
//   // Frontend — center
//   { id: "Frontend", group: "category", color: "#00E5FF", fx: 0, fy: 0 },
//   { id: "React", group: "tech", parent: "Frontend", fx: -80, fy: -60 },
//   { id: "Next.js", group: "tech", parent: "Frontend", fx: 0, fy: -150 },
//   { id: "Tailwind", group: "tech", parent: "Frontend", fx: 100, fy: -80 },
//   { id: "HTML", group: "tech", parent: "Frontend", fx: -100, fy: 80 },
//   { id: "CSS", group: "tech", parent: "Frontend", fx: 100, fy: 80 },
//   { id: "Flutter", group: "tech", parent: "Frontend", fx: 0, fy: 150 },

//   // Backend — top-left
//   { id: "Backend", group: "category", color: "#66FF99", fx: -250, fy: -50 },
//   { id: "Node.js", group: "tech", parent: "Backend", fx: -350, fy: -150 },
//   { id: "Flask", group: "tech", parent: "Backend", fx: -200, fy: -200 },

//   // Database — top-right
//   { id: "Database", group: "category", color: "#FFD54F", fx: 300, fy: -100 },
//   { id: "PostgreSQL", group: "tech", parent: "Database", fx: 200, fy: -200 },
//   { id: "Firebase", group: "tech", parent: "Database", fx: 300, fy: -230 },
//   { id: "Supabase", group: "tech", parent: "Database", fx: 500, fy: -200 },

//   // Languages — bottom-left
//   { id: "Languages", group: "category", color: "#66FF99", fx: -400, fy: 50 },
//   { id: "C++", group: "tech", parent: "Languages", fx: -400, fy: 300 },
//   { id: "JS", group: "tech", parent: "Languages", fx: -200, fy: 200 },

//   // Tools — bottom-right
//   { id: "Tools", group: "category", color: "#66FF99", fx: 400, fy: 50 },
//   { id: "Blender", group: "tech", parent: "Tools", fx: 200, fy: 200 },
//   { id: "Illustrator", group: "tech", parent: "Tools", fx: 300, fy: 250 },
//   { id: "Figma", group: "tech", parent: "Tools", fx: 500, fy: 250 },
//   { id: "Linux", group: "tech", parent: "Tools", fx: 250, fy: 100 }
// ],
    
//   links: [
//     { source: "Frontend", target: "React" },
//     { source: "Frontend", target: "Next.js" },
//     { source: "Frontend", target: "Tailwind" },
//     { source: "Frontend", target: "HTML" },
//     { source: "Frontend", target: "CSS" },
//     { source: "Frontend", target: "Flutter" },
//     { source: "Backend", target: "Node.js" },
    
//     { source: "Backend", target: "Flask" },
//     { source: "Database", target: "PostgreSQL" },
//     { source: "Database", target: "Firebase" },
//     { source: "Database", target: "Supabase" },
//     { source: "Languages", target: "C++" },
//     { source: "Languages", target: "JS" },
//     { source: "Tools", target: "Blender" },
//     { source: "Tools", target: "Illustrator" },
//     { source: "Tools", target: "Figma" },
//     { source: "Tools", target: "Linux" }

//   ],
// };

// // Tech logos mapping (image paths in public/icons/)
// const techIcons: Record<string, string> = {
//   "React": "/icons/react.svg",
//   "Next.js": "/icons/nextjs.svg",
//   "Tailwind": "/icons/tailwind.svg",
//   "Node.js": "/icons/nodejs.svg",
//   "Supabase": "/icons/supabase.svg",
//   "Flutter": "/icons/flutter.svg",
//   "Flask": "/icons/flask.svg",
//   "HTML": "/icons/html.svg",
//   "CSS": "/icons/css.svg",
//   "C++": "/icons/cpp.svg",
//   "JS": "/icons/javascript.svg",
//   "PostgreSQL": "/icons/postgresql.svg",
//   "Firebase": "/icons/firebase.svg",
//   "Blender": "/icons/blender.svg",
//   "Illustrator": "/icons/illustrator.svg",
//   "Figma": "/icons/figma.svg",
//   "Linux": "/icons/linux.svg",
  
//   "Frontend": "/icons/frontend.svg",
//   "Backend": "/icons/backend.svg",
//   "Database": "/icons/database.svg"

// };

// export default function Stack() {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//   const fgRef = useRef<any>(null);
//   const [hoveredNode, setHoveredNode] = useState<any>(null);
//   const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });
//   const iconImagesRef = useRef<Record<string, HTMLImageElement>>({});

//   useEffect(() => {
//     Object.entries(techIcons).forEach(([id, path]) => {
//       const img = new Image();
//       img.src = path;
//       img.onload = () => { iconImagesRef.current[id] = img; };
//       img.onerror = () => { /* keep silent — fallback handled in draw */ };
//     });
//   }, []);

//   const centeredNodes = techGraph.nodes.map(node => ({
//   ...node,
//   fx: (node.fx ?? 0) -0, // shift left
//   fy: (node.fy ?? 0 )-100
// }));

// const graphData = {
//   nodes: centeredNodes.map(node => ({
//     ...node,
//     val: node.group === 'category' ? 20 : 10,
//     iconPath: techIcons[node.id] || ''
//   })),
//   links: techGraph.links.map(link => ({
//     ...link,
//     color: 'rgba(255, 255, 255, 0.25)'
//   }))
// };

//   const handleNodeHover = useCallback((node) => {
//     setHoveredNode(node);
//     if (node) {
//       const parentNode = graphData.nodes.find(n => n.id === node.parent);
//       const content = node.group === 'category'
//         ? `${node.id} Technologies`
//         : `${node.id}${parentNode ? ` (${parentNode.id})` : ''}`;
//       const screen = fgRef.current?.graph2ScreenCoords?.(node.x, node.y) ?? { x: 0, y: 0 };
//       setTooltip({ show: true, x: screen.x, y: screen.y, content });
//     } else {
//       setTooltip({ show: false, x: 0, y: 0, content: '' });
//     }
//   }, [graphData]);

//   const handleNodeCanvasObject = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
//     const label = node.id;
//     const baseFontSize = node.group === 'category' ? 16 : 14;
//     const img = iconImagesRef.current[node.id] || iconImagesRef.current[node.iconPath] || null;

//     // Ensure we have valid coordinates
//     const x = node.fx || node.x || 0;
//     const y = node.fy || node.y || 0;
    
//     if (isNaN(x) || isNaN(y)) {
//       return;
//     }

//     ctx.save();
//     const size = node.group === 'category' ? 80 : 60;

//     if (img && img.complete && img.naturalWidth) {
//       const isHovered = hoveredNode && hoveredNode.id === node.id;
//       if (isHovered) {
//         const glowRadius = Math.max(8, size * 0.85);
//         ctx.save();
//         ctx.globalAlpha = 0.7;
//         try {
//           const g = ctx.createRadialGradient(
//             Number(x), 
//             Number(y), 
//             Math.max(size * 0.08, 1),
//             Number(x),
//             Number(y),
//             glowRadius
//           );
//           g.addColorStop(0, 'rgba(255,255,255,0.22)');
//           g.addColorStop(1, 'rgba(255,255,255,0)');
//           ctx.fillStyle = g;
//           ctx.beginPath();
//           ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
//           ctx.fill();
//         } catch (e) {
//           console.warn('Failed to create gradient:', e);
//         }
//         ctx.restore();
//       }

//       ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
//     } else {
//       ctx.font = `${baseFontSize}px Sans-Serif`;
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       ctx.fillStyle = '#fff';
//       ctx.fillText('•', x, y);
//     }

//     ctx.font = `${baseFontSize}px Sans-Serif`;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'top';
//     ctx.fillStyle = (hoveredNode && hoveredNode.id === node.id) ? '#fff' : '#ddd';
//     ctx.fillText(label, x, y + (node.group === 'category' ? 45 : 35));

//     ctx.restore();
//   }, [hoveredNode]);

//   const handleLinkCanvasObject = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
//     const start: any = link.source;
//     const end: any = link.target;

//     if (typeof start !== 'object' || typeof end !== 'object') return;

//     const isConnectedToHover = hoveredNode && (
//       hoveredNode.id === (start.id ?? start) || hoveredNode.id === (end.id ?? end)
//     );

//     ctx.save();
//     ctx.strokeStyle = hoveredNode 
//       ? (isConnectedToHover ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.06)')
//       : 'rgba(255,255,255,0.25)';
//     ctx.lineWidth = isConnectedToHover ? 2 : 1;
//     ctx.beginPath();
//     ctx.moveTo(start.x, start.y);
//     ctx.lineTo(end.x, end.y);
//     ctx.stroke();
//     ctx.restore();
//   }, [hoveredNode]);

//    // Dot grid background
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawDots();
//     };

//     const drawDots = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const dotSpacing = 40;
//       const dotRadius = 2;
//       const primaryColor = "rgb(139, 92, 246)";

//       for (let x = 0; x < canvas.width; x += dotSpacing) {
//         for (let y = 0; y < canvas.height; y += dotSpacing) {
//           ctx.beginPath();
//           ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
//           ctx.fillStyle = primaryColor;
//           ctx.globalAlpha = 0.25;
//           ctx.fill();
//         }
//       }

//       ctx.globalAlpha = 1;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, []);

//   return (
//     <div className="relative w-full flex justify-center items-center">
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
//       />
   

//       {tooltip.show && (
//         <div
//           className="absolute z-20 bg-gray-800 text-white px-3 py-2 rounded shadow-lg text-sm pointer-events-none"
//           style={{
//             left: tooltip.x + 'px',
//             top: tooltip.y + 'px',
//             transform: 'translate(10px, -50%)'
//           }}
//         >
//           {tooltip.content}
//         </div>
//       )}

//       {hoveredNode && (
//         <div
//           aria-hidden
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundColor: 'rgba(0,0,0,0.5)',
//             zIndex: 5,
//             pointerEvents: 'none',
//             transition: 'opacity 180ms'
//           }}
//         />
//       )}

//       <ForceGraph2D
      
//         ref={fgRef}
//         graphData={graphData}
//         nodeRelSize={6}
//         nodeCanvasObject={handleNodeCanvasObject}
//         linkCanvasObject={handleLinkCanvasObject}
//         onNodeHover={handleNodeHover}
//         enableZoom={false}
//         enablePanInteraction={false}
//         enablePointerInteraction={true}
//         d3AlphaDecay={0}
//         d3VelocityDecay={1}
//         nodeFixedRadius={node => node.group === 'category' ? 40 : 30}
//         warmupTicks={0}
//         cooldownTicks={0}
//         linkHoverPrecision={0}
//         forceEngine="d3"
//         linkDirectionalParticles={0}
//         linkDirectionalParticleWidth={0}
//         nodeCanvasObjectMode={() => 'replace'}
//         linkCanvasObjectMode={() => 'replace'}
//         minZoom={1}
//         maxZoom={1}
//         zoom={1}
//       />
//     </div>
//   );
// }





















// 'use client'
// import React, { useRef, useCallback, useState, useEffect } from 'react';
// import ForceGraph2D from 'react-force-graph-2d';

// const techGraph = {
//   nodes: [
//   // Frontend — center
//   { id: "Frontend", group: "category", color: "#00E5FF", fx: 0, fy: 0 },
//   { id: "React", group: "tech", parent: "Frontend", fx: -80, fy: -60, url: "https://react.dev" },
//   { id: "Next.js", group: "tech", parent: "Frontend", fx: 0, fy: -150, url: "https://nextjs.org" },
//   { id: "Tailwind", group: "tech", parent: "Frontend", fx: 100, fy: -80, url: "https://tailwindcss.com" },
//   { id: "HTML", group: "tech", parent: "Frontend", fx: -100, fy: 80, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//   { id: "CSS", group: "tech", parent: "Frontend", fx: 100, fy: 80, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//   { id: "Flutter", group: "tech", parent: "Frontend", fx: 0, fy: 150, url: "https://flutter.dev" },

//   // Backend — top-left
//   { id: "Backend", group: "category", color: "#66FF99", fx: -250, fy: -50 },
//   { id: "Node.js", group: "tech", parent: "Backend", fx: -350, fy: -150, url: "https://nodejs.org" },
//   { id: "Flask", group: "tech", parent: "Backend", fx: -200, fy: -200, url: "https://flask.palletsprojects.com" },

//   // Database — top-right
//   { id: "Database", group: "category", color: "#FFD54F", fx: 300, fy: -100 },
//   { id: "PostgreSQL", group: "tech", parent: "Database", fx: 200, fy: -200, url: "https://www.postgresql.org" },
//   { id: "Firebase", group: "tech", parent: "Database", fx: 300, fy: -230, url: "https://firebase.google.com" },
//   { id: "Supabase", group: "tech", parent: "Database", fx: 500, fy: -200, url: "https://supabase.com" },

//   // Languages — bottom-left
//   { id: "Languages", group: "category", color: "#66FF99", fx: -400, fy: 50 },
//   { id: "C++", group: "tech", parent: "Languages", fx: -400, fy: 300, url: "https://isocpp.org" },
//   { id: "JS", group: "tech", parent: "Languages", fx: -200, fy: 200, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

//   // Tools — bottom-right
//   { id: "Tools", group: "category", color: "#66FF99", fx: 400, fy: 50 },
//   { id: "Blender", group: "tech", parent: "Tools", fx: 200, fy: 200, url: "https://www.blender.org" },
//   { id: "Illustrator", group: "tech", parent: "Tools", fx: 300, fy: 250, url: "https://www.adobe.com/products/illustrator.html" },
//   { id: "Figma", group: "tech", parent: "Tools", fx: 500, fy: 250, url: "https://www.figma.com" },
//   { id: "Linux", group: "tech", parent: "Tools", fx: 250, fy: 100, url: "https://www.linux.org" }
// ],
    
//   links: [
//     { source: "Frontend", target: "React" },
//     { source: "Frontend", target: "Next.js" },
//     { source: "Frontend", target: "Tailwind" },
//     { source: "Frontend", target: "HTML" },
//     { source: "Frontend", target: "CSS" },
//     { source: "Frontend", target: "Flutter" },
//     { source: "Backend", target: "Node.js" },
//     { source: "Backend", target: "Flask" },
//     { source: "Database", target: "PostgreSQL" },
//     { source: "Database", target: "Firebase" },
//     { source: "Database", target: "Supabase" },
//     { source: "Languages", target: "C++" },
//     { source: "Languages", target: "JS" },
//     { source: "Tools", target: "Blender" },
//     { source: "Tools", target: "Illustrator" },
//     { source: "Tools", target: "Figma" },
//     { source: "Tools", target: "Linux" }
//   ],
// };

// const techIcons: Record<string, string> = {
//   "React": "/icons/react.svg",
//   "Next.js": "/icons/nextjs.svg",
//   "Tailwind": "/icons/tailwind.svg",
//   "Node.js": "/icons/nodejs.svg",
//   "Supabase": "/icons/supabase.svg",
//   "Flutter": "/icons/flutter.svg",
//   "Flask": "/icons/flask.svg",
//   "HTML": "/icons/html.svg",
//   "CSS": "/icons/css.svg",
//   "C++": "/icons/cpp.svg",
//   "JS": "/icons/javascript.svg",
//   "PostgreSQL": "/icons/postgresql.svg",
//   "Firebase": "/icons/firebase.svg",
//   "Blender": "/icons/blender.svg",
//   "Illustrator": "/icons/illustrator.svg",
//   "Figma": "/icons/figma.svg",
//   "Linux": "/icons/linux.svg",
//   "Frontend": "/icons/frontend.svg",
//   "Backend": "/icons/backend.svg",
//   "Database": "/icons/database.svg"
// };

// export default function Stack() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const fgRef = useRef<any>(null);
//   const [hoveredNode, setHoveredNode] = useState<any>(null);
//   const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });
//   const iconImagesRef = useRef<Record<string, HTMLImageElement>>({});

//   useEffect(() => {
//     Object.entries(techIcons).forEach(([id, path]) => {
//       const img = new Image();
//       img.src = path;
//       img.onload = () => { iconImagesRef.current[id] = img; };
//       img.onerror = () => { /* keep silent — fallback handled in draw */ };
//     });
//   }, []);

//   const centeredNodes = techGraph.nodes.map(node => ({
//     ...node,
//     fx: (node.fx ?? 0) - 0,
//     fy: (node.fy ?? 0) - 100
//   }));

//   const graphData = {
//     nodes: centeredNodes.map(node => ({
//       ...node,
//       val: node.group === 'category' ? 20 : 10,
//       iconPath: techIcons[node.id] || ''
//     })),
//     links: techGraph.links.map(link => ({
//       ...link,
//       color: 'rgba(255, 255, 255, 0.25)'
//     }))
//   };

//   const handleNodeClick = useCallback((node: any) => {
//     if (node.url) {
//       window.open(node.url, '_blank', 'noopener,noreferrer');
//     }
//   }, []);

//   const handleNodeHover = useCallback((node) => {
//     setHoveredNode(node);
//     if (node) {
//       const parentNode = graphData.nodes.find(n => n.id === node.parent);
//       const content = node.group === 'category'
//         ? `${node.id} Technologies`
//         : `${node.id}${parentNode ? ` (${parentNode.id})` : ''}`;
//       const screen = fgRef.current?.graph2ScreenCoords?.(node.x, node.y) ?? { x: 0, y: 0 };
//       setTooltip({ show: true, x: screen.x, y: screen.y, content });
//     } else {
//       setTooltip({ show: false, x: 0, y: 0, content: '' });
//     }
//   }, [graphData]);

//   const handleNodeCanvasObject = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
//     const label = node.id;
//     const baseFontSize = node.group === 'category' ? 16 : 14;
//     const img = iconImagesRef.current[node.id] || iconImagesRef.current[node.iconPath] || null;

//     const x = node.fx || node.x || 0;
//     const y = node.fy || node.y || 0;
    
//     if (isNaN(x) || isNaN(y)) {
//       return;
//     }

//     ctx.save();
//     const size = node.group === 'category' ? 80 : 60;
//     const isHovered = hoveredNode && hoveredNode.id === node.id;

//     if (img && img.complete && img.naturalWidth) {
//       // Enhanced glow effect for hovered node
//       if (isHovered) {
//         // Outer glow
//         ctx.save();
//         ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
//         ctx.shadowBlur = 40;
//         ctx.shadowOffsetX = 0;
//         ctx.shadowOffsetY = 0;
        
//         // Multiple layers for stronger glow
//         for (let i = 0; i < 1; i++) {
//           ctx.beginPath();
//           ctx.arc(x, y, size / 2 + 10 + i * 5, 0, Math.PI * 2);
//           ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - i * 0.08})`;
//           ctx.lineWidth = 8 - i * 2;
//           ctx.stroke();
//         }
//         ctx.restore();

//         // Bright center highlight
//         ctx.save();
//         ctx.globalCompositeOperation = 'lighter';
//         const gradient = ctx.createRadialGradient(x, y, 0, x, y, size / 2 + 20);
//         gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
       
//         ctx.fillStyle = gradient;
//         ctx.beginPath();

//         ctx.fill();
//         ctx.restore();
//       }

//       // Dim non-hovered nodes when something is hovered
//       if (hoveredNode && !isHovered) {
//         ctx.globalAlpha = 0.3;
//       }

//       ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
//     } else {
//       ctx.font = `${baseFontSize}px Sans-Serif`;
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       ctx.fillStyle = '#fff';
//       ctx.globalAlpha = hoveredNode && !isHovered ? 0.3 : 1;
//       ctx.fillText('•', x, y);
//     }

//     // Label with enhanced styling for hovered node
//     ctx.globalAlpha = 1;
//     ctx.font = `${isHovered ? baseFontSize + 2 : baseFontSize}px Sans-Serif`;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'top';
    
//     if (isHovered) {
//       ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
//       ctx.shadowBlur = 10;
//       ctx.fillStyle = '#fff';
      
//     } else if (hoveredNode) {
//       ctx.fillStyle = 'rgba(221, 221, 221, 0.3)';
//     } else {
//       ctx.fillStyle = '#ddd';
//     }
    
//     ctx.fillText(label, x, y + (node.group === 'category' ? 45 : 35));

//     ctx.restore();
//   }, [hoveredNode]);

//   const handleLinkCanvasObject = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
//     const start: any = link.source;
//     const end: any = link.target;

//     if (typeof start !== 'object' || typeof end !== 'object') return;

//     const isConnectedToHover = hoveredNode && (
//       hoveredNode.id === (start.id ?? start) || hoveredNode.id === (end.id ?? end)
//     );

//     ctx.save();
    
//     if (hoveredNode) {
//       if (isConnectedToHover) {
//         ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
//         ctx.lineWidth = 2.5;
//         ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
//         ctx.shadowBlur = 8;
//       } else {
//         ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
//         ctx.lineWidth = 1;
//       }
//     } else {
//       ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
//       ctx.lineWidth = 1;
//     }
    
//     ctx.beginPath();
//     ctx.moveTo(start.x, start.y);
//     ctx.lineTo(end.x, end.y);
//     ctx.stroke();
//     ctx.restore();
//   }, [hoveredNode]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawDots();
//     };

//     const drawDots = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const dotSpacing = 40;
//       const dotRadius = 2;
//       const primaryColor = "rgb(139, 92, 246)";

//       for (let x = 0; x < canvas.width; x += dotSpacing) {
//         for (let y = 0; y < canvas.height; y += dotSpacing) {
//           ctx.beginPath();
//           ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
//           ctx.fillStyle = primaryColor;
//           ctx.globalAlpha = 0.25;
//           ctx.fill();
//         }
//       }

//       ctx.globalAlpha = 1;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, []);

//   return (
//     <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
//       />

//       {/* Dimming overlay when hovering */}
//       <div
//         className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 z-10"
//         style={{
//           opacity: hoveredNode ? 0.7 : 0,
//         }}
//       />

//       {tooltip.show && (
//         <div
//           className="absolute z-30 bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg shadow-2xl text-sm pointer-events-none"
//           style={{
//             left: tooltip.x + 'px',
//             top: tooltip.y + 'px',
//             transform: 'translate(15px, -50%)'
//           }}
//         >
//           {tooltip.content}
//           {hoveredNode?.url && (
//             <div className="text-xs text-gray-400 mt-1">Click to visit</div>
//           )}
//         </div>
//       )}

//       <div className="relative z-20" style={{ cursor: hoveredNode?.url ? 'pointer' : 'default' }}>
//         <ForceGraph2D
//           ref={fgRef}
//           graphData={graphData}
//           nodeRelSize={6}
//           nodeCanvasObject={handleNodeCanvasObject}
//           linkCanvasObject={handleLinkCanvasObject}
//           onNodeHover={handleNodeHover}
//           onNodeClick={handleNodeClick}
//           enableZoom={false}
//           enablePanInteraction={false}
//           enablePointerInteraction={true}
//           d3AlphaDecay={0}
//           d3VelocityDecay={1}
//           nodeFixedRadius={node => node.group === 'category' ? 40 : 30}
//           warmupTicks={0}
//           cooldownTicks={0}
//           linkHoverPrecision={0}
//           forceEngine="d3"
//           linkDirectionalParticles={0}
//           linkDirectionalParticleWidth={0}
//           nodeCanvasObjectMode={() => 'replace'}
//           linkCanvasObjectMode={() => 'replace'}
//           minZoom={1}
//           maxZoom={1}
//           zoom={1}
//         />
//       </div>
//     </div>
//   );
// }








'use client'
import React, { useRef, useCallback, useState, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const techGraph = {
  nodes: [
  // Frontend — center
  { id: "Frontend", group: "category", color: "#00E5FF", fx: 0, fy: 0 },
  { id: "React", group: "tech", parent: "Frontend", fx: -80, fy: -60, url: "https://react.dev" },
  { id: "Next.js", group: "tech", parent: "Frontend", fx: 0, fy: -150, url: "https://nextjs.org" },
  { id: "Tailwind", group: "tech", parent: "Frontend", fx: 100, fy: -80, url: "https://tailwindcss.com" },
  { id: "HTML", group: "tech", parent: "Frontend", fx: -100, fy: 80, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: "CSS", group: "tech", parent: "Frontend", fx: 100, fy: 80, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: "Flutter", group: "tech", parent: "Frontend", fx: 0, fy: 150, url: "https://flutter.dev" },

  // Backend — top-left
  { id: "Backend", group: "category", color: "#66FF99", fx: -250, fy: -50 },
  { id: "Node.js", group: "tech", parent: "Backend", fx: -350, fy: -150, url: "https://nodejs.org" },
  { id: "Flask", group: "tech", parent: "Backend", fx: -200, fy: -200, url: "https://flask.palletsprojects.com" },

  // Database — top-right
  { id: "Database", group: "category", color: "#FFD54F", fx: 300, fy: -100 },
  { id: "PostgreSQL", group: "tech", parent: "Database", fx: 200, fy: -200, url: "https://www.postgresql.org" },
  { id: "Firebase", group: "tech", parent: "Database", fx: 300, fy: -230, url: "https://firebase.google.com" },
  { id: "Supabase", group: "tech", parent: "Database", fx: 500, fy: -200, url: "https://supabase.com" },

  // Languages — bottom-left
  { id: "Languages", group: "category", color: "#66FF99", fx: -400, fy: 50 },
  { id: "C++", group: "tech", parent: "Languages", fx: -400, fy: 300, url: "https://isocpp.org" },
  { id: "JS", group: "tech", parent: "Languages", fx: -200, fy: 200, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

  // Tools — bottom-right
  { id: "Tools", group: "category", color: "#66FF99", fx: 400, fy: 50 },
  { id: "Blender", group: "tech", parent: "Tools", fx: 200, fy: 200, url: "https://www.blender.org" },
  { id: "Illustrator", group: "tech", parent: "Tools", fx: 300, fy: 250, url: "https://www.adobe.com/products/illustrator.html" },
  { id: "Figma", group: "tech", parent: "Tools", fx: 500, fy: 250, url: "https://www.figma.com" },
  { id: "Linux", group: "tech", parent: "Tools", fx: 250, fy: 100, url: "https://www.linux.org" }
],
    
  links: [
    { source: "Frontend", target: "React" },
    { source: "Frontend", target: "Next.js" },
    { source: "Frontend", target: "Tailwind" },
    { source: "Frontend", target: "HTML" },
    { source: "Frontend", target: "CSS" },
    { source: "Frontend", target: "Flutter" },
    { source: "Backend", target: "Node.js" },
    { source: "Backend", target: "Flask" },
    { source: "Database", target: "PostgreSQL" },
    { source: "Database", target: "Firebase" },
    { source: "Database", target: "Supabase" },
    { source: "Languages", target: "C++" },
    { source: "Languages", target: "JS" },
    { source: "Tools", target: "Blender" },
    { source: "Tools", target: "Illustrator" },
    { source: "Tools", target: "Figma" },
    { source: "Tools", target: "Linux" }
  ],
};

const techIcons: Record<string, string> = {
  "React": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  "Tailwind": "/icons/tailwind.svg",
  "Node.js": "/icons/nodejs.svg",
  "Supabase": "/icons/supabase.svg",
  "Flutter": "/icons/flutter.svg",
  "Flask": "/icons/flask.svg",
  "HTML": "/icons/html.svg",
  "CSS": "/icons/css.svg",
  "C++": "/icons/cpp.svg",
  "JS": "/icons/javascript.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "Firebase": "/icons/firebase.svg",
  "Blender": "/icons/blender.svg",
  "Illustrator": "/icons/illustrator.svg",
  "Figma": "/icons/figma.svg",
  "Linux": "/icons/linux.svg",
  "Frontend": "/icons/frontend.svg",
  "Backend": "/icons/backend.svg",
  "Database": "/icons/database.svg"
};

export default function Stack() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fgRef = useRef<any>(null);
  const [hoveredNode, setHoveredNode] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });
  const iconImagesRef = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    Object.entries(techIcons).forEach(([id, path]) => {
      const img = new Image();
      img.src = path;
      img.onload = () => { iconImagesRef.current[id] = img; };
      img.onerror = () => { /* keep silent — fallback handled in draw */ };
    });
  }, []);

  const centeredNodes = techGraph.nodes.map(node => ({
    ...node,
    fx: (node.fx ?? 0) - 0,
    fy: (node.fy ?? 0) - 100
  }));

  const graphData = {
    nodes: centeredNodes.map(node => ({
      ...node,
      val: node.group === 'category' ? 20 : 10,
      iconPath: techIcons[node.id] || ''
    })),
    links: techGraph.links.map(link => ({
      ...link,
      color: 'rgba(255, 255, 255, 0.25)'
    }))
  };

  const handleNodeClick = useCallback((node: any) => {
    if (node.url) {
      window.open(node.url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleNodeHover = useCallback((node) => {
    setHoveredNode(node);
    if (node) {
      const parentNode = graphData.nodes.find(n => n.id === node.parent);
      const content = node.group === 'category'
        ? `${node.id} Technologies`
        : `${node.id}${parentNode ? ` (${parentNode.id})` : ''}`;
      const screen = fgRef.current?.graph2ScreenCoords?.(node.x, node.y) ?? { x: 0, y: 0 };
      setTooltip({ show: true, x: screen.x, y: screen.y, content });
    } else {
      setTooltip({ show: false, x: 0, y: 0, content: '' });
    }
  }, [graphData]);

  const handleNodeCanvasObject = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.id;
    const baseFontSize = node.group === 'category' ? 16 : 14;
    const img = iconImagesRef.current[node.id] || iconImagesRef.current[node.iconPath] || null;

    const x = node.fx || node.x || 0;
    const y = node.fy || node.y || 0;
    
    if (isNaN(x) || isNaN(y)) {
      return;
    }

    ctx.save();
    const size = node.group === 'category' ? 80 : 60;
    const isHovered = hoveredNode && hoveredNode.id === node.id;

    if (img && img.complete && img.naturalWidth) {
      // Enhanced glow effect for hovered node
      if (isHovered) {
        // Outer glow
        ctx.save();
        ctx.shadowColor = 'rgba(177, 172, 175, 1)';
        ctx.shadowBlur = 40;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Multiple layers for stronger glow
        // for (let i = 0; i < 1; i++) {
        //   ctx.beginPath();
        //   ctx.arc(x, y, size / 2 + 10 + i * 5, 0, Math.PI * 2);
        //   ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - i * 0.08})`;
        //   ctx.lineWidth = 8 - i * 2;
        //   ctx.stroke();
        // }
        // ctx.restore();

        // Bright center highlight
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        // const gradient = ctx.createRadialGradient(x, y, 0, x, y, size / 2 + 20);
        // gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        // gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        // gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        // ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size / 2 + 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Dim non-hovered nodes when something is hovered
      if (hoveredNode && !isHovered) {
        ctx.globalAlpha = 0.3;
      }

      ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
    } else {
      ctx.font = `${baseFontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = hoveredNode && !isHovered ? 0.3 : 1;
      ctx.fillText('•', x, y);
    }

    // Label with enhanced styling for hovered node
    ctx.globalAlpha = 1;
    ctx.font = `${isHovered ? baseFontSize + 2 : baseFontSize}px Sans-Serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    if (isHovered) {
      ctx.shadowColor = 'rgba(177, 172, 175, 1)';
      ctx.shadowBlur = 5;
      ctx.fillStyle = '#fff';
      
    } else if (hoveredNode) {
      ctx.fillStyle = 'rgba(177, 172, 175, 1)';
    } else {
      ctx.fillStyle = '#ddd';
    }
    
    ctx.fillText(label, x, y + (node.group === 'category' ? 45 : 35));

    ctx.restore();
  }, [hoveredNode]);

  const handleLinkCanvasObject = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
    const start: any = link.source;
    const end: any = link.target;

    if (typeof start !== 'object' || typeof end !== 'object') return;

    const isConnectedToHover = hoveredNode && (
      hoveredNode.id === (start.id ?? start) || hoveredNode.id === (end.id ?? end)
    );

    ctx.save();
    
    if (hoveredNode) {
      if (isConnectedToHover) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.shadowBlur = 8;
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
      }
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
    }
    
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.restore();
  }, [hoveredNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots();
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotSpacing = 40;
      const dotRadius = 2;
      const primaryColor = "rgb(139, 92, 246)";

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.globalAlpha = 0.25;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden ">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Dimming overlay when hovering */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: hoveredNode ? 0.7 : 0,
        }}
      />

      {tooltip.show && (
        <div
          className="absolute z-30 bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg shadow-2xl text-sm pointer-events-none"
          style={{
            left: tooltip.x + 'px',
            top: tooltip.y + 'px',
            transform: 'translate(15px, -50%)'
          }}
        >
          {tooltip.content}
          {hoveredNode?.url && (
            <div className="text-xs text-gray-400 mt-1">Click to visit</div>
          )}
        </div>
      )}

      <div className="relative z-20" style={{ cursor: hoveredNode?.url ? 'pointer' : 'default' }}>
        <ForceGraph2D
          ref={fgRef}
          graphData={graphData}
          nodeRelSize={6}
          nodeCanvasObject={handleNodeCanvasObject}
          linkCanvasObject={handleLinkCanvasObject}
          onNodeHover={handleNodeHover}
          onNodeClick={handleNodeClick}
          enableZoom={false}
          enablePanInteraction={false}
          enablePointerInteraction={true}
          d3AlphaDecay={0}
          d3VelocityDecay={1}
          nodeFixedRadius={node => node.group === 'category' ? 40 : 30}
          warmupTicks={0}
          cooldownTicks={0}
          linkHoverPrecision={0}
          forceEngine="d3"
          linkDirectionalParticles={0}
          linkDirectionalParticleWidth={0}
          nodeCanvasObjectMode={() => 'replace'}
          linkCanvasObjectMode={() => 'replace'}
          minZoom={1}
          maxZoom={1}
          zoom={1}
        />
      </div>
    </div>
  );
}