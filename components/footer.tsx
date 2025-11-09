export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-center sm:text-left">
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://docs.oracle.com/en/database/oracle/oracle-database/index.html"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Oracle Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://hub.docker.com/_/oracle-database-express-edition"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docker Hub Registry
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/oracle"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oracle GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/oracle/docker-images/issues"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/tagged/oracle"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a
                  href="https://community.oracle.com/tech/developers/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oracle Forums
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">About</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive Oracle Database installation guide for macOS
              developers, designed for clarity, simplicity, and performance.
            </p>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>
                Portfolio:{" "}
                <a
                  href="https://darshanregmi.com.np"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  darshanregmi.com.np
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/bydarshanregmi"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @bydarshanregmi
                </a>{" "}
                /{" "}
                <a
                  href="https://instagram.com/_darshan_regmi"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @_darshan_regmi
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/darshan-regmi"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @darshan-regmi
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Note */}
        <div className="border-t border-border pt-6 text-center text-xs sm:text-sm text-muted-foreground space-y-2">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Oracle Database Installation Guide for macOS</p>
          <p>
            Made with ❤️ by <strong>Darshan Regmi</strong> •{" "}
            <a
              href="https://darshanregmi.com.np"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
