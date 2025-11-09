export default function PrerequisitesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">
        Prerequisites
      </h2>

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        Who is This Guide For?
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        This guide is designed for developers, students, data scientists, and
        engineers who want to set up Oracle Database 11g on macOS using Docker.
        It covers both beginners and advanced users, providing clear,
        step-by-step instructions for installation, connection, troubleshooting,
        and security.
      </p>

      <p className="font-semibold text-gray-700 mb-2">
        After following this guide, you will be able to:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-gray-600">
        <li>Install and configure Oracle Database 11g on macOS</li>
        <li>Use Docker for containerized Oracle deployments</li>
        <li>Connect from various programming languages and GUI tools</li>
        <li>Troubleshoot common installation and runtime issues</li>
        <li>Secure, optimize, and maintain your Oracle 11g instance</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700">
        System Requirements
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Component</th>
              <th className="px-4 py-3 text-left">Minimum</th>
              <th className="px-4 py-3 text-left">Recommended</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            <tr>
              <td className="px-4 py-3">macOS Version</td>
              <td className="px-4 py-3">11.0 (Big Sur)</td>
              <td className="px-4 py-3">Latest stable version</td>
            </tr>
            <tr>
              <td className="px-4 py-3">RAM</td>
              <td className="px-4 py-3">8 GB</td>
              <td className="px-4 py-3">16 GB or more</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Disk Space</td>
              <td className="px-4 py-3">20 GB free</td>
              <td className="px-4 py-3">40 GB free</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Docker Desktop</td>
              <td className="px-4 py-3">4.15+</td>
              <td className="px-4 py-3">Latest version</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Processor</td>
              <td className="px-4 py-3">Intel or Apple Silicon</td>
              <td className="px-4 py-3">
                Apple Silicon (M1/M2/M3) or Intel with virtualization support
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700">
        Installation Paths Available
      </h3>
      <p className="text-gray-600 leading-relaxed mb-3">
        This guide primarily focuses on the following installation methods:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <strong>Docker (Recommended)</strong> – Provides a portable,
          reproducible, and isolated Oracle 11g environment.
        </li>
        <li>
          <strong>Homebrew</strong> – Quick local setup for lightweight
          development, not recommended for production.
        </li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 rounded-lg text-gray-700">
        <strong className="block mb-2">⚠️ Note:</strong>
        Apple Silicon (M1/M2/M3) users must enable Rosetta emulation in Docker
        to run x86-based Oracle 11g images. This ensures compatibility with the
        container and SQL*Plus.
      </div>
    </section>
  );
}
