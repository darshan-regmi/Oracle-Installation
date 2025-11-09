export default function SecuritySection() {
  return (
    <div>
      <h2>Security Best Practices</h2>

      <h3>Password Security</h3>
      <div className="warning-box">
        <strong>Critical:</strong> Never use the default password (<code>oracle</code>) in production
      </div>
      <ul>
        <li>Use strong passwords (minimum 12 characters, ideally 16+)</li>
        <li>Include uppercase, lowercase, numbers, and special symbols</li>
        <li>Store passwords securely using password managers or secrets management systems</li>
        <li>Rotate passwords regularly (every 90 days recommended)</li>
        <li>Never commit credentials to version control - use environment variables</li>
      </ul>

      <p>Strong password example:</p>
      <pre>
        <code>{`# Good
Oracle#Secure2025@Prod

# Bad
password123
oracle
system`}</code>
      </pre>

      <h3>Database User Permissions (Least Privilege)</h3>
      <p>Apply principle of least privilege - grant minimal necessary permissions:</p>
      <pre>
        <code>{`-- Create application user with limited privileges
CREATE USER app_user IDENTIFIED BY "Oracle#Secure2025@AppUser";

-- Grant only connection permission
GRANT CONNECT TO app_user;

-- Grant specific table permissions
GRANT SELECT, INSERT, UPDATE ON app_schema.users TO app_user;

-- Do NOT grant DBA or SYSDBA privileges unless absolutely necessary
-- Never use SYSTEM user for application connections

-- Audit sensitive operations
AUDIT SELECT ON system.aud$ BY app_user;
AUDIT DELETE ON app_schema.users BY app_user;`}</code>
      </pre>

      <h3>Container Security</h3>
      <p>Docker-specific security configurations for Oracle 11g:</p>
      <pre>
        <code>{`# Run as non-root user in docker run
docker run -d \
  --name oracle-11g \
  -p 1521:1521 -p 8080:8080 \
  -e ORACLE_PASSWORD="YourStrongPassword" \
  --user 1000:1000 \
  --read-only \
  --tmpfs /tmp \
  --tmpfs /run \
  --security-opt no-new-privileges:true \
  oracleinanutshell/oracle-xe-11g`}</code>
      </pre>

      <h3>Network Security</h3>
      <ul>
        <li>Restrict database port access to known IPs using firewall rules</li>
        <li>Do not expose port 1521 to the public internet; use VPN or SSH tunnels</li>
        <li>Enable TLS/SSL encryption for client connections</li>
        <li>
          Sample SSL setup:
          <pre>
            <code>{`ALTER SYSTEM SET ssl_wallet_location='file:/u01/app/oracle/wallet';
ALTER SYSTEM SET remote_login_passwordfile=EXCLUSIVE SCOPE=SPFILE;`}</code>
          </pre>
        </li>
        <li>Use host-based access lists for connection authentication</li>
      </ul>

      <h3>Encryption</h3>
      <p>Enable Oracle encryption for sensitive data:</p>
      <pre>
        <code>{`-- Transparent Data Encryption (TDE) at rest
ALTER SYSTEM SET db_recovery_file_dest_size=50G;

-- Encrypt tablespaces
CREATE TABLESPACE encrypted_ts
  DATAFILE SIZE 100M
  ENCRYPTION USING 'AES256'
  DEFAULT STORAGE;

-- Encrypt column-level data
CREATE TABLE users (
  user_id NUMBER PRIMARY KEY,
  name VARCHAR2(100) ENCRYPT,
  ssn VARCHAR2(11) ENCRYPT USING 'AES256'
);`}</code>
      </pre>

      <h3>Backup Security</h3>
      <ul>
        <li>Encrypt all backup files using strong encryption</li>
        <li>Store backups in secure, separate locations (off-site, cloud)</li>
        <li>Test restoration regularly (monthly minimum)</li>
        <li>Implement retention policies and versioning</li>
        <li>Document and test disaster recovery procedures</li>
      </ul>

      <h3>Auditing & Logging</h3>
      <p>Track all database activities:</p>
      <pre>
        <code>{`-- Enable audit trail
ALTER SESSION SET AUDIT_TRAIL=DB;

-- Audit specific operations
AUDIT ALL BY app_user;
AUDIT INSERT, UPDATE, DELETE ON app_schema.sensitive_table;
AUDIT CONNECT, SYSDBA;

-- View audit logs
SELECT username, action_name, timestamp 
FROM aud$ 
WHERE timestamp > SYSDATE - 1
ORDER BY timestamp DESC;`}</code>
      </pre>

      <div className="info-box">
        <strong>Security Checklist:</strong> Change default passwords, limit user permissions, enable encryption, secure backups, enable auditing, and regularly review security logs.
      </div>
    </div>
  )
}