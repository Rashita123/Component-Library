import "./Button.css";
export const Button = ({ text, type, size }) => {
  return (
    <div>
      <button className={`button ${type}-button ${size}`}>{text}</button>
    </div>
  );
};

Button.defaultProps = {
  text: "Button",
  type: "primary",
  size: "md"
};
