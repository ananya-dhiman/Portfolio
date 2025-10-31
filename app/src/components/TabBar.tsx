'use client'
import { X, Plus } from "lucide-react"

interface Tab {
  id: string
  name: string
}

interface TabBarProps {
  tabs: Tab[]
  activeTabId: string | null
  onTabSelect: (tabId: string) => void
  onTabClose: (tabId: string) => void
  onNewTab?: () => void
}

export default function TabBar({
  tabs,
  activeTabId,
  onTabSelect,
  onTabClose,
  onNewTab
}: TabBarProps) {
  return (
    <div className="border-b border-border">
      <div className="flex items-center gap-4 px-4 py-2">
        {/* Mac-style traffic lights */}
        <div className="flex space-x-2 mb-6 mt-5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Tabs */}
        <div className="ml-50 flex items-center gap-2 text-sm overflow-x-auto">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`flex items-center gap-2 h-12 px-3 rounded-md border border-border cursor-pointer ${
                activeTabId === tab.id
                  ? "bg-[#1e1e1e] text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => onTabSelect(tab.id)}
            >
              <span>{tab.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onTabClose(tab.id)
                }}
                className="ml-2 hover:text-red-400"
              >
                <X size={16} />
              </button>
            </div>
          ))}

          {onNewTab && (
            <button
              onClick={onNewTab}
              className="rounded-md h-12 px-2 text-muted-foreground hover:text-foreground"
            >
              <Plus />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
