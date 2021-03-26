import { useState } from "react";
import Home from "./Home";
import DocumentationPage from "./DocumentaionPage";
export default function App() {
  const [homeOrDocs, setHomeOrDocs] = useState("Home");
  return (
    <div className="App">
      {homeOrDocs === "Home" && (
        <Home homeOrDocs={homeOrDocs} setHomeOrDocs={setHomeOrDocs} />
      )}
      {homeOrDocs === "Docs" && (
        <DocumentationPage setHomeOrDocs={setHomeOrDocs} />
      )}
    </div>
  );
}
