import Lista from "../../Assets/CampanhasHemocentro/Lista";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import "./Hemocentro.css";
import { useState } from "react";

export default function Hemocentro() {
  let data = require("../../Assets/JSON/Hemocentros.json");
  const [topics] = useState([
    { name: "Início", index: "0", href: "/" },
    { name: "O que é o hemo.loc?", index: "1", href: "/sobre" },
    { name: "Cadastre uma campanha externa", index: "2", href: "/cadastro-campanha" },
  ]);

  return (
    <div className="font-montserrat p-relative">
      <Topbar links={topics}/>
      <div className="mt-5">
        <Inicio text={`Olá, ${data.abreviacao}`} ilustracao={false} />
      </div>
      <Lista />
      <Footer />
    </div>
  );
}
