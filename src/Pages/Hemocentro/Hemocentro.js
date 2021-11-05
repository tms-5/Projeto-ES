import Lista from "../../Assets/CampanhasHemocentro/Lista";
import Footer from "../../Assets/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Assets/Topbar/Topbar";
import "./Hemocentro.css";

export default function Hemocentro() {
  let data = require("../../Assets/JSON/Hemocentros.json");

  return (
    <div className="font-montserrat p-relative">
      <Topbar />
      <div className="mt-5">
        <Inicio text={`Olá, ${data.abreviacao}`} ilustracao={false} />
      </div>
      <Lista />
      <Footer />
    </div>
  );
}
