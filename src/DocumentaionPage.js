import React from "react";
import { Header } from "./Header/Header";
import { Documentation } from "./Documentation/Documentation";
import { SideBar } from "./SideBar/SideBar";
export default function DocumentationPage({ setHomeOrDocs }) {
  return (
    <div>
      <Header setHomeOrDocs={setHomeOrDocs} />
      <div className="main-area container">
        <Documentation />
        <SideBar />
      </div>
    </div>
  );
}
