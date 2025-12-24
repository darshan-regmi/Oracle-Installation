export default function QuickStartSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 transition-colors">
        Quick Start (30 Minutes)
      </h2>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        For Absolute Beginners
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
        This guide will help you set up Oracle Database on macOS (Apple Silicon)
        using Docker. Follow the steps in order to get your database running
        quickly.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Step 1: Install Homebrew
      </h3>
      <pre className="bg-gray-900 text-white text-sm rounded-lg p-4 overflow-x-auto">
        <code>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</code>
      </pre>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-4 rounded-lg transition-colors">
        <strong className="block mb-2 text-blue-700 dark:text-blue-300 transition-colors">
          For Apple Silicon:
        </strong>
        <p className="text-gray-700 dark:text-gray-300 mb-2 transition-colors">
          After installation, add Homebrew to your shell profile (
          <code>.zshrc</code> or <code>.bash_profile</code>):
        </p>
        <pre className="bg-gray-100 dark:bg-gray-900 text-sm rounded-md p-3 overflow-x-auto text-gray-800 dark:text-gray-200 transition-colors">
          <code>{`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc`}</code>
        </pre>
        <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors">
          Then reload your terminal with: <code>source ~/.zshrc</code>
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Step 2: Install Docker Desktop
      </h3>
      <pre className="bg-gray-900 text-white text-sm rounded-lg p-4 overflow-x-auto">
        <code>{`brew install --cask docker`}</code>
      </pre>
      <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors">
        Or download the installer directly from{" "}
        <a
          href="https://docker.com/download"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          docker.com/download
        </a>
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Step 3: Pull Oracle Database Image
      </h3>
      <pre className="bg-gray-900 text-white text-sm rounded-lg p-4 overflow-x-auto">
        <code>{`docker pull oracleinanutshell/oracle-xe-11g`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Step 4: Create and Run Container
      </h3>
      <pre className="bg-gray-900 text-white text-sm rounded-lg p-4 overflow-x-auto">
        <code>{`docker run -d \\
  --name oracle-11g \\
  -p 1521:1521 -p 8080:8080 \\
  -e ORACLE_ALLOW_REMOTE=true \\
  oracleinanutshell/oracle-xe-11g`}</code>
      </pre>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2 transition-colors">
        This command creates a container named <code>oracle-11g</code>, exposes
        ports <code>1521</code> for SQL connections and <code>8080</code> for
        Oracle APEX, and allows remote connections.
      </p>

      <p className="text-gray-700 dark:text-gray-200 mt-4 font-medium transition-colors">
        Default credentials:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 transition-colors">
        <li>
          Username: <code>system</code>
        </li>
        <li>
          Password: <code>oracle</code>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Step 5: Verify Installation
      </h3>
      <pre className="bg-gray-900 text-white text-sm rounded-lg p-4 overflow-x-auto">
        <code>{`docker logs -f oracle-11g | grep "DATABASE IS READY"`}</code>
      </pre>
      <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors">
        Once you see <code>DATABASE IS READY</code>, your Oracle database is up
        and running.
      </p>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 text-green-700 dark:text-green-300 p-4 rounded-lg my-6 transition-colors">
        🎉 Your Oracle Database is now running! You can proceed to the Docker
        Setup section for advanced configuration and connection instructions.
      </div>
    </section>
  );
}
