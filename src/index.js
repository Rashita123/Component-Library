import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { DocsContextProvider } from "./ViewContext";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DocsContextProvider>
      <App />
    </DocsContextProvider>
  </StrictMode>,
  rootElement
);
