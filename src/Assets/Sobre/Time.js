import { useState } from "react";
import thamires from "../Img/thamires.jpg";
import julio from "../Img/julio.jpeg";
import rafael from "../Img/rafael.jpeg";
import dandalia from "../Img/dandalia.jpeg";
import joao from "../Img/joao.jpeg";

export default function Time() {
  const [time] = useState([
    {
      nome: "Thamires Morais",
      idade: "22 anos",
      profissao: "Designer e desenvolvedora front-end.",
      contato: "tms5@cin.ufpe.br",
      img: thamires,
    },
    {
      nome: "Júlio César Tavares",
      idade: "24 anos",
      profissao: "Desenvolvedor back-end.",
      contato: "jctbs@cin.ufpe.br",
      img: julio,
    },
    {
      nome: "Paulo Rafael Veloso",
      idade: "26 anos",
      profissao: "Desenvolvedor back-end.",
      contato: "prfev@cin.ufpe.br",
      img: rafael,
    },
    {
      nome: "Dandália Luiza",
      idade: "23 anos",
      profissao: "Desenvolvedora back-end.",
      contato: "dlst@cin.ufpe.br",
      img: dandalia,
    },
    {
      nome: "João Victor Pereira",
      idade: "21 anos",
      profissao: "Desenvolvedor back-end.",
      contato: "jvpn@cin.ufpe.br",
      img: joao,
    },
  ]);
  return (
    <div className="bg-gray">
      <div className="container">
        <div className="row pt-5 pb-5 text-center">
          <div className="c-red fw-600 f-2-5 align-self-center">
            Sobre o time
          </div>
          <div className="row m-0 mt-4 f-09 fw-500">
            <p>
              A ideia começou como um projeto para uma cadeira da faculdade,
              onde o grupo queria uma forma de ajudar as pessoas com algo que
              faria a diferença, e diante um cenário tão complicado que é a
              pandemia, a equipe queria um projeto que fosse voltado para uma
              dor da sociedade, e assim surgiu a ideia do Hemo.loc.
            </p>
          </div>
          <div className="row justify-center">
            {time.map((integrante) => {
              return (
                <div className="col-4 m-2 card-container p-3 card-time">
                 
                    <img
                      className="round"
                      width="150px"
                      src={integrante.img}
                      alt="user"
                    />
                    <h4>{integrante.nome}</h4>
                    <h6>{integrante.idade}</h6>
                    <p>{integrante.profissao}</p>
                    <h7>{integrante.contato}</h7>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
