export default function PerformanceSection() {
  return (
    <div>
      <h2>Performance & Optimization</h2>

      <h3>Docker Resource Allocation</h3>
      <p>Proper resource allocation is crucial for stable performance of Oracle 11g in Docker:</p>
      <pre>
        <code>{`# docker-compose.yml example
services:
  oracle-11g:
    image: gvenzl/oracle-xe:11.2.0.2
    deploy:
      resources:
        limits:
          cpus: '4'
          memory: 12G
        reservations:
          cpus: '2'
          memory: 8G
    environment:
      PROCESSES: 150
      SGA_TARGET: 4096M
      PGA_AGGREGATE_TARGET: 2048M`}</code>
      </pre>

      <h3>Memory Optimization</h3>
      <ul>
        <li>Set <code>SGA_TARGET</code> to ~40–50% of available RAM</li>
        <li>Set <code>PGA_AGGREGATE_TARGET</code> to ~25–35% of available RAM</li>
        <li>Monitor usage with <code>docker stats oracle-11g</code></li>
        <li>Adjust <code>PROCESSES</code> for expected concurrent connections</li>
      </ul>

      <h3>Storage Optimization</h3>
      <ul>
        <li>Use SSDs for Oracle data for better I/O performance</li>
        <li>Separate data files, redo logs, and temp files if possible</li>
        <li>Use named Docker volumes for better I/O than bind mounts</li>
        <li>Monitor disk I/O via <code>iostat</code> or <code>docker stats</code></li>
        <li>Pre-size data files to reduce extent fragmentation</li>
      </ul>

      <h3>Connection Pooling</h3>
      <p>Connection pooling reduces overhead for multiple clients:</p>
      <pre>
        <code>{`// Node.js example
const oracledb = require('oracledb');

const pool = await oracledb.createPool({
  user: 'app_user',
  password: 'password',
  connectString: 'localhost:1521/XE',
  poolMin: 5,
  poolMax: 20,
  poolIncrement: 3,
  poolTimeout: 60,
  sessionCallback: (conn) => {
    conn.execute("ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD'");
  }
});

const connection = await pool.getConnection();
try {
  const result = await connection.execute('SELECT 1 FROM dual');
} finally {
  await connection.close();
}`}</code>
      </pre>

      <h3>Query Optimization</h3>
      <ul>
        <li>Create indexes on frequently queried columns</li>
        <li>Analyze execution plans with <code>EXPLAIN PLAN</code></li>
        <li>Avoid full table scans for large tables</li>
        <li>Use proper data types to reduce storage overhead</li>
        <li>Write queries with selective <code>WHERE</code> clauses</li>
      </ul>

      <h3>Monitoring Performance</h3>
      <pre>
        <code>{`-- Monitor active sessions
SELECT sid, username, status, wait_event 
FROM v$session 
WHERE username IS NOT NULL;

-- Table sizes
SELECT table_name, ROUND(bytes/1024/1024, 2) AS size_mb 
FROM user_tables 
ORDER BY bytes DESC;

-- CPU & I/O stats
SELECT name, value FROM v$sysstat 
WHERE name LIKE '%CPU%' OR name LIKE 'physical%';

-- Tablespace growth
SELECT tablespace_name, SUM(bytes/1024/1024) AS total_mb
FROM dba_data_files
GROUP BY tablespace_name;`}</code>
      </pre>

      <h3>Docker Performance Tuning</h3>
      <pre>
        <code>{`# Limit log size to reduce I/O
services:
  oracle-11g:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    
    tmpfs:
      - /tmp:size=2G
      - /run:size=512M

    volumes:
      - oracle-data:/opt/oracle/oradata:Z`}</code>
      </pre>

      <h3>Benchmarking</h3>
      <p>Test workloads to measure performance improvements:</p>
      <pre>
        <code>{`-- Insert benchmark
DECLARE
  v_start TIMESTAMP;
BEGIN
  v_start := SYSTIMESTAMP;

  FOR i IN 1..10000 LOOP
    INSERT INTO test_table VALUES (i, 'Test ' || i);
  END LOOP;
  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Elapsed: ' || (SYSTIMESTAMP - v_start));
END;
`}</code>
      </pre>

      <div className="info-box">
        <strong>Tips:</strong> Allocate sufficient CPU/memory, use connection pooling, create indexes, optimize queries, 
        and monitor actively. Apple Silicon users may need to run images via Rosetta for x86 compatibility.
      </div>
    </div>
  )
}