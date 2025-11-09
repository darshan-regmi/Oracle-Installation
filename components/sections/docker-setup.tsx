export default function DockerSetupSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 transition-colors">
        Docker Setup & Configuration
      </h2>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Understanding Docker for Oracle 11g
      </h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        Docker provides a containerized environment for Oracle 11g, making it
        portable and reproducible across different macOS systems. This ensures a
        consistent database environment without affecting your host OS.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Docker Configuration for Oracle 11g
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Optimize Docker Desktop settings:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        <li>Open Docker Desktop → Settings → Resources</li>
        <li>Set Memory: 8GB (12GB+ for Apple Silicon)</li>
        <li>Set CPU: 4+ cores</li>
        <li>Set Swap: 2GB</li>
        <li>For Apple Silicon: Enable "Use Rosetta for x86/amd64 emulation"</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Docker Compose Setup
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Create{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          docker-compose.yml
        </code>{" "}
        for easier container management with Oracle 11g:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`version: '3.8'

services:
  oracle-11g:
    image: oracleinanutshell/oracle-xe-11g
    container_name: oracle-11g
    ports:
      - "1521:1521"
      - "8080:8080"
    environment:
      ORACLE_ALLOW_REMOTE: "true"
    volumes:
      - oracle-data:/u01/app/oracle/oradata
    healthcheck:
      test: ["CMD", "echo", "SELECT 1 FROM dual;"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  oracle-data:
    driver: local`}</code>
      </pre>

      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Start the container with:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`docker-compose up -d`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Networking & Connectivity
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        To connect to Oracle 11g from your host machine:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        <li>
          Connection String:{" "}
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
            localhost:1521/XE
          </code>
        </li>
        <li>
          Default User:{" "}
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
            system
          </code>
        </li>
        <li>
          SID:{" "}
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
            XE
          </code>
        </li>
        <li>PDB: Not applicable for 11g</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Common Docker Commands
      </h3>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`# View running containers
docker ps

# Stop the Oracle 11g container
docker stop oracle-11g

# Start the Oracle 11g container
docker start oracle-11g

# View logs
docker logs -f oracle-11g

# Remove container
docker rm oracle-11g`}</code>
      </pre>

      <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 rounded-lg text-gray-700 dark:text-yellow-200 transition-colors">
        <strong>Important:</strong> For production use, always use strong
        passwords and enable encryption. Follow security best practices even
        when running Oracle 11g in Docker.
      </div>
    </section>
  );
}
