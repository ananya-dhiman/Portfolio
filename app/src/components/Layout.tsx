// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// type Props = {
//   children: React.ReactNode;
// };

// export default function Layout({ children }: Props) {
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

//   // Auto-close sidebar when resizing above md breakpoint
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setIsMobileSidebarOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative h-screen bg-[#121212] text-white flex flex-col">
//       {/* Mobile header with menu button */}
//       <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800">
//         <div className="text-sm font-semibold tracking-wide">Vault</div>
//         <button
//           onClick={() => setIsMobileSidebarOpen(true)}
//           className="p-2 rounded-md hover:bg-white/5 transition"
//         >
//           <Menu size={20} />
//         </button>
//       </div>

//       {/* Mobile Sidebar Slide-over */}
//       {isMobileSidebarOpen && (
//         <>
//           <motion.div
//             initial={{ x: -300 }}
//             animate={{ x: 0 }}
//             exit={{ x: -300 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-y-0 left-0 w-64 z-50 bg-[#1a1a1a] border-r border-gray-700 overflow-y-auto md:hidden"
//           >
//             <div className="flex items-center justify-between p-4 border-b border-gray-700">
//               <h2 className="font-semibold text-lg">Menu</h2>
//               <button
//                 onClick={() => setIsMobileSidebarOpen(false)}
//                 className="p-2 hover:bg-white/5 rounded-md"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {/* --- This is where we mount your sidebar & folder logic --- */}
//             <div className="p-4">{children}</div>
//           </motion.div>

//           {/* Background overlay */}
//           <div
//             className="fixed inset-0 bg-black/50 z-40 md:hidden"
//             onClick={() => setIsMobileSidebarOpen(false)}
//           />
//         </>
//       )}

//       {/* Desktop layout */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar column (visible only on desktop) */}
//         <aside className="hidden md:flex md:w-64 md:flex-col md:border-r border-gray-800 bg-[#1a1a1a]">
//           {children}
//         </aside>

//         {/* Main content area */}
//         <main className="flex-1 overflow-y-auto">
//           {/* Keep your About/Experience/Projects layout intact here */}
//         </main>
//       </div>
//     </div>
//   );
// }
// src/components/FileExplorerSidebar.tsx

// import { FolderPlus, CirclePlus, ChevronRight, ChevronDown } from "lucide-react";

// // Define the types used in the main component
// type FileItem = {
//   id: string
//   name: string
//   content?: string
// }

// type FolderItem = {
//   id: string
//   name: string
//   files: FileItem[]
//   open?: boolean
// }

// interface FileExplorerSidebarProps {
//   isCollapsed: boolean;
//   folders: FolderItem[];
//   openFolderIds: Record<string, boolean>;
//   selectedFolderId: string | null;
//   selectedFileId: string | null;
//   addFolder: () => void;
//   addFile: () => void;
//   toggleFolder: (folderId: string) => void;
//   selectFolder: (folderId: string) => void;
//   selectFile: (fileId: string) => void;
// }

// export function Layout({
//   isCollapsed,
//   folders,
//   openFolderIds,
//   selectedFolderId,
//   selectedFileId,
//   addFolder,
//   addFile,
//   toggleFolder,
//   selectFolder,
//   selectFile,
// }: FileExplorerSidebarProps) {
//   // Determine if the sidebar should be hidden on mobile (when collapsed)
//   const mobileHiddenClass = isCollapsed ? "hidden md:block" : "fixed inset-0 z-40 md:relative md:w-56";

//   return (
//     // The main wrapper for the sidebar
//     <>
//     {isCollapsed ? null : 
//         <>  
//     <aside
//       // Mobile overlay styles (fixed, full screen, semi-transparent background)
//       className={`${mobileHiddenClass} md:w-56 md:opacity-100 transition-all duration-300 md:border-r border-border bg-muted/10 md:bg-transparent overflow-y-auto`}
//     >
//       {/* Mobile overlay background for semi-transparency */}
//       {!isCollapsed && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => { /* Consider adding a prop to close on click */ }}></div>
//       )}

//       {/* Actual sidebar content panel */}
//       <div 
//         className={`${
//             isCollapsed ? "w-0 opacity-0" : "w-64 opacity-100"
//           } h-full md:w-full md:relative absolute top-0 left-0 bg-[#1e1e1e] border-r border-border overflow-y-auto transition-all duration-300`}
//       >
//         <div className="p-2">
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center justify-center gap-4 p-3 ">
//               <button onClick={addFolder} className="hover:text-primary text-neutral-400" title="New folder"><FolderPlus /></button>
//               <button onClick={addFile} className="hover:text-primary text-neutral-400" title="New file"><CirclePlus /></button>
//             </li>
//             {folders.map(folder => {
//               const isOpen = !!openFolderIds[folder.id]
//               const isSelected = selectedFolderId === folder.id
//               return (
//                 <li key={folder.id}>
//                   <div className={`flex items-center px-2 py-2 cursor-pointer ${isSelected ? 'bg-muted/30' : ''}`}>
//                     <button onClick={() => { toggleFolder(folder.id); selectFolder(folder.id) }} className="flex items-center gap-2">
//                       {isOpen ? <ChevronDown /> : <ChevronRight />}
//                     </button>
//                     <button onClick={() => selectFolder(folder.id)} className="ml-2 text-left w-full">{folder.name}</button>
//                   </div>
//                   {isOpen && folder.files.length > 0 && (
//                     <ul>
//                       {folder.files.map(f => (
//                         <li key={f.id}>
//                           <button
//                             className={`block rounded-md px-3 py-2 mt-2 ml-6 hover:bg-muted/20 w-35 text-left ${selectedFileId === f.id ? 'bg-muted/30' : ''}`}
//                             onClick={() => selectFile(f.id)}
//                           >
//                             {f.name}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//     </aside>
//     </>
//         }
//         </>
//   );
// }
// src/components/Layout.tsx
import { useEffect, useState } from "react";
import { FolderPlus, CirclePlus, ChevronRight, ChevronDown } from "lucide-react";

type FileItem = {
  id: string;
  name: string;
  content?: string;
};

type FolderItem = {
  id: string;
  name: string;
  files: FileItem[];
  open?: boolean;
};

interface FileExplorerSidebarProps {
  isCollapsed: boolean;
  folders: FolderItem[];
  openFolderIds: Record<string, boolean>;
  selectedFolderId: string | null;
  selectedFileId: string | null;
  addFolder: () => void;
  addFile: () => void;
  toggleFolder: (folderId: string) => void;
  selectFolder: (folderId: string) => void;
  selectFile: (fileId: string) => void;
}

export function Layout({
  isCollapsed,
  folders,
  openFolderIds,
  selectedFolderId,
  selectedFileId,
  addFolder,
  addFile,
  toggleFolder,
  selectFolder,
  selectFile,
}: FileExplorerSidebarProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile layout dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopClasses = "md:w-56 md:relative md:block";
  const mobileOverlayClasses =
    "fixed inset-y-0 left-14 z-40 w-[calc(100vw-3.5rem)]";

  const isFileExplorerVisible = !isCollapsed;

  return (
    <>
      {/* MOBILE OVERLAY BACKGROUND (only visible on mobile when sidebar open) */}
      
      {isMobile && isFileExplorerVisible && (
        <div
          className="fixed inset-0 left-14 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => toggleFolder(selectedFolderId || "")}
        ></div>
      )}

      {isCollapsed ? null :
<>
      {/* SIDEBAR PANEL */}
      <aside
        className={`
          ${isFileExplorerVisible ? (isMobile ? mobileOverlayClasses : "") : "w-0 opacity-0"} 
          ${desktopClasses}
          transition-all duration-300
          border-r border-border bg-muted/10 overflow-y-auto z-40
        `}
      >
        <div className="h-full w-full">
          <div className="p-2">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center gap-4 p-3">
                <button
                  onClick={addFolder}
                  className="hover:text-primary text-neutral-400"
                  title="New folder"
                >
                  <FolderPlus />
                </button>
                <button
                  onClick={addFile}
                  className="hover:text-primary text-neutral-400"
                  title="New file"
                >
                  <CirclePlus />
                </button>
              </li>
              {folders.map((folder) => {
                const isOpen = !!openFolderIds[folder.id];
                const isSelected = selectedFolderId === folder.id;
                return (
                  <li key={folder.id}>
                    <div
                      className={`flex items-center px-2 py-2 cursor-pointer ${
                        isSelected ? "bg-muted/30" : ""
                      }`}
                    >
                      <button
                        onClick={() => {
                          toggleFolder(folder.id);
                          selectFolder(folder.id);
                        }}
                        className="flex items-center gap-2"
                      >
                        {isOpen ? <ChevronDown /> : <ChevronRight />}
                      </button>
                      <button
                        onClick={() => selectFolder(folder.id)}
                        className="ml-2 text-left w-full"
                      >
                        {folder.name}
                      </button>
                    </div>
                    {isOpen && folder.files.length > 0 && (
                      <ul>
                        {folder.files.map((f) => (
                          <li key={f.id}>
                            <button
                              className={`block rounded-md px-3 py-2 mt-2 ml-6 hover:bg-muted/20 w-35 text-left ${
                                selectedFileId === f.id
                                  ? "bg-muted/30"
                                  : ""
                              }`}
                              onClick={() => selectFile(f.id)}
                            >
                              {f.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
      </>
     }
    </>
  );
}
