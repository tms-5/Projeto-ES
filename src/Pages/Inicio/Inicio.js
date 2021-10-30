import React from "react";
import "./Inicio.css";
import ilustracao from "../../Assets/Img/illustration.png";
import blood from "../../Assets/Img/blood.png";
import CampanhasInicio from "../../Assets/CampanhasInicio/CampanhasInicio";

export default function Inicio() {
  return (
    <div className="mt-5 mb-3">
      <div className="container">
        <img src={blood} className="gota-superior"alt="Desenho de uma gota de sangue" />
        <div className="d-flex justify-s-b pb-5">
          <div className="align-self-center fs-2 c-red fw-bolder white-space">
            EM TODOS OS LUGARES,
            <br /> PARA TODO MUNDO.
          </div>
          <div className="text-end">
            <img src={ilustracao} className="img-ilustracao" alt="Ilustração de uma enfermeira trocando a bolsa de sangue dos pacientes" />
          </div>
        </div>
        <CampanhasInicio />
      </div>
      <img src={blood} className="gota-inferior" alt="Desenho de uma gota de sangue" />
    </div>
  );
}
