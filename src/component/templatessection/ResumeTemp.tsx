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
    borderRadius?: string;
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
    backgroundColor?: string;
    border?: string;
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
          paddingLeft: "10px",
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
          paddingLeft: "8px",
        },
      },
      {
        text: "Experience",
        position: "before-center-left",
        style: {
          color: "black",
          paddingTop: "30%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "50%",
          fontSize: "10px",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "bottom-left",
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
        position: "bottom-right",
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
    id: "2",
    texts: [
      {
        text: "Anchal Singh",
        position: "top-left",
        style: {
          color: "black",
          fontSize: "15px",
          fontWeight: "bold",
          fontFamily: "Playwrite AT",
          backgroundColor: "#ffff80",
          width: "100%",
          paddingBottom: "15px",
        },
      },
      {
        text: "Frontend Developer",
        position: "top-left",
        style: {
          color: "black",
          paddingTop: "22px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        },
      },
      {
        text: "Education",
        position: "top-right",
        style: {
          color: "black",
          paddingTop: "25%",
          fontSize: "10px",
          fontWeight: "bold",
          width: "50%",
        },
      },
      {
        text: "Skill",
        position: "before-center-right",
        style: {
          color: "black",
          paddingTop: "65%",
          fontSize: "10px",
          fontWeight: "bold",
          width: "50%",
        },
      },
      {
        text: "About me",
        position: "top-left",
        style: {
          color: "black",
          paddingTop: "25%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
          paddingLeft: "10px",
        },
      },
      {
        text: "Contact me",
        position: "after-center-left",
        style: {
          color: "black",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: " ",
        position: "after-center-left",
        style: {
          color: "black",
          fontSize: "10px",
          width: "10%",
          fontWeight: "bold",
          paddingTop: "27%",
        },
      },
      {
        text: "Experience",
        position: "bottom-right",
        style: {
          color: "black",
          fontSize: "10px",
          paddingBottom: "5%",
          fontWeight: "bold",
          width: "50%",
        },
      },
    ],
    style: {
      backgroundColor: "#e6ffff",
    },
  },
  {
    id: "3",
    texts: [
      {
        text: "Christina Morillo",
        position: "top-center",
        style: {
          color: "white",
          fontSize: "15px",
          fontWeight: "bold",
          backgroundColor: "#001a33",
          width: "100%",
          paddingBottom: "20px",
          paddingLeft:"30%",
          
  
        },
      },
      {
        text: "Frontend Developer",
        position: "top-center",
        style: {
          color: "white",
          paddingTop: "25px",
          fontSize: "8px",
          width: "50%",
          paddingLeft: "20px",
        
        },
      },
      {
        text: "Education",
        position: "top-right",
        style: {
          color: "black",
          paddingTop: "25%",
          fontSize: "10px",
          fontWeight: "bold",
          width: "50%",
        },
      },
      {
        text: "Skill",
        position: "before-center-right",
        style: {
          color: "black",
          paddingTop: "65%",
          fontSize: "10px",
          fontWeight: "bold",
          width: "50%",
        },
      },
      {
        text: "About me",
        position: "top-left",
        style: {
          color: "black",
          paddingTop: "25%",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
          paddingLeft: "10px",
        },
      },
      {
        text: "Experience",
        position: "after-center-left",
        style: {
          color: "black",
          fontSize: "10px",
          width: "30%",
          fontWeight: "bold",
        },
      },
      {
        text: "Contact me",
        position: "bottom-left",
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
        position: "bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
          width: "10%",
        },
      },
    ],
    image: [
      {
        url: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        position: "left-center",
        style: {
          width: "40px",
          margin: "10px",
          height: "40px",
          borderRadius: "50%",
        },
      },
    ],
  },
  {
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
      return "I am proficient in web development technologies, including HTML, CSS, JavaScript, and TypeScript, with experience using frameworks and libraries such as React, Redux, Bootstrap, and Tailwind CSS. I have a solid understanding of responsive design and RESTful APIs, ensuring user-friendly and accessible applications.";
    case "Contact me":
      return "singhanchal159357@gmail.com +91 999 0000 999";
    case " ":
      return "LinkedIn GitHub Instagram";
    case "Experience":
      return "Frontend Developer (Intern/Personal Projects)Job Search Application: Developed a web application for job seekers, incorporating user authentication and job listing features.";
    case "About me":
      return "I am eager to expand my skills in frontend development and Looking for opportunities to contribute to a dynamic team and further develop my expertise in software engineering.";
    default:
      return null;
  }
};

function ResumeTemp() {
  const getPositionStyle = (position: string): React.CSSProperties => {
    switch (position) {
      case "top-left":
        return { top: "10px", position: "absolute" as const };
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
      case "before-center-left":
        return {
          top: "40%",
          left: "10px",
          transform: "translateY(-50%)",
          position: "absolute" as const,
        };
      case "center-left":
        return {
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          position: "absolute" as const,
        };
      case "after-center-left":
        return {
          top: "60%",
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
      case "before-center-right":
        return {
          top: "35%",
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
            flex: "0 0 auto",
            width: "200px",
            height: "280px",
            position: "relative",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            marginRight: "15px",
            ...resumetemplate.style,
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
                <p style={{ fontSize: "4px", marginTop: "5px" }}>
                  {getAutomaticText(text.text)}
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
                  // Auto height to maintain aspect ratio
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
