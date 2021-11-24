import { useEffect, useRef, useState } from "react";
import Estado from "../../Assets/Estados/Estados";
import API from "../../Axios/API";
import Toast from "../../Assets/Toast/Toast.js";
import ViaCep from "react-via-cep/dist/components/ViaCep";
import FieldHorario from "./FieldHorario";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Informe somente os horários de doação de sangue disponível. Caso o
    estabelecimento não esteja funcionando, preencha com apenas um hífen"-".
  </Tooltip>
);

const FieldHemocentro = () => {
  const childRef = useRef();
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState({
    nome: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    email: {
      hasError: false,
      value: "",
      errorMessage: "Insira um e-mail válido.",
    },
    senha: {
      hasError: false,
      value: "",
      errorMessage: "Sua senha deve conter pelo menos 6 caracteres.",
    },
    abreviacao: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    endereco: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    cidade: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    telefone: {
      hasError: false,
      value: "",
      errorMessage: "Verifique se o telefone digitado está correto.",
    },
    complemento: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    horario: {
      hasError: false,
      value: [],
      errorMessage: "Campos não podem ficar em branco.",
    },
  });

  const handleChangeDados = (data, field, value) => {
    setDados((prevState) => ({
      ...prevState,
      [data]: {
        ...prevState[data],
        [field]: value,
      },
    }));
  };

  const emailValidator = (email) => {
    var re = /\S+@\S+\.\S+/;
    let val = re.test(email);
    handleChangeDados("email", "hasError", !val);
  };

  const fieldVerification = (field, value, size) => {
    if (value === "" || value === " " || value.length <= size) {
      handleChangeDados(field, "hasError", true);
    } else {
      handleChangeDados(field, "hasError", false);
    }
  };

  const fetchCampanhas = async () => {
    await API.post("/usuario", {
      nome: dados.nome.value,
      email: dados.email.value,
      senha: dados.senha.value,
      cidade: dados.cidade.value,
    })
      .then((resp) => {
        Toast.fire({
          icon: "sucess",
          title: "Usuário cadastrado com sucesso.",
        });
      })
      .catch((erro) => {
        Toast.fire({
          icon: "error",
          title:
            "Não conseguimos recuperar alguns dados. Por favor atualize a página.",
        });
      });
  };
  const beforeSave = () => {
    if (
      dados.nome.hasError === true ||
      dados.email.hasError === true ||
      dados.senha.hasError === true ||
      dados.abreviacao.hasError === true ||
      dados.telefone.hasError === true ||
      dados.endereco.hasError === true ||
      dados.complemento.hasError === true ||
      dados.horario.hasError === true
    ) {
      Toast.fire({
        icon: "error",
        title: "Verifique se todos os campos foram digitados corretamente.",
      });
    } else {
      fetchCampanhas();
    }
  };
  return (
    <>
      <h1 className="scroll-none">Cadastro de hemocentro</h1>
      <div className="col p-0 fw-bolder mt-4">
        Nome do hemocentro{" "}
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu nome"
          onChange={(e) => handleChangeDados("nome", "value", e.target.value)}
          onBlur={(e) => {
            fieldVerification("nome", e.target.value, 1);
          }}
        />
        {dados.nome.hasError ? (
          <div className="f-07 text-danger">{dados.nome.errorMessage}</div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        Abreviação do hemocentro{" "}
        <input
          type="text"
          className="form-control f-09"
          placeholder="Digite a abreviação do hemocentro"
          onChange={(e) =>
            handleChangeDados("abreviacao", "value", e.target.value)
          }
          onBlur={(e) => {
            fieldVerification("abreviacao", e.target.value, 1);
          }}
        />
        {dados.abreviacao.hasError ? (
          <div className="f-07 text-danger">
            {dados.abreviacao.errorMessage}
          </div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        E-mail{" "}
        <input
          type="email"
          className="form-control"
          placeholder="Digite seu email"
          onChange={(e) => handleChangeDados("email", "value", e.target.value)}
          onBlur={(e) => {
            emailValidator(e.target.value);
          }}
        />
        {dados.email.hasError ? (
          <div className="f-07 text-danger">{dados.email.errorMessage}</div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        Telefone{" "}
        <input
          type="phone"
          className="form-control f-09"
          placeholder="Digite seu telefone"
          onChange={(e) =>
            handleChangeDados("telefone", "value", e.target.value)
          }
          onBlur={(e) => {
            fieldVerification("telefone", e.target.value, 14);
          }}
        />
        {dados.telefone.hasError ? (
          <div className="f-07 text-danger">{dados.telefone.errorMessage}</div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        <ViaCep cep={cep} lazy>
          {({ data, fetch }) => {
            if (data) {
              handleChangeDados("cidade", "value", data);
            }
            return (
              <div>
                CEP{" "}
                <input
                  type="number"
                  className="form-control f-09"
                  placeholder="Digite seu CEP"
                  onBlur={fetch}
                  onChange={(e) => setCep(e.target.value)}
                />
              </div>
            );
          }}
        </ViaCep>
      </div>
      <div className="col p-0 fw-bolder mt-4">
        Endereço{" "}
        <input
          type="text"
          className="form-control f-09"
          placeholder="Digite o endereço do hemocentro"
          readOnly
          onChange={(e) =>
            handleChangeDados("telefone", "value", e.target.value)
          }
        />
      </div>
      <div className="col p-0 fw-bolder mt-4">
        Número e complemento{" "}
        <input
          type="text"
          className="form-control f-09"
          placeholder="Digite o complemento do endereço"
          onChange={(e) =>
            handleChangeDados("complemento", "value", e.target.value)
          }
          onBlur={(e) => {
            fieldVerification("complemento", e.target.value, 14);
          }}
        />
        {dados.complemento.hasError ? (
          <div className="f-07 text-danger">
            {dados.complemento.errorMessage}
          </div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        Senha{" "}
        <input
          type="password"
          className="form-control"
          placeholder="Digite sua senha"
          onChange={(e) => handleChangeDados("senha", "value", e.target.value)}
          onBlur={(e) => {
            fieldVerification("senha", e.target.value, 5);
          }}
        />
        {dados.senha.hasError ? (
          <div className="f-07 text-danger">{dados.senha.errorMessage}</div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4 field-horario">
        Horário de funcionamento para doação{" "}
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button
            roundedCircle
            variant="success"
            className="b-none bg-transparent c-black f-07"
            style={{
              border: "1px solid gray",
              borderRadius: "50px",
            }}
          >
            ?
          </Button>
        </OverlayTrigger>
        <FieldHorario ref={childRef} />
      </div>

      <button className="btn-red p-1 mt-4" onClick={() =>  childRef.current.getAlert(), beforeSave}>
        Cadastrar
      </button>
      <a href="/login" className="f-08 text-center c-pointer mt-2 mb-4">
        <u>Já é cadastrado no hemo.loc? Faça seu login.</u>
      </a>
    </>
  );
};

export default FieldHemocentro;
