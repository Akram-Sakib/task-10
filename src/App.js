import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./Routes";
import useAuthCheck from "./hooks/useAuthCheck";
import useAuth from "./hooks/useAuth";

function App() {
  const authChecked = useAuthCheck();
  const isLoggedIn = useAuth();
  const elements = useRoutes(routes(isLoggedIn));

  if (!authChecked) {
    return <div>Checking Auth...</div>;
  }
  return elements;
}

export default App;
