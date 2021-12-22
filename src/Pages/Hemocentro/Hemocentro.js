import Lista from "../../Assets/CampanhasHemocentro/Lista";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";
import { Redirect } from "react-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import HemocentroTopbar from "../../Components/Topbar/HemocentroTopbar";
import db from "../../Axios/Firebase";

export default function Hemocentro() {
  const { currentUser } = useContext(AuthContext);
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");
  const [hemocentro, setHemocentro] = useState({ abreviacao: "" });

  useEffect(() => {
    async function dadoHemocentro() {
      const q = query(
        collection(db, "Hemocentro"),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setHemocentro(doc.data());
      });
    }
    dadoHemocentro();
  }, [email]);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      return <Redirect to="/" />;
    }
  }, [currentUser]);

  return (
    <div className="font-montserrat p-relative">
      <HemocentroTopbar />
      <div className="mt-5">
        <Inicio text={`Olá, ${hemocentro.abreviacao}`} ilustracao={false} />
      </div>
      <Lista id={hemocentro.abreviacao} />
      <Footer />
    </div>
  );
}
