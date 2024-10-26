import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import Imggenerator from "./ImgGenerator";
import Editpage from "./Editpage";
import Documentpage from "./Documentpage";
import ResumeTemplate from "./templatessection/ResumeTemp";
import PanoramaIcon from "@mui/icons-material/Panorama";
import SevenKPlusIcon from "@mui/icons-material/SevenKPlus";
import WebIcon from "@mui/icons-material/Web";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import TvIcon from "@mui/icons-material/Tv";
import AuraVibeLogo from "./auravibelogo.png";
import Logopage from "./Logopage"
const InteractiveElement: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<
    | "Resume"
    | "Edit Page"
    | "Generate Image"
    | "Templates"
    | "Apps"
    | "Documents"
    | "Logo"
  >("Templates");
  const renderSection = () => {
    switch (currentSection) {
      case "Resume":
        return <ResumeTemplate />;
      case "Edit Page":
        return <Editpage />;
      case "Generate Image":
        return <Imggenerator />;
      case "Documents":
        return <Documentpage />;
        case "Logo":
        return <Logopage />;
      default:
        return null;
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <div></div>
      <div
        style={{
          background: "linear-gradient(to right,#80ff80,#80dfff)",
          height: "20vh",
          borderRadius: "10px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          color: "#2f4e63",
          fontFamily: "Playwrite GB S",
        }}
      >
        <h1 style={{ fontWeight: "bolder" }}>Welcome to</h1>

        <img style={{ width: "40%" }} src={AuraVibeLogo} alt="" />
      </div>
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
            setCurrentSection("Generate Image");
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
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <YouTubeIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#ff0000",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Thumbnails</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <TvIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#00802b",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Presentation</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <VideocamIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#006699",
              borderRadius: "50%",
              padding: "5px",
              color: "white",
            }}
          />
          <p>
            <small>Video</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <AspectRatioIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#d9d9d9",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <p>
            <small>Custom Size</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <CloudUploadOutlinedIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#d9d9d9",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <p>
            <small>Upload</small>
          </p>
        </div>
        <div
          style={{ textAlign: "center", padding: "10px" }}
          onClick={() => {
            setCurrentSection("Generate Image");
          }}
        >
          <MoreHorizOutlinedIcon
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#d9d9d9",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <p>
            <small>More</small>
          </p>
        </div>
      </div>
      <div>{renderSection()}</div>
    </div>
  );
};

export default InteractiveElement;
