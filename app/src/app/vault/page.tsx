
'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "@/components/SideBar"
import { X, Plus, CirclePlus, FolderPlus, ChevronRight, ChevronDown } from "lucide-react"
import AboutPage from "../about/page"
import Projects from "../projects/page"
import dynamic from "next/dynamic";
import Connect from "../contact/page"
import Activities from "../activities/page"
import {Layout} from "@/components/Layout"
import Terminal from "@/components/Terminal";
import TabBar from "@/components/TabBar"

import Experience from "../experience/page"
const Stack = dynamic(() => import("../stack/page"), { ssr: false });

type FileItem = {
  id: string
  name: string
  content?: string
}

type FolderItem = {
  id: string
  name: string
  files: FileItem[]
  open?: boolean
}

export default function VaultWorkspacePage() {


  const [folders, setFolders] = useState<FolderItem[]>([
    { id: 'hello', name: 'Hello', open: true, files: [
      { id: 'about', name: 'About' },
      { id: 'experience', name: 'Experience' },
      { id: 'projects', name: 'Projects' },
      { id: 'stack', name: 'Stack' },
      { id: 'activity', name: 'Activity' },
      { id: 'connect', name: 'Connect' },
    ] }
  ])
  const [tabs, setTabs] = useState<{ id: string; name: string }[]>([
  { id: 'about', name: 'About' }
]);
const [activeTabId, setActiveTabId] = useState<string | null>('about');

  const [selectedFolderId, setSelectedFolderId] = useState<string | null>('hello')
  const [selectedFileId, setSelectedFileId] = useState<string | null>('about')
  const [openFolderIds, setOpenFolderIds] = useState<Record<string, boolean>>({ hello: true })
  const [toast, setToast] = useState<{ show: boolean; text: string }>({ show: false, text: '' })
    const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeFileContent, setActiveFileContent] = useState<string>("")
  const [showTerminal, setShowTerminal] = useState(false);


  const id = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2,9)}`
  const showToast = (text: string, ms = 4000) => {
    setToast({ show: true, text })
    window.setTimeout(() => setToast({ show: false, text: '' }), ms)
  }

  const addFolder = () => {
    const newFolder: FolderItem = { id: id('folder'), name: `Folder ${folders.length}`, files: [] }
    setFolders(prev => [...prev, newFolder])
    setSelectedFolderId(newFolder.id)
    setOpenFolderIds(prev => ({ ...prev, [newFolder.id]: true }))
  }

  const addFile = () => {
    if (!selectedFolderId) return showToast('Select a folder first')
    if (selectedFolderId === 'hello') return showToast('Cannot add files to the default Hello folder')
    setFolders(prev => prev.map(f => {
      if (f.id !== selectedFolderId) return f
      const newFile: FileItem = { id: id('file'), name: `File ${f.files.length + 1}`,content: "" }
      return { ...f, files: [...f.files, newFile] }
    }))
  }

  const toggleFolder = (folderId: string) => {
    setOpenFolderIds(prev => ({ ...prev, [folderId]: !prev[folderId] }))
  }

  const selectFolder = (folderId: string) => setSelectedFolderId(folderId)

  const selectFile = (fileId: string) => {
  setSelectedFileId(fileId)
  setActiveTabId(fileId);
  const folder = folders.find(f => f.id === selectedFolderId)
  const file = folder?.files.find(f => f.id === fileId)

   setTabs(prev => {
    if (!prev.find(t => t.id === fileId)) {
      return [...prev, { id: fileId, name: file?.name || "Untitled" }];
    }
    return prev;
  });


  if (folder?.id === 'hello') {
    const element = document.getElementById(`section-${fileId}`)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  
    setActiveFileContent(file?.content || "")
  }
}


    // Tab component logic

const onTabSelect = (tabId: string) => {
  const helloFolder = folders.find(f => f.id === "hello");
  const fileFolder = folders.find(f =>
    f.files.some(file => file.id === tabId)
  );

  setActiveTabId(tabId);

  if (fileFolder && fileFolder.id !== "hello") {
    // ✅ It's a normal file
    setSelectedFolderId(fileFolder.id);
    const file = fileFolder.files.find(file => file.id === tabId);
    setSelectedFileId(tabId);
    setActiveFileContent(file?.content || "");
  } else {
    // ✅ It's a Hello section tab
    setSelectedFolderId("hello");
    setSelectedFileId(null); // No file selected
    setActiveFileContent(""); // Remove editor content


    const element = document.getElementById(`section-${tabId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};


const onTabClose = (tabId: string) => {
  setTabs(prev => prev.filter(t => t.id !== tabId));
  if (activeTabId === tabId) {
    const nextTab = tabs.find(t => t.id !== tabId);
    setActiveTabId(nextTab ? nextTab.id : null);
  }
};

const onNewTab = () => {
  if (!selectedFolderId) return showToast("Select a folder first");


  if (selectedFolderId === "hello")
    return showToast("Cannot add files to the default Hello page");

  const newFile: FileItem = {
    id: id("file"),
    name: `File ${tabs.length + 1}`,
    content: ""
  };

  setFolders(prev =>
    prev.map(f =>
      f.id === selectedFolderId
        ? { ...f, files: [...f.files, newFile] }
        : f
    )
  );

  setTabs(prev => [...prev, { id: newFile.id, name: newFile.name }]);
  setActiveTabId(newFile.id);
  setSelectedFileId(newFile.id);
};



  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const newContent = e.target.value
  setActiveFileContent(newContent)

  setFolders(prev => prev.map(folder => {
    if (folder.id !== selectedFolderId) return folder
    return {
      ...folder,
      files: folder.files.map(file => 
        file.id === selectedFileId ? { ...file, content: newContent } : file
      )
    }
  }))
}


  useEffect(() => {
    if (!folders.find(f => f.id === 'hello')) {
      setFolders(prev => [{ id: 'hello', name: 'Hello', open: false, files: [] }, ...prev])
    }
  }, [folders])

  // Auto-highlight section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience','projects', 'stack', 'activity','connect']
      const scrollContainer = document.getElementById('scroll-container')
      if (!scrollContainer) return
      const scrollPosition = scrollContainer.scrollTop + 300

      for (const sectionId of sections) {
        const element = document.getElementById(`section-${sectionId}`)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setSelectedFileId(sectionId)
            break
          }
        }
      }
    }

    const scrollContainer = document.getElementById('scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-[#121212] text-white h-screen flex flex-col">
      {/* Header */}
      {/* <div className="border-b border-border">
        <div className="flex items-center gap-4 px-4 py-2">
          <div className="flex space-x-2 mb-6 mt-5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />   
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />   
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />   
          </div>

          <div className="ml-50 flex items-center gap-2 text-sm">
            <div className="flex items-center h-12 w-75 gap-5 rounded-md border border-border px-3 justify-between">
              <span>New Tab</span>
              <button type="button" className="ml-2 text-muted-foreground hover:text-foreground"><X /></button>
            </div>
            <button type="button" className="rounded-md h-12 px-2 text-muted-foreground hover:text-foreground">
              <Plus />
            </button>
          </div>
        </div>
      </div> */}

      <TabBar
  tabs={tabs}
  activeTabId={activeTabId}
  onTabSelect={onTabSelect}
  onTabClose={onTabClose}
  onNewTab={onNewTab}
/>


      {/* Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar
  isCollapsed={isCollapsed}
  onToggle={() => setIsCollapsed(!isCollapsed)}
  onOpenTerminal={() => setShowTerminal(true)}
/>

       <Layout
          isCollapsed={isCollapsed}
          folders={folders}
          openFolderIds={openFolderIds}
          selectedFolderId={selectedFolderId}
          selectedFileId={selectedFileId}
          addFolder={addFolder}
          addFile={addFile}
          toggleFolder={toggleFolder}
          selectFolder={selectFolder}
          selectFile={selectFile}
        />
        {/* <aside
        className={`${
          isCollapsed ? "w-0 opacity-0" : "w-56 opacity-100"
        } border-r border-border bg-muted/10 overflow-y-auto transition-all duration-300`}
      >

          <div className="p-2">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center gap-4 p-3 ">
                <button onClick={addFolder} className="hover:text-green-400 text-neutral-400" title="New folder"><FolderPlus /></button>
                <button onClick={addFile} className="hover:text-green-400 text-neutral-400" title="New file"><CirclePlus /></button>
              </li>
              {folders.map(folder => {
                const isOpen = !!openFolderIds[folder.id]
                const isSelected = selectedFolderId === folder.id
                return (
                  <li key={folder.id}>
                    <div className={`flex items-center px-2 py-2 ${isSelected ? 'bg-muted/30' : ''}`}>
                      <button onClick={() => { toggleFolder(folder.id); selectFolder(folder.id) }} className="flex items-center gap-2">
                        {isOpen ? <ChevronDown /> : <ChevronRight />}
                      </button>
                      <button onClick={() => selectFolder(folder.id)} className="ml-2 text-left w-full">{folder.name}</button>
                    </div>
                    {isOpen && folder.files.length > 0 && (
                      <ul>
                        {folder.files.map(f => (
                          <li key={f.id}>
                            <button
                              className={`block rounded-md px-3 py-2 mt-2 ml-6 hover:bg-muted/20 w-35 text-left ${selectedFileId === f.id ? 'bg-muted/30' : ''}`}
                              onClick={() => selectFile(f.id)}
                            >
                              {f.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
        */}
<section className="flex-1 overflow-y-auto scroll-smooth" id="scroll-container">
  {showTerminal ? (
    <div className="w-full h-full overflow-hidden">
      <Terminal />
    </div>
  ) : selectedFolderId === "hello" ? (
    <>
      <div id="section-about" className="snap-start flex items-start justify-start"><AboutPage /></div>
      <div id="section-experience" className="snap-start bg-zinc-950 flex items-center justify-center"><Experience /></div>
      <div id="section-projects" className="snap-start bg-zinc-950 flex flex-col items-center justify-center"><Projects /></div>
      <div id="section-stack" className="snap-start bg-zinc-950 flex items-center justify-center"><Stack /></div>
      <div id="section-activity" className="snap-start bg-zinc-950 flex items-center justify-center"><Activities /></div>
      <div id="section-connect" className="snap-start bg-zinc-950 flex flex-col items-start justify-start"><Connect /></div>
    </>
  ) : (
    <div className="p-6 h-full">
      {activeTabId ? (
        <textarea
          value={activeFileContent}
          onChange={handleContentChange}
          className="w-full h-full text-white p-4 rounded-md resize-none focus:outline-none"
          placeholder="Start typing here..."
        />
      ) : (
        <div className="text-gray-500 h-full flex items-center justify-center">
          Select a file to start editing
        </div>
      )}
    </div>
  )}
</section>


      </div>

      {/* Toast */}
      {toast.show && (
        <div className="fixed right-4 bottom-4 z-50">
          <div className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm shadow-lg">
            {toast.text}
          </div>
        </div>
      )}
    </div>
  )
}
