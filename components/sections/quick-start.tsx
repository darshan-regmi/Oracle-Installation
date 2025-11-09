export default function QuickStartSection() {
  return (
    <div>
      <h2>Quick Start (30 Minutes)</h2>

      <h3>For Absolute Beginners</h3>
      <p>
        This guide will help you set up Oracle Database on macOS (Apple Silicon)
        using Docker. Follow the steps in order to get your database running
        quickly.
      </p>

      <h3>Step 1: Install Homebrew</h3>
      <pre>
        <code>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</code>
      </pre>

      <div className="info-box">
        <strong>For Apple Silicon:</strong> After installation, add Homebrew to
        your shell profile (.zshrc or .bash_profile):
        <pre>
          <code>{`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc`}</code>
        </pre>
        <p>
          Then reload your terminal with: <code>source ~/.zshrc</code>
        </p>
      </div>

      <h3>Step 2: Install Docker Desktop</h3>
      <pre>
        <code>{`brew install --cask docker`}</code>
      </pre>
      <p>
        Or download the installer directly from{" "}
        <a
          href="https://docker.com/download"
          className="text-primary hover:underline"
        >
          docker.com/download
        </a>
      </p>

      <h3>Step 3: Pull Oracle Database Image</h3>
      <pre>
        <code>{`docker pull oracleinanutshell/oracle-xe-11g`}</code>
      </pre>

      <h3>Step 4: Create and Run Container</h3>
      <pre>
        <code>{`docker run -d \\
  --name oracle-11g \\
  -p 1521:1521 -p 8080:8080 \\
  -e ORACLE_ALLOW_REMOTE=true \\
  oracleinanutshell/oracle-xe-11g`}</code>
      </pre>
      <p>
        This command creates a container named <code>oracle-11g</code>, exposes
        ports <code>1521</code> for SQL connections and <code>8080</code> for
        Oracle APEX, and allows remote connections.
      </p>
      <p>Default credentials:</p>
      <ul>
        <li>
          Username: <code>system</code>
        </li>
        <li>
          Password: <code>oracle</code>
        </li>
      </ul>

      <h3>Step 5: Verify Installation</h3>
      <pre>
        <code>{`docker logs -f oracle-11g | grep "DATABASE IS READY"`}</code>
      </pre>
      <p>
        Once you see <code>DATABASE IS READY</code>, your Oracle database is up
        and running.
      </p>

      <div className="success-box">
        🎉 Your Oracle Database is now running! You can proceed to the Docker
        Setup section for advanced configuration and connection instructions.
      </div>
    </div>
  );
}
