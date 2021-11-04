import React from "react";
import Historia from "../../Assets/Sobre/Historia.js";
import Propósito from "../../Assets/Sobre/Proposito.js";
import Topbar from "../../Assets/Topbar/Topbar.js";
import banner from '../../Assets/Img/doacao-de-sangue-banner.jpg'
import './Sobre.css'
import Time from "../../Assets/Sobre/Time.js";

export default function Sobre() {
  return (
    <div className="font-montserrat">
      <Topbar />
      <img src={banner} width="100%"/>
      <Propósito/>
      <Historia/>
      <Time/>
    </div>
  );
}
