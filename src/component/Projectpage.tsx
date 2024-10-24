import React, { useState, CSSProperties } from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>("Project 1");
  const projects = ["Project 1", "Project 2", "Project 3"];

  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>My Projects</h2>
        <ul style={styles.projectList}>
          {projects.map((project, index) => (
            <li
              key={index}
              style={styles.projectItem}
              onClick={() => setSelectedProject(project)}
            >
              {project}
            </li>
          ))}
        </ul>
      </div>
      {/* Project Content */}
      <div style={styles.projectContent}>
        <h2 style={styles.projectTitle}>Project: {selectedProject}</h2>
        <p>Details about the project go here...</p>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  app: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "200px",
    backgroundColor: "#2d2d2d",
    color: "#fff",
    padding: "20px",
    height: "100%",
    boxSizing: "border-box",
  },
  sidebarTitle: {
    margin: "0 0 10px",
    fontSize: "1.2rem",
  },
  projectList: {
    listStyle: "none",
    padding: 0,
  },
  projectItem: {
    padding: "8px 0",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  projectItemHover: {
    backgroundColor: "#444",
  },
  projectContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  projectTitle: {
    marginBottom: "10px",
  },
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;