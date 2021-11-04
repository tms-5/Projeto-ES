import { useState } from "react";
import thamires from '../Img/thamires.jpg'

export default function Time() {
  const [time] = useState([
    {
      nome: "Thamires Morais",
      cidade: "RECIFE",
      profissao: "Designer de interface de usuário e desenvolvedora front-end.",
      img: {thamires}
    },
  ]);
  return (
    <div className="container">
      <div className="row pt-5 pb-5 text-center">
        <div className="c-red fw-bolder f-3 align-self-center">
          Conheça nosso time.
        </div>
        <div className="row">
          {time.map((integrante) => {
            return (
              <div className="col p-3">
                <div class="card-container">
                  <img
                    class="round"
                    src={integrante.img}
                    alt="user"
                  />
                  <h3>{integrante.nome}</h3>
                  <h6>{integrante.cidade}</h6>
                  <p>
                  {integrante.profissao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
