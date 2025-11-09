export default function HomebrewSetupSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
        Homebrew Installation
      </h2>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        What is Homebrew?
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Homebrew is a package manager for macOS that simplifies software
        installation. It’s the easiest way to install Oracle utilities and
        dependencies without Docker.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Step 1: Install Homebrew
      </h3>
      <p className="text-gray-600 mb-2">
        If you don’t already have Homebrew installed:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
        <code>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</code>
      </pre>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg text-gray-700">
        <strong className="block mb-2">Apple Silicon Users:</strong>
        After installation, add Homebrew to your PATH:
        <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm mt-2 overflow-x-auto">
          <code>{`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc`}</code>
        </pre>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Step 2: Install Oracle Instant Client
      </h3>
      <p className="text-gray-600 mb-2">
        The lightweight Oracle client library:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
        <code>{`brew tap oracle/instantclient
brew install oracle-instantclient`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Step 3: Configure Environment Variables
      </h3>
      <p className="text-gray-600 mb-2">
        Add these to your shell profile (~/.zshrc or ~/.bash_profile):
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
        <code>{`export DYLD_LIBRARY_PATH=/usr/local/opt/oracle-instantclient/lib:$DYLD_LIBRARY_PATH
export TNS_ADMIN=/usr/local/opt/oracle-instantclient/network/admin
export NLS_LANG=AMERICAN_AMERICA.AL32UTF8`}</code>
      </pre>
      <p className="text-gray-600 mb-6">Reload your shell:</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
        <code>{`source ~/.zshrc`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Step 4: Install SQLPlus (Optional)
      </h3>
      <p className="text-gray-600 mb-2">For command-line database access:</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
        <code>{`brew install sqlplus`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Step 5: Verify Installation
      </h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
        <code>{`sqlplus -version
# or
sqlplus -h`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Connecting via Homebrew-Installed Tools
      </h3>
      <p className="text-gray-600 mb-2">
        Connect to your Docker Oracle instance:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
        <code>{`sqlplus system/YourPassword@localhost:1521/XEPDB1`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Troubleshooting Homebrew Installation
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
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

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-lg text-gray-700">
        <strong className="block mb-2">Note:</strong> Homebrew installation
        requires the Oracle database to be running elsewhere (Docker, VM, or
        remote server). For a complete standalone setup, use Docker.
      </div>
    </section>
  );
}
