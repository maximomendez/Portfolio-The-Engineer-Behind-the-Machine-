export default function Home() {
  return (
    <main className="pb-7">
      <section
        id="ignition"
        style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <p style={{ color: "#ededed", fontFamily: "var(--font-space-grotesk)", fontSize: "1.25rem" }}>
          System initializing...
        </p>
      </section>
    </main>
  );
}
