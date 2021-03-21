import "./ShowCode.css";
import { BsCode } from "react-icons/bs";
import { Button } from "../Button/Button";
export const ShowCode = () => {
  return (
    <span className="showcode">
      <Button leftIcon={<BsCode />} borderRadius="full" variant="secondary" />
    </span>
  );
};
