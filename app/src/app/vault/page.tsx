
// 'use client'
// import Link from "next/link"
// import { useEffect, useState } from "react"
// import SideBar  from "@/components/SideBar"
// import {X, Plus,CirclePlus,FolderPlus,ChevronRight,ChevronDown} from "lucide-react"
// import AboutPage from "../about/page"
// import Projects from "../projects/page"
// import Stack from "../stack/page"

// type FileItem = {
//   id: string
//   name: string
// }

// type FolderItem = {
//   id: string
//   name: string
//   files: FileItem[]
//   open?: boolean
// }

// export default function VaultWorkspacePage() {
//   // folders state: 'Hello' is always present by default
//   const [folders, setFolders] = useState<FolderItem[]>([
//     { id: 'hello', name: 'Hello', open: true, files: [
//       { id: 'about', name: 'About' },
//       { id: 'projects', name: 'Projects' },
//       { id: 'stack', name: 'Stack' },
//       { id: 'connect', name: 'Connect' },
//     ] }
//   ])
//   const [selectedFolderId, setSelectedFolderId] = useState<string | null>('hello')
//   const [selectedFileId, setSelectedFileId] = useState<string | null>('about')
//   const [openFolderIds, setOpenFolderIds] = useState<Record<string, boolean>>({ hello: true })
//   const [toast, setToast] = useState<{show: boolean; text: string}>({ show: false, text: '' })

//   // helper to generate ids
//   const id = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2,9)}`

//   const showToast = (text: string, ms = 2500) => {
//     setToast({ show: true, text })
//     window.setTimeout(() => setToast({ show: false, text: '' }), ms)
//   }

//   // add new folder
//   const addFolder = () => {
//     const newFolder: FolderItem = { id: id('folder'), name: `Folder ${folders.length}`, files: [] }
//     setFolders(prev => [...prev, newFolder])
//     setSelectedFolderId(newFolder.id)
//     setOpenFolderIds(prev => ({ ...prev, [newFolder.id]: true }))
//   }

//   // add file into selected folder, if none selected show toast
//   const addFile = () => {
//     if (!selectedFolderId) {
//       showToast('Select a folder first')
//       return
//     }

//     // do not add files into the default 'Hello' folder per instructions
//     if (selectedFolderId === 'hello') {
//       showToast('Cannot add files to the default Hello folder')
//       return
//     }

//     setFolders(prev => prev.map(f => {
//       if (f.id !== selectedFolderId) return f
//       const newFile: FileItem = { id: id('file'), name: `File ${f.files.length + 1}` }
//       return { ...f, files: [...f.files, newFile] }
//     }))
//   }

//   // toggle folder open
//   const toggleFolder = (folderId: string) => {
//     setOpenFolderIds(prev => ({ ...prev, [folderId]: !prev[folderId] }))
//   }

//   // select folder
//   const selectFolder = (folderId: string) => {
//     setSelectedFolderId(folderId)
//   }

//   // Add this function to handle file selection
//   const selectFile = (fileId: string) => {
//     setSelectedFileId(fileId)
//     // Scroll to the section
//     const element = document.getElementById(`section-${fileId}`)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }

//   useEffect(() => {
//     // ensure hello folder always exists - defensive
//     if (!folders.find(f => f.id === 'hello')) {
//       setFolders(prev => [{ id: 'hello', name: 'Hello', open: false, files: [] }, ...prev])
//     }
//   }, [folders])

//   // Scroll observer effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['about', 'projects', 'stack', 'connect']
//       const scrollContainer = document.getElementById('scroll-container')
      
//       if (!scrollContainer) return

//       const scrollPosition = scrollContainer.scrollTop + 200 // offset for better UX

//       for (const sectionId of sections) {
//         const element = document.getElementById(`section-${sectionId}`)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setSelectedFileId(sectionId)
//             break
//           }
//         }
//       }
//     }

//     const scrollContainer = document.getElementById('scroll-container')
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll)
//       return () => scrollContainer.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   const [open, setOpen]=useState(false);
//   return (
//     <div>
//     {/* Header */}
//     <div className="border-b border-border">
//             <div className="flex items-center gap-4 px-4 py-2">
//       <div className="flex space-x-2 mb-6 mt-5">
//         <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />   
//         <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />   
//         <div className="w-3 h-3 rounded-full bg-[#27c93f]" />   
//       </div>


//               <div className="ml-50  flex items-center gap-2 text-sm">
//                 <div className="flex items-center h-12 w-75 gap-5 rounded-md border border-border px-3 justify-between">
//                   <span>New Tab</span>
//                   <button
//                     type="button"
//                     aria-label="Close tab"
//                     className="ml-2 text-muted-foreground hover:text-foreground"
//                   >
//                     <X />
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   aria-label="New tab"
//                   className="rounded-md h-12 px-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Plus />
//                 </button>
//               </div>
//             </div>
//           </div>
//      <div className="flex h-screen bg-[#121212] text-white">
//      {/* Window/top bar */}
          
//       <main className="flex-1">
//       <div className="flex m-0 h-screen w-full">
//         {/* Left icon sidebar */}
//         <SideBar />

//         <aside className="w-56 border-r border-border bg-muted/10">
//           <div className="p-2">
//             <div className="flex items-center gap-2 text-sm text-muted-foreground">
           
//             </div>
//             <div aria-label="Workspace sections" className="text-sm">
//               <ul className="space-y-2">
//                 <li className="flex items-center justify-center gap-4 p-3 ">
//                   <button onClick={addFolder} className="hover:text-green-400 text-neutral-400 " title="New folder">
//                     <FolderPlus /> 
//                   </button>
//                   <button onClick={addFile} className="hover:text-green-400 text-neutral-400 " title="New file">
//                     <CirclePlus /> 
//                   </button>
//                 </li>

//                 {/* Dynamic folders */}
//                 {folders.map(folder => {
//                   const isOpen = !!openFolderIds[folder.id]
//                   const isSelected = selectedFolderId === folder.id
//                   return (
//                     <li key={folder.id}>
//                       <div className={`flex items-center w-full text-left rounded-md px-2 py-2 ${isSelected ? 'bg-muted/30' : ''}`}>
//                         <button onClick={() => { toggleFolder(folder.id); selectFolder(folder.id) }} aria-expanded={isOpen} className="flex items-center gap-2">
//                           {isOpen ? <ChevronDown /> : <ChevronRight />}
//                         </button>
//                         <button onClick={() => selectFolder(folder.id)} className="ml-2 text-sm text-left w-full">
//                           {folder.name}
//                         </button>
//                       </div>

//                       {isOpen && folder.files.length > 0 && (
//                         <ul>
//                           {folder.files.map(f => (
//                             <li key={f.id}>
//                               <button
//                                   className={`block rounded-md px-3 py-2 mt-3 mb-3 ml-6 hover:bg-muted/20 w-30 text-left ${selectedFileId === f.id ? 'bg-muted/30' : ''}`}
//                                   onClick={() => selectFile(f.id)}
//                                 >
//                                   {f.name}
//                                 </button>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   )
//                 })}
//               </ul>
//             </div>
//           </div>

         
//         </aside>

//         {/* Main editor surface */}
//         <section className="flex-1 flex flex-col">
         

//           {/* Center content */}
//           <div id="scroll-container" className="flex-1 overflow-y-auto scroll-smooth">
//             {/* Render file content based on selectedFileId */}
//             <div id="section-about" className="flex items-start justify-start m-10 p-10">
//               <AboutPage />
//             </div>
            
//             <div id="section-projects" >
          
//                <Projects/>
         
//             </div>
            
//             <div id="section-stack" className="flex items-start justify-start">
//               <Stack/>
//             </div>
            
//             <div id="section-connect" className="min-h-screen flex items-center justify-center">
//               <section className="max-w-4xl px-8">
//                 <h2 className="text-2xl font-bold mb-4">Connect</h2>
//                 <p>
//                   {/* Add your connect/contact content here */}
//                   You can reach me at...
//                 </p>
//               </section>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//     </div>
//       {/* Toast notification - extreme bottom-right */}
//       {toast.show && (
//         <div className="fixed right-4 bottom-4 z-50">
//           <div className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm shadow-lg">
//             {toast.text}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "@/components/SideBar"
import { X, Plus, CirclePlus, FolderPlus, ChevronRight, ChevronDown } from "lucide-react"
import AboutPage from "../about/page"
import Projects from "../projects/page"
import Stack from "../stack/page"

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
                              className={`block rounded-md px-3 py-2 mt-2 ml-6 hover:bg-muted/20 w-full text-left ${selectedFileId === f.id ? 'bg-muted/30' : ''}`}
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

        {/* Main content - SNAP SCROLL AREA */}
        <section className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth" id="scroll-container">
          <div id="section-about" className="h-screen snap-start flex items-center justify-center">
            <AboutPage />
          </div>
          <div id="section-projects" className="h-screen snap-start flex items-center justify-center">
            <Projects />
          </div>
          <div id="section-stack" className="h-screen snap-start flex items-center justify-center">
            <Stack />
          </div>
          <div id="section-connect" className="h-screen snap-start flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Connect</h2>
            <p>You can reach me at...</p>
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
