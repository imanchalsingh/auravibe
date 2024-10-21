import React, { useState } from "react";
import Homepage from "./Homepage";
import Templates from "./Templates";
import HomeIcon from "@mui/icons-material/Home";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import StyleIcon from "@mui/icons-material/Style";
import AppsIcon from "@mui/icons-material/Apps";
import Projectpage from "./Projectpage";
import Brandpage from "./Brandpage";
import Appspage from "./Appspage";
import AVLogo from "./av_logo-preview.png";
import AuraVibeLogo from "./auravibelogo.png";
import Createdesign from "./CreateDesigns";

const InteractiveElement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "Home" | "Projects" | "Templates" | "Brand" | "Apps" | "Create Design"
  >("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Homepage />;
      case "Projects":
        return <Projectpage />;
      case "Templates":
        return <Templates />;
      case "Brand":
        return <Brandpage />;
      case "Apps":
        return <Appspage />;
      case "Create Design":
        return <Createdesign />;

      default:
        return null;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRight: "2px solid gray",
          padding: "7px",
        }}
      >
        <div
          onClick={() => {
            setCurrentPage("Home");
          }}
        >
          <HomeIcon />
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            setCurrentPage("Projects");
          }}
        >
          <FolderOpenIcon />
          <p>Project</p>
        </div>
        <div
          onClick={() => {
            setCurrentPage("Templates");
          }}
        >
          <AutoAwesomeMosaicOutlinedIcon />
          <p>Templates</p>
        </div>
        <div
          onClick={() => {
            setCurrentPage("Brand");
          }}
        >
          <StyleIcon />
          <p>Brand</p>
        </div>
        <div
          onClick={() => {
            setCurrentPage("Apps");
          }}
        >
          <AppsIcon />
          <p>Apps</p>
        </div>
      </div>
      <div     
        style={{
          display: "flex",
          flexDirection: "column",
          width: "15vw",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <img style={{ width: "50px", height: "50px" }} src={AVLogo} alt="" />
          <img style={{ width: "80%" }} src={AuraVibeLogo} alt="" />
        </div>
        <button
          onClick={() => {
            setCurrentPage("Create Design");
          }}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Create New Design
        </button>
        <button className="bg-purple-600 hover:bg-purple-700F">
          Upgrade Aura
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
          overflowY: "auto",
          width: "75vw",
        }}
      >
        <div style={{ height: "100vh" }}>{renderPage()}</div>
      </div>
    </div>
  );
};

export default InteractiveElement;
