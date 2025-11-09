export default function HomebrewSetupSection() {
  return (
    <div>
      <h2>Homebrew Installation</h2>

      <h3>What is Homebrew?</h3>
      <p>
        Homebrew is a package manager for macOS that simplifies software
        installation. It’s the easiest way to install Oracle utilities and
        dependencies without Docker.
      </p>

      <h3>Step 1: Install Homebrew</h3>
      <p>If you don’t already have Homebrew installed:</p>
      <pre>
        <code>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</code>
      </pre>

      <div className="info-box">
        <strong>Apple Silicon Users:</strong> After installation, add Homebrew
        to your PATH:
        <pre>
          <code>{`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc`}</code>
        </pre>
      </div>

      <h3>Step 2: Install Oracle Instant Client</h3>
      <p>The lightweight Oracle client library:</p>
      <pre>
        <code>{`brew tap oracle/instantclient
brew install oracle-instantclient`}</code>
      </pre>

      <h3>Step 3: Configure Environment Variables</h3>
      <p>Add these to your shell profile (~/.zshrc or ~/.bash_profile):</p>
      <pre>
        <code>{`export DYLD_LIBRARY_PATH=/usr/local/opt/oracle-instantclient/lib:$DYLD_LIBRARY_PATH
export TNS_ADMIN=/usr/local/opt/oracle-instantclient/network/admin
export NLS_LANG=AMERICAN_AMERICA.AL32UTF8`}</code>
      </pre>
      <p>Reload your shell:</p>
      <pre>
        <code>{`source ~/.zshrc`}</code>
      </pre>

      <h3>Step 4: Install SQLPlus (Optional)</h3>
      <p>For command-line database access:</p>
      <pre>
        <code>{`brew install sqlplus`}</code>
      </pre>

      <h3>Step 5: Verify Installation</h3>
      <pre>
        <code>{`sqlplus -version
# or
sqlplus -h`}</code>
      </pre>

      <h3>Connecting via Homebrew-Installed Tools</h3>
      <p>Connect to your Docker Oracle instance:</p>
      <pre>
        <code>{`sqlplus system/YourPassword@localhost:1521/XEPDB1`}</code>
      </pre>

      <h3>Troubleshooting Homebrew Installation</h3>
      <ul>
        <li>
          <strong>Command not found:</strong> Ensure <code>~/.zshrc</code>{" "}
          contains the Homebrew initialization
        </li>
        <li>
          <strong>Library errors:</strong> Verify <code>DYLD_LIBRARY_PATH</code>{" "}
          is correctly set
        </li>
        <li>
          <strong>TNS errors:</strong> Check <code>TNS_ADMIN</code> points to
          the correct directory
        </li>
      </ul>

      <div className="warning-box">
        <strong>Note:</strong> Homebrew installation requires the Oracle
        database to be running elsewhere (Docker, VM, or remote server). For a
        complete standalone setup, use Docker.
      </div>
    </div>
  );
}
