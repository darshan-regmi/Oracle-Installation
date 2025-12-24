"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import TableOfContents from "@/components/table-of-contents"
import PrerequisitesSection from "@/components/sections/prerequisites"
import QuickStartSection from "@/components/sections/quick-start"
import DockerSetupSection from "@/components/sections/docker-setup"
import ConnectionSection from "@/components/sections/connection"
import DumpFile from "@/components/sections/dumpFile"
import ClientsSection from "@/components/sections/clients"
import TroubleshootingSection from "@/components/sections/troubleshooting"
import SecuritySection from "@/components/sections/security"
import PerformanceSection from "@/components/sections/performance"
import MaintenanceSection from "@/components/sections/maintenance"
import FAQsSection from "@/components/sections/faqs"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="flex-1 overflow-auto">
          {activeSection === "home" && (
            <>
              <Hero />
              <div className="max-w-4xl mx-auto px-6 py-12">
                <TableOfContents setActiveSection={setActiveSection} />
              </div>
            </>
          )}

          {activeSection === "prerequisites" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <PrerequisitesSection />
            </div>
          )}

          {activeSection === "quick-start" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <QuickStartSection />
            </div>
          )}

          {activeSection === "docker-setup" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <DockerSetupSection />
            </div>
          )}

          {activeSection === "connection" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <ConnectionSection />
            </div>
          )}
          
          {activeSection === "dump-file" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <DumpFile />
            </div>
          )}

          {activeSection === "clients" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <ClientsSection />
            </div>
          )}

          {activeSection === "troubleshooting" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <TroubleshootingSection />
            </div>
          )}

          {activeSection === "security" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <SecuritySection />
            </div>
          )}

          {activeSection === "performance" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <PerformanceSection />
            </div>
          )}

          {activeSection === "maintenance" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <MaintenanceSection />
            </div>
          )}

          {activeSection === "faqs" && (
            <div className="max-w-4xl mx-auto px-6 py-12 prose-content">
              <FAQsSection />
            </div>
          )}

          <Footer />
        </main>
      </div>
    </div>
  )
}
