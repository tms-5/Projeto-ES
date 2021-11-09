import "./FAQBody.css";
import avatar from "../../Assets/Img/woman.png";
import saude from "../../Assets/Img/heart.png";
import comportamento from "../../Assets/Img/comportamento.png";
import tabela from "../../Assets/Img/doacao-sangue.png";
import FAQCard from "./FAQCard";

export default function FAQBody() {
  return (
    <>
      <div className="mt-5 mb-5 f-09 text-center fw-500">
        Com a crise gerada pelo coronavírus, os bancos de sangue já estão
        sofrendo queda nas doações. As estruturas dos locais de doação estão
        adequadas e preparadas para te receber.
      </div>
      <div className="f-1-3 c-red fw-600 text-center mb-4">
        Quais são os requisitos para doação de sangue?
      </div>
      <div className="row">
        <div className="col bg-wine p-2 d-grid text-center justify-items-center c-white m-3 f-09 min-width-300">
          <div className="ball mb-3 mt-3">
            <div className="ball-inside">
              <img src={avatar} width="60px" alt="Avatar de uma mulher" />
            </div>
          </div>
          <h5>Geral</h5>
          <p>
            Estar bem de saúde e ter entre 18 e 69 anos. Jovens a partir dos 16
            anos já podem doar caso tenham autorização do responsável. O modelo
            estará disponível no hemocentro.
          </p>
          <p>Não estar em jejum.</p>
          <p>Ter dormido pelo menos seis horas nas últimas 24 horas.</p>
          <p>Pesar mais de 50kg.</p>
          <p>
            Não ter feito cirurgia de grande porte a menos de seis meses e de
            pequeno porte a menos de três meses.
          </p>
          <p>Não ter feito tratamento dentário a menos de 7 dias.</p>
        </div>
        <div className="col bg-wine p-2 d-grid text-center justify-items-center c-white m-3 f-09 min-width-300">
          <div className="ball mb-3 mt-3">
            <div className="ball-inside">
              <img
                src={saude}
                width="60px"
                alt="Um coração com um batimento cardíaco dentro"
              />
            </div>
          </div>
          <h5>Saúde</h5>
          <p>
            Não estar grávida ou amamentando (mães que amamentam devem aguardar
            a criança completar 12 meses de vida).
          </p>
          <p>Não estar gripado ou ter tido febre nos últimos 7 dias.</p>
          <p>
            Não ter diabetes, cardiopatia e nem ter contraído hepatite após os
            11 anos de idade.
          </p>
          <p>
            Caso tenha tomado vacina contra gripe, deve-se aguardar 48h; as
            demais vacinas com bactérias/vírus vivos, por exemplo sarampo e
            febre amarela, deve-se aguardar 4 semanas.
          </p>
        </div>
        <div className="col bg-wine p-2 d-grid text-center justify-items-center c-white m-3 f-09 min-width-300">
          <div className="ball mb-3 mt-3">
            <div className="ball-inside">
              <img
                src={comportamento}
                width="60px"
                alt="Avatar de um boneco com setas em volta"
              />
            </div>
          </div>
          <h5>Comportamento</h5>
          <p>
            Não ter doado sangue a menos de 60 dias (homens) e 90 dias
            (mulheres).
          </p>
          <p>Não ter tido comportamento de risco para contaminação pelo HIV.</p>
          <p>Não ter ingerido álcool nas 12 horas antes da doação.</p>
          <p>Não ter feito uso de drogas injetáveis ilícitas.</p>
          <p>
            Não ter feito piercing, acupuntura ou tatuagem a menos de 12 meses.
          </p>
          <p>
            Não ter feito endoscopia ou colonoscopia nos últimos seis meses.
          </p>
        </div>
      </div>
      <div className="f-1-3 c-red fw-600 text-center mb-4 mt-4">
        Quais são os impedimentos definitivos para doar sangue?
      </div>
      <ul className="f-09">
        <li>Ter passado por um quadro de hepatite após os 11 anos de idade;</li>
        <li>
          Evidência clínica ou laboratorial das seguintes doenças transmissíveis
          pelo sangue: Hepatites B e C, AIDS (vírus HIV), doenças associadas aos
          virus HTVL I e II e Doenças de Chagas;
        </li>
        <li>Uso de drogas ilícitas injetáveis;</li>
        <li>Malária;</li>
      </ul>
      <div className="text-center">
        <img
          src={tabela}
          width="70%"
          className="min-width-300"
          alt="Tabela de doação de sangue"
        />
      </div>
      <div className="f-1-3 c-red fw-600 text-center mb-4 mt-4">FAQ</div>
      <FAQCard />
      <p className="mt-5 f-09 text-center fw-500">
        Lembre-se que para doar sangue, você precisa portar documento oficial e
        original de identidade com foto e dentro do prazo de validade (RG,
        Carteira Profissional, Carteira de Habilitação).
      </p>
    </>
  );
}
