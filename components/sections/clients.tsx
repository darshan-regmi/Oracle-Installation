export default function ClientsSection() {
  return (
    <div>
      <h2>Client Libraries & Language Bindings</h2>

      <h3>Python Connection</h3>
      <p>
        Using <code>oracledb</code> (official Oracle client):
      </p>
      <pre>
        <code>{`# Install
pip install oracledb

# Basic connection
import oracledb

connection = oracledb.connect(
    user="system",
    password="oracle",
    dsn="localhost:1521/XE"
)

cursor = connection.cursor()
cursor.execute("SELECT * FROM all_tables WHERE ROWNUM <= 10")
for row in cursor.fetchall():
    print(row)

connection.close()

# Connection pooling
pool = oracledb.create_pool(
    user="system",
    password="oracle",
    dsn="localhost:1521/XE",
    min=2,
    max=5
)

connection = pool.acquire()
# ... use connection ...
pool.release(connection)`}</code>
      </pre>

      <h3>Node.js Connection</h3>
      <p>
        Using <code>node-oracledb</code>:
      </p>
      <pre>
        <code>{`// Install
npm install oracledb

// Basic connection
const oracledb = require('oracledb');

(async () => {
  const connection = await oracledb.getConnection({
    user: 'system',
    password: 'oracle',
    connectionString: 'localhost:1521/XE'
  });

  const result = await connection.execute(
    'SELECT * FROM all_tables WHERE ROWNUM <= 10'
  );
  console.log(result.rows);

  await connection.close();
})().catch(console.error);

// With connection pool
const pool = await oracledb.createPool({
  user: 'system',
  password: 'oracle',
  connectionString: 'localhost:1521/XE',
  poolMin: 2,
  poolMax: 5
});

const conn = await pool.getConnection();
// ... use connection ...
await conn.close();`}</code>
      </pre>

      <h3>Java Connection</h3>
      <p>Using JDBC:</p>
      <pre>
        <code>{`// Maven dependency
<dependency>
  <groupId>com.oracle.database.jdbc</groupId>
  <artifactId>ojdbc8</artifactId>
  <version>19.8.0.0</version>
</dependency>

// Basic connection
import java.sql.*;

String url = "jdbc:oracle:thin:@localhost:1521:XE";
String user = "system";
String password = "oracle";

try (Connection conn = DriverManager.getConnection(url, user, password)) {
  Statement stmt = conn.createStatement();
  ResultSet rs = stmt.executeQuery("SELECT * FROM all_tables WHERE ROWNUM <= 10");
  
  while (rs.next()) {
    System.out.println(rs.getString(1));
  }
} catch (SQLException e) {
  e.printStackTrace();
}`}</code>
      </pre>

      <h3>Go Connection</h3>
      <p>
        Using <code>godror</code>:
      </p>
      <pre>
        <code>{`// Install
go get github.com/godror/godror

// Basic connection
package main

import (
  "database/sql"
  "fmt"
  _ "github.com/godror/godror"
)

func main() {
  db, err := sql.Open("godror", "system/oracle@localhost:1521/XE")
  if err != nil {
    panic(err)
  }
  defer db.Close()

  rows, err := db.Query("SELECT * FROM all_tables WHERE ROWNUM <= 10")
  if err != nil {
    panic(err)
  }
  defer rows.Close()

  for rows.Next() {
    var tableName string
    rows.Scan(&tableName)
    fmt.Println(tableName)
  }
}`}</code>
      </pre>

      <h3>PHP Connection</h3>
      <p>Using PDO or OCI8:</p>
      <pre>
        <code>{`// Using PDO
$dsn = 'oci:dbname=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)
        (HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)))';
$user = 'system';
$password = 'oracle';

try {
    $pdo = new PDO($dsn, $user, $password);
    $stmt = $pdo->query('SELECT * FROM all_tables WHERE ROWNUM <= 10');
    foreach ($stmt as $row) {
        echo $row[0] . "\n";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}

// Using OCI8
$connection = oci_connect('system', 'oracle', '//localhost:1521/XE');
$stid = oci_parse($connection, 'SELECT * FROM all_tables WHERE ROWNUM <= 10');
oci_execute($stid);

while ($row = oci_fetch_array($stid, OCI_ASSOC)) {
    echo $row['TABLE_NAME'] . "\n";
}

oci_free_statement($stid);
oci_close($connection);`}</code>
      </pre>

      <h3>C# Connection</h3>
      <p>Using ODP.NET:</p>
      <pre>
        <code>{`// NuGet package
Install-Package Oracle.ManagedDataAccess.Core

// Connection example
using Oracle.ManagedDataAccess.Client;

string constr = "Data Source=localhost:1521/XE;User Id=system;Password=oracle;";

using (OracleConnection con = new OracleConnection(constr))
{
    con.Open();
    
    using (OracleCommand cmd = con.CreateCommand())
    {
        cmd.CommandText = "SELECT * FROM all_tables WHERE ROWNUM <= 10";
        using (OracleDataReader reader = cmd.ExecuteReader())
        {
            while (reader.Read())
            {
                Console.WriteLine(reader.GetString(0));
            }
        }
    }
}`}</code>
      </pre>

      <h3>Ruby Connection</h3>
      <p>
        Using <code>ruby-oci8</code>:
      </p>
      <pre>
        <code>{`# Install
gem install ruby-oci8

# Connection example
require 'oci8'

conn = OCI8.new('system', 'oracle', 'localhost:1521/XE')
conn.exec('SELECT * FROM all_tables WHERE ROWNUM <= 10') do |row|
  puts row
end
conn.logoff`}</code>
      </pre>

      <h3>Connection Best Practices</h3>
      <ul>
        <li>
          <strong>Use Connection Pooling:</strong> Reuse connections instead of
          creating new ones frequently
        </li>
        <li>
          <strong>Use Prepared Statements:</strong> Prevent SQL injection and
          improve performance
        </li>
        <li>
          <strong>Handle Errors Gracefully:</strong> Proper exception handling
          and logging
        </li>
        <li>
          <strong>Set Connection Timeouts:</strong> Avoid hanging connections
        </li>
        <li>
          <strong>Use Transactions:</strong> Wrap related operations in
          BEGIN/COMMIT/ROLLBACK
        </li>
        <li>
          <strong>Close Resources Properly:</strong> Always close connections,
          statements, and results
        </li>
      </ul>

      <h3>Sample Application Pattern</h3>
      <p>Generic pattern for any language connecting to Oracle 11g:</p>
      <pre>
        <code>{`Host: localhost
Port: 1521
Service/SID: XE
Username: system
Password: oracle

Connection String Examples:
- Direct: localhost:1521/XE
- Easy Connect: localhost:1521/XE
- TNS: XE (requires tnsnames.ora)`}</code>
      </pre>

      <div className="info-box">
        <strong>Tip:</strong> Always use the latest version of your language's
        Oracle driver. Official drivers (oracledb for Python, node-oracledb for
        Node.js, JDBC for Java) ensure compatibility and feature support.
      </div>
    </div>
  );
}
