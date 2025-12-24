"use client";

import { ChevronRight } from "lucide-react";

interface TOCProps {
  setActiveSection: (section: string) => void;
}

export default function TableOfContents({ setActiveSection }: TOCProps) {
  const sections = [
    {
      id: "prerequisites",
      title: "Prerequisites",
      description: "System requirements and pre-installation checks",
    },
    {
      id: "quick-start",
      title: "Quick Start",
      description: "Get up and running in 30 minutes",
    },
    {
      id: "docker-setup",
      title: "Docker Setup",
      description: "Complete Docker configuration for Oracle",
    },
    {
      id: "connection",
      title: "Connection & Tools",
      description: "Connect to your Oracle database",
    },
    {
      id: "dump-file",
      title: "Dump File",
      description: "Export and import Oracle database dumps",
    },
    {
      id: "clients",
      title: "Client Libraries",
      description: "Language bindings and connection examples",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      description: "Common issues and solutions",
    },
    {
      id: "security",
      title: "Security",
      description: "Best practices and hardening guide",
    },
    {
      id: "performance",
      title: "Performance",
      description: "Optimization and tuning",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Backups, upgrades, and maintenance",
    },
    { id: "faqs", title: "FAQs", description: "Frequently asked questions" },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-foreground">
          Comprehensive Guide Contents
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0">
          Navigate through our complete documentation
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className="text-left p-4 sm:p-5 rounded-lg border border-border hover:border-primary hover:bg-accent/5 transition-all hover:shadow-md hover:scale-[1.02] group focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-primary text-base sm:text-lg mb-1 group-hover:text-primary/80 transition-colors">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary mt-1 flex-shrink-0 transition-all group-hover:translate-x-1 group-hover:rotate-90" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
