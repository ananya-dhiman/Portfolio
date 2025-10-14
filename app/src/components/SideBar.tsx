
"use client";

import {PanelLeft, Workflow,LayoutDashboard,Terminal,Home, Folder, Layers, Settings, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="h-full w-14 bg-[#1e1e1e] flex flex-col items-center py-4 space-y-6 border-r border-neutral-800">
      <div className="flex flex-col items-center space-y-4">
        <Link href="#" className="hover:text-green-400 text-neutral-400"><PanelLeft size={20} /></Link>
        <Link href="#" className="hover:text-green-400 text-neutral-400"><LayoutDashboard size={20} /></Link>
        <Link href="#" className="hover:text-green-400 text-neutral-400"><Workflow size={20} /></Link>
         <Link href="#" className="hover:text-green-400 text-neutral-400"><Terminal size={20} /></Link>
      </div>
      <div className="flex-1" />
      <div className="flex flex-col items-center space-y-4">
        <Link href="#" className="hover:text-green-400 text-neutral-400"><HelpCircle size={20} /></Link>
        <Link href="#" className="hover:text-green-400 text-neutral-400"><Settings size={20} /></Link>
      </div>
    </aside>
  );
}
