import Router from "./Router";
import "./Assets/Utilitarios/Utilitarios.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/auth.js";

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
