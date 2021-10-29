import React, { useEffect, useState } from "react";
import Campanha from "./Campanha";

export default function CampanhasInicio() {
  let data = require("../JSON/Estados.json");
  let campanhas = require("../JSON/Campanha.json");
  const [estado, setEstado] = useState([]);

  return (
    <div className="mt-5 mb-5">
      <h5 className="text-center c-red mb-3">Nos diga onde você está</h5>
      <div className="row text-center mt-5 mb-5">
        <div className="col d-flex justify-s-a align-center">
          <div>Estado</div>
          <select
            className="form-select w-80"
            onChange={(e) => {
              setEstado(
                data.filter((estado) => estado.sigla === e.target.value)
              );
            }}
          >
            {data.map((estado) => {
              return <option value={estado.sigla}>{estado.nome}</option>;
            })}
          </select>
        </div>

        <div className="col d-flex justify-s-a align-center">
          <div>Cidade</div>
          {estado.map(({ sigla, nome, cidades }) => {
            return (
              <select className="form-select w-80">
                {" "}
                {cidades.map((cidade) => {
                  return <option>{cidade}</option>;
                })}
              </select>
            );
          })}
        </div>
      </div>
      {campanhas.map((campanha) => {
        return <Campanha campanhas={campanha} />;
      })}
    </div>
  );
}
