import React, { useEffect, useState } from "react";
import pin from "../Img/pin.png";
import complemento from "../Img/home-address.png";
import calendar from "../Img/calendar.png";
import clock from "../Img/clock.png";
import obs from "../Img/obs.png";

export default function Campanha(props) {
  const [campanha, setCampanha] = useState({
    nome: "",
    endereco: "",
    complemento: "",
    dataInicial: "",
    dataFinal: "",
    horario: [],
    observacao: "",
  });

  useEffect(() => {
    setCampanha(props.campanhas);
  }, [props.campanhas]);

  return (
    <div className="mt-3">
      <div className="linha-horizontal mb-3"></div>
      <h5 className="c-red fw-500">{campanha.nome}</h5>
      <div className="row pt-2 mb-1 f-08">
        <div className="col d-grid">
          <div>
            <img src={pin} width="13px" alt="Vetor de um pin" />
            &nbsp;&nbsp;&nbsp;{campanha.endereco}
          </div>

          <div>
            <img
              src={complemento}
              width="17px"
              alt="Vetor de uma casa com um pin"
            />
            &nbsp;&nbsp;&nbsp;{campanha.complemento}
          </div>

          <div className="c-red">
            <img src={calendar} width="17px" alt="Vetor de um calendário" />
            &nbsp;&nbsp;&nbsp;{" "}
            {new Date(campanha.dataInicial).toLocaleDateString("pt-BR", {
              timeZone: "UTC",
            }) +
              " - " +
              new Date(campanha.dataFinal).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })}
          </div>

          {campanha.observacao !== "" ? (
            <div className="c-black">
              <img src={obs} width="17px" alt="Vetor de um calendário" />
              &nbsp;&nbsp;&nbsp;{campanha.observacao}
            </div>
          ) : null}
        </div>
        <div className="col c-red">
          <img src={clock} width="17px" alt="Vetor de um relógio" />
          &nbsp;&nbsp;&nbsp;
          {campanha.horario.map((dia, i) => {
            return (
              <div key={i}>
                {dia.dia} - Das {dia.das}h às {dia.as}h
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
