import React, { useState } from "react";
import logo from "../../Assets/Img/hemo.loc.png";

export default function TopbarDesktop() {
  const [topics] = useState([
    { name: "Início", index: "0", href: "/" },
    { name: "O que é o hemo.loc?", index: "1", href: "/sobre" },
    { name: "Posso doar sangue?", index: "2", href: "/doar-sangue" },
    { name: "Cadastre-se", index: "3", href: "/cadastro" },
  ]);
  return (
    <div
      id="TopbarDesktop"
      className="row m-0 p-fixed w-web"
      style={{ height: "50px" }}
    >
      <div
        className="col-2 m-0 pt-1 bg-white text-end align-self-center"
        style={{ minWidth: "200px", minHeight: "50px" }}
      >
        <a href="/">
          <img src={logo} width="150px" alt="Logo hemo loc" />
        </a>
      </div>
      <div className="col c-white d-flex pl-0 bg-red">
        <div className="bg-red topbar-detail">&nbsp;</div>

        <div className="d-flex topbar-router pl-1r justify-s-a f-09">
          {topics.map((topic) => {
            return (
              <div key={topic.index}>
                <a className="c-white" href={topic.href}>
                  {topic.name}
                </a>
              </div>
            );
          })}
          <div>
            <a href="/login">
              <button className="btn-white">Entrar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
