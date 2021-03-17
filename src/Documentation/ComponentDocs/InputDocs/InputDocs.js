import "./InputDocs.css";
import { Input } from "../../../MainArea/Input/Input";
export const InputDocs = () => {
  return (
    <div>
      <h1>Input</h1>
      <h3>Usage</h3>
      <div class="usage">
        <Input placeholder="Basic Input" />
      </div>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CInput%2520placeholder%253D%2522Basic%2520Input%2522%252F%253E%250A"
        style={{
          width: "800px",
          height: "223px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

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
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CInput%2520placeholder%253D%2522extra%2520small%2520input%2522%2520size%253D%2522xs%2522%2520%252F%253E%250A%2520%2520%2520%253CInput%2520placeholder%253D%2522small%2520input%2522%2520size%253D%2522sm%2522%2520%252F%253E%250A%2520%2520%2520%253CInput%2520size%253D%2522md%2522%2520%252F%253E%250A%2520%2520%2520%253CInput%2520size%253D%2522lg%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
        style={{
          width: "800px",
          height: "297px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h3>Input Box Variants</h3>
      <p>
        Use <code>Variants</code> prop to have 4 different appearances of input
        - <code>basic</code>, <code>filled</code>, <code>flushed</code>,{" "}
        <code>unstyled</code>. The default variant of Input is{" "}
        <code>basic</code>
      </p>
      <div class="usage">
        <Input variant="basic" />
        <Input variant="filled" />
        <Input variant="flushed" />
        <Input variant="unstyled" />
      </div>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522basic%2522%252F%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522filled%2522%252F%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522flushed%2522%252F%253E%250A%2520%2520%2520%2520%253CInput%2520variant%253D%2522unstyled%2522%252F%253E%250A%253C%252Fdiv%253E"
        style={{
          width: "800px",
          height: "297px",
          border: 0,
          transform: "scale(1)",
          overflow: "hidden"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
