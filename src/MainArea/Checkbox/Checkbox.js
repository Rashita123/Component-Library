import "./Checkbox.css";
export const Checkbox = ({ text }) => {
  return (
    <label className="container-checkbox">
      {text}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

Checkbox.defaultProps = {
  text: "Checkbox"
};
