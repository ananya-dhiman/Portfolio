
'use client'
import React, { useRef, useCallback, useState, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import type { NodeObject, LinkObject } from 'react-force-graph-2d';

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
  { id: "MongoDB", group: "tech", parent: "Database", fx: 400, fy: -200, url: "https://www.mongodb.com/" },


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
    { source: "Database", target: "MongoDB" },
    { source: "Languages", target: "C++" },
    { source: "Languages", target: "JS" },
    { source: "Tools", target: "Blender" },
    { source: "Tools", target: "Illustrator" },
    { source: "Tools", target: "Figma" },
    { source: "Tools", target: "Linux" }
  ],
};

const mobileLayouts: Record<string, any> = {
  Frontend: {
    centerY: -200,
    positions: {
      "Frontend": { fx: 0, fy: -200 },
      "React": { fx: -80, fy: -260 },
      "Next.js": { fx: 0, fy: -350 },
      "Tailwind": { fx: 100, fy: -280 },
      "HTML": { fx: -100, fy: -120 },
      "CSS": { fx: 100, fy: -120 },
      "Flutter": { fx: 0, fy: -50 }
    }
  },
  Backend: {
    centerY: 100,
    positions: {
      "Backend": { fx: 0, fy: 100 },
      "Node.js": { fx: -100, fy: 0 },
      "Flask": { fx: 100, fy: 0 }
    }
  },
  Database: {
    centerY: 400,
    positions: {
      "Database": { fx: 0, fy: 400 },
      "PostgreSQL": { fx: -120, fy: 300 },
      "Firebase": { fx: 0, fy: 270 },
      "Supabase": { fx: 120, fy: 300 },
       "MongoDB": { fx: 120, fy: 400 }
    }
  },
  Languages: {
    centerY: 700,
    positions: {
      "Languages": { fx: 0, fy: 700 },
      "C++": { fx: -80, fy: 600 },
      "JS": { fx: 80, fy: 600 }
    }
  },
  Tools: {
    centerY: 1000,
    positions: {
      "Tools": { fx: 0, fy: 1000 },
      "Blender": { fx: -120, fy: 900 },
      "Illustrator": { fx: 0, fy: 870 },
      "Figma": { fx: 120, fy: 900 },
      "Linux": { fx: 0, fy: 1100 }
    }
  }
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
  "MongoDB":"/icons/mongo.svg",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    Object.entries(techIcons).forEach(([id, path]) => {
      const img = new Image();
      img.src = path;
      img.onload = () => { iconImagesRef.current[id] = img; };
      img.onerror = () => { /* keep silent — fallback handled in draw */ };
    });
  }, []);

  const centeredNodes = techGraph.nodes.map(node => {
    if (isMobile) {
      // Find the mobile layout for this node
      for (const category in mobileLayouts) {
        const layout = mobileLayouts[category];
        if (layout.positions[node.id]) {
          return {
            ...node,
            fx: layout.positions[node.id].fx,
            fy: layout.positions[node.id].fy
          };
        }
      }
    }
    return {
      ...node,
      fx: (node.fx ?? 0) - 0,
      fy: (node.fy ?? 0) - 100
    };
  });

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

 
const handleNodeHover = useCallback(
  (node: NodeObject | null) => {
    setHoveredNode(node);
    if (node) {
      const parentNode = graphData.nodes.find(n => n.id === (node as any).parent);
      const content =
        (node as any).group === 'category'
          ? `${(node as any).id} Technologies`
          : `${(node as any).id}${parentNode ? ` (${parentNode.id})` : ''}`;

      const screen = fgRef.current?.graph2ScreenCoords?.((node as any).x, (node as any).y) ?? { x: 0, y: 0 };
      setTooltip({ show: true, x: screen.x, y: screen.y, content });
    } else {
      setTooltip({ show: false, x: 0, y: 0, content: '' });
    }
  },
  [graphData]
);

const handleNodeCanvasObject = useCallback(
  (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const n = node as any;
    const label = n.id;
    const baseFontSize = n.group === 'category' ? 16 : 14;
    const img = iconImagesRef.current[n.id] || iconImagesRef.current[n.iconPath] || null;

    const x = n.fx || n.x || 0;
    const y = n.fy || n.y || 0;

    if (isNaN(x) || isNaN(y)) return;

    ctx.save();
    const size = n.group === 'category' ? 80 : 60;
    const isHovered = hoveredNode && (hoveredNode as any).id === n.id;

    if (img && img.complete && img.naturalWidth) {
      if (isHovered) {
        ctx.save();
        ctx.shadowColor = 'rgba(177, 172, 175, 1)';
        ctx.shadowBlur = 40;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.arc(x, y, size / 2 + 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (hoveredNode && !isHovered) ctx.globalAlpha = 0.3;

      ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
    } else {
      ctx.font = `${baseFontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = hoveredNode && !isHovered ? 0.3 : 1;
      ctx.fillText('•', x, y);
    }

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

    ctx.fillText(label, x, y + (n.group === 'category' ? 45 : 35));
    ctx.restore();
  },
  [hoveredNode]
);

const handleLinkCanvasObject = useCallback(
  (link: LinkObject, ctx: CanvasRenderingContext2D) => {
    const start: any = link.source;
    const end: any = link.target;
    if (typeof start !== 'object' || typeof end !== 'object') return;

    const isConnectedToHover =
      hoveredNode &&
      ((hoveredNode as any).id === (start.id ?? start) || (hoveredNode as any).id === (end.id ?? end));

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
  },
  [hoveredNode]
);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawDots = () => {
      const dotSpacing = 40;
      const dotRadius = 1.5;
      const primaryColor = "rgb(248,248,255)"; 

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
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden md:overflow-hidden ">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

   
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: hoveredNode ? 0.7 : 0,
        }}
      />
      <div className="mt-30" style={{ height: isMobile ? '1300px' : 'auto' }}>
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

      <div className="relative z-20" style={{ cursor: hoveredNode?.url ? 'pointer' : 'default', height: isMobile ? '1300px' : '100vh' }}>
       <ForceGraph2D
  ref={fgRef}
  graphData={graphData}
  nodeRelSize={6}
  nodeCanvasObject={handleNodeCanvasObject}
  linkCanvasObject={handleLinkCanvasObject}
  onNodeHover={handleNodeHover}
  onNodeClick={handleNodeClick}
  d3AlphaDecay={0}
  d3VelocityDecay={1}
  nodeId="id"
  linkColor={() => "rgba(255,255,255,0.25)"}
  minZoom={1}
  maxZoom={1}
  enablePointerInteraction={true}
  warmupTicks={0}
  cooldownTicks={0}
  linkHoverPrecision={0}

  linkDirectionalParticles={0}
  linkDirectionalParticleWidth={0}
  nodeCanvasObjectMode={() => 'replace'}
  linkCanvasObjectMode={() => 'replace'}
/>

      </div>
    </div>
    </div>
  );
}