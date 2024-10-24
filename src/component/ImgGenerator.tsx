import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateImage = async () => {
    if (!prompt) return;
    setIsLoading(true);
    try {
      // Simulate an API call by using a placeholder URL
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${prompt}&client_id=R4Drd-1kpIX7wawJcXufN3V61IlJdzMwWGOeCjHrIhk`
      );
      const data = await response.json();
      setImageUrl(data.urls?.regular || "");
    } catch (error) {
      console.error("Failed to fetch image", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Image Generator</h1>
      <div className="flex flex-col items-center gap-4">
        <input
          style={{ color: "white" }}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
        />
        <button
          onClick={handleGenerateImage}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none"
        >
          {isLoading ? "Generating..." : "Generate Image"}
        </button>
      </div>
      <div className="mt-8">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={prompt}
            className="max-w-xs rounded-md shadow-lg"
          />
        )}
      </div>
    </div>
  );
}

export default App;
