import React, { useState } from "react";
import logo from "../../Assets/Img/hemo.loc.png";
import gota from "../../Assets/Img/blood.png";
import "./Cadastro.css";
import Estado from "../../Assets/Estados/Estados";
import API from '../../Axios/API.js'

export default function CadastroUsuario() {
  const [city, setCity] = useState({}) 
  return (
    <div className="font-montserrat row m-0 p-0 h-100v" id="CadastroUsuario">
      <div className="col bg-wine left-cadastro">
        <img src={gota} className="gota-maior" alt="Gota de sangue" />
        <img src={gota} className="gota-1" alt="Gota de sangue" />
        <img src={gota} className="gota-2" alt="Gota de sangue" />
        <img src={gota} className="gota-3" alt="Gota de sangue" />
      </div>
      <div className="col p-0 m-0 d-grid">
        <div
          className="bg-wine w-50 float-right "
          style={{
            height: "50px",
            placeSelf: "self-end",
            alignSelf: "flex-start",
          }}
        ></div>
        <div
          className="row d-grid justify-center cadastro"
          style={{ marginTop: "10vh" }}
        >
          <div className="col fw-bolder f-08 c-red justify-items-center d-contents">
            <img src={logo} width="300px" alt="Logo hemo loc" />
            EM TODOS OS LUGARES, PARA TODO MUNDO
          </div>
          <div className="col p-0 fw-bolder mt-4">
            Nome{" "}
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="col p-0 fw-bolder mt-4">
            E-mail{" "}
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
            />
          </div>
          <div className="col p-0 fw-bolder mt-4">
            Senha{" "}
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="col p-0 fw-bolder mt-4">
            Sexo{" "}
            <select className="form-select">
              <option>Feminino</option>
              <option>Masculino</option>
              <option>Prefiro não me identificar</option>
            </select>
          </div>
          <div className="col p-0 fw-bolder mt-4">
            Idade{" "}
            <input
              type="number"
              className="form-control"
              placeholder="Digite sua senha"
            />
          </div>
          <Estado setCity={setCity}/>
          <button className="btn-red p-1 mt-4 ">Cadastrar</button>
          <a href="/login" className="f-08 text-center c-pointer mt-2 mb-4">
            <u>Já é cadastrado no hemo.loc? Faça seu login.</u>
          </a>
        </div>
      </div>
    </div>
  );
}
