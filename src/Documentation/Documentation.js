import "./Documentation.css";
import { useDocsContext } from "../ViewContext";
import { ButtonDocs, InputDocs, AvatarDocs } from "./ComponentDocs";
export const Documentation = () => {
  const { docsComponentToDisplay } = useDocsContext();
  console.log(docsComponentToDisplay);
  return (
    <div className="documentation">
      {docsComponentToDisplay === "Button" && <ButtonDocs />}
      {docsComponentToDisplay === "Input" && <InputDocs />}
      {docsComponentToDisplay === "Avatar" && <AvatarDocs />}
      {/* <InputDocs /> */}
      {/* <ButtonDocs /> */}
      {/* <AvatarDocs /> */}
    </div>
  );
};
