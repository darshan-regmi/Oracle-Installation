import { Rocket, Database, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 via-background to-background pt-20 pb-16 sm:pt-24 sm:pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 sm:p-5 bg-primary/10 rounded-full transition-colors duration-300">
              <Database className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
            Oracle Database Installation Guide
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Complete setup guide for macOS (Intel & Apple Silicon) with Docker,
            Homebrew, and advanced configurations.
          </p>

          {/* Last updated */}
          <p className="text-xs sm:text-sm text-muted-foreground/70">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quick Start */}
          <div className="p-5 sm:p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-base sm:text-lg">
                Quick Start
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Get up and running in 30 minutes with our streamlined setup.
            </p>
          </div>

          {/* Multiple Methods */}
          <div className="p-5 sm:p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-base sm:text-lg">
                Multiple Methods
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Docker, Homebrew, and manual installation options for flexibility.
            </p>
          </div>

          {/* Best Practices */}
          <div className="p-5 sm:p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-base sm:text-lg">
                Best Practices
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Security, performance, and maintenance guidance to keep your
              database healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
