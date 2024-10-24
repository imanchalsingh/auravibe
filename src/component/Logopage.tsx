import React, { useState, useRef, useMemo, useCallback } from "react";
import html2canvas from "html2canvas";
import { animated, useSpring } from "react-spring";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from ".././components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from ".././components/ui/card";
import { Button } from ".././components/ui/button"
import { Input } from ".././components/ui/input"
import { Label } from ".././components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from ".././components/ui/select"
  
const InteractiveElement: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(48);
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [shape, setShape] = useState<string>("circle");
  const [font, setFont] = useState<string>("Arial");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const logoRef = useRef<HTMLDivElement>(null);

  const logoStyle = useMemo(
    () => ({
      width: "200px",
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor,
      color: fontColor,
      fontSize: `${fontSize}px`,
      fontFamily: font,
      fontWeight: "bold",
      borderRadius:
        shape === "circle" ? "50%" : shape === "square" ? "0%" : "10%",
      transition: "all 0.3s ease",
    }),
    [backgroundColor, fontColor, fontSize, shape, font]
  );

  // Updated handleExport for exporting in square size
  const handleExport = useCallback(() => {
    if (logoRef.current) {
      html2canvas(logoRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'logo.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  }, []);

  const logoAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 300, friction: 10 },
  });

  const fonts: string[] = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Times New Roman",
    "Courier",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Comic Sans MS",
    "Trebuchet MS",
    "Arial Black",
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-purple-700">
          🎨 Logo Creator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="text"
                className="text-sm font-medium text-gray-700"
              >
                Logo Text
              </Label>
              <Input
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter logo text"
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="font"
                className="text-sm font-medium text-gray-700"
              >
                Font
              </Label>
              <Select value={font} onValueChange={setFont}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select a font" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {fonts.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="fontSize"
                className="text-sm font-medium text-gray-700"
              >
                Font Size
              </Label>
              <Input
                id="fontSize"
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                min="12"
                max="72"
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="fontColor"
                className="text-sm font-medium text-gray-700"
              >
                Font Color
              </Label>
              <Input
                id="fontColor"
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="mt-1 h-10"
              />
            </div>
            <div>
              <Label
                htmlFor="backgroundColor"
                className="text-sm font-medium text-gray-700"
              >
                Background Color
              </Label>
              <Input
                id="backgroundColor"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="mt-1 h-10"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Shape</Label>
              <div className="flex space-x-2 mt-1">
                <Button
                  onClick={() => setShape("circle")}
                  variant={shape === "circle" ? "default" : "outline"}
                  className="rounded-full"
                >
                  ⚪️ Circle
                </Button>
                <Button
                  onClick={() => setShape("square")}
                  variant={shape === "square" ? "default" : "outline"}
                  className="rounded-none"
                >
                  ◻️ Square
                </Button>
                <Button
                  onClick={() => setShape("rounded")}
                  variant={shape === "rounded" ? "default" : "outline"}
                  className="rounded-md"
                >
                  🔘 Rounded
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <animated.div style={logoAnimation}>
              <div ref={logoRef} style={logoStyle}>
                {text}
              </div>
            </animated.div>
            <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
              💾 Export Logo
            </Button>
          </div>
        </div>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Export Logo</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            Are you sure you want to export this logo?
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleExport();
                setIsDialogOpen(false);
              }}
            >
              Export
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default InteractiveElement;
