import React, { useState } from "react";
import logo from "../Img/hemo.loc-branco.png";
import menu from "../Img/menu-branco.png";

export default function TopbarMobile() {
  const [showMenu, setShowMenu] = useState("");
  const [topics] = useState([
    { name: "Início", index: "0", href: "/" },
    { name: "O que é o hemo.loc?", index: "1", href: "/sobre" },
    { name: "Posso doar sangue?", index: "2", href: "/doar-sangue" },
    { name: "Cadastre-se", index: "3", href: "/cadastro" },
  ]);

  return (
    <div id="TopbarMobile" className="row m-0 bg-red">
      <div className="row m-0 p-fixed bg-red pt-1">
        <div className="col">
          <img src={logo} width="150px" alt="White logo" />
        </div>
        <div className="col text-end">
          <button
            className="bg-transparent b-none mr-1r"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={menu} width="40px" alt="Hamburguer menu" />
          </button>
        </div>
      </div>

      <div
        className={`bg-red menu-mobile w-100 Z-10 text-center c-white ${
          showMenu === true ? "show" : ""
        }`}
      >
        {topics.map((topic) => {
          return (
            <div className="mt-2" key={topic.index}>
              <a className="c-white" href={topic.href}>
                {topic.name}
              </a>
            </div>
          );
        })}
        <div>
          <a href="/login">
            <button className="btn-white mt-2">Entrar</button>
          </a>
        </div>
      </div>
    </div>
  );
}
