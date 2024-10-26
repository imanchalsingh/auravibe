import React from "react";

// Interfaces-------
interface Text {
  text: string;
  position: string;
  style?: {
    color?: string;
    backgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
    fontSize?: string;
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
    fontFamily?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
    width?: string;
    height?: string;
  };
}

interface Image {
  url: string;
  position: string;
  style?: {
    backgroundColor?: string;
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
    fontFamily?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
    width?: string;
    height?: string;
  };
}

interface Link {
  text: string;
  link: string;
  position: string;
  style?: {
    color?: string;
    backgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
    fontSize?: string;
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
    fontFamily?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
    width?: string;
    height?: string;
  };
}

interface Resumetemp {
  id?: string;
  texts?: Text[];
  image?: Image[];
  links?: Link[];
  style?: {
    backgroundColor: string;
    border: string;
  };
}

const resumeTemplates: Resumetemp[] = [
  {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  },
  {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  }, {
    id: "1",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-center",
        style: {
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Rancho",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "after-top-left",
        style: {
          color: "black",
          paddingTop: "25px",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "50px",
          margin: "10px",
        },
      },
    ],
  },
];

// Helper function to get predefined text based on keywords
const getAutomaticText = (keyword: string): string | null => {
  switch (keyword) {
    case "Education":
      return "As a dedicated BCA student, I am currently in my second semester, where I am building a solid foundation in computer science and software development. Throughout my coursework, I have gained proficiency in key programming languages such as C++, JavaScript, and TypeScript, while simultaneously honing my web development skills using frameworks like React and Angular.";
    case "Skill":
      return "Throughout my coursework, I have gained proficiency in key programming languages such as C++, JavaScript, and TypeScript, while simultaneously honing my web development skills using frameworks like React and Angular.";
    case "Contact me":
      return "singhanchal159357@gmail.com +91 999 0000 999";
    case " ":
      return "LinkedIn GitHub Instagram";
    default:
      return null;
  }
};

function ResumeTemp() {
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
          top: "45%",
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
        return { bottom: "20px", left: "10px", position: "absolute" as const };
      case "bottom-center":
        return {
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute" as const,
        };
      case "bottom-right":
        return { bottom: "20px", right: "10px", position: "absolute" as const };
      case "after-top-left":
        return { top: "40px", left: "5px", position: "absolute" as const };
      case "before-bottom-left":
        return { bottom: "40px", left: "10px", position: "absolute" as const };
      case "before-bottom-left-with-padding":
        return { bottom: "30px", left: "10px", position: "absolute" as const };
      case "before-bottom-right":
        return { bottom: "40px", right: "10px", position: "absolute" as const };
      case "before-bottom-right-with-padding":
        return { bottom: "30px", right: "10px", position: "absolute" as const };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%", // Full width to showcase the scrolling
        overflowX: "auto", // Enables horizontal scroll
        padding: "10px", // Adds padding around scroll area
      }}
    >
      {resumeTemplates.map((resumetemplate) => (
        <div
          key={resumetemplate.id}
          style={{
            flex: "0 0 auto", // Keeps each item from shrinking and maintains scroll
            width: "200px", // Fixed width for a consistent preview size
            height: "280px", // Fixed height to maintain a uniform aspect ratio
            position: "relative",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for visual depth
            borderRadius: "8px", // Rounded corners for a polished look
            overflow: "hidden", // Keeps contents within bounds
            marginRight: "15px", // Space between each template
            backgroundColor: "#fff", // Background color for template
          }}
        >
          {/* Text Rendering */}
          {resumetemplate.texts?.map((text, index) => (
            <div
              key={index}
              style={{
                ...getPositionStyle(text.position),
                ...text.style,
                position: "absolute",
              }}
            >
              {text.text}
              {getAutomaticText(text.text) && (
                <p style={{ fontSize: "5px", marginTop: "5px" }}>
                  {getAutomaticText(text.text)}
                  <hr />
                </p>
              )}
            </div>
          ))}
          {/* Image Rendering */}
          {resumetemplate.image?.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt=""
                style={{
                  ...getPositionStyle(image.position),
                  ...image.style,
                  height: "auto", // Auto height to maintain aspect ratio
                  position: "absolute",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  
  
}

export default ResumeTemp;
