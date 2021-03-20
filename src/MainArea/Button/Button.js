import "./Button.css";
export const Button = ({ text, variant, size }) => {
  return (
    <>
      <button className={`button ${variant}-button ${size}-button`}>
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "Button",
  variant: "primary",
  size: "md"
};
