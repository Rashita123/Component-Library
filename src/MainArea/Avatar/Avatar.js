import "./Avatar.css";
import { useState } from "react";
export const Avatar = ({ src, name, size, bgColor, borderColor }) => {
  if (size === "") size = "md";
  if (bgColor === "") bgColor = "lightgreen";
  if (borderColor === "") borderColor = "black";
  const [imageOrName, setImageOrName] = useState("image");
  const handleBrokenImages = () => {
    if (name === "") setImageOrName("Avatar");
    else setImageOrName("Alphabet");
  };
  return (
    <>
      {imageOrName === "image" && (
        <img
          className={`image-avatar ${size}-avatar`}
          onError={handleBrokenImages}
          style={{
            border: "3px solid",
            borderColor: [borderColor],
            padding: "0.15rem"
          }}
          src={src}
          alt="avatar"
        />
      )}
      {imageOrName === "Alphabet" && (
        <span
          className={`alphabet-avatar ${size}-alpha-avatar`}
          style={{
            backgroundColor: [bgColor],
            border: "3px solid",
            borderColor: [borderColor]
          }}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      )}
      {imageOrName === "Avatar" && (
        <img
          className={`default-avatar ${size}-avatar`}
          alt="avatar"
          src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"
        />
      )}
    </>
  );
};

Avatar.defaultProps = {
  src: "",
  name: "",
  size: "md",
  bgColor: "lightgreen",
  borderColor: "black"
};
