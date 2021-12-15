import React from "react";
import "./Inicio.css";
import ilustracao from "../Img/illustration.png";
import blood from "../Img/blood.png";
import blood1 from "../Img/blood-1.png";

export default function Inicio(props) {
  return (
    <div className="mt-5r mb-3">
      <div className="container">
        <img
          src={blood}
          className="gota-superior"
          alt="Desenho de uma gota de sangue"
        />
        <div className="d-flex justify-s-b pb-5">
          <div
            className="align-self-center fs-2 c-red fw-bolder"
            style={{ width: "420px" }}
          >
            {props.text}
          </div>
          <div
            className={`text-end ${
              props.ilustracao === true ? "d-block" : "d-none"
            }`}
          >
            <img
              src={ilustracao}
              className={`img-ilustracao `}
              alt="Ilustração de uma enfermeira trocando a bolsa de sangue dos pacientes"
            />
          </div>
        </div>
        <img
          src={blood1}
          className="gota-inferior"
          alt="Desenho de uma gota de sangue"
        />
      </div>
    </div>
  );
}
