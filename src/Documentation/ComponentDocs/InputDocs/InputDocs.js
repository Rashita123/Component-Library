import "./InputDocs.css";
import Gist from "react-gist";
import { Input } from "forkui-lib";
import { PasswordInput } from "../../../MainArea/PasswordInput/PasswordInput";
export const InputDocs = () => {
  return (
    <div>
      <h1>Input</h1>
      <h3>Usage</h3>
      <div className="usage">
        <Input placeholder="Basic Input" />
      </div>
      <Gist id="87473f04c5a3cbfeccdfdb41881b5414" />

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
      <Gist id="b8fdfd84be59c77d60efb60deca80f7c" />

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
      <Gist id="c424b16c09fdf51fcddaeda7f3515a03" />
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
      <Gist id="5fc6a007fae956e98e6253c2dcb82bab" />

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
      <Gist id="c0a1db6af502fb5a9aff28d65b1a62c0" />
      <h3>Password Show Input</h3>
      <div className="usage">
        <PasswordInput />
      </div>
      <Gist id="22ae05c5028986a418d06764aca5b7e3" />
    </div>
  );
};
