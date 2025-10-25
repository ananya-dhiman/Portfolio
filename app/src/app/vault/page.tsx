
'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "@/components/SideBar"
import { X, Plus, CirclePlus, FolderPlus, ChevronRight, ChevronDown } from "lucide-react"
import AboutPage from "../about/page"
import Projects from "../projects/page"
import dynamic from "next/dynamic";
import Connect from "../contact/page"
// load Stack only on the client (prevents "window is not defined" from force-graph)
const Stack = dynamic(() => import("../stack/page"), { ssr: false });

type FileItem = {
  id: string
  name: string
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
      { id: 'projects', name: 'Projects' },
      { id: 'stack', name: 'Stack' },
      { id: 'connect', name: 'Connect' },
    ] }
  ])
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>('hello')
  const [selectedFileId, setSelectedFileId] = useState<string | null>('about')
  const [openFolderIds, setOpenFolderIds] = useState<Record<string, boolean>>({ hello: true })
  const [toast, setToast] = useState<{ show: boolean; text: string }>({ show: false, text: '' })

  const id = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2,9)}`
  const showToast = (text: string, ms = 2500) => {
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
      const newFile: FileItem = { id: id('file'), name: `File ${f.files.length + 1}` }
      return { ...f, files: [...f.files, newFile] }
    }))
  }

  const toggleFolder = (folderId: string) => {
    setOpenFolderIds(prev => ({ ...prev, [folderId]: !prev[folderId] }))
  }

  const selectFolder = (folderId: string) => setSelectedFolderId(folderId)

  const selectFile = (fileId: string) => {
    setSelectedFileId(fileId)
    const element = document.getElementById(`section-${fileId}`)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (!folders.find(f => f.id === 'hello')) {
      setFolders(prev => [{ id: 'hello', name: 'Hello', open: false, files: [] }, ...prev])
    }
  }, [folders])

  // Auto-highlight section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'stack', 'connect']
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
      <div className="border-b border-border">
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
      </div>

      {/* Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar />
        <aside className="w-56 border-r border-border bg-muted/10 overflow-y-auto">
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
        <section className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth" id="scroll-container">
          <div id="section-about" className=" snap-start flex items-start justify-start ">
            <AboutPage />
          </div>
          <div
        id="section-projects"
        className="snap-start flex flex-col items-center justify-center "
      >
        <Projects />
      </div>

          <div id="section-stack" className="h-screen snap-start flex items-center justify-center">
            <Stack />
          </div>
          <div id="section-connect" className="h-screen snap-start flex flex-col items-start justify-start p-10">
           <Connect />
          </div>
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
