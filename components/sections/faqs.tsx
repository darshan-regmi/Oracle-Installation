import { useState } from "react";

function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border rounded-lg border-gray-200 dark:border-gray-700 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center font-semibold text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors"
      >
        <span>{question}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-4 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 transition-colors">
          {children}
        </div>
      )}
    </div>
  );
}

export default function FAQsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100 transition-colors">
        Frequently Asked Questions
      </h2>

      <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors">
        General Questions
      </h3>

      <FAQItem question="Can I use this guide on both Intel and Apple Silicon Macs?">
        Yes! This guide covers both architectures. Apple Silicon users should
        enable Rosetta emulation in Docker Desktop for best compatibility with
        Oracle images. See the Troubleshooting section for Apple
        Silicon-specific guidance.
      </FAQItem>

      <FAQItem question="Do I need to install Oracle locally on my Mac?">
        No, Docker eliminates that need. You only need Docker Desktop installed.
        The Docker container runs Oracle isolated from your system. Optionally,
        you can install Oracle Instant Client using Homebrew for command-line
        tools.
      </FAQItem>

      <FAQItem question="What's the difference between XE, Standard, and Enterprise editions?">
        Oracle XE (Express Edition) is free and perfect for development with
        limitations (4GB RAM, 1 CPU). Standard Edition is for mid-sized
        deployments, and Enterprise Edition is for large-scale production. This
        guide focuses on XE for development.
      </FAQItem>

      <FAQItem question="Can I use this for production workloads?">
        Oracle XE is designed for development, learning, and small projects. For
        production, use Standard or Enterprise Edition with proper
        infrastructure, backup strategies, and monitoring as detailed in the
        Maintenance and Security sections.
      </FAQItem>

      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700 dark:text-gray-200 transition-colors">
        Installation Questions
      </h3>

      <FAQItem question="How long does the first startup take?">
        Initial startup typically takes 2-5 minutes as Oracle initializes the
        database. Subsequent starts are much faster (under 30 seconds). Check
        progress with <code>docker logs -f oracle-db</code> and look for
        &quot;DATABASE IS READY TO USE&quot;.
      </FAQItem>

      <FAQItem question="Can I use a custom password?">
        Yes! Set the <code>ORACLE_PASSWORD</code> environment variable when
        starting the container. Use a strong password with uppercase, lowercase,
        numbers, and symbols for security.
      </FAQItem>

      <FAQItem question="What if port 1521 is already in use on my system?">
        Use any available port by mapping it differently:{" "}
        <code>-p 1522:1521</code> maps external port 1522 to Oracle's internal
        port 1521. Then connect using <code>localhost:1522</code>.
      </FAQItem>

      <FAQItem question="Do I need Docker Compose or can I use docker run?">
        You can use either. Docker Compose is recommended for reproducible
        setups and easier management. Both approaches work—choose what’s
        comfortable for your workflow.
      </FAQItem>

      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700 dark:text-gray-200 transition-colors">
        Connection & Access Questions
      </h3>

      <FAQItem question="What's the default username and how do I create new users?">
        The default administrative user is <code>system</code>. Connect as
        system and create new users with:
        <code>CREATE USER username IDENTIFIED BY password;</code> and grant
        permissions as needed.
      </FAQItem>

      <FAQItem question="Can I connect from outside my Mac?">
        The database is only accessible on localhost:1521 by default. To expose
        it to your network, modify Docker port mapping, but ensure proper
        security measures (strong passwords, network isolation, firewall rules)
        are in place.
      </FAQItem>

      <FAQItem question="How do I reset a user's password?">
        Connect as a DBA user (like system) and run:
        <code>ALTER USER username IDENTIFIED BY newpassword;</code> then{" "}
        <code>COMMIT;</code>
      </FAQItem>

      <FAQItem question="What connection tools and languages are supported?">
        Oracle supports many clients: SQL*Plus, DBeaver, SQL Developer, and
        language libraries for Python, Node.js, Java, PHP, etc. Connection
        strings vary by tool—see the Connection &amp; Tools section for
        examples.
      </FAQItem>

      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700 dark:text-gray-200 transition-colors">
        Data & Persistence Questions
      </h3>

      <FAQItem question="Is my data safe if I stop the container?">
        Yes! Data persists in Docker named volumes even after stopping. Use{" "}
        <code>docker stop oracle-db</code> to safely stop (not{" "}
        <code>docker rm</code> which deletes the container). Volumes remain
        unless explicitly deleted.
      </FAQItem>

      <FAQItem question="How do I backup my database?">
        Use Data Pump (EXPDP) for logical backups or backup the Docker volume
        for physical backups. See the Maintenance section for detailed backup
        and recovery procedures and scripts.
      </FAQItem>

      <FAQItem question="Can I migrate data from another Oracle instance?">
        Yes! Use Data Pump (EXPDP/IMPDP) to export from source and import to
        your Docker container. Alternatively, use SQL scripts or other migration
        tools. See the Maintenance section for details.
      </FAQItem>

      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700 dark:text-gray-200 transition-colors">
        Performance & Resource Questions
      </h3>

      <FAQItem question="How do I improve database performance?">
        Allocate more CPU cores and memory to Docker, use SSD storage, enable
        Rosetta if on Apple Silicon, and optimize your queries and indexes.
        Monitor with <code>docker stats</code> to identify bottlenecks.
      </FAQItem>

      <FAQItem question="How much disk space do I need?">
        Oracle XE typically uses 8-10GB minimum. For development with data,
        allocate 20-40GB. Production should have much more. Check available
        space with <code>df -h</code>.
      </FAQItem>

      <FAQItem question="Can multiple applications connect simultaneously?">
        Yes, Oracle accepts multiple connections. Use connection pooling in your
        application for efficiency. Oracle XE has limitations on concurrent
        sessions—scale up for production workloads.
      </FAQItem>

      <FAQItem question="How do I monitor database performance?">
        Use GUI tools (DBeaver, SQL Developer) to query performance views, run{" "}
        <code>docker stats oracle-db</code> for resource usage, or query
        Oracle's built-in performance views (<code>V$SESSION</code>,{" "}
        <code>V$SQLAREA</code>, etc.).
      </FAQItem>

      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700 dark:text-gray-200 transition-colors">
        Troubleshooting Questions
      </h3>

      <FAQItem question="My container keeps crashing. What should I do?">
        Check logs with <code>docker logs oracle-db</code> for error messages.
        Common causes: insufficient memory (increase Docker allocation),
        corrupted data (try recreating), or initialization failures. See the
        Troubleshooting section for detailed solutions.
      </FAQItem>

      <FAQItem question="How do I clean up and start completely fresh?">
        Run{" "}
        <code>
          docker stop oracle-db && docker rm oracle-db && docker volume rm
          oracle-data
        </code>{" "}
        then recreate the container. This removes all traces and starts with a
        clean database.
      </FAQItem>

      <FAQItem question="What should I do if initialization fails on Apple Silicon?">
        Enable Rosetta emulation in Docker → Settings → Features. If still
        failing, try specifying the platform explicitly:{" "}
        <code>--platform linux/amd64</code> when pulling and running images.
      </FAQItem>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-6 rounded-lg text-gray-700 dark:text-gray-200 transition-colors">
        Still have questions? Check the Troubleshooting section for more
        detailed solutions, or reach out for community support through GitHub
        discussions.
      </div>
    </section>
  );
}
