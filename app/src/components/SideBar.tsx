
  
"use client";

import { PanelLeft, Terminal, Settings,Disc } from "lucide-react";


export default function SideBar({
  isCollapsed,
  onToggle,
  onOpenTerminal,
  onSettingsOpen,
  onMobVinylOpen,
  
  
}: {
  isCollapsed: boolean;
  onToggle: () => void;
  onOpenTerminal: () => void;
  onSettingsOpen: () => void; 
   onMobVinylOpen:()=>void;
     setMobVinylOpen: (value: boolean) => void; 
}) {
  return (
    <aside className="h-full w-14 bg-[#1e1e1e] flex flex-col items-center py-4 space-y-6 border-r border-neutral-800 transition-all duration-300">
      <div className="flex flex-col items-center space-y-4">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className={`${
            isCollapsed ? "text-primary" : "text-neutral-400"
          } hover:text-primary transition-colors cursor-pointer`}
          title="Toggle Sidebar"
        >
          <PanelLeft size={20} />
        </button>

        {/* <Link href="#" className="hover:text-primary cursor-pointer text-neutral-400">
          <LayoutDashboard size={20} />
        </Link>
        <Link href="#" className="hover:text-primary cursor-pointer text-neutral-400">
          <Workflow size={20} />
        </Link> */}

        {/* Terminal Button */}
        <button
          onClick={onOpenTerminal}
          className=" hover:text-primary cursor-pointer text-neutral-400"
          title="Open Terminal"
        >
          <Terminal size={20} />
        </button>
      </div>

      <div className="flex-1" />

      <div className="flex flex-col items-center space-y-4">
        <button onClick={onMobVinylOpen} className="hover:text-primary text-neutral-400 cursor-pointer">
          <Disc size={20} />
        </button>
        <button
          onClick={onSettingsOpen} 
          className="hover:text-primary text-neutral-400 cursor-pointer"
          title="Open Settings"
        >
          <Settings size={20} />
        </button>
      </div>
    </aside>
  );
}
