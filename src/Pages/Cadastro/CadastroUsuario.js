import React, { useState } from "react";
import logo from "../../Assets/Img/hemo.loc.png";
import gota from "../../Assets/Img/blood.png";
import "./Cadastro.css";
import FieldUsuario from "./FieldUsuario";

export default function CadastroUsuario() {
  return (
    <div className="font-montserrat row m-0 p-0 h-100v" id="CadastroUsuario">
      <div className="col bg-pink left-cadastro">
        <img src={gota} className="gota-maior" alt="Gota de sangue" />
        <img src={gota} className="gota-1" alt="Gota de sangue" />
        <img src={gota} className="gota-2" alt="Gota de sangue" />
        <img src={gota} className="gota-3" alt="Gota de sangue" />
      </div>
      <div className="col p-0 m-0 d-grid">
        <div
          className="bg-wine w-50 float-right "
          style={{
            height: "50px",
            placeSelf: "self-end",
            alignSelf: "flex-start",
          }}
        ></div>
        <div
          className="row d-grid justify-center cadastro"
          style={{ marginTop: "10vh" }}
        >
          <div className="col fw-bolder f-08 c-red justify-items-center d-contents">
            <a href="/"><img src={logo} width="300px" alt="Logo hemo loc" /></a>
            EM TODOS OS LUGARES, PARA TODO MUNDO
          </div>
          <FieldUsuario />
        </div>
      </div>
    </div>
  );
}
