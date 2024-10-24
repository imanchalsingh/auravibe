import React from "react";

// TypeScript Interfaces
interface Button {
  text?: string;
  position: string;
  style?: {
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    padding?: string;
    display?: string;
    border?: string;
    fontSize?: string;
    borderLeft?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    width?: string;
    height?: string;
  };
}

interface Nav {
  logotext?: string;
  position: string;
  style?: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    textAlign?: string;
    borderLeft?: string;
    borderRight?: string;
    borderBottom?: string;
    borderTop?: string;
    border?: string;
  };
}

interface Title {
  title?: string;
  position: string;
  style?: {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    fontStyle?: string;
    backgroundColor?: string;
    padding?: string;
    border?: string;
    fontFamily?: string;
    paddingLeft?: string;
    paddingTop?: string;
    textShadow?: string;
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginBottom?: string;
    width?: string;
    borderLeft?: string;
    borderRight?: string;
    borderBottom?: string;
    borderTop?: string;
  };
}
interface Text {
  text: string;
  position: string;
  style: {
    fontSize: string;
    color: string;
    fontWeight?: string;
    fontStyle?: string;
    backgroundColor?: string;
    padding?: string;
    border?: string;
    textShadow?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
    width?: string;
    display?: string;
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginBottom?: string;
    fontFamily?: string;
  };
}

interface Image {
  url: string;
  style?: {
    borderRadius?: string;
    height?: string;
    width?: string;
  };
}

interface Template {
  templateId: string;
  templateName: string;
  navbar?: Nav[];
  titles?: Title[];
  image: Image[];
  buttons: Button[];
  texts: Text[];
  style: {
    imagePosition: string;
    textAlignment: string;
    backgroundColor?: string;
    filter?: string;
  };
}

// Dummy JSON Data
const templates: Template[] = [
  {
    templateId: "1",
    templateName: "Modern",
    image: [
      {
        url: "https://www.wallpapertip.com/wmimgs/83-838296_web-designer-professional-website-background-images.jpg",
      },
    ],
    navbar: [
      {
        logotext: "⮙ Career Climb",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
        },
      },
    ],

    buttons: [
      {
        text: "Click",
        position: "bottom-left",
        style: {
          backgroundColor: "#313131a4",
          color: "white",
          padding: "3px 20px",
        },
      },
    ],

    texts: [
      {
        text: "Navigating your career with confidence.",
        position: "left-center",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
      filter: "blur(5px)",
    },
  },
  {
    templateId: "2",
    templateName: "Modern",
    image: [
      {
        url: "https://wallpapercave.com/wp/wp2141407.jpg",
      },
    ],

    titles: [
      {
        title: "Tech Mastery",
        position: "top",
        style: {
          color: "black",
          fontFamily: "Playwrite GB S",
          fontSize: "20px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        },
      },
    ],
    buttons: [
      {
        text: "Go ➤",
        position: "bottom-right",
        style: {
          backgroundColor: "#3366ff",
          color: "white",
          borderRadius: "50px",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "Sharpen your skills for success.",
        position: "center-left",
        style: {
          fontSize: "15px",
          color: "black",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          width: "40%",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "3",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        style: {
          width: "40%",
        },
      },
    ],

    titles: [
      {
        title: "Code Crafting",
        position: "top-left",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "20px",
          marginTop: "10px",
        },
      },
    ],
    navbar: [
      {
        logotext: "⧉ CodeCraft",
        position: "top",
        style: {
          backgroundColor: "#008066",
        },
      },
    ],
    buttons: [
      {
        text: "➔",
        position: "bottom-left",
        style: {
          backgroundColor: "#008066",
          color: "white",
          padding: "2px 20px",
        },
      },
    ],

    texts: [
      {
        text: "Perfect your development journey.",
        position: "left-center",
        style: {
          fontSize: "15px",
          color: "white",
          padding: "10px",
          marginTop: "20px",
        },
      },
    ],
    style: {
      imagePosition: "right",
      textAlignment: "left",
      backgroundColor: "#262626",
    },
  },
  {
    templateId: "4",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        style: {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        },
      },
    ],
    navbar: [
      {
        logotext: "☰ SkillForge",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "#003333",
          color: "white",
        },
      },
    ],
    titles: [
      {
        title: "Digital Pioneers",
        position: "top-right",
        style: {
          color: "white",
          fontSize: "23px",
          fontWeight: "bold",
          paddingTop: "10px",
        },
      },
    ],
    buttons: [
      {
        text: "Sign In",
        position: "bottom-right",
        style: {
          backgroundColor: "#003333",
          color: "white",
          padding: "3px 20px",
          borderBottom: "3px solid white",
        },
      },
      {
        text: "Login",
        position: "bottom-center",
        style: {
          backgroundColor: "#003333",
          color: "white",
          padding: "3px 20px",
          borderBottom: "3px solid white",
        },
      },
    ],

    texts: [
      {
        text: "Lead the way in innovation.",
        position: "center-right",
        style: {
          fontSize: "15px",
          color: "white",
          padding: "10px",
        },
      },
    ],
    style: {
      imagePosition: "left",
      textAlignment: "right",
      backgroundColor: "#006666",
    },
  },
  {
    templateId: "5",
    templateName: "Modern",
    image: [
      {
        url: "https://wallpaperaccess.com/full/3239480.jpg",
      },
    ],

    titles: [
      {
        title: "I'm Anchal Singh ★",
        position: "center",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "20px",
          borderRight: "3px solid white",
          borderTop: "3px solid white",
          padding: "2px",
        },
      },
    ],
    buttons: [
      {
        text: "➤",
        position: "bottom-right",
        style: {
          backgroundColor: "#009999",
          color: "white",
          borderRadius: "50%",
          padding: "3px 10px",
          display: "none",
        },
      },
    ],

    texts: [
      {
        text: "Frontend Developer✓",
        position: "top-center",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "6",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],

    titles: [
      {
        title: "Skill Evolution",
        position: "top-left",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "20px",
        },
      },
    ],
    buttons: [
      {
        text: "Login Here",
        position: "top-right",
        style: {
          backgroundColor: "#313131a4",
          color: "white",
          padding: "3px 20px",
          borderBottom: "3px solid white",
          borderTop: "3px solid white",
        },
      },
    ],

    texts: [
      {
        text: "Grow with continuous learning.",
        position: "center-right",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "7",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/911254/pexels-photo-911254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],

    titles: [
      {
        title: "Username",
        position: "top-right",
        style: {
          color: "gray",

          fontFamily: "Playwrite GB S",
          fontSize: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          backgroundColor: "#313131a4",
        },
      },
      {
        title: "Email",
        position: "top-right",
        style: {
          color: "gray",
          fontFamily: "Playwrite GB S",
          fontSize: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          backgroundColor: "#313131a4",
          marginTop: "20px",
        },
      },
      {
        title: "Password",
        position: "top-right",
        style: {
          color: "gray",
          fontFamily: "Playwrite GB S",
          fontSize: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          backgroundColor: "#313131a4",
          marginTop: "40px",
        },
      },
    ],
    buttons: [
      {
        text: "LOG iN➤",
        position: "bottom-right",
        style: {
          backgroundColor: "#ffff4d",
          color: "black",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: " Step into roles that matter.",
        position: "bottom-center",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          paddingLeft: "30px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "8",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],

    titles: [
      {
        title: "A tool for rapid skill-building and development.",
        position: "center-left",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "12px",
          width: "40%",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        },
      },
    ],
    buttons: [
      {
        text: "Check",
        position: "bottom-center",
        style: {
          backgroundColor: "#f85454",
          color: "white",
          padding: "3px 10px",
          borderBottom: "3px solid gray",
          borderRadius: "10px",
        },
      },
    ],

    texts: [
      {
        text: "Turn ideas into impactful projects.",
        position: "center-right",
        style: {
          fontSize: "12px",
          color: "White",
          padding: "10px",
          fontFamily: "Playwrite GB S",
          width: "40%",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "9",
    templateName: "Modern",
    image: [
      {
        url: "https://wallpapers.com/images/hd/website-background-sdki780prxb1nfs5.jpg",
      },
    ],

    titles: [
      {
        title: "Problem Solvers",
        position: "center",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "15px",
          backgroundColor: "#313131c1",
          padding: "5px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          border: "3px solid white",
          width: "40%",
        },
      },
    ],
    buttons: [
      {
        text: "➤",
        position: "bottom-right",
        style: {
          backgroundColor: "#009999",
          color: "white",
          borderRadius: "50%",
          padding: "3px 10px",
          display: "none",
        },
      },
    ],

    texts: [
      {
        text: "Thrive in dynamic tech environments.",
        position: "bottom-center",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          width: "80%",
          backgroundColor: "#313131c1",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "10",
    templateName: "Modern",
    image: [
      {
        url: "https://static.vecteezy.com/system/resources/previews/000/549/667/original/blue-particle-line-wave-abstract-background-modern-design-with-copy-space-vector-illustration-for-your-business-and-web-banner-design.jpg",
      },
    ],
    navbar: [
      {
        logotext: "⋮ PrecisionCode",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "#00264d",
          color: "white",
        },
      },
    ],
    titles: [
      {
        title: "Career Elevation",
        position: "top-left",
        style: {
          color: "white",
          fontSize: "22px",
          marginTop: "10px",
          fontWeight: "bold",
        },
      },
    ],
    buttons: [
      {
        text: "➤",
        position: "bottom-right",
        style: {
          backgroundColor: "#009999",
          color: "white",
          borderRadius: "50%",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "Climb the professional ladder smartly.",
        position: "bottom-left",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          paddingBottom: "20px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "11",
    templateName: "Modern",
    image: [
      {
        url: "https://static.vecteezy.com/system/resources/previews/011/153/363/original/3d-web-developer-working-on-project-illustration-png.png",
        style: {
          width: "40%",
        },
      },
    ],
    navbar: [
      {
        logotext: "☰ Resilience Path",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "#66ff99",
          color: "black",
          textAlign: "top-right",
        },
      },
    ],
    titles: [
      {
        title: "Innovation Drive",
        position: "top-left",
        style: {
          color: "white",
          fontSize: "22px",
          marginTop: "10px",
          fontWeight: "bold",
        },
      },
    ],
    buttons: [
      {
        text: "➤",
        position: "bottom-right",
        style: {
          backgroundColor: "#66ff99",
          color: "black",
          borderRadius: "50%",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "Fuel your career with creativity.",
        position: "bottom-left",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
        },
      },
    ],
    style: {
      imagePosition: "right",
      textAlignment: "left",
      backgroundColor: "#004d80",
    },
  },
  {
    templateId: "12",
    templateName: "Modern",
    image: [
      {
        url: "https://directlinedev.com/media/cases/rooney/header/background_1_zM58lsj.wide.jpeg",
      },
    ],
    navbar: [
      {
        logotext: "⚙ SkillSync",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "#0099ff",
          color: "white",
        },
      },
    ],
    titles: [
      {
        title: "Skill Empowerment",
        position: "bottom-center",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "18px",
        },
      },
    ],
    buttons: [
      {
        text: "⋯",
        position: "bottom-right",
        style: {
          backgroundColor: "#0099ff",
          color: "white",
          borderRadius: "50%",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "Strengthen your expertise for impact.",
        position: "center",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          paddingBottom: "40px",
          paddingLeft: "35px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "13",
    templateName: "Modern",
    image: [
      {
        url: "https://wallpaperaccess.com/full/3239444.jpg",
      },
    ],
    navbar: [
      {
        logotext: "⚙TechMastery",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
        },
      },
    ],
    titles: [
      {
        title: "Code Excellence",
        position: "center",
        style: {
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
          width: "50%",
          backgroundColor: "#8d1affb5",
          padding: "2px",
          borderTop: "3px solid white",
        },
      },
    ],
    buttons: [
      {
        text: "Login",
        position: "bottom-right",
        style: {
          backgroundColor: "transparent",
          color: "white",
          padding: "3px 10px",
          border: "2px solid #b366ff",
        },
      },
      {
        text: "Sign in",
        position: "bottom-left",
        style: {
          backgroundColor: "#400080",
          color: "white",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "",
        position: "left-center",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          display: "none",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "14",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    navbar: [
      {
        logotext: "AgileSteps",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "#b7aa97",
          color: "#e002a3",
        },
      },
    ],
    titles: [
      {
        title: "Leadership Focus",
        position: "top-right",
        style: {
          color: "white",
          fontFamily: "Playwrite GB S",
          fontSize: "20px",
          paddingTop: "10px",
        },
      },
    ],
    buttons: [
      {
        text: "⇨",
        position: "bottom-right",
        style: {
          backgroundColor: "#e002a3",
          color: "white",
          borderRadius: "10px",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "Shape your path to lead with confidence.",
        position: "center-right",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "right",
    },
  },
  {
    templateId: "15",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/1061142/pexels-photo-1061142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    navbar: [
      {
        logotext: "☰ CodeMasters",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
        },
      },
    ],
    titles: [
      {
        title: "Tech Fluency",
        position: "top-right",
        style: {
          color: "white",
          fontSize: "25px",
          marginTop: "10px",
          borderLeft: "3px solid white",
          borderBottom: "3px solid white",
          padding: "10px",
          fontWeight: "bold",
        },
      },
    ],
    buttons: [
      {
        text: "Click here",
        position: "bottom-right",
        style: {
          backgroundColor: "transparent",
          color: "white",
          padding: "4px 30px",
          border: "2px solid white",
        },
      },
    ],
    texts: [
      {
        text: "★",
        position: "bottom-center",
        style: {
          fontSize: "40px",
          color: "White",
          padding: "10px",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "17",
    templateName: "Modern",
    image: [
      {
        url: "http://getwallpapers.com/wallpaper/full/d/a/5/380767.jpg",
      },
    ],
    navbar: [
      {
        logotext: "PortFolio",
        position: "top",
        style: {
          height: "20px",
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
        },
      },
    ],
    titles: [
      {
        title: "I'm Anchal Singh",
        position: "center-right",
        style: {
          color: "white",
          fontFamily: "Rancho",
          fontSize: "30px",
        },
      },
    ],
    buttons: [
      {
        text: "⦿",
        position: "bottom-right",
        style: {
          backgroundColor: "#313131c1",
          color: "white",
          borderRadius: "50%",
          padding: "3px 10px",
        },
      },
    ],

    texts: [
      {
        text: "Software Engineer",
        position: "top-right",
        style: {
          fontSize: "15px",
          color: "White",
          padding: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          border: "2px solid white",
          width: "50%",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
  {
    templateId: "23",
    templateName: "Modern",
    image: [
      {
        url: "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],

    titles: [
      {
        title: "Tech Insights",
        position: "top-left",
        style: {
          color: "black",
          fontFamily: "Rancho",
          fontSize: "20px",
          fontWeight: "bolder",
          paddingLeft: "10px",
          paddingTop: "10px",
        },
      },
    ],
    buttons: [
      {
        text: "⏷",
        position: "bottom-left",
        style: {
          backgroundColor: "#e6e600",
          color: "black",
          borderRadius: "50%",
          width: "20px",
          height:"20px"
        },
      },
    ],

    texts: [
      {
        text: "Stay informed to lead with knowledge.",
        position: "center-left",
        style: {
          fontSize: "10px",
          color: "black",
          padding: "10px",
          fontFamily: "Playwrite GB S",
        },
      },
    ],
    style: {
      imagePosition: "background",
      textAlignment: "center",
    },
  },
];

// TemplateRenderer Component
const TemplateRenderer: React.FC = () => {
  const getPositionStyle = (position: string): React.CSSProperties => {
    switch (position) {
      case "top-left":
        return { top: "10px", left: "10px", position: "absolute" as const };
      case "top":
        return { top: "10px", position: "absolute" as const };
      case "top-center":
        return {
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute" as const,
        };
      case "top-right":
        return { top: "10px", right: "10px", position: "absolute" as const };
      case "center-left":
        return {
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          position: "absolute" as const,
        };
      case "center":
        return {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute" as const,
        };
      case "center-right":
        return {
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          position: "absolute" as const,
        };
      case "bottom-left":
        return { bottom: "10px", left: "10px", position: "absolute" as const };
      case "bottom-center":
        return {
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute" as const,
        };
      case "bottom-right":
        return { bottom: "10px", right: "10px", position: "absolute" as const };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Two templates per row
        gap: "15px", // Add some space between the templates
        width: "70vw",
      }}
    >
      {templates.map((template) => (
        <div
          key={template.templateId}
          style={{
            position: "relative",
            marginBottom: "50px",
            backgroundImage:
              template.style.imagePosition === "background"
                ? `url(${template.image[0].url})`
                : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)", // Normal box shadow
            height: "150px",
            backgroundColor:
              template.style.imagePosition !== "background"
                ? template.style.backgroundColor // Apply the background color when there's no background image
                : "white", // Otherwise, set it to white or any default color
          }}
        >
          {template.navbar &&
            template.navbar.map((nav, index) => (
              <nav
                key={index}
                style={{
                  top: nav.position === "top" ? 0 : "auto",
                  width: nav.style?.width || "100%",
                  height: nav.style?.height || "20px",
                  backgroundColor: nav.style?.backgroundColor || "#333",
                  color: nav.style?.color || "white",
                  fontFamily: nav.style?.fontFamily || "Leckerli One",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 20px",
                  zIndex: 1000,
                  position: "relative",
                }}
              >
                <div>{nav.logotext}</div>
              </nav>
            ))}

          {/* Conditionally render image if not background */}
          {template.style.imagePosition !== "background" && (
            <div style={{ display: "flex" }}>
              <img
                src={template.image[0].url}
                alt={template.templateName}
                style={{
                  position: "absolute",
                  width: template.image[0].style?.width,
                  height: template.image[0].style?.height,
                  [template.style.imagePosition]: 0,
                  borderRadius: template.image[0].style?.borderRadius,
                  margin: "10px",
                }}
              />
            </div>
          )}

          {template.titles &&
            template.titles.map((title, index) => (
              <div
                key={index}
                style={{
                  ...getPositionStyle(title.position),
                  ...title.style,
                  width: title.style?.width || "50%",
                }}
              >
                <h2>{title.title}</h2>
              </div>
            ))}
          {/* Render Texts */}
          {template.texts.map((text, index) => (
            <div
              key={index}
              style={{
                ...getPositionStyle(text.position),
                ...text.style,
                width: text.style?.width || "50%",
              }}
            >
              {text.text}
            </div>
          ))}

          {/* Render Buttons */}
          {template.buttons.map((button, index) => (
            <button
              key={index}
              style={{
                ...getPositionStyle(button.position),
                ...button.style,
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              {button.text}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div>
      <h1>Template Renderer</h1>
      <TemplateRenderer />
    </div>
  );
};

export default App;
