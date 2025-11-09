export default function MaintenanceSection() {
  return (
    <div>
      <h2>Maintenance & Upgrades</h2>

      <h3>Backup Strategy</h3>
      <p>Implement a robust backup strategy:</p>
      <pre>
        <code>{`# Method 1: Logical backup with Data Pump (Recommended for portability)
docker exec oracle-db expdp system/YourPassword@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=backup_$(date +%Y%m%d).dmp \\
  FULL=Y \\
  COMPRESSION=ALL \\
  ENCRYPTION=ALL \\
  ENCRYPTION_PASSWORD=BackupPwd123

# Method 2: Physical backup of Docker volume (Faster)
docker run --rm \\
  -v oracle-data:/data \\
  -v $(pwd)/backups:/backup \\
  ubuntu tar czf /backup/oracle-backup-$(date +%Y%m%d).tar.gz /data

# Method 3: Incremental backup script
#!/bin/bash
BACKUP_DIR="/path/to/backups"
RETENTION_DAYS=30
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup
docker exec oracle-db expdp system/YourPassword@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=incremental_$TIMESTAMP.dmp \\
  FULL=Y

# Clean old backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete`}</code>
      </pre>

      <h3>Restore Procedure</h3>
      <p>Test your restore process regularly:</p>
      <pre>
        <code>{`# Restore from logical backup (Data Pump)
docker exec oracle-db impdp system/YourPassword@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=backup_20240101.dmp \\
  FULL=Y \\
  ENCRYPTION_PASSWORD=BackupPwd123

# Restore from physical backup (Volume)
docker stop oracle-db
docker volume rm oracle-data
docker volume create oracle-data

docker run --rm \\
  -v oracle-data:/data \\
  -v $(pwd)/backups:/backup \\
  ubuntu tar xzf /backup/oracle-backup-20240101.tar.gz -C /

# Verify restore
docker start oracle-db
docker logs -f oracle-db | grep "DATABASE IS READY"

# Test connectivity
docker exec -it oracle-db sqlplus system/YourPassword@XEPDB1 <<EOF
SELECT COUNT(*) FROM all_tables;
EXIT;
EOF`}</code>
      </pre>

      <h3>Upgrading Oracle</h3>
      <p>Safe upgrade procedure:</p>
      <pre>
        <code>{`# Step 1: Create full backup before upgrade
docker exec oracle-db expdp system/YourPassword@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=pre_upgrade_backup.dmp \\
  FULL=Y

# Step 2: Stop current container
docker stop oracle-db
docker rename oracle-db oracle-db-old

# Step 3: Pull new Oracle image
docker pull ghcr.io/gvenzl/oracle-xe:21c  # or specific version

# Step 4: Create new container with new image
docker run -d \\
  --name oracle-db-new \\
  -v oracle-data:/opt/oracle/oradata \\
  -p 1521:1521 \\
  -e ORACLE_PASSWORD=YourPassword123 \\
  ghcr.io/gvenzl/oracle-xe:21c

# Step 5: Wait for initialization
docker logs -f oracle-db-new | grep "DATABASE IS READY"

# Step 6: Restore data if needed
docker exec oracle-db-new impdp system/YourPassword123@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=pre_upgrade_backup.dmp \\
  FULL=Y

# Step 7: Thorough testing
docker exec -it oracle-db-new sqlplus system/YourPassword123@XEPDB1

# Step 8: Clean up old container after verification
docker rm oracle-db-old`}</code>
      </pre>

      <h3>Export/Import Data</h3>
      <p>Transfer data between instances:</p>
      <pre>
        <code>{`# Export specific schema
docker exec oracle-db expdp system/YourPassword@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=schema_backup.dmp \\
  SCHEMAS=app_schema

# Export to SQL DDL statements
docker exec oracle-db sqlplus -s system/YourPassword@XEPDB1 > schema.sql <<EOF
SET LONG 20000 LONGCHUNKSIZE 20000 PAGESIZE 0 LINESIZE 1000 
SET FEEDBACK OFF VERIFY OFF TRIMSPOOL ON
BEGIN
  DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM,'SQLTERMINATOR',true);
  DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM,'PRETTY',true);
END;
/
SELECT DBMS_METADATA.GET_DDL(object_type,object_name) 
FROM all_objects 
WHERE owner='APP_SCHEMA';
EXIT;
EOF

# Import to another instance
docker exec oracle-db-dest impdp system/YourPassword@XEPDB1 \\
  DIRECTORY=dpump_dir \\
  DUMPFILE=schema_backup.dmp`}</code>
      </pre>

      <h3>Log Management</h3>
      <p>Monitor and manage database logs:</p>
      <pre>
        <code>{`# View Docker container logs
docker logs oracle-db

# Follow logs in real-time
docker logs -f oracle-db

# Configure log retention in docker-compose
services:
  oracle-db:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
        labels: "oracle"

# Clean old logs manually
docker exec oracle-db sqlplus / as sysdba <<EOF
-- Check alert log
SHOW PARAMETER background_dump_dest;

-- Archive old logs
BEGIN
  FOR x IN (SELECT * FROM v$archived_log 
            WHERE completion_time < TRUNC(SYSDATE) - 30) LOOP
    -- Archive logic here
  END LOOP;
END;
/
EOF`}</code>
      </pre>

      <h3>Regular Maintenance Schedule</h3>
      <ul>
        <li>
          <strong>Daily:</strong>
          <ul>
            <li>Verify backups completed successfully</li>
            <li>
              Monitor disk space usage (<code>df -h</code>)
            </li>
            <li>Check database logs for errors</li>
          </ul>
        </li>
        <li>
          <strong>Weekly:</strong>
          <ul>
            <li>Analyze database performance metrics</li>
            <li>Review security audit logs</li>
            <li>
              Verify container health (<code>docker ps</code>)
            </li>
          </ul>
        </li>
        <li>
          <strong>Monthly:</strong>
          <ul>
            <li>Test backup and restore procedures</li>
            <li>Perform full database consistency checks</li>
            <li>Update patches and security fixes</li>
          </ul>
        </li>
        <li>
          <strong>Quarterly:</strong>
          <ul>
            <li>Plan major upgrades</li>
            <li>Review and update backup retention policies</li>
            <li>Conduct disaster recovery drills</li>
          </ul>
        </li>
      </ul>

      <h3>Database Health Checks</h3>
      <pre>
        <code>{`-- Check database status
SELECT name, open_cursors, open_database_links FROM v$database;

-- Check tablespace usage
SELECT tablespace_name, 
  round(sum_free_space/1024/1024, 2) as free_mb,
  round(sum_used_space/1024/1024, 2) as used_mb
FROM dba_tablespace_usage
GROUP BY tablespace_name;

-- Check for invalid objects
SELECT * FROM dba_invalid_objects;

-- Check for locks
SELECT * FROM v$lock WHERE type NOT IN ('RT', 'MD');

-- Verify no corrupted data blocks
DBMS_REPAIR.CHECK_OBJECT('APP_SCHEMA', 'TABLE_NAME');`}</code>
      </pre>

      <div className="info-box">
        <strong>Best Practice:</strong> Automate backups with cron jobs, test
        restoration monthly, maintain detailed logs, and keep clear
        documentation of all maintenance procedures.
      </div>
    </div>
  );
}
