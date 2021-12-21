import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import CampanhasInicio from "../../Assets/CampanhasInicio/CampanhasInicio";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth.js";
import UserTopbar from "../../Components/Topbar/UserTopbar.js";
import AcessoTopbar from "../../Components/Topbar/AcessoTopbar";
import OneSignal from "react-onesignal";

export default function Index() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    OneSignal.init({appId: 'd73b7b9e-d529-4012-b1b7-e8532b9fc140'})
  }, [])

  
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
