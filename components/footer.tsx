export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
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

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
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

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive Oracle Database installation guide for macOS
              developers.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
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
            <p className="text-sm text-muted-foreground mt-1">
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
            <p className="text-sm text-muted-foreground mt-1">
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

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            Oracle Database Installation Guide for macOS
          </p>
          <p className="mt-2">
            Made by <strong>Darshan Regmi</strong> •{" "}
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
