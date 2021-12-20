import { useState } from "react";
import logo from "../../Assets/Img/hemo.loc.png";
import logoBranca from "../../Assets/Img/hemo.loc-branco.png";
import "./Topbar.css";
import menu from "../../Assets/Img/menu-branco.png";

const AcessoTopbar = () => {
  return (
    <>
      <AcessoTopbarMobile />
      <AcessoTopbarDesktop />
    </>
  );
};

const AcessoTopbarDesktop = () => {
  const [topics] = useState([
    { name: "Início", index: "0", href: "/" },
    { name: "O que é o hemo.loc?", index: "1", href: "/sobre" },
    { name: "Posso doar sangue?", index: "2", href: "/doar-sangue" },
    { name: "Cadastre-se", index: "3", href: "/cadastrar" },
  ]);
  return (
    <div className="TopbarDesktop row m-0 p-fixed w-web mb-4">
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
};

const AcessoTopbarMobile = () => {
  const [showMenu, setShowMenu] = useState("");
  const [topics] = useState([
    { name: "Início", index: "0", href: "/" },
    { name: "O que é o hemo.loc?", index: "1", href: "/sobre" },
    { name: "Posso doar sangue?", index: "2", href: "/doar-sangue" },
    { name: "Cadastre-se", index: "3", href: "/cadastrar" },
  ]);
  return (
    <div className="TopbarMobile row m-0">
      <div className="row m-0 p-fixed bg-red pt-1">
        <div className="col">
          <a href="/">
            <img src={logoBranca} width="150px" alt="White logo" />
          </a>
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
          showMenu === true ? "show pb-1" : ""
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
};

export default AcessoTopbar;
