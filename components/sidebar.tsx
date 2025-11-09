"use client"

import { Moon, Sun, Code2, ChevronDown } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isDark: boolean
  toggleDarkMode: () => void
}

const sections = [
  { id: "home", label: "Home" },
  { id: "prerequisites", label: "Prerequisites" },
  { id: "quick-start", label: "Quick Start" },
  { id: "docker-setup", label: "Docker Setup" },
  { id: "connection", label: "Connection" },
  { id: "clients", label: "Client Tools" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "security", label: "Security" },
  { id: "performance", label: "Performance" },
  { id: "maintenance", label: "Maintenance" },
  { id: "faqs", label: "FAQs" },
]

export default function Sidebar({ activeSection, setActiveSection, isDark, toggleDarkMode }: SidebarProps) {
  const [expandedResources, setExpandedResources] = useState(false)

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto h-screen sticky top-0">
      {/* Header */}
      <div className="sticky top-0 bg-sidebar border-b border-sidebar-border p-6 z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-sidebar-primary/10 rounded-lg">
            <Code2 className="w-5 h-5 text-sidebar-primary" />
          </div>
          <h1 className="text-lg font-bold text-sidebar-primary">Oracle DB</h1>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-md bg-sidebar-accent/10 hover:bg-sidebar-accent/20 transition-colors duration-200 text-sidebar-foreground text-sm font-medium"
        >
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          <div className="p-1 bg-sidebar-primary/20 rounded transition-transform">
            {isDark ? <Sun className="w-4 h-4 text-sidebar-primary" /> : <Moon className="w-4 h-4 text-sidebar-primary" />}
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 ${
              activeSection === section.id
                ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold shadow-sm"
                : "text-sidebar-foreground hover:bg-sidebar-accent/10"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Resources Section */}
      <div className="p-4 border-t border-sidebar-border mt-6">
        <button
          onClick={() => setExpandedResources(!expandedResources)}
          className="flex items-center gap-2 text-xs font-semibold text-sidebar-foreground/70 mb-3 hover:text-sidebar-foreground transition-colors w-full"
        >
          Resources
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${expandedResources ? "rotate-180" : ""}`}
          />
        </button>
        {expandedResources && (
          <div className="space-y-2 animate-in fade-in duration-200">
            <a
              href="https://docs.oracle.com/en/database/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-sidebar-primary hover:text-sidebar-primary/80 transition-colors duration-200 hover:underline"
            >
              Official Oracle Documentation
            </a>
            <a
              href="https://hub.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-sidebar-primary hover:text-sidebar-primary/80 transition-colors duration-200 hover:underline"
            >
              Docker Hub Registry
            </a>
            <a
              href="https://github.com/oracle"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-sidebar-primary hover:text-sidebar-primary/80 transition-colors duration-200 hover:underline"
            >
              Oracle GitHub Repository
            </a>
          </div>
        )}
      </div>
    </aside>
  )
}