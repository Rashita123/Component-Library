import "./styles.css";
import { Button } from "./MainArea/Button/Button";
import { Toast } from "./MainArea/Toast/Toast";
import { Input } from "./MainArea/Input/Input";
export default function App() {
  return (
    <div className="App">
      <Button text="Button" type="primary" size="lg" />
      <Toast text="Success" type="success" />
      <Input />
    </div>
  );
}
