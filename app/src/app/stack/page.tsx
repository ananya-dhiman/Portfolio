'use client'
import React, { useRef, useCallback, useState, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiFlask, SiPostgresql, SiFirebase } from 'react-icons/si';

const techGraph = {
  nodes: [
    { id: "Frontend", group: "category", color: "#00E5FF" },
    { id: "React", group: "tech", parent: "Frontend" },
    { id: "Next.js", group: "tech", parent: "Frontend" },
    { id: "Tailwind", group: "tech", parent: "Frontend" },

    { id: "Backend", group: "category", color: "#66FF99" },
    { id: "Node.js", group: "tech", parent: "Backend" },
    { id: "Express", group: "tech", parent: "Backend" },
    { id: "Flask", group: "tech", parent: "Backend" },

    { id: "Database", group: "category", color: "#FFD54F" },
    { id: "PostgreSQL", group: "tech", parent: "Database" },
    { id: "Firebase", group: "tech", parent: "Database" },
  ],
  links: [
    { source: "Frontend", target: "React" },
    { source: "Frontend", target: "Next.js" },
    { source: "Frontend", target: "Tailwind" },
    { source: "Backend", target: "Node.js" },
    { source: "Backend", target: "Express" },
    { source: "Backend", target: "Flask" },
    { source: "Database", target: "PostgreSQL" },
    { source: "Database", target: "Firebase" },
  ],
};

// Tech logos mapping (image paths in public/icons/)
const techIcons: Record<string, string> = {
  "React": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  "Tailwind": "/icons/tailwind.svg",
  "Node.js": "/icons/nodejs.svg",
  "Express": "/icons/express.svg",
  "Flask": "/icons/flask.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "Firebase": "/icons/firebase.svg",
  "Frontend": "/icons/frontend.svg",
  "Backend": "/icons/backend.svg",
  "Database": "/icons/database.svg"
};


export default function Stack() {
  const fgRef = useRef<any>(null);
  const [hoveredNode, setHoveredNode] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: '' });

  // Preload icon images (cached in a ref for best perf)
  const iconImagesRef = useRef<Record<string, HTMLImageElement>>({});
  useEffect(() => {
    Object.entries(techIcons).forEach(([id, path]) => {
      const img = new Image();
      img.src = path;
      img.onload = () => { iconImagesRef.current[id] = img; };
      img.onerror = () => { /* keep silent — fallback handled in draw */ };
    });
  }, []);

  // Enhanced graph data with positioning hints
  const graphData = {
    nodes: techGraph.nodes.map(node => ({
      ...node,
      val: node.group === 'category' ? 20 : 10,
      iconPath: techIcons[node.id] || ''
    })),
    links: techGraph.links.map(link => ({
      ...link,
      color: 'rgba(255, 255, 255, 0.2)'
    }))
  };

  const handleNodeHover = useCallback((node) => {
    setHoveredNode(node);
    if (node) {
      const parentNode = graphData.nodes.find(n => n.id === node.parent);
      const content = node.group === 'category'
        ? `${node.id} Technologies`
        : `${node.id}${parentNode ? ` (${parentNode.id})` : ''}`;

      // convert graph coords -> screen coords for tooltip
      const screen = fgRef.current?.graph2ScreenCoords?.(node.x, node.y) ?? { x: 0, y: 0 };
      setTooltip({ show: true, x: screen.x, y: screen.y, content });
    } else {
      setTooltip({ show: false, x: 0, y: 0, content: '' });
    }
  }, [graphData]);

  // Draw only the icon image (no circle or border). keep label.
  // Updated: larger base sizes, hovered emphasis, and dimming of non-hovered elements.
  const handleNodeCanvasObject = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.id;
    const baseFontSize = node.group === 'category' ? 14 : 12;

    // choose image by node id (preloaded)
    const img = iconImagesRef.current[node.id] || iconImagesRef.current[node.iconPath] || null;

    ctx.save();

    // dim non-hovered nodes when one node is hovered
    if (hoveredNode && hoveredNode.id !== node.id) {
      ctx.globalAlpha = 0.25; // dimmed
    } else {
      ctx.globalAlpha = 1;
    }

    // validate coordinates and scale (avoid NaN/Infinity)
    const x = Number(node.x);
    const y = Number(node.y);
    const gs = Number(globalScale);
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(gs) || gs <= 0) {
      // positions not ready yet — avoid drawing gradients / images that would crash
      ctx.restore();
      return;
    }

    if (img && img.complete && img.naturalWidth) {
      // make icons larger and keep consistent screen-size via globalScale
      const baseSizePx = node.group === 'category' ? 44 : 36; // larger visible icons
      const safeScale = Math.max(gs, 0.1); // prevent division by tiny values
      let size = baseSizePx / safeScale;

      // emphasize hovered node
      const isHovered = hoveredNode && hoveredNode.id === node.id;
      if (isHovered) {
        size *= 1.6;
        // subtle glow behind hovered icon — only if size and coords are finite
        const glowRadius = size * 0.9;
        if (Number.isFinite(glowRadius) && glowRadius > 0) {
          ctx.save();
          ctx.globalAlpha = 0.7;
          const g = ctx.createRadialGradient(x, y, Math.max(size * 0.1, 1), x, y, glowRadius);
          g.addColorStop(0, 'rgba(255,255,255,0.25)');
          g.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
    } else {
      // fallback: draw a simple emoji/dot if image not available
      ctx.font = `${baseFontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.fillText('•', x, y);
    }

    // Draw label beneath the icon (respect dimming)
    ctx.font = `${baseFontSize / gs}px Sans-Serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = (hoveredNode && hoveredNode.id === node.id) ? '#fff' : '#ddd';
    ctx.fillText(label, x, y + ((node.group === 'category' ? 20 : 16) / gs));

    ctx.restore();
  }, [hoveredNode]);

  const handleLinkCanvasObject = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
    const start: any = link.source;
    const end: any = link.target;

    if (typeof start !== 'object' || typeof end !== 'object') return;

    const isConnectedToHover = hoveredNode && (
      hoveredNode.id === start.id || hoveredNode.id === end.id
    );

    ctx.save();
    if (hoveredNode) {
      // dim non-related links, keep connected links more visible
      ctx.strokeStyle = isConnectedToHover ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.08)';
      ctx.lineWidth = isConnectedToHover ? 2 : 1;
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
    }

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.restore();
  }, [hoveredNode]);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <div className="absolute top-4 left-4 z-10 bg-gray-800 rounded-lg p-4 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-2">Tech Stack Visualization</h2>
        <p className="text-gray-300 text-sm">Hover over nodes to explore</p>
        <div className="mt-3 space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#00E5FF'}}></div>
            <span className="text-xs text-gray-300">Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#66FF99'}}></div>
            <span className="text-xs text-gray-300">Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FFD54F'}}></div>
            <span className="text-xs text-gray-300">Database</span>
          </div>
        </div>
      </div>

      {tooltip.show && (
        <div
          className="absolute z-20 bg-gray-800 text-white px-3 py-2 rounded shadow-lg text-sm pointer-events-none"
          style={{
            left: tooltip.x + 'px',
            top: tooltip.y + 'px',
            transform: 'translate(10px, -50%)'
          }}
        >
          {tooltip.content}
        </div>
      )}

      {/* dim overlay when a node is hovered (doesn't block pointer events) */}
      {hoveredNode && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.56)',
            zIndex: 5,
            pointerEvents: 'none',
            transition: 'opacity 180ms'
          }}
        />
      )}

      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeRelSize={6}
        nodeCanvasObject={handleNodeCanvasObject}
        linkCanvasObject={handleLinkCanvasObject}
        onNodeHover={handleNodeHover}
        cooldownTicks={100}
        onEngineStop={() => fgRef.current?.zoomToFit(400)}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
        warmupTicks={100}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={hoveredNode ? 2 : 0}
        nodeCanvasObjectMode={() => 'replace'}
        linkCanvasObjectMode={() => 'replace'}
      />
    </div>
  );
}