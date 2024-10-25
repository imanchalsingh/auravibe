import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import Imggenerator from "./ImgGenerator";
import Editpage from "./Editpage";
import Documentpage from "./Documentpage";
import ResumeGenerator from "./Resumegeneratorpage";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PanoramaIcon from "@mui/icons-material/Panorama";
import SevenKPlusIcon from "@mui/icons-material/SevenKPlus";
import WebIcon from "@mui/icons-material/Web";
import ArticleIcon from "@mui/icons-material/Article";
import Logopage from "./Logopage";
import Websitepage from "./Websitepage"
const InteractiveElement: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<
    | "Resume"
    | "Edit Page"
    | "Generate Image"
    | "Templates"
    | "Apps"
    | "Documents"
    | "Logo"
    | "Websites"
  >("Templates");
  const renderSection = () => {
    switch (currentSection) {
      case "Resume":
        return <ResumeGenerator />;
      case "Edit Page":
        return <Editpage />;
      case "Generate Image":
        return <Imggenerator />;
      case "Documents":
        return <Documentpage />;
      case "Logo":
        return <Logopage />;
        case "Websites":
        return <Websitepage />;
      default:
        return null;
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Resume");
          }}
        >
          <DescriptionIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#e65c00",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Resume</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Edit Page");
          }}
        >
          <AutoFixHighIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#00cc00",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Design Page</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <PanoramaIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#009999",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Ai Generator</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Logo");
          }}
        >
          <SevenKPlusIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#b3b300",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Logo</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Websites");
          }}
        >
          <WebIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#3385ff",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Websites</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Documents");
          }}
        >
          <ArticleIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#cc99ff",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Documents</small>
          </p>
        </div>
        

       
       
      </div>
      <div style={{width:"75vw"}}>{renderSection()}</div>
    </div>
  );
};

export default InteractiveElement;
