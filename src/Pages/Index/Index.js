import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import CampanhasInicio from "../../Assets/CampanhasInicio/CampanhasInicio";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth.js";
import UserTopbar from "../../Components/Topbar/UserTopbar.js";
import AcessoTopbar from "../../Components/Topbar/AcessoTopbar";
import {app} from "../../Axios/Firebase"
import {getMessaging,getToken} from "firebase/messaging"

export default function Index() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const messaging = getMessaging(app);
    getToken(messaging, {vapidKey:"BF-_98NLXUdxtuAvkTM_IFqEsHUIb1ibQi5y4RN0bIzErdc_-hjLMOmIElRxd_n5D7tVET-FUn7X0DGELL1gXeE"}).then(
      (currentToken) => {
        if(currentToken) {
          console.log(currentToken);
        }
      }
    )
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
