import React from "react";
import logo from "../../Assets/Img/hemo.loc.png";
import gota from "../../Assets/Img/blood.png";
import "./Login.css";

export default function Login() {
  return (
    <div className="font-montserrat row m-0 p-0 h-100v">
      <div className="col p-0 m-0">
        <div className="bg-wine w-50" style={{ height: "50px" }}></div>
        <div
          className="row d-grid justify-center"
          style={{ marginTop: "20vh" }}
        >
          <div className="col fw-bolder f-08 c-red justify-items-center d-contents">
            <img src={logo} width="300px" alt="Logo hemo loc" />
            EM TODOS OS LUGARES, PARA TODO MUNDO
          </div>
          <div className="col p-0 fw-bolder mt-5">
            E-mail{" "}
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="col p-0 fw-bolder mt-4">
            Senha{" "}
            <input
              type="password"
              class="form-control"
              placeholder="Digite sua senha"
            />
          </div>
          <button className="btn-red p-1 mt-4">Entrar</button>
          <a href="/" className="f-08 text-center c-pointer mt-2">
            <u>Novo no hemo.loc? Cadastre-se agora.</u>
          </a>
          <div className="linha-horizontal mt-3"></div>
          <a href="/" className="f-08 text-center c-pointer mt-2">
            <u>É um hemocentro? Solicite seu acesso.</u>
          </a>
        </div>
      </div>
      <div className="col bg-wine">
        <img src={gota} className="gota-maior" alt="Gota de sangue" />
        <img src={gota} className="gota-1" alt="Gota de sangue" />
        <img src={gota} className="gota-2" alt="Gota de sangue" />
        <img src={gota} className="gota-3" alt="Gota de sangue" />
      </div>
    </div>
  );
}
