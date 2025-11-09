export default function TroubleshootingSection() {
  return (
    <div>
      <h2>Troubleshooting & Common Issues</h2>

      <h3>Connection Issues</h3>

      <h4>Connection Refused or Cannot Connect to Port 1521</h4>
      <div className="warning-box">
        <strong>Error:</strong> "Connection refused" or "Cannot connect to port
        1521"
      </div>
      <p>
        <strong>Solutions:</strong>
      </p>
      <ul>
        <li>
          Verify Docker daemon is running: <code>docker info</code>. If it
          errors, start Docker Desktop.
        </li>
        <li>
          Ensure the container is running:{" "}
          <code>docker ps | grep oracle-11g</code>
        </li>
        <li>
          Check logs: <code>docker logs oracle-11g</code>
        </li>
        <li>Wait for startup (can take 2-3 minutes after first run)</li>
        <li>Verify Docker Desktop is running and accessible</li>
        <li>Check firewall settings are not blocking port 1521</li>
        <li>
          Restart the container: <code>docker restart oracle-11g</code>
        </li>
      </ul>

      <h4>Port Already in Use</h4>
      <div className="warning-box">
        <strong>Error:</strong> "Port 1521 is already in use"
      </div>
      <p>
        <strong>Solutions:</strong>
      </p>
      <pre>
        <code>{`# Find what's using port 1521
lsof -i :1521

# Kill the process (get PID from above)
kill -9 <PID>

# Or use a different port in docker run
docker run -p 1522:1521 oracleinanutshell/oracle-xe-11g`}</code>
      </pre>

      <h3>Performance & Resource Issues</h3>

      <h4>Out of Memory or Container Crashes</h4>
      <div className="warning-box">
        <strong>Error:</strong> Container crashes with OOM or memory issues
      </div>
      <p>
        <strong>Solutions:</strong>
      </p>
      <ul>
        <li>
          Increase Docker Desktop memory allocation to 12+ GB in Settings →
          Resources
        </li>
        <li>
          Check available system memory: <code>vm_stat</code>
        </li>
        <li>
          Use Oracle 11g Express Edition image:{" "}
          <code>oracleinanutshell/oracle-xe-11g</code>
        </li>
        <li>
          Add memory limits in docker run (optional):
          <pre>
            <code>{`docker run -d --name oracle-11g --memory=8g ... oracleinanutshell/oracle-xe-11g`}</code>
          </pre>
        </li>
      </ul>

      <h4>Slow Performance</h4>
      <p>
        <strong>Optimization tips:</strong>
      </p>
      <ul>
        <li>Allocate more CPU cores (4+) in Docker Settings → Resources</li>
        <li>
          Use local named volumes instead of bind mounts for better I/O
          performance
        </li>
        <li>Enable Rosetta emulation on Apple Silicon</li>
        <li>Close unnecessary applications to free up resources</li>
        <li>
          Monitor usage: <code>docker stats oracle-11g</code>
        </li>
      </ul>

      <h3>Apple Silicon (M1/M2/M3) Specific Issues</h3>

      <h4>Crashes or Compatibility Issues</h4>
      <div className="warning-box">
        <strong>Issue:</strong> Slow performance or crashes on Apple Silicon
      </div>
      <p>
        <strong>Solutions:</strong>
      </p>
      <ul>
        <li>Enable "Use Rosetta for x86/amd64 emulation" in Docker Desktop</li>
        <li>
          Run image with explicit platform:
          <pre>
            <code>
              docker run --platform linux/amd64 oracleinanutshell/oracle-xe-11g
            </code>
          </pre>
        </li>
        <li>Allocate more CPU cores (4+)</li>
        <li>Update Docker Desktop to the latest version</li>
        <li>
          Check Docker architecture info:
          <pre>
            <code>docker version</code>
          </pre>
        </li>
      </ul>

      <h3>Database Startup Issues</h3>

      <h4>Database Won't Start or Initialization Fails</h4>
      <p>
        <strong>Debugging steps:</strong>
      </p>
      <ul>
        <li>
          Check logs: <code>docker logs -f oracle-11g</code>
        </li>
        <li>Look for specific error messages</li>
        <li>
          Verify sufficient disk space: <code>df -h</code>
        </li>
        <li>
          Restart container: <code>docker restart oracle-11g</code>
        </li>
        <li>
          If persistent, clean up and recreate:
          <pre>
            <code>{`docker stop oracle-11g
docker rm oracle-11g
docker volume rm oracle-11g-data
docker run -d --name oracle-11g -p 1521:1521 -p 8080:8080 oracleinanutshell/oracle-xe-11g`}</code>
          </pre>
        </li>
      </ul>

      <h3>Authentication & Security Issues</h3>

      <h4>Authentication Failed or Invalid Password</h4>
      <div className="warning-box">
        <strong>Error:</strong> "Invalid password" or "ORA-01017"
      </div>
      <p>
        <strong>Solutions:</strong>
      </p>
      <ul>
        <li>
          Verify password exactly matches container credentials:{" "}
          <code>system/oracle</code>
        </li>
        <li>Check for special characters in shell commands</li>
        <li>
          Recreate container with explicit password if needed:
          <pre>
            <code>{`docker run -e ORACLE_PASSWORD="oracle" ... oracleinanutshell/oracle-xe-11g`}</code>
          </pre>
        </li>
      </ul>

      <h3>Data & Volume Issues</h3>

      <h4>Data Loss After Container Removal</h4>
      <p>
        <strong>Prevention:</strong>
      </p>
      <ul>
        <li>Always use named volumes for persistent data</li>
        <li>
          Use <code>docker stop</code> instead of <code>docker rm</code> to
          preserve data
        </li>
        <li>
          To safely inspect volumes:
          <pre>
            <code>{`docker stop oracle-11g
docker volume ls
docker volume inspect oracle-11g-data`}</code>
          </pre>
        </li>
      </ul>

      <h3>GUI Tool Connection Issues</h3>

      <h4>DBeaver or SQL Developer Can't Connect</h4>
      <p>
        <strong>Troubleshooting:</strong>
      </p>
      <ul>
        <li>
          Test basic connectivity first:{" "}
          <code>docker exec -it oracle-11g sqlplus system/oracle@XE</code>
        </li>
        <li>
          Verify all connection details (host, port, database, username,
          password)
        </li>
        <li>Ensure Oracle client libraries are installed if needed</li>
        <li>Check firewall isn't blocking port 1521</li>
        <li>Update JDBC drivers if using Java-based tools</li>
      </ul>

      <div className="info-box">
        <strong>Still having issues?</strong>
        Check the Docker daemon (<code>docker info</code>) and container logs (
        <code>docker logs oracle-11g</code>), or consult FAQs for more guidance.
      </div>
    </div>
  );
}
