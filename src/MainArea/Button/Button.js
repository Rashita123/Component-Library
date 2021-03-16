import "./Button.css";
export const Button = ({ text, type, size }) => {
  const sizeChart = {
    xs: { fontSize: "0.75rem", padding: "0.25rem 0.5rem" },
    sm: { fontSize: "0.875rem", padding: "0.5rem 0.75rem" },
    md: { fontSize: "1rem", padding: "0.75rem 1rem" },
    lg: { fontSize: "1.125rem", padding: "1rem 1.5rem" }
  };
  return (
    <div>
      <button
        style={{
          fontSize: [sizeChart[size].fontSize],
          padding: [sizeChart[size].padding]
        }}
        className={`button ${type}-button`}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Button",
  type: "primary",
  size: "md"
};
