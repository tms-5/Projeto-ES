import React, { useState } from "react";

const Estado = (params) => {
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
          <option value="0" selected disabled>
            Selecionar...
          </option>
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
        <select
          className="form-select"
          onChange={(e) => params.setCity(e.target.value)}
        >
          <option value="0" selected disabled>
            Selecionar...
          </option>
          {estado.map(({ sigla, nome, cidades }, i) => {
            return (
              <>
                {" "}
                {cidades.map((cidade, j) => {
                  return <option key={j}>{cidade}</option>;
                })}
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Estado;
