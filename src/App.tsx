import Router from "./router";
import { useSelector } from "react-redux";
import "./index.css";

function App(): JSX.Element {
  const state = useSelector((state: IApp) => state.app);
  const mainClass = state.darkMode ? "is-dark-mode" : "is-light-mode";
  return (
    <div className={mainClass}>
      <Router />
    </div>
  );
}

export default App;
