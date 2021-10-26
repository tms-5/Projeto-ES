import React, { useState } from "react";
import logo from "../Img/hemo.loc.png";

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
      className="row m-0 bg-red"
      style={{ height: "50px" }}
    >
      <div
        className="col-2 bg-white text-end align-self-center"
        style={{ minWidth: "200px" }}
      >
        <img src={logo} width="200px" />
      </div>
      <div className="col c-white d-flex pl-0">
        <div className="bg-red topbar-detail">&nbsp;</div>

        <div className="d-flex topbar-router pl-1r justify-s-a f-09">
          {topics.map((topic) => {
            return (
              <div>
                <a className="c-white" href={topic.href}>
                  {topic.name}
                </a>
              </div>
            );
          })}
          <div>
            <button className="btn-white">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
