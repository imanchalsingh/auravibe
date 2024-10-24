import React, { useRef, useState, CSSProperties } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";
import Draggable from "react-draggable";

// Define your styles with CSSProperties type
const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  editorContainer: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "hidden",
    position: "relative",
    minHeight: "400px", // Minimum height for dragging within bounds
  },
  editor: {
    height: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  draggableContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%", // Set to full width for better control
  },
  shapeButton: {
    margin: "0 5px",
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
};

// The main App component
const App: React.FC & { modules?: object } = () => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const quillRef = useRef<ReactQuill | null>(null);

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  const exportToDocx = () => {
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph(editorHtml)],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "document.docx");
    });
  };

  const insertShape = (shape: string) => {
    const quill = quillRef.current?.getEditor();

    // Check if quill is defined and has a selection
    if (quill) {
      const range = quill.getSelection();
      if (range) {
        quill.insertText(range.index, shape);
      }
    } else {
      console.error("Quill editor is not available");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Simple Word Processor</h2>
      <div style={styles.editorContainer}>
        {/* Wrap the editor in a draggable container */}
        <Draggable bounds="parent">
          <div style={styles.draggableContainer}>
            <ReactQuill
              ref={(el) => (quillRef.current = el)}
              value={editorHtml}
              onChange={handleChange}
              modules={App.modules}
              style={styles.editor}
            />
            <div>
              <button
                onClick={() => insertShape("★")}
                style={styles.shapeButton}
              >
                ★
              </button>
              <button
                onClick={() => insertShape("■")}
                style={styles.shapeButton}
              >
                ■
              </button>
              <button
                onClick={() => insertShape("●")}
                style={styles.shapeButton}
              >
                ●
              </button>
              <button
                onClick={() => insertShape("▲")}
                style={styles.shapeButton}
              >
                ▲
              </button>
              <button
                onClick={() => insertShape("☁")}
                style={styles.shapeButton}
              >
                ☁
              </button>
            </div>
          </div>
        </Draggable>
      </div>
      {/* Shape buttons added below the editor */}

      <button onClick={exportToDocx} style={styles.button}>
        Export to DOCX
      </button>
    </div>
  );
};

// Define the modules as a static property
App.modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["clean"],
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    // Optionally, you can add a custom group for shapes in the toolbar if needed
    [{ shape: ["star", "square", "circle", "triangle", "cloud"] }],
  ],
};

export default App;
