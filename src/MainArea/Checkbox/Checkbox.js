import "./Checkbox.css";
export const Checkbox = ({ text }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <span class="checkmark"></span>
      <span>{text}</span>
    </div>
  );
};
