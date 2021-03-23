import "./Documentation.css";
import { useDocsContext } from "../ViewContext";
import {
  ButtonDocs,
  InputDocs,
  AvatarDocs,
  ToastDocs,
  CheckboxDocs,
  ImageDocs,
  BadgeDocs,
  CardDocs,
  AlertDocs
} from "./ComponentDocs";
export const Documentation = () => {
  const { docsComponentToDisplay } = useDocsContext();
  return (
    <div className="documentation">
      {docsComponentToDisplay === "" && <AvatarDocs />}
      {docsComponentToDisplay === "Button" && <ButtonDocs />}
      {docsComponentToDisplay === "Input" && <InputDocs />}
      {docsComponentToDisplay === "Avatar" && <AvatarDocs />}
      {docsComponentToDisplay === "Toast" && <ToastDocs />}
      {docsComponentToDisplay === "Checkbox" && <CheckboxDocs />}
      {docsComponentToDisplay === "Image" && <ImageDocs />}
      {docsComponentToDisplay === "Badge" && <BadgeDocs />}
      {docsComponentToDisplay === "Card" && <CardDocs />}
      {docsComponentToDisplay === "Alert" && <AlertDocs />}
    </div>
  );
};
