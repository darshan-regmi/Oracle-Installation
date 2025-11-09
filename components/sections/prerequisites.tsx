export default function PrerequisitesSection() {
  return (
    <div>
      <h2>Prerequisites</h2>

      <h3>Who is This Guide For?</h3>
      <p>
        This guide is designed for developers, students, data scientists, and engineers who want to set up Oracle
        Database 11g on macOS using Docker. It covers both beginners and advanced users, providing clear, step-by-step
        instructions for installation, connection, troubleshooting, and security.
      </p>
      <p className="font-semibold">After following this guide, you will be able to:</p>
      <ul>
        <li>Install and configure Oracle Database 11g on macOS</li>
        <li>Use Docker for containerized Oracle deployments</li>
        <li>Connect from various programming languages and GUI tools</li>
        <li>Troubleshoot common installation and runtime issues</li>
        <li>Secure, optimize, and maintain your Oracle 11g instance</li>
      </ul>

      <h3>System Requirements</h3>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Minimum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>macOS Version</td>
            <td>11.0 (Big Sur)</td>
            <td>Latest stable version</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>8 GB</td>
            <td>16 GB or more</td>
          </tr>
          <tr>
            <td>Disk Space</td>
            <td>20 GB free</td>
            <td>40 GB free</td>
          </tr>
          <tr>
            <td>Docker Desktop</td>
            <td>4.15+</td>
            <td>Latest version</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>Intel or Apple Silicon</td>
            <td>Apple Silicon (M1/M2/M3) or Intel with virtualization support</td>
          </tr>
        </tbody>
      </table>

      <h3>Installation Paths Available</h3>
      <p>This guide primarily focuses on the following installation methods:</p>
      <ul>
        <li>
          <strong>Docker (Recommended)</strong> – Provides a portable, reproducible, and isolated Oracle 11g environment.
        </li>
        <li>
          <strong>Homebrew</strong> – Quick local setup for lightweight development, not recommended for production.
        </li>
      </ul>

      <div className="warning-box">
        <strong>Note:</strong> Apple Silicon (M1/M2/M3) users must enable Rosetta emulation in Docker to run x86-based
        Oracle 11g images. This ensures compatibility with the container and SQL*Plus.
      </div>
    </div>
  )
}