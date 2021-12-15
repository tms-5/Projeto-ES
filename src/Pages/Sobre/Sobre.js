import React, { useContext } from "react";
import Propósito from "../../Assets/Sobre/Proposito.js";
import Topbar from "../../Components/Topbar/Topbar.js";
import banner from "../../Assets/Img/doacao-de-sangue-banner.jpg";
import "./Sobre.css";
import Time from "../../Assets/Sobre/Time.js";
import Footer from "../../Components/Footer/Footer.js";
import UserTopbar from "../../Components/Topbar/UserTopbar.js";
import AcessoTopbar from "../../Components/Topbar/AcessoTopbar.js";
import AuthContext from "../../contexts/auth.js";

export default function Sobre() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="p-relative" id="Sobre">
      {currentUser ? <UserTopbar /> : <AcessoTopbar />}
      <img src={banner} width="100%" alt="paciente doando sangue" />
      <Propósito />
      <Time />
      <Footer />
    </div>
  );
}
