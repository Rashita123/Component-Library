import "./styles.css";
import { Button } from "./MainArea/Button/Button";
import { Toast } from "./MainArea/Toast/Toast";
export default function App() {
  return (
    <div className="App">
      <Button text="Button" type="secondary" size="md" />
      <Toast text="Success" type="success" />
    </div>
  );
}
