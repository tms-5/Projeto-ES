import React from "react";
import "./Footer.css";
import logo from "../../Assets/Img/hemo.loc-branco.png";

export default function Footer() {
  return (
    <div id="Footer" className="bg-wine p-3">
      <div className="d-grid c-white text-center justify-center">
        <img
          src={logo}
          width="130vw"
          className="justify-self-center mb-2"
          alt="Logo hemo loc"
        />
        <div className="linha-footer container p-2"></div>
        <div className="f-05">
          © CopyRight - 2021 Todos os direitos reservados
        </div>
      </div>
    </div>
  );
}
