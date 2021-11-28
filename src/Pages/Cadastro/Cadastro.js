import logo from "../../Assets/Img/hemo.loc.png";
import "./Cadastro.css";
import FieldUsuario from "./FieldUsuario";
import gota from "../../Assets/Img/blood.png";
import FieldHemocentro from "./FieldHemocentro";

const Cadastro = () => {
  const teste = () => {
    var signUpButton = document.getElementById("signUp");
    var signInButton = document.getElementById("signIn");
    var container = document.getElementById("container");
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  };
  return (
    <div className="fade show d-block" id="Cadastro">
      <div className="container h-100v scroll-none" id="container">
        <div className="form-container sign-up-container pt-4">
          <div className="d-grid text-left">
            <FieldHemocentro />
          </div>
        </div>
        <div className="form-container sign-in-container pt-4">
          <div className="d-grid">
            <FieldUsuario />
          </div>
        </div>
        <div className="overlay-container scroll-none">
          <div className="overlay scroll-none">
            <img
              src={gota}
              className="gota-maior-cadastrar"
              alt="Gota de sangue"
            />
            <img src={gota} className="gota-1-cadastrar" alt="Gota de sangue" />
            <img src={gota} className="gota-2-cadastrar" alt="Gota de sangue" />
            <img src={gota} className="gota-3-cadastrar" alt="Gota de sangue" />
            <div className="overlay-panel overlay-left">
              <img
                src={logo}
                alt="avatar-usuario"
                width="350px"
                style={{ marginRight: "4px" }}
              ></img>
              <p>Cadastre-se para personalizar seu ambiente</p>
              <button className="ghost btn-white" id="signIn" onClick={teste}>
                Sou usuário
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <img
                src={logo}
                alt="avatar-usuario"
                width="350px"
                style={{ marginRight: "4px" }}
              ></img>
              <p>Logue com seus dados e personalize seu ambiente</p>
              <button className="ghost btn-white" id="signUp" onClick={teste}>
                {" "}
                Sou hemocentro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
