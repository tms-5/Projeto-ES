import React from "react";
import Propósito from "../../Assets/Sobre/Proposito.js";
import Topbar from "../../Components/Topbar/Topbar.js";
import banner from "../../Assets/Img/doacao-de-sangue-banner.jpg";
import "./Sobre.css";
import Time from "../../Assets/Sobre/Time.js";
import Footer from "../../Components/Footer/Footer.js";

export default function Sobre() {
  return (
    <div className="font-montserrat p-relative" id="Sobre">
      <Topbar />
      <img src={banner} width="100%" alt="paciente doando sangue"/>
      <Propósito />
      <Time />
      <Footer />
    </div>
  );
}
