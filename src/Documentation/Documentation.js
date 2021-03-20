import "./Documentation.css";
import { useDocsContext } from "../ViewContext";
import { ButtonDocs, InputDocs, AvatarDocs, ToastDocs } from "./ComponentDocs";
export const Documentation = () => {
  const { docsComponentToDisplay } = useDocsContext();
  return (
    <div className="documentation">
      {docsComponentToDisplay === "" && <AvatarDocs />}
      {docsComponentToDisplay === "Button" && <ButtonDocs />}
      {docsComponentToDisplay === "Input" && <InputDocs />}
      {docsComponentToDisplay === "Avatar" && <AvatarDocs />}
      {docsComponentToDisplay === "Toast" && <ToastDocs />}
    </div>
  );
};
