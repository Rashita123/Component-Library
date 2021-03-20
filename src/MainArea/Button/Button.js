import "./Button.css";
export const Button = ({
  text,
  variant,
  size,
  colorScheme,
  isDisabled,
  leftIcon,
  rightIcon
}) => {
  return (
    <>
      <button
        disabled={isDisabled}
        className={`button ${variant}-button${colorScheme} ${size}-button`}
      >
        <span class="icon-button">
          {leftIcon} {text} {rightIcon}
        </span>
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
