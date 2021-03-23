import "./AlertDocs.css";
import Gist from "react-gist";
import { Alert } from "../../../MainArea/Alert/Alert";
export const AlertDocs = () => {
  return (
    <div>
      <h1>Alert</h1>
      <h3>Usage</h3>
      <div className="usage">
        <Alert title="Success Message" />
      </div>
      <Gist id="bbe7fcf0d04fb947698af8e04cfb6e4c" />

      <h3>Status Prop</h3>
      <p>
        Alert comes with 4 types of <code>status</code> as listed below. Set the
        status value using the <code>status</code> prop. the Default value of
        status is <code>Success</code>.
      </p>
      <ul>
        <li>Error</li>
        <li>Success</li>
        <li>Warning</li>
        <li>Info</li>
      </ul>
      <div className="usage">
        <Alert status="error" title="Error Message" />
        <Alert status="success" title="Success Message" />
        <Alert status="warning" title="Warning Message" />
        <Alert status="info" title="Info Message" />
      </div>
      <Gist id="791872f0f97611e8b1cb2214dec305ba" />
      <h3>Variant Prop</h3>
      <p>
        Four different types of Alert Variants are possible:{" "}
        <code>subtle, solid, left-accent, top-accent</code>. The default value
        is <code>subtle</code>. Use <code>variant</code> prop to change the
        value.
      </p>
      <div className="usage">
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="subtle"
        />
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="solid"
        />
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="left-accent"
        />
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="top-accent"
        />
      </div>
      <Gist id="e9ef374fe3f8c51bcbf4b469e9149abb" />
    </div>
  );
};
