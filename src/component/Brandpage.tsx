import React, { CSSProperties} from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  // Sample brand names
  const brands = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Brands</h2>
      <div style={styles.grid}>
        {brands.map((brand, index) => (
          <div key={index} style={styles.brandCard}>
            <p style={styles.brandText}>{brand}</p>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  brandCard: {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s",
  },
  brandCardHover: {
    transform: "scale(1.05)",
  },
  brandText: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;