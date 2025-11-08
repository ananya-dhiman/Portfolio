
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
