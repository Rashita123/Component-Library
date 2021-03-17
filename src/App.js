import "./styles.css";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Documentation } from "./Documentation/Documentation";
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-area container">
        <Documentation />
        <SideBar />
      </div>
    </div>
  );
}
