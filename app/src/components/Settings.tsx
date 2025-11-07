
import React, { useState, useEffect } from "react";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const [color, setColor] = useState<string>("#7c3aed");

  useEffect(() => {
    // Initialize color from localStorage or CSS variable
    const savedColor = localStorage.getItem("primaryColor");
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty("--primary", savedColor);
      document.documentElement.style.setProperty("--color-primary", savedColor);
    } else {
      const rootColor = getComputedStyle(document.documentElement).getPropertyValue("--primary");
      if (rootColor) {
        setColor(rootColor.trim());
      }
    }
  }, [isOpen]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);

    // Update CSS variables
    document.documentElement.style.setProperty("--primary", selectedColor);
    document.documentElement.style.setProperty("--color-primary", selectedColor);

    // Persist across reloads
    localStorage.setItem("primaryColor", selectedColor);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-[#1e1e1e] rounded-lg w-[900px] h-[600px] border border-[#2a2a2a] shadow-2xl flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar */}
        <div className="w-64 bg-[#1a1a1a] border-r border-[#2a2a2a] p-4">
          <h2 className="text-gray-400 text-xs font-semibold mb-4 px-2">OPTIONS</h2>
          
          <div className="space-y-1">
            <button 
              className="w-full text-left px-3 py-2 rounded text-white text-sm font-medium"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Appearance
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b border-[#2a2a2a] p-6 flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">Appearance</h1>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition text-2xl w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl">
              <div className="mb-8">
                <h3 className="text-white text-lg font-medium mb-2">Primary color</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Pick a colour you like! 
                </p>
                <input
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                  className="w-20 h-10 cursor-pointer rounded border border-[#2a2a2a] bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;  
