export default function FAQsSection() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>

      <h3>General Questions</h3>

      <h4>Q: Can I use this guide on both Intel and Apple Silicon Macs?</h4>
      <p>
        A: Yes! This guide covers both architectures. Apple Silicon users should
        enable Rosetta emulation in Docker Desktop for best compatibility with
        Oracle images. See the Troubleshooting section for Apple
        Silicon-specific guidance.
      </p>

      <h4>Q: Do I need to install Oracle locally on my Mac?</h4>
      <p>
        A: No, Docker eliminates that need. You only need Docker Desktop
        installed. The Docker container runs Oracle isolated from your system.
        Optionally, you can install Oracle Instant Client using Homebrew for
        command-line tools.
      </p>

      <h4>
        Q: What's the difference between XE, Standard, and Enterprise editions?
      </h4>
      <p>
        A: Oracle XE (Express Edition) is free and perfect for development with
        limitations (4GB RAM, 1 CPU). Standard Edition is for mid-sized
        deployments, and Enterprise Edition is for large-scale production. This
        guide focuses on XE for development.
      </p>

      <h4>Q: Can I use this for production workloads?</h4>
      <p>
        A: Oracle XE is designed for development, learning, and small projects.
        For production, use Standard or Enterprise Edition with proper
        infrastructure, backup strategies, and monitoring as detailed in the
        Maintenance and Security sections.
      </p>

      <h3>Installation Questions</h3>

      <h4>Q: How long does the first startup take?</h4>
      <p>
        A: Initial startup typically takes 2-5 minutes as Oracle initializes the
        database. Subsequent starts are much faster (under 30 seconds). Check
        progress with <code>docker logs -f oracle-db</code> and look for
        "DATABASE IS READY TO USE".
      </p>

      <h4>Q: Can I use a custom password?</h4>
      <p>
        A: Yes! Set the <code>ORACLE_PASSWORD</code> environment variable when
        starting the container. Use a strong password with uppercase, lowercase,
        numbers, and symbols for security.
      </p>

      <h4>Q: What if port 1521 is already in use on my system?</h4>
      <p>
        A: Use any available port by mapping it differently:{" "}
        <code>-p 1522:1521</code> maps external port 1522 to Oracle's internal
        port 1521. Then connect using <code>localhost:1522</code>.
      </p>

      <h4>Q: Do I need Docker Compose or can I use docker run?</h4>
      <p>
        A: You can use either. Docker Compose is recommended for reproducible
        setups and easier management. Both approaches work—choose what’s
        comfortable for your workflow.
      </p>

      <h3>Connection & Access Questions</h3>

      <h4>Q: What's the default username and how do I create new users?</h4>
      <p>
        A: The default administrative user is <code>system</code>. Connect as
        system and create new users with:
        <code>CREATE USER username IDENTIFIED BY password;</code> and grant
        permissions as needed.
      </p>

      <h4>Q: Can I connect from outside my Mac?</h4>
      <p>
        A: The database is only accessible on localhost:1521 by default. To
        expose it to your network, modify Docker port mapping, but ensure proper
        security measures (strong passwords, network isolation, firewall rules)
        are in place.
      </p>

      <h4>Q: How do I reset a user's password?</h4>
      <p>
        A: Connect as a DBA user (like system) and run:
        <code>ALTER USER username IDENTIFIED BY newpassword;</code> then{" "}
        <code>COMMIT;</code>
      </p>

      <h4>Q: What connection tools and languages are supported?</h4>
      <p>
        A: Oracle supports many clients: SQL*Plus, DBeaver, SQL Developer, and
        language libraries for Python, Node.js, Java, PHP, etc. Connection
        strings vary by tool—see the Connection & Tools section for examples.
      </p>

      <h3>Data & Persistence Questions</h3>

      <h4>Q: Is my data safe if I stop the container?</h4>
      <p>
        A: Yes! Data persists in Docker named volumes even after stopping. Use{" "}
        <code>docker stop oracle-db</code> to safely stop (not{" "}
        <code>docker rm</code> which deletes the container). Volumes remain
        unless explicitly deleted.
      </p>

      <h4>Q: How do I backup my database?</h4>
      <p>
        A: Use Data Pump (EXPDP) for logical backups or backup the Docker volume
        for physical backups. See the Maintenance section for detailed backup
        and recovery procedures and scripts.
      </p>

      <h4>Q: Can I migrate data from another Oracle instance?</h4>
      <p>
        A: Yes! Use Data Pump (EXPDP/IMPDP) to export from source and import to
        your Docker container. Alternatively, use SQL scripts or other migration
        tools. See the Maintenance section for details.
      </p>

      <h3>Performance & Resource Questions</h3>

      <h4>Q: How do I improve database performance?</h4>
      <p>
        A: Allocate more CPU cores and memory to Docker, use SSD storage, enable
        Rosetta if on Apple Silicon, and optimize your queries and indexes.
        Monitor with <code>docker stats</code> to identify bottlenecks.
      </p>

      <h4>Q: How much disk space do I need?</h4>
      <p>
        A: Oracle XE typically uses 8-10GB minimum. For development with data,
        allocate 20-40GB. Production should have much more. Check available
        space with <code>df -h</code>.
      </p>

      <h4>Q: Can multiple applications connect simultaneously?</h4>
      <p>
        A: Yes, Oracle accepts multiple connections. Use connection pooling in
        your application for efficiency. Oracle XE has limitations on concurrent
        sessions—scale up for production workloads.
      </p>

      <h4>Q: How do I monitor database performance?</h4>
      <p>
        A: Use GUI tools (DBeaver, SQL Developer) to query performance views,
        run <code>docker stats oracle-db</code> for resource usage, or query
        Oracle's built-in performance views (<code>V$SESSION</code>,{" "}
        <code>V$SQLAREA</code>, etc.).
      </p>

      <h3>Troubleshooting Questions</h3>

      <h4>Q: My container keeps crashing. What should I do?</h4>
      <p>
        A: Check logs with <code>docker logs oracle-db</code> for error
        messages. Common causes: insufficient memory (increase Docker
        allocation), corrupted data (try recreating), or initialization
        failures. See Troubleshooting section for detailed solutions.
      </p>

      <h4>Q: How do I clean up and start completely fresh?</h4>
      <p>
        A: Run{" "}
        <code>
          docker stop oracle-db && docker rm oracle-db && docker volume rm
          oracle-data
        </code>{" "}
        then recreate the container. This removes all traces and starts with a
        clean database.
      </p>

      <h4>Q: What should I do if initialization fails on Apple Silicon?</h4>
      <p>
        A: Enable Rosetta emulation in Docker → Settings → Features. If still
        failing, try specifying the platform explicitly:{" "}
        <code>--platform linux/amd64</code> when pulling and running images.
      </p>

      <div className="success-box">
        Still have questions? Check the Troubleshooting section for more
        detailed solutions, or reach out for community support through GitHub
        discussions.
      </div>
    </div>
  );
}
