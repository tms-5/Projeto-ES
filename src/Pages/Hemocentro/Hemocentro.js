import Lista from "../../Assets/CampanhasHemocentro/Lista";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import { Redirect } from "react-router";

export default function Hemocentro() {
  let data = require("../../Assets/JSON/Hemocentros.json");
  const { currentUser } = useContext(AuthContext);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      return <Redirect to="/" />;
    }
  }, [logado]);
  
  return (
    <div className="font-montserrat p-relative">
      <Topbar />
      <div className="mt-5">
        <Inicio text={`Olá, ${data.abreviacao}`} ilustracao={false} />
      </div>
      <Lista id={data.abreviacao} />
      <Footer />
    </div>
  );
}
