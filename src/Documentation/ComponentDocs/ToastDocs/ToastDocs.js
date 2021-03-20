import "./ToastDocs.css";
import { Button } from "../../../MainArea/Button/Button";
import { Toast } from "../../../MainArea/Toast/Toast";
export const ToastDocs = () => {
  return (
    <div>
      <h1>Toast</h1>
      <p>
        The toast is used to show alerts on top of an overlay. The toast will
        close itself when the close button is clicked, or after a timeout — the
        default is 5 seconds. The toast component is used to give feedback to
        users after an action has taken place.
      </p>
      <div classname="usage">
        <Button text="Show Toast" />
      </div>
      <Toast />
    </div>
  );
};
