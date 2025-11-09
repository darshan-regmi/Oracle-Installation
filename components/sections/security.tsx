export default function SecuritySection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <h2 className="text-3xl font-bold text-foreground mb-4">
        Security Best Practices
      </h2>

      {/* Password Security */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">
          Password Security
        </h3>
        <div className="warning-box p-4 rounded-lg border border-red-400 bg-red-50 text-sm md:text-base">
          <strong>Critical:</strong> Never use the default password (
          <code>oracle</code>) in production.
        </div>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
          <li>Use strong passwords (minimum 12–16 characters)</li>
          <li>Include uppercase, lowercase, numbers, and special symbols</li>
          <li>
            Store passwords securely in password managers or secret vaults
          </li>
          <li>Rotate passwords regularly (every 90 days recommended)</li>
          <li>Never commit credentials to Git — use environment variables</li>
        </ul>

        <p className="font-medium mt-4">Strong password example:</p>
        <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
          <code>{`# Good
Oracle#Secure2025@Prod

# Bad
password123
oracle
system`}</code>
        </pre>
      </div>

      {/* Least Privilege */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">
          Database User Permissions (Least Privilege)
        </h3>
        <p>
          Apply the principle of least privilege — grant only minimal
          permissions:
        </p>
        <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
          <code>{`-- Create application user with limited privileges
CREATE USER app_user IDENTIFIED BY "Oracle#Secure2025@AppUser";

GRANT CONNECT TO app_user;
GRANT SELECT, INSERT, UPDATE ON app_schema.users TO app_user;

-- Do NOT grant DBA or SYSDBA privileges
-- Never use SYSTEM for app connections

AUDIT SELECT ON system.aud$ BY app_user;
AUDIT DELETE ON app_schema.users BY app_user;`}</code>
        </pre>
      </div>

      {/* Container Security */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Container Security</h3>
        <p>Secure your Oracle container by using limited privileges:</p>
        <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
          <code>{`docker run -d \\
  --name oracle-11g \\
  -p 1521:1521 -p 8080:8080 \\
  -e ORACLE_PASSWORD="YourStrongPassword" \\
  --user 1000:1000 \\
  --read-only \\
  --tmpfs /tmp \\
  --tmpfs /run \\
  --security-opt no-new-privileges:true \\
  oracleinanutshell/oracle-xe-11g`}</code>
        </pre>
      </div>

      {/* Network Security */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Network Security</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
          <li>Restrict database access to known IPs</li>
          <li>Do not expose port 1521 publicly — use VPN or SSH tunneling</li>
          <li>Enable TLS/SSL for client connections</li>
          <li>
            Example SSL configuration:
            <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm mt-2">
              <code>{`ALTER SYSTEM SET ssl_wallet_location='file:/u01/app/oracle/wallet';
ALTER SYSTEM SET remote_login_passwordfile=EXCLUSIVE SCOPE=SPFILE;`}</code>
            </pre>
          </li>
        </ul>
      </div>

      {/* Encryption */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Encryption</h3>
        <p>Enable encryption for sensitive data and tablespaces:</p>
        <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
          <code>{`-- Transparent Data Encryption (TDE)
ALTER SYSTEM SET db_recovery_file_dest_size=50G;

CREATE TABLESPACE encrypted_ts
  DATAFILE SIZE 100M
  ENCRYPTION USING 'AES256'
  DEFAULT STORAGE;

CREATE TABLE users (
  user_id NUMBER PRIMARY KEY,
  name VARCHAR2(100) ENCRYPT,
  ssn VARCHAR2(11) ENCRYPT USING 'AES256'
);`}</code>
        </pre>
      </div>

      {/* Backup Security */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Backup Security</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
          <li>Encrypt backup files using AES-256</li>
          <li>Store backups securely off-site or in the cloud</li>
          <li>Test restoration monthly</li>
          <li>Implement retention policies and versioning</li>
          <li>Document disaster recovery procedures</li>
        </ul>
      </div>

      {/* Auditing */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Auditing & Logging</h3>
        <p>Monitor and log database activity to detect anomalies:</p>
        <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
          <code>{`ALTER SESSION SET AUDIT_TRAIL=DB;
AUDIT ALL BY app_user;
AUDIT INSERT, UPDATE, DELETE ON app_schema.sensitive_table;
AUDIT CONNECT, SYSDBA;

SELECT username, action_name, timestamp 
FROM aud$ 
WHERE timestamp > SYSDATE - 1
ORDER BY timestamp DESC;`}</code>
        </pre>
      </div>

      {/* Summary Info Box */}
      <div className="info-box p-4 rounded-lg border border-blue-400 bg-blue-50 text-sm md:text-base">
        <strong>Security Checklist:</strong> Change default passwords, apply
        least privilege, enable encryption, secure backups, enable auditing, and
        review logs regularly.
      </div>
    </section>
  );
}
