import "./InputDocs.css";
import { Input } from "../../../MainArea/Input/Input";
export const InputDocs = () => {
  return (
    <div>
      <h1>Input</h1>
      <h3>Usage</h3>
      <div className="usage">
        <Input placeholder="Basic Input" />
      </div>
      <div className="wrapper">
        <iframe
          title="Inout-code-usage"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CInput%2520placeholder%253D%2522Basic%2520Input%2522%252F%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <h3>Changing the size of the Input</h3>
      <p>
        The Input component comes in four sizes. The default is <code>sm</code>.
        Others can be <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
        <code>lg</code>.
      </p>
      <div className="usage">
        <Input placeholder="extra small input" size="xs" />
        <Input placeholder="small input" size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </div>
      <div className="wrapper">
        <iframe
          title="input-code-size"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CInput%2520placeholder%253D%2522extra%2520small%2520input%2522%2520size%253D%2522xs%2522%2520%252F%253E%250A%2520%2520%2520%253CInput%2520placeholder%253D%2522small%2520input%2522%2520size%253D%2522sm%2522%2520%252F%253E%250A%2520%2520%2520%253CInput%2520size%253D%2522md%2522%2520%252F%253E%250A%2520%2520%2520%253CInput%2520size%253D%2522lg%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <h3>Input Box Variants</h3>
      <p>
        Use <code>Variants</code> prop to have 4 different appearances of input
        - <code>basic</code>, <code>filled</code>, <code>flushed</code>,{" "}
        <code>unstyled</code>. The default variant of Input is{" "}
        <code>basic</code>
      </p>
      <div className="usage">
        <Input variant="basic" />
        <Input variant="filled" />
        <Input variant="flushed" />
        <Input variant="unstyled" />
      </div>
      <div className="wrapper">
        <iframe
          title="inout-code-variants"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522basic%2522%252F%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522filled%2522%252F%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522flushed%2522%252F%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522unstyled%2522%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <h3>Different Input Type Buttons</h3>
      <p>
        Buttons can be set to store different type of values, like{" "}
        <code>text</code>, <code>password</code> using the{" "}
        <code>inputType</code> prop. The default value is set to{" "}
        <code>text</code>
      </p>
      <div className="usage">
        <Input inputType="text" />
        <Input inputType="password" placeholder="Enter password" />
      </div>
      <div className="wrapper">
        <iframe
          title="input-type"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CInput%2520inputType%253D%2522text%2522%252F%253E%250A%2520%2520%2520%253CInput%2520inputType%253D%2522password%2522%2520placeholder%253D%2522Enter%2520password%2522%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <h3>Disabled Input</h3>
      <p>
        Use <code>isDisabled</code> prop to set the disabled value of the input
        to <code>true</code> or <code>false</code>. By default value is{" "}
        <code>false</code>.
      </p>
      <div className="usage">
        <Input isDisabled={true} />
        <Input isDisabled={false} />
      </div>
      <div className="wrapper">
        <iframe
          title="disabled input"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CInput%2520isDisabled%253D%257Btrue%257D%2520%252F%253E%250A%2520%2520%2520%253CInput%2520isDisabled%253D%257Bfalse%257D%2520%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
