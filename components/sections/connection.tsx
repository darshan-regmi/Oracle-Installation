export default function ConnectionSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 transition-colors">
        Connection & GUI Tools
      </h2>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        SQL*Plus (Command Line)
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Connect to Oracle 11g using SQL*Plus:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`docker exec -it oracle-11g sqlplus system/oracle@XE`}</code>
      </pre>

      <p className="mb-1 text-gray-700 dark:text-gray-300 transition-colors">
        ⚠️ <strong>Common Issue:</strong>
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        On Apple Silicon, you may see:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`exec: "sqlplus": executable file not found in $PATH`}</code>
      </pre>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        This happens because the image is built for amd64 and sqlplus isn’t
        directly executable.
      </p>

      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        ✅ <strong>Fix: Run inside bash and source Oracle environment</strong>
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`docker exec -it oracle-11g bash
source /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh
sqlplus system/oracle@XE`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Basic SQL*Plus Commands
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Once connected, you can use standard SQL*Plus commands:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
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

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        DBeaver (GUI)
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Popular free GUI tool for managing Oracle 11g:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        <li className="mb-2">
          Install DBeaver Community Edition:
          <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto mb-2 text-gray-800 dark:text-gray-200 transition-colors">
            <code>{`brew install --cask dbeaver-community`}</code>
          </pre>
        </li>
        <li className="mb-2">
          Open DBeaver and create a new database connection → select{" "}
          <strong>Oracle</strong>
        </li>
        <li className="mb-2">
          Set connection details:
          <ul className="list-disc pl-6 mt-1">
            <li>
              Server Host:{" "}
              <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
                localhost
              </code>
            </li>
            <li>
              Port:{" "}
              <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
                1521
              </code>
            </li>
            <li>
              Database/SID:{" "}
              <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
                XE
              </code>
            </li>
            <li>
              Username:{" "}
              <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
                system
              </code>
            </li>
            <li>
              Password:{" "}
              <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
                oracle
              </code>
            </li>
          </ul>
        </li>
        <li className="mb-2">
          Test the connection → click <strong>Finish</strong> to save
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        SQL Developer
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Oracle's official IDE for database development:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        <li className="mb-2">
         For Apple Silicon Mac : Download the ARM version from Oracle's website. <a href="https://download.oracle.com/otn_software/java/sqldeveloper/sqldeveloper-24.3.1.347.1826-macos-aarch64.app.zip">Click here to download</a>
        </li>
        <li className="mb-2">
          For intel based macs : Download the MACOSX version form Oracle's website. <a href="https://download.oracle.com/otn_software/java/sqldeveloper/sqldeveloper-24.3.1.347.1826-macos-x64.app.zip">Click here to download</a>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Connection String Formats
      </h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        <li>
          <strong>JDBC:</strong>{" "}
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
            jdbc:oracle:thin:@localhost:1521:XE
          </code>
        </li>
        <li>
          <strong>ODBC:</strong>{" "}
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
            Driver=Oracle;Server=localhost;Port=1521;ServiceName=XE;
          </code>
        </li>
        <li>
          <strong>Python / Node:</strong>{" "}
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
            oracle://system:oracle@localhost:1521/XE
          </code>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        Testing Connection from Terminal
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Verify connectivity before using GUI tools:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`# Using Docker exec
docker exec -it oracle-11g bash
source /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh
sqlplus system/oracle@XE <<EOF
SELECT 1 FROM dual;
EXIT;
EOF`}</code>
      </pre>
    </section>
  );
}
