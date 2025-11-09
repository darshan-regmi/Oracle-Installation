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
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Comprehensive Guide Contents
        </h2>
        <p className="text-muted-foreground">
          Navigate through our complete documentation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className="text-left p-5 rounded-lg border border-border hover:border-primary hover:bg-accent/5 transition-all hover:shadow-md hover:scale-[1.02] group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary mt-1 ml-2 flex-shrink-0 transition-all group-hover:rotate-90" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
