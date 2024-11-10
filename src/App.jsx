import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import WelcomePage from "./pages/welcomePage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <>
      <Route path="/" exact>
        <WelcomePage />
      </Route>

      <Route path="/login" exact>
        <LoginPage />
      </Route>
    </>
  );
}

export default App;
