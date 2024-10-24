import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Button } from "../components/ui/button";

interface Element {
  id: number;
  type: string; // "shape", "image", "text"
  x: number;
  y: number;
  width: number;
  height: number;
  text?: string; // For text elements
  fontSize?: number; // For text elements
  fontFamily?: string; // For text elements
  imageSrc?: string; // For image elements
  shapeIcon?: string; // For shape elements (used to display icon)
}

const shapesList = [
  { name: "Star", icon: "★" },
  { name: "Square", icon: "■" },
  { name: "Circle", icon: "●" },
  { name: "Line", icon: "─" },
  { name: "Triangle", icon: "▲" },
  { name: "Cloud", icon: "☁" },
  { name: "Heart", icon: "♥" },
  { name: "Diamond", icon: "♦" },
  
];

const fonts = ["Arial", "Courier New", "Times New Roman", "Georgia", "Verdana"];

const InteractiveElement: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<number | null>(null);
  const [isNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("shapes");
  const [font, setFont] = useState<string>("Arial");
  const canvasRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Reference for input field

  const addElement = (type: string, text?: string, imageSrc?: string, shapeIcon?: string) => {
    if (canvasRef.current) {
      const newElement: Element = {
        id: Date.now(),
        type,
        x: Math.random() * (canvasRef.current.offsetWidth - 50),
        y: Math.random() * (canvasRef.current.offsetHeight - 50),
        width: type === "text" ? 200 : 100,
        height: 100,
        text: text || "",
        fontSize: 16,
        fontFamily: font,
        imageSrc: imageSrc || "",
        shapeIcon: shapeIcon || "", // Added shape icon
      };
      setElements((prev) => [...prev, newElement]);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          addElement("image", undefined, e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const startDrag = (e: React.MouseEvent, id: number) => {
    setSelectedElementId(id);
  };

  const drag = (e: MouseEvent) => {
    if (selectedElementId !== null) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;
      setElements((prevElements) =>
        prevElements.map((el) =>
          el.id === selectedElementId
            ? { ...el, x: el.x + deltaX, y: el.y + deltaY }
            : el
        )
      );
    }
  };

  const endDrag = () => {
    setSelectedElementId(null);
  };

  const resizeElement = (id: number, deltaWidth: number, deltaHeight: number) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id
          ? {
              ...el,
              width: Math.max(20, el.width + deltaWidth),
              height: Math.max(20, el.height + deltaHeight),
            }
          : el
      )
    );
  };

  const deleteElement = (id: number) => {
    setElements((prevElements) => prevElements.filter((el) => el.id !== id));
  };

  const handleTextChange = (id: number, newText: string) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id ? { ...el, text: newText } : el
      )
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", drag);
      canvas.addEventListener("mouseup", endDrag);
      canvas.addEventListener("mouseleave", endDrag);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", drag);
        canvas.removeEventListener("mouseup", endDrag);
        canvas.removeEventListener("mouseleave", endDrag);
      }
    };
  }, [selectedElementId]);

  useEffect(() => {
    if (selectedElementId !== null && inputRef.current) {
      inputRef.current.focus(); // Focus the input when a text element is selected
    }
  }, [selectedElementId]);

  const springProps = useSpring({
    left: isNavOpen ? 0 : -300,
    config: { tension: 300, friction: 40 },
  });

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setSelectedElementId(null); // Deselect the input when clicking outside
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex w-full h-full">
        <animated.div style={springProps} className="h-full w-64 bg-white shadow-lg z-10">
          <div style={{ overflowY: "auto", height: "100vh" }} className="p-4">
            <h2 className="text-2xl font-bold mb-4">Elements</h2>
            <div className="flex mb-4">
              <Button
                className={`mr-2 ${activeTab === "shapes" ? "bg-blue-500 text-white" : ""}`}
                onClick={() => setActiveTab("shapes")}
              >
                Shapes
              </Button>
              <Button
                className={`mr-2 ${activeTab === "text" ? "bg-blue-500 text-white" : ""}`}
                onClick={() => setActiveTab("text")}
              >
                Text
              </Button>
              <Button
                className={`${activeTab === "image" ? "bg-blue-500 text-white" : ""}`}
                onClick={() => setActiveTab("image")}
              >
                Image
              </Button>
            </div>

            {activeTab === "shapes" && (
              <div className="grid grid-cols-2 gap-2">
                {shapesList.map((shape, index) => (
                  <Button key={index} onClick={() => addElement("shape", undefined, undefined, shape.icon)} className="p-2">
                    <span className="text-2xl">{shape.icon}</span>
                  </Button>
                ))}
              </div>
            )}

            {activeTab === "text" && (
              <div className="mt-4">
                <label htmlFor="font-select" className="block mb-2">Select Font:</label>
                <select
                  id="font-select"
                  value={font}
                  onChange={(e) => setFont(e.target.value)}
                  className="mb-4 p-2 border rounded"
                >
                  {fonts.map((fontName, index) => (
                    <option key={index} value={fontName}>
                      {fontName}
                    </option>
                  ))}
                </select>
                <Button onClick={() => addElement("text", "New Text")} className="p-2 bg-green-300">
                  Add Text
                </Button>
              </div>
            )}

            {activeTab === "image" && (
              <div className="mt-4">
                <input type="file" onChange={handleImageUpload} />
              </div>
            )}
          </div>
        </animated.div>

        <div className="relative flex-grow h-full p-4" ref={canvasRef}>
          <h1 className="text-3xl font-bold mb-4">Interactive Canvas</h1>
          <div className="relative w-full h-[calc(100vh-8rem)] bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            {elements.map((el) => (
              <div
                key={el.id}
                className={`absolute cursor-move p-2 ${el.id === selectedElementId ? "border-2 border-blue-500" : ""}`} 
                style={{
                  left: el.x,
                  top: el.y,
                  width: el.width,
                  height: el.height,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  if (el.type === "text") {
                    if (selectedElementId === el.id) {
                      // Deselect on second click
                      setSelectedElementId(null);
                    } else {
                      setSelectedElementId(el.id);
                    }
                  } else {
                    startDrag(e, el.id);
                  }
                }}
              >
                {el.type === "text" && (
                  el.id === selectedElementId ? (
                    <input
                      ref={inputRef}
                      type="text"
                      value={el.text}
                      onChange={(e) => handleTextChange(el.id, e.target.value)}
                      style={{
                        width: "100%",
                        height: "100%",
                        fontSize: `${el.fontSize}px`,
                        fontFamily: el.fontFamily,
                        border: "none",
                        outline: "none",
                      }}
                    />
                  ) : (
                    <div style={{
                      fontSize: `${el.fontSize}px`,
                      fontFamily: el.fontFamily,
                    }}>
                      {el.text}
                    </div>
                  )
                )}
                {el.type === "shape" && (
                  <div className="text-3xl">
                    {el.shapeIcon}
                  </div>
                )}
                <div
                  className="absolute bottom-0 right-0 cursor-se-resize w-4 h-4 bg-blue-300"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    const handleResize = (event: MouseEvent) => {
                      resizeElement(el.id, event.movementX, event.movementY);
                    };
                    const stopResize = () => {
                      window.removeEventListener("mousemove", handleResize);
                      window.removeEventListener("mouseup", stopResize);
                    };
                    window.addEventListener("mousemove", handleResize);
                    window.addEventListener("mouseup", stopResize);
                  }}
                />
                <button
                  className="absolute right-0 top-0 bg-red-500 text-white rounded-full p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteElement(el.id);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElement;
