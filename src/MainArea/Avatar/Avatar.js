import "./Avatar.css";
import { useState } from "react";
export const Avatar = ({ src, name, size, bgColor }) => {
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
          src={src}
          alt="avatar"
        />
      )}
      {imageOrName === "Alphabet" && (
        <span
          className={`alphabet-avatar ${size}-avatar`}
          style={{ backgroundColor: [bgColor] }}
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
  name: "Rashita Mehta",
  size: "md",
  bgColor: "yellow"
};
