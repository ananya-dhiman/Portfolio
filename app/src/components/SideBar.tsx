// "use client";

// import { PanelLeft, Workflow, LayoutDashboard, Terminal, HelpCircle, Settings } from "lucide-react";
// import Link from "next/link";

// export default function SideBar({
//   isCollapsed,
//   onToggle,
// }: {
//   isCollapsed: boolean;
//   onToggle: () => void;
// }) {
//   return (
//     <aside className="h-full w-14 bg-[#1e1e1e] flex flex-col items-center py-4 space-y-6 border-r border-neutral-800 transition-all duration-300">
//       <div className="flex flex-col items-center space-y-4">
//         {/* Toggle Button */}
//         <button
//           onClick={onToggle}
//           className={`${
//             isCollapsed ? "text-green-400" : "text-neutral-400"
//           } hover:text-green-400 transition-colors cursor-pointer`}
//           title="Toggle Sidebar"
//         >
//           <PanelLeft size={20} />
//         </button>

//         <Link href="#" className="hover:text-green-400 text-neutral-400">
//           <LayoutDashboard size={20} />
//         </Link>
//         <Link href="#" className="hover:text-green-400 text-neutral-400">
//           <Workflow size={20} />
//         </Link>
//         <Link href="#" className="hover:text-green-400 text-neutral-400">
//           <Terminal size={20} />
//         </Link>
//       </div>

//       <div className="flex-1" />

//       <div className="flex flex-col items-center space-y-4">
//         <Link href="#" className="hover:text-green-400 text-neutral-400">
//           <HelpCircle size={20} />
//         </Link>
//         <Link href="#" className="hover:text-green-400 text-neutral-400">
//           <Settings size={20} />
//         </Link>
//       </div>
//     </aside>
//   );
// }
  
"use client";

import { PanelLeft, Workflow, LayoutDashboard, Terminal, HelpCircle, Settings } from "lucide-react";
import Link from "next/link";

export default function SideBar({
  isCollapsed,
  onToggle,
  onOpenTerminal,
}: {
  isCollapsed: boolean;
  onToggle: () => void;
  onOpenTerminal: () => void;
}) {
  return (
    <aside className="h-full w-14 bg-[#1e1e1e] flex flex-col items-center py-4 space-y-6 border-r border-neutral-800 transition-all duration-300">
      <div className="flex flex-col items-center space-y-4">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className={`${
            isCollapsed ? "text-green-400" : "text-neutral-400"
          } hover:text-green-400 transition-colors cursor-pointer`}
          title="Toggle Sidebar"
        >
          <PanelLeft size={20} />
        </button>

        <Link href="#" className="hover:text-green-400 text-neutral-400">
          <LayoutDashboard size={20} />
        </Link>
        <Link href="#" className="hover:text-green-400 text-neutral-400">
          <Workflow size={20} />
        </Link>

        {/* Terminal Button */}
        <button
          onClick={onOpenTerminal}
          className="hover:text-green-400 text-neutral-400"
          title="Open Terminal"
        >
          <Terminal size={20} />
        </button>
      </div>

      <div className="flex-1" />

      <div className="flex flex-col items-center space-y-4">
        <Link href="#" className="hover:text-green-400 text-neutral-400">
          <HelpCircle size={20} />
        </Link>
        <Link href="#" className="hover:text-green-400 text-neutral-400">
          <Settings size={20} />
        </Link>
      </div>
    </aside>
  );
}
