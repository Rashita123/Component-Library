import "./List.css";
export const ListItem = ({ children }) => {
  return (
    <div>
      <li>{children}</li>
    </div>
  );
};
export const List = ({ children, type }) => {
  return (
    <div>
      {type === "ordered" && <ol>{children}</ol>}
      {type === "unordered" && <ul>{children}</ul>}
      {type === "no-bullet" && (
        <div style={{ listStyleType: "none" }}>{children}</div>
      )}
    </div>
  );
};

List.defaultProps = {
  type: "unordered"
};
