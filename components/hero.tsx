import { Rocket, Database, Zap, Shield } from "lucide-react"

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-primary/10 via-background to-background pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Hero */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full transition-colors duration-300">
              <Database className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">
            Oracle Database Installation Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Complete setup guide for macOS (Intel & Apple Silicon) with Docker, Homebrew, and advanced configurations.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Quick Start</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Get up and running in 30 minutes with our streamlined setup.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Multiple Methods</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Docker, Homebrew, and manual installation options for flexibility.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Best Practices</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Security, performance, and maintenance guidance to keep your database healthy.
            </p>
          </div>

          {/* Optional 4th feature */}
          {/*
          <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Persistent Data</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Use Docker volumes to ensure your data remains safe and persistent.
            </p>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}