export default function DockerSetupSection() {
  return (
    <div>
      <h2>Docker Setup & Configuration</h2>

      <h3>Understanding Docker for Oracle 11g</h3>
      <p>
        Docker provides a containerized environment for Oracle 11g, making it portable and reproducible across different
        macOS systems. This ensures a consistent database environment without affecting your host OS.
      </p>

      <h3>Docker Configuration for Oracle 11g</h3>
      <p>Optimize Docker Desktop settings:</p>
      <ul>
        <li>Open Docker Desktop → Settings → Resources</li>
        <li>Set Memory: 8GB (12GB+ for Apple Silicon)</li>
        <li>Set CPU: 4+ cores</li>
        <li>Set Swap: 2GB</li>
        <li>For Apple Silicon: Enable "Use Rosetta for x86/amd64 emulation"</li>
      </ul>

      <h3>Docker Compose Setup</h3>
      <p>
        Create <code>docker-compose.yml</code> for easier container management with Oracle 11g:
      </p>
      <pre>
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

      <p>Start the container with:</p>
      <pre>
        <code>{`docker-compose up -d`}</code>
      </pre>

      <h3>Networking & Connectivity</h3>
      <p>To connect to Oracle 11g from your host machine:</p>
      <ul>
        <li>Connection String: <code>localhost:1521/XE</code></li>
        <li>Default User: <code>system</code></li>
        <li>SID: <code>XE</code></li>
        <li>PDB: Not applicable for 11g</li>
      </ul>

      <h3>Common Docker Commands</h3>
      <pre>
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

      <div className="warning-box">
        <strong>Important:</strong> For production use, always use strong passwords and enable encryption.
        Follow security best practices even when running Oracle 11g in Docker.
      </div>
    </div>
  )
}