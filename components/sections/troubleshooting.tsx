export default function TroubleshootingSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
        Troubleshooting & Common Issues
      </h2>

      {/* Connection Issues */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Connection Issues
          </h3>

          <h4 className="text-lg font-semibold mb-2 text-primary">
            Connection Refused or Cannot Connect to Port 1521
          </h4>
          <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-md mb-3">
            <strong>Error:</strong> "Connection refused" or "Cannot connect to
            port 1521"
          </div>
          <p className="font-medium mb-2">Solutions:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>
              Verify Docker daemon is running: <code>docker info</code>.
            </li>
            <li>
              Ensure container is running:{" "}
              <code>docker ps | grep oracle-11g</code>.
            </li>
            <li>
              Check logs: <code>docker logs oracle-11g</code>.
            </li>
            <li>Wait for startup (2–3 mins after first run).</li>
            <li>Ensure Docker Desktop is running and accessible.</li>
            <li>Check firewall settings (port 1521).</li>
            <li>
              Restart container: <code>docker restart oracle-11g</code>.
            </li>
          </ul>
        </div>

        {/* Port Already in Use */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-primary">
            Port Already in Use
          </h4>
          <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 p-4 rounded-md mb-3">
            <strong>Error:</strong> "Port 1521 is already in use"
          </div>
          <p className="font-medium mb-2">Solutions:</p>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
            <code>{`# Find what's using port 1521
lsof -i :1521

# Kill the process (get PID from above)
kill -9 <PID>

# Or use a different port in docker run
docker run -p 1522:1521 oracleinanutshell/oracle-xe-11g`}</code>
          </pre>
        </div>

        {/* Performance Issues */}
        <div>
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
            Performance & Resource Issues
          </h3>

          <h4 className="text-lg font-semibold mb-2 text-primary">
            Out of Memory or Container Crashes
          </h4>
          <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-md mb-3">
            <strong>Error:</strong> Container crashes with OOM or memory issues
          </div>
          <p className="font-medium mb-2">Solutions:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>Increase Docker memory to 12+ GB (Settings → Resources)</li>
            <li>
              Check available memory: <code>vm_stat</code>
            </li>
            <li>
              Use: <code>oracleinanutshell/oracle-xe-11g</code>
            </li>
            <li>
              Add memory limits (optional):
              <pre className="bg-muted p-2 mt-2 rounded-md overflow-x-auto text-sm">
                <code>
                  docker run -d --name oracle-11g --memory=8g ...
                  oracleinanutshell/oracle-xe-11g
                </code>
              </pre>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-primary">
            Slow Performance
          </h4>
          <p className="font-medium mb-2">Optimization Tips:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>Allocate more CPU cores (4+).</li>
            <li>Use local named volumes for better I/O performance.</li>
            <li>Enable Rosetta on Apple Silicon.</li>
            <li>Close unnecessary background apps.</li>
            <li>
              Monitor usage: <code>docker stats oracle-11g</code>.
            </li>
          </ul>
        </div>

        {/* Apple Silicon Issues */}
        <div>
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
            Apple Silicon (M1/M2/M3) Specific Issues
          </h3>

          <h4 className="text-lg font-semibold mb-2 text-primary">
            Crashes or Compatibility Issues
          </h4>
          <div className="bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 p-4 rounded-md mb-3">
            <strong>Issue:</strong> Slow performance or crashes on Apple Silicon
          </div>
          <p className="font-medium mb-2">Solutions:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>Enable “Use Rosetta for x86/amd64 emulation” in Docker.</li>
            <li>
              Run with explicit platform:
              <pre className="bg-muted p-2 mt-2 rounded-md overflow-x-auto text-sm">
                <code>
                  docker run --platform linux/amd64
                  oracleinanutshell/oracle-xe-11g
                </code>
              </pre>
            </li>
            <li>Allocate more CPU cores (4+).</li>
            <li>Update Docker Desktop.</li>
            <li>
              Check architecture info:
              <pre className="bg-muted p-2 mt-2 rounded-md overflow-x-auto text-sm">
                <code>docker version</code>
              </pre>
            </li>
          </ul>
        </div>

        {/* Database Startup */}
        <div>
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
            Database Startup Issues
          </h3>
          <h4 className="text-lg font-semibold mb-2 text-primary">
            Database Won’t Start or Initialization Fails
          </h4>
          <p className="font-medium mb-2">Debugging Steps:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>
              Check logs: <code>docker logs -f oracle-11g</code>
            </li>
            <li>Look for specific errors.</li>
            <li>
              Check disk space: <code>df -h</code>
            </li>
            <li>
              Restart container: <code>docker restart oracle-11g</code>
            </li>
            <li>
              Recreate if persistent:
              <pre className="bg-muted p-2 mt-2 rounded-md overflow-x-auto text-sm">
                <code>{`docker stop oracle-11g
docker rm oracle-11g
docker volume rm oracle-11g-data
docker run -d --name oracle-11g -p 1521:1521 -p 8080:8080 oracleinanutshell/oracle-xe-11g`}</code>
              </pre>
            </li>
          </ul>
        </div>

        {/* Authentication */}
        <div>
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
            Authentication & Security Issues
          </h3>
          <h4 className="text-lg font-semibold mb-2 text-primary">
            Authentication Failed or Invalid Password
          </h4>
          <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-md mb-3">
            <strong>Error:</strong> "Invalid password" or "ORA-01017"
          </div>
          <p className="font-medium mb-2">Solutions:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>
              Ensure password is correct: <code>system/oracle</code>
            </li>
            <li>Watch for shell escape characters.</li>
            <li>
              Recreate container:
              <pre className="bg-muted p-2 mt-2 rounded-md overflow-x-auto text-sm">
                <code>
                  docker run -e ORACLE_PASSWORD="oracle" ...
                  oracleinanutshell/oracle-xe-11g
                </code>
              </pre>
            </li>
          </ul>
        </div>

        {/* Data Issues */}
        <div>
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
            Data & Volume Issues
          </h3>
          <h4 className="text-lg font-semibold mb-2 text-primary">
            Data Loss After Container Removal
          </h4>
          <p className="font-medium mb-2">Prevention:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>Always use named volumes for persistence.</li>
            <li>
              Use <code>docker stop</code> instead of <code>docker rm</code>.
            </li>
            <li>
              Inspect volumes:
              <pre className="bg-muted p-2 mt-2 rounded-md overflow-x-auto text-sm">
                <code>{`docker stop oracle-11g
docker volume ls
docker volume inspect oracle-11g-data`}</code>
              </pre>
            </li>
          </ul>
        </div>

        {/* GUI Issues */}
        <div>
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
            GUI Tool Connection Issues
          </h3>
          <h4 className="text-lg font-semibold mb-2 text-primary">
            DBeaver or SQL Developer Can't Connect
          </h4>
          <p className="font-medium mb-2">Troubleshooting:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
            <li>
              Test connectivity:{" "}
              <code>docker exec -it oracle-11g sqlplus system/oracle@XE</code>
            </li>
            <li>Verify host, port, and credentials.</li>
            <li>Install Oracle client libraries if needed.</li>
            <li>Check firewall (port 1521).</li>
            <li>Update JDBC drivers.</li>
          </ul>
        </div>
      </div>

      {/* Info Footer */}
      <div className="bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 p-5 rounded-md mt-10 text-sm sm:text-base leading-relaxed">
        <strong>Still having issues?</strong> Check your Docker daemon (
        <code>docker info</code>) and logs (<code>docker logs oracle-11g</code>
        ), or visit the FAQs section for further help.
      </div>
    </section>
  );
}
