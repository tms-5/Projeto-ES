import Lista from "../../Assets/CampanhasHemocentro/Lista";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import "./Hemocentro.css";
import { useState } from "react";

export default function Hemocentro() {
  let data = require("../../Assets/JSON/Hemocentros.json");  

  return (
    <div className="font-montserrat p-relative">
      <Topbar/>
      <div className="mt-5">
        <Inicio text={`Olá, ${data.abreviacao}`} ilustracao={false} />
      </div>
      <Lista id={data.abreviacao}/>
      <Footer />
    </div>
  );
}
