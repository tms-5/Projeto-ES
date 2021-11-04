import React, { useState } from "react";

export default function Estado() {
  let data = require("../JSON/Estados.json");
  const [estado, setEstado] = useState([]);

  return (
    <div className="p-0" id="Estados">
      <div className="col justify-s-a align-center">
        <div>Estado</div>
        <select
          className="form-select"
          onChange={(e) => {
            setEstado(data.filter((estado) => estado.sigla === e.target.value));
          }}
        >
          {data.map((estado, i) => {
            return (
              <option value={estado.sigla} key={i}>
                {estado.nome}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col justify-s-a align-center">
        <div>Cidade</div>
        {estado.map(({ sigla, nome, cidades }, i) => {
          return (
            <select className="form-select" key={i}>
              {" "}
              {cidades.map((cidade, j) => {
                return <option key={j}>{cidade}</option>;
              })}
            </select>
          );
        })}
      </div>
    </div>
  );
}
