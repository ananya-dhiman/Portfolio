'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar  from "@/components/SideBar"
import {X, Plus,CirclePlus,FolderPlus,ChevronRight,ChevronDown} from "lucide-react"


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
  // folders state: 'Hello' is always present by default
  const [folders, setFolders] = useState<FolderItem[]>([
    { id: 'hello', name: 'Hello', open: false, files: [
      { id: 'about', name: 'About' },
      { id: 'projects', name: 'Projects' },
      { id: 'stack', name: 'Stack' },
      { id: 'connect', name: 'Connect' },
    ] }
  ])
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>('hello')
  const [openFolderIds, setOpenFolderIds] = useState<Record<string, boolean>>({ hello: false })
  const [toast, setToast] = useState<{show: boolean; text: string}>({ show: false, text: '' })

  // helper to generate ids
  const id = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2,9)}`

  const showToast = (text: string, ms = 2500) => {
    setToast({ show: true, text })
    window.setTimeout(() => setToast({ show: false, text: '' }), ms)
  }

  // add new folder
  const addFolder = () => {
    const newFolder: FolderItem = { id: id('folder'), name: `Folder ${folders.length}`, files: [] }
    setFolders(prev => [...prev, newFolder])
    setSelectedFolderId(newFolder.id)
    setOpenFolderIds(prev => ({ ...prev, [newFolder.id]: true }))
  }

  // add file into selected folder, if none selected show toast
  const addFile = () => {
    if (!selectedFolderId) {
      showToast('Select a folder first')
      return
    }

    // do not add files into the default 'Hello' folder per instructions
    if (selectedFolderId === 'hello') {
      showToast('Cannot add files to the default Hello folder')
      return
    }

    setFolders(prev => prev.map(f => {
      if (f.id !== selectedFolderId) return f
      const newFile: FileItem = { id: id('file'), name: `File ${f.files.length + 1}` }
      return { ...f, files: [...f.files, newFile] }
    }))
  }

  // toggle folder open
  const toggleFolder = (folderId: string) => {
    setOpenFolderIds(prev => ({ ...prev, [folderId]: !prev[folderId] }))
  }

  // select folder
  const selectFolder = (folderId: string) => {
    setSelectedFolderId(folderId)
  }

  useEffect(() => {
    // ensure hello folder always exists - defensive
    if (!folders.find(f => f.id === 'hello')) {
      setFolders(prev => [{ id: 'hello', name: 'Hello', open: false, files: [] }, ...prev])
    }
  }, [folders])

  const [open, setOpen]=useState(false);
  return (

    <div className="overflow-hidden">
    {/* Header */}
    <div className="border-b border-border overflow-hidden">
            <div className="flex items-center gap-4 px-4 py-2">
      <div className="flex space-x-2 mb-6 mt-5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />   
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />   
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />   
      </div>


              <div className="ml-50  flex items-center gap-2 text-sm">
                <div className="flex items-center h-12 w-75 gap-5 rounded-md border border-border px-3 justify-between">
                  <span>New Tab</span>
                  <button
                    type="button"
                    aria-label="Close tab"
                    className="ml-2 text-muted-foreground hover:text-foreground"
                  >
                    <X />
                  </button>
                </div>
                <button
                  type="button"
                  aria-label="New tab"
                  className="rounded-md h-12 px-2 text-muted-foreground hover:text-foreground"
                >
                  <Plus />
                </button>
              </div>
            </div>
          </div>
     <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
     {/* Window/top bar */}
          
      <main className="flex-1 overflow-auto">
      <div className="flex m-0 h-screen w-full">
        {/* Left icon sidebar */}
        <SideBar />

        <aside className="w-56 border-r border-border bg-muted/10">
          <div className="p-4">
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
           
            </div>
            <div aria-label="Workspace sections" className="text-sm">
              <ul className="space-y-2">
                <li className="flex items-center justify-center gap-4 p-3 ">
                  <button onClick={addFolder} className="hover:text-green-400 text-neutral-400 " title="New folder">
                    <FolderPlus /> 
                  </button>
                  <button onClick={addFile} className="hover:text-green-400 text-neutral-400 " title="New file">
                    <CirclePlus /> 
                  </button>
                </li>

                {/* Dynamic folders */}
                {folders.map(folder => {
                  const isOpen = !!openFolderIds[folder.id]
                  const isSelected = selectedFolderId === folder.id
                  return (
                    <li key={folder.id}>
                      <div className={`flex items-center w-full text-left rounded-md px-2 py-2 ${isSelected ? 'bg-muted/30' : ''}`}>
                        <button onClick={() => { toggleFolder(folder.id); selectFolder(folder.id) }} aria-expanded={isOpen} className="flex items-center gap-2">
                          {isOpen ? <ChevronDown /> : <ChevronRight />}
                        </button>
                        <button onClick={() => selectFolder(folder.id)} className="ml-2 text-sm text-left w-full">
                          {folder.name}
                        </button>
                      </div>

                      {isOpen && folder.files.length > 0 && (
                        <ul>
                          {folder.files.map(f => (
                            <li key={f.id}>
                              <a className="block rounded-md px-3 py-2 ml-6 hover:bg-muted/20" href="#">{f.name}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

         
        </aside>

        {/* Main editor surface */}
        <section className="flex-1 flex flex-col">
         

          {/* Center content */}
          <div className="flex-1 grid place-items-center">
            <div className="text-center">
              <h1 className="text-xl font-semibold tracking-tight text-muted-foreground">No file is open</h1>
              <div className="mt-4 flex items-center justify-center gap-6">
                <Link href="#" className="text-primary font-medium hover:underline">
                  Create a new file
                </Link>
                <Link href="/" className="text-muted-foreground hover:underline">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </div>
      {/* Toast notification - extreme bottom-right */}
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

// toast styles are provided via tailwind classes in the project; this simple element
// will sit in the extreme bottom-right when visible.
