import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import CampanhasInicio from "../../Assets/CampanhasInicio/CampanhasInicio";
import { useContext } from "react";
import AuthContext from "../../contexts/auth.js";
import UserTopbar from "../../Components/Topbar/UserTopbar.js";
import AcessoTopbar from "../../Components/Topbar/AcessoTopbar";

export default function Index() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? <UserTopbar /> : <AcessoTopbar />}
      <Inicio
        text={"EM TODOS OS LUGARES, PARA TODO MUNDO."}
        ilustracao={true}
      />
      <div className="container">
        <CampanhasInicio />
      </div>
      <Footer />
    </>
  );
}
