import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar.js";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import CampanhasInicio from "../../Assets/CampanhasInicio/CampanhasInicio";
import {app} from "../../Axios/Firebase";
import {getMessaging, getToken} from "firebase/messaging"


export default function Index() {
  const [topics] = useState([
    { name: "Início", index: "0", href: "/" },
    { name: "O que é o hemo.loc?", index: "1", href: "/sobre" },
    { name: "Posso doar sangue?", index: "2", href: "/doar-sangue" },
    { name: "Cadastre-se", index: "3", href: "/cadastro" },
  ]);

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
    <div className="font-montserrat p-relative">
      <Topbar links={topics}/>
      <Inicio
        text={"EM TODOS OS LUGARES, PARA TODO MUNDO."}
        ilustracao={true}
      />
      <div className="container">
        <CampanhasInicio />
      </div>
      <Footer />
    </div>
  );
}
