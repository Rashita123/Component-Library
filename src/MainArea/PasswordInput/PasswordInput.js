import "./PasswordInput";
import { Input } from "forkui-lib";
import { Button } from "forkui-lib";
import { useState } from "react";
export const PasswordInput = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="password-input-div make-flex">
      <Input
        placeholder="Enter your password"
        inputType={passwordShow ? "text" : "password"}
      />
      <Button
        onClickHandler={() => setPasswordShow(!passwordShow)}
        text={passwordShow ? "Hide" : "Show"}
        size="sm"
      />
    </div>
  );
};
