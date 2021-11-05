import { useState } from "react";

export default function Propósito() {
  const [informacoes] = useState([
    { qte: "+123", info: "usuários cadastrados" },
    { qte: "+68", info: "hemocentros cadastrados" },
    { qte: "+140", info: "campanhas cadastrados" },
    { qte: "+250", info: "pessoas ajudadas" },
  ]);
  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="row">
        <div className="c-red fw-600 f-2-5 align-self-center">
          Sobre o Hemo.loc
        </div>
        <div className="row mt-4 f-09 fw-500">
          <p>
            Prazer, nós somos o hemo.loc, uma ideia que surgiu com o propósito
            de auxiliar os hemocentros a divulgar suas campanhas de doação de
            sangue, com finalidade de atingir um maior número de pessoas
            disponíveis para doar sangue e ajudar pessoas que necessitam.
          </p>
        </div>
        <div className="row m-0 justify-center">
          {informacoes.map((info) => {
            return (
              <div className="col-3 card-container p-2 m-2 card-sobre">
                <div className="c-red f-2-5 fw-500">{info.qte}</div>
                <div className="f-08 fw-500">{info.info}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
