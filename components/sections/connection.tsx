export default function ConnectionSection() {
  return (
    <div>
      <h2>Connection & GUI Tools</h2>

      <h3>SQL*Plus (Command Line)</h3>
      <p>Connect to Oracle 11g using SQL*Plus:</p>
      <pre>
        <code>{`docker exec -it oracle-11g sqlplus system/oracle@XE`}</code>
      </pre>

      <p>
        ⚠️ <strong>Common Issue:</strong>
      </p>
      <p>On Apple Silicon, you may see:</p>
      <pre>
        <code>{`exec: "sqlplus": executable file not found in $PATH`}</code>
      </pre>
      <p>
        This happens because the image is built for amd64 and sqlplus isn’t
        directly executable.
      </p>

      <p>
        ✅ <strong>Fix: Run inside bash and source Oracle environment</strong>
      </p>
      <pre>
        <code>{`docker exec -it oracle-11g bash
source /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh
sqlplus system/oracle@XE`}</code>
      </pre>

      <h3>Basic SQL*Plus Commands</h3>
      <p>Once connected, you can use standard SQL*Plus commands:</p>
      <pre>
        <code>{`-- List all tables
SELECT * FROM all_tables;

-- Create a sample table
CREATE TABLE users (
  id NUMBER PRIMARY KEY,
  name VARCHAR2(100),
  email VARCHAR2(100)
);

-- Insert data
INSERT INTO users VALUES (1, 'John Doe', 'john@example.com');
COMMIT;

-- Query data
SELECT * FROM users;

-- Disconnect
EXIT;`}</code>
      </pre>

      <h3>DBeaver (GUI)</h3>
      <p>Popular free GUI tool for managing Oracle 11g:</p>
      <ol>
        <li>
          Install DBeaver Community Edition:
          <pre>
            <code>{`brew install --cask dbeaver-community`}</code>
          </pre>
        </li>
        <li>
          Open DBeaver and create a new database connection → select{" "}
          <strong>Oracle</strong>
        </li>
        <li>
          Set connection details:
          <ul>
            <li>
              Server Host: <code>localhost</code>
            </li>
            <li>
              Port: <code>1521</code>
            </li>
            <li>
              Database/SID: <code>XE</code>
            </li>
            <li>
              Username: <code>system</code>
            </li>
            <li>
              Password: <code>oracle</code>
            </li>
          </ul>
        </li>
        <li>
          Test the connection → click <strong>Finish</strong> to save
        </li>
      </ol>

      <h3>SQL Developer</h3>
      <p>Oracle's official IDE for database development:</p>
      <pre>
        <code>{`brew install --cask sqldeveloper`}</code>
      </pre>

      <h3>Connection String Formats</h3>
      <p>Use these formats depending on your client or programming language:</p>
      <ul>
        <li>
          <strong>JDBC:</strong>{" "}
          <code>jdbc:oracle:thin:@localhost:1521:XE</code>
        </li>
        <li>
          <strong>ODBC:</strong>{" "}
          <code>Driver=Oracle;Server=localhost;Port=1521;ServiceName=XE;</code>
        </li>
        <li>
          <strong>Python / Node:</strong>{" "}
          <code>oracle://system:oracle@localhost:1521/XE</code>
        </li>
      </ul>

      <h3>Testing Connection from Terminal</h3>
      <p>Verify connectivity before using GUI tools:</p>
      <pre>
        <code>{`# Using Docker exec
docker exec -it oracle-11g bash
source /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh
sqlplus system/oracle@XE <<EOF
SELECT 1 FROM dual;
EXIT;
EOF`}</code>
      </pre>
    </div>
  );
}
