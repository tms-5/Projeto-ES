import React from "react";
import Topbar from "../../Components/Topbar/Topbar.js";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import CampanhasInicio from "../../Assets/CampanhasInicio/CampanhasInicio";

export default function Index() {
  return (
    <div className="font-montserrat p-relative">
      <Topbar />
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
