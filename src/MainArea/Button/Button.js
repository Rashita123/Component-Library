import "./Button.css";
export const Button = ({ text, variant, size, colorScheme, isDisabled }) => {
  return (
    <>
      <button
        disabled={isDisabled}
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
  colorScheme: "",
  isDisabled: false
};
