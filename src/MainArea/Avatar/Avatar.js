import "./Avatar.css";
import { useState } from "react";
export const Avatar = ({ src, alt, name }) => {
  const [imageOrName, setImageOrName] = useState(true);
  const handleBrokenImages = () => {
    console.log("Broken");
  };
  return (
    <>
      <img onError={handleBrokenImages} src={src} alt={alt} />
      {/* {imageOrName ? (
        <img onError={handleBrokenImages} src={src} alt={alt} />
      ) : (
        <div className="name-avatar">
          {[name]
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      )} */}
    </>
  );
};
