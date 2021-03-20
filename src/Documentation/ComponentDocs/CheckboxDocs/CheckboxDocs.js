import "./CheckboxDocs.css";
import { Checkbox } from "../../../MainArea/Checkbox/Checkbox";
export const CheckboxDocs = () => {
  return (
    <div>
      <h1>CheckBox</h1>
      <p>
        The Checkbox component is used in forms when a user needs to select
        multiple values from several options.
      </p>
      <div className="usage">
        <Checkbox text="Checkbox" />
      </div>
    </div>
  );
};
