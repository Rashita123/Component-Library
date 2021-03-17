import "./Input.css";
export const Input = ({
  inputType,
  placeholder,
  variant,
  size,
  isDisabled,
  isRequired
}) => {
  return (
    <div>
      <input
        required={isRequired}
        disabled={isDisabled}
        className={`input ${variant}-input ${size}`}
        type={inputType}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
Input.defaultProps = {
  inputType: "text",
  placeholder: "Enter some text",
  variant: "basic",
  size: "sm",
  isDisabled: false,
  isRequired: false
};
