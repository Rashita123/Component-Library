import "./ButtonDocs.css";
import { Button } from "../../../MainArea/Button/Button";
export const ButtonDocs = () => {
  return (
    <div>
      <h1>Button</h1>
      <p>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <Button text="Button" />
      </div>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CButton%2520text%253D%2522Button%2522%252F%253E"
        style={{
          width: "800px",
          height: "205px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3>Button Sizes</h3>
      <p>
        Use the <code>size</code> prop to change the size of the button. You can
        set the value to <code>xs</code>, <code>sm</code>, <code>md</code>, or{" "}
        <code>lg</code>.
      </p>
      <div className="usage">
        <Button text="Button" size="xs" />
        <Button text="Button" size="sm" />
        <Button text="Button" size="md" />
        <Button text="Button" size="lg" />
      </div>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522xs%2522%252F%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522sm%2522%252F%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522md%2522%252F%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522lg%2522%252F%253E%250A%253C%252Fdiv%253E"
        style={{
          width: "800px",
          height: "297px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3>Button Variants</h3>
      <p>
        Use the <code>variant</code> prop to change the visual style of the
        Button. You can set the value to <code>primary</code>,{" "}
        <code>secondary</code>, <code>ghost</code>, <code>underline</code>,{" "}
        <code>primaryToSecondary</code>, <code>secondaryToPrimary</code>.
      </p>

      <div className="usage">
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="ghost" />
        <Button variant="underline" />
        <Button variant="primaryToSecondary" />
        <Button variant="secondaryToPrimary" />
      </div>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522primary%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522secondary%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522ghost%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522underline%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522primaryToSecondary%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522secondaryToPrimary%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
        style={{
          width: "800px",
          height: "334px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
