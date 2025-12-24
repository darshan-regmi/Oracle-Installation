export default function PerformanceSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100 transition-colors">
        Performance & Optimization
      </h2>

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Docker Resource Allocation
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
        Proper resource allocation is crucial for stable performance of Oracle
        11g in Docker:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
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

      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Memory Optimization
      </h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300 transition-colors">
        <li>
          Set <code>SGA_TARGET</code> to ~40–50% of available RAM
        </li>
        <li>
          Set <code>PGA_AGGREGATE_TARGET</code> to ~25–35% of available RAM
        </li>
        <li>
          Monitor usage with <code>docker stats oracle-11g</code>
        </li>
        <li>
          Adjust <code>PROCESSES</code> for expected concurrent connections
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Storage Optimization
      </h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300 transition-colors">
        <li>Use SSDs for Oracle data for better I/O performance</li>
        <li>Separate data files, redo logs, and temp files if possible</li>
        <li>Use named Docker volumes for better I/O than bind mounts</li>
        <li>
          Monitor disk I/O via <code>iostat</code> or <code>docker stats</code>
        </li>
        <li>Pre-size data files to reduce extent fragmentation</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Connection Pooling
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
        Connection pooling reduces overhead for multiple clients:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
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

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Query Optimization
      </h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300 transition-colors">
        <li>Create indexes on frequently queried columns</li>
        <li>
          Analyze execution plans with <code>EXPLAIN PLAN</code>
        </li>
        <li>Avoid full table scans for large tables</li>
        <li>Use proper data types to reduce storage overhead</li>
        <li>
          Write queries with selective <code>WHERE</code> clauses
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Monitoring Performance
      </h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
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

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Docker Performance Tuning
      </h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
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

      <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-700 dark:text-gray-200 transition-colors">
        Benchmarking
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
        Test workloads to measure performance improvements:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
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
END;`}</code>
      </pre>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-8 rounded-lg text-gray-700 dark:text-gray-200 transition-colors">
        <strong className="block mb-2">💡 Tips:</strong>
        Allocate sufficient CPU/memory, use connection pooling, create indexes,
        optimize queries, and monitor actively. Apple Silicon users may need to
        run images via Rosetta for x86 compatibility.
      </div>
    </section>
  );
}
