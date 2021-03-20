import "./Button.css";
export const Button = ({ text, variant, size, colorScheme }) => {
  return (
    <>
      <button
        className={`button ${variant}-button${colorScheme} ${size}-button`}
      >
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "Button",
  variant: "primary",
  size: "md",
  colorScheme: ""
};
