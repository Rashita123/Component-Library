import React from "react";
import { Header } from "./Header/Header";
import { Documentation } from "./Documentation/Documentation";
import { SideBar } from "./SideBar/SideBar";
import { useState } from "react";
export default function DocumentationPage({ setHomeOrDocs }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header
        setHomeOrDocs={setHomeOrDocs}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div className="main-area container">
        <Documentation />
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
}
