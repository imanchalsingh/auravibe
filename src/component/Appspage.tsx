import React, { CSSProperties } from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  // Sample app data
  const apps = [
    { name: "App One", description: "Description of App One" },
    { name: "App Two", description: "Description of App Two" },
    { name: "App Three", description: "Description of App Three" },
    { name: "App Four", description: "Description of App Four" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Apps</h2>
      <div style={styles.grid}>
        {apps.map((app, index) => (
          <div key={index} style={styles.appCard}>
            <div style={styles.iconPlaceholder}>📱</div>
            <h3 style={styles.appName}>{app.name}</h3>
            <p style={styles.appDescription}>{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  appCard: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.2s",
  },
  iconPlaceholder: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  appName: {
    fontSize: "1.2rem",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  appDescription: {
    fontSize: "1rem",
    color: "#666",
    textAlign: "center",
  },
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;
