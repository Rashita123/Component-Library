import "./ToastDocs.css";
import { useState } from "react";
import { Button, Toast } from "forkui-lib";
export const ToastDocs = () => {
  const [toastStack, setToastStack] = useState([]);
  return (
    <div>
      <h1>Toast</h1>
      <p>
        The toast is used to show alerts on top of an overlay. The toast will
        close itself when the close button is clicked, or after a timeout — the
        default is 5 seconds. The toast component is used to give feedback to
        users after an action has taken place.
      </p>
      <div className="usage">
        <Button
          onClickHandler={() =>
            setToastStack((taostStack) => [...toastStack, 1])
          }
          text="Show Toast"
        />
        <Button
          text="Show top toast"
          onClickHandler={() =>
            setToastStack((taostStack) => [...toastStack, 1])
          }
        />
      </div>
    </div>
  );
};
