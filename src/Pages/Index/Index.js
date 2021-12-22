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
    if (currentUser) {
      OneSignal.init({ appId: "fabd29de-c34b-4d54-b7a4-64d56d43c1f8" });
    }
  }, [currentUser]);

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
