import "./CheckboxDocs.css";
import Gist from "react-gist";
import { Checkbox } from "forkui-lib";
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
      <Gist id="3587cb555102eef2a29f2bd6b9aae137" />
    </div>
  );
};
