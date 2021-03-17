import "./Input.css";
export const Input = ({ type, placeholder }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
};
Input.defaultProps = {
  type: "text",
  placeholder: "Enter some text"
};
