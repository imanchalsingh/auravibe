import React from "react";

//Interfaces-------
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
          width: "50%",
          fontWeight: "bold",
        },
      },
      {
        text: "As a dedicated BCA student, I am currently in my second semester, where I am building a solid foundation in computer science and software development. Throughout my coursework, I have gained proficiency in key programming languages such as C++, JavaScript, and TypeScript, while simultaneously honing my web development skills using frameworks like React and Angular.",
        position: "center-left",
        style: {
          color: "black",
          fontSize: "5px",
          paddingBottom: "22px",
        },
      },
      {
        text: "Skill",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "50%",
          fontWeight: "bold",
        },
      },
      {
        text: "Throughout my coursework, I have gained proficiency in key programming languages such as C++, JavaScript, and TypeScript, while simultaneously honing my web development skills using frameworks like React and Angular.",
        position: "center-left",
        style: {
          color: "black",
          paddingTop: "40%",
          fontSize: "5px",
        },
      },
      {
        text: "Contact me",
        position: "before-bottom-left",
        style: {
          color: "black",
          paddingTop: "20%",
          fontSize: "10px",
          width: "50%",
          fontWeight: "bold",
        },
      },
      {
        text: "singhanchal159257@gmail.com",
        position: "before-bottom-left-with-padding",
        style: {
          color: "black",
          fontSize: "6px",
        },
      },
      {
        text: "+91 9628020787",
        position: "bottom-left",
        style: {
          color: "black",
          fontSize: "6px",
        },
      },
      {
        text: "Linkedin",
        position: "before-bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
        },
      },
      {
        text: "GitHub",
        position: "before-bottom-right-with-padding",
        style: {
          color: "black",
          fontSize: "6px",
        },
      },
      {
        text: "Instagram",
        position: "bottom-right",
        style: {
          color: "black",
          fontSize: "6px",
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
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Two templates per row
        gap: "15px", // Add some space between the templates
        width: "60vw",
        height: "40vh",
      }}
    >
      {resumeTemplates.map((resumetemplate) => (
        <div
          key={resumetemplate.id}
          style={{
            height: "90%",
            width: "80%",
            border: "2px solid gray",
            position: "relative",
          }}
        >
          {/* {/Text Rendering} */}
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
            </div>
          ))}
          {/* {/Image Rendering} */}
          {resumetemplate.image?.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt=""
                style={{
                  ...getPositionStyle(image.position),
                  ...image.style,
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
