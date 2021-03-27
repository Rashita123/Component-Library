import { createContext } from "react";
import { useContext, useState } from "react";
export const DocsContext = createContext();

export const DocsContextProvider = ({ children }) => {
  const [docsComponentToDisplay, setDocsComponentToDisplay] = useState(
    "GettingStarted"
  );
  return (
    <DocsContext.Provider
      value={{ docsComponentToDisplay, setDocsComponentToDisplay }}
    >
      {children}
    </DocsContext.Provider>
  );
};
export const useDocsContext = () => {
  return useContext(DocsContext);
};
