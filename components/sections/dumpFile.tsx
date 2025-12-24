export default function DumpExportSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 transition-colors">
        Exporting Oracle Dump (Data Pump)
      </h2>

      {/* Step 1: Connect & locate DATA_PUMP_DIR */}
      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        1. Connect and Locate Dump Directory
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Open a terminal and start a shell inside the{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          oracle-11g
        </code>{" "}
        container, then connect with SQL*Plus:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-3 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`docker exec -it oracle-11g bash
source /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh
sqlplus system/oracle@XE`}</code>
      </pre>

      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        After connecting to the database, run this command to see where the dump
        file will be stored inside the container:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`SELECT directory_name, directory_path 
FROM dba_directories 
WHERE directory_name = 'DATA_PUMP_DIR';`}</code>
      </pre>
      <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        This will show you the directory path where Data Pump will write the
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded ml-1">
          .dmp
        </code>{" "}
        file inside Docker.
      </p>

      {/* Step 2: Grant privileges */}
      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        2. Grant Export Privileges to Schema User
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Connect as{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          system
        </code>{" "}
        or{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          sys
        </code>{" "}
        and grant export rights to the schema user (example:{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          hr
        </code>
        ):
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`sqlplus system/oracle@XE

GRANT CREATE SESSION TO hr;
GRANT RESOURCE TO hr;
GRANT DATAPUMP_EXP_FULL_DATABASE TO hr;  -- if doing full export
EXIT;`}</code>
      </pre>

      {/* Step 3: Run expdp */}
      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        3. Run Data Pump Export (expdp)
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        After granting the rights to the desired user, re‑enter the container
        and source the Oracle environment:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-3 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`docker exec -it oracle-11g bash
source /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh`}</code>
      </pre>

      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Then copy and paste this whole block at once (change{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          your_schema_name
        </code>{" "}
        to your desired schema example you can use hr to create a dump of the HR
        schema):
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`expdp system/oracle@XE \\
SCHEMAS=your_schema_name \\
DIRECTORY=DATA_PUMP_DIR \\
DUMPFILE=schema_export.dmp \\
LOGFILE=expdp_schema.log`}</code>
      </pre>
      <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors">
        This will print the exact location of your dump file at the end of the
        export process.
      </p>

      {/* Step 4: Copy dump to macOS */}
      <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 transition-colors">
        4. Copy Dump File to macOS
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        Replace{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          your_dump_file_path
        </code>{" "}
        with the actual path printed by the previous{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">
          expdp
        </code>{" "}
        command:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-3 text-gray-800 dark:text-gray-200 transition-colors">
        <code>{`docker cp oracle-11g:your_dump_file_path ./schema_export.dmp`}</code>
      </pre>
      <p className="mb-2 text-gray-700 dark:text-gray-300 transition-colors">
        This will copy the dump file from the Docker container to your current
        directory on macOS (for example, your home folder).
      </p>
    </section>
  );
}
