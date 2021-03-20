import "./Toast.css";
import { FcInfo } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdWarning } from "react-icons/md";
import { useEffect, useState } from "react";
export const Toast = ({ text, type, position, duration }) => {
  const [displayToast, setDisplayToast] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setDisplayToast("none");
    }, [duration]);
  });
  const toastTypeDatabase = {
    success: {
      bgColor: "#bdfcc9",
      borderColor: "green",
      icon: <TiTick size={50} color="green" />
    },
    info: {
      bgColor: "#ade2e6",
      borderColor: "blue",
      icon: <FcInfo size={50} />
    },
    warning: {
      bgColor: "#ffdb99",
      borderColor: "orange",
      icon: <MdWarning size={50} color="orange" />
    },
    error: {
      bgColor: "#FFCCCC",
      borderColor: "red",
      icon: <MdError size={50} color="red" />
    }
  };
  return (
    <div
      style={{
        display: [displayToast],
        borderTop: "2px solid",
        borderColor: [toastTypeDatabase[type].borderColor],
        background: [toastTypeDatabase[type].bgColor]
      }}
      className={`toast ${position}`}
    >
      {toastTypeDatabase[type].icon}
      <p>{text}</p>
      <svg
        onClick={() => setDisplayToast("none")}
        className="svg-icon"
        style={{
          stroke: toastTypeDatabase[type].borderColor,
          cursor: "pointer"
        }}
        viewBox="0 0 20 20"
      >
        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
      </svg>
    </div>
  );
};

Toast.defaultProps = {
  text: "Success",
  type: "success",
  position: "bottom-left",
  duration: 5000
};
