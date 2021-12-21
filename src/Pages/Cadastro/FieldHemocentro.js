import { useEffect, useState } from "react";
import Toast from "../../Assets/Toast/Toast.js";
import ViaCep from "react-via-cep/dist/components/ViaCep";
import FieldHorario from "./FieldHorario";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { doc, setDoc, collection } from "firebase/firestore";
import db from "../../Axios/Firebase";
import InputMask from "react-input-mask";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Informe somente os horários de doação de sangue disponível. Caso o
    estabelecimento não esteja funcionando, clique no X à direita dos campos.
  </Tooltip>
);

const FieldHemocentro = () => {
  const [cep, setCep] = useState("");
  const [viacep, setViacep] = useState({
    logradouro: "",
    localidade: "",
    uf: "",
  });
  const [horario, setHorario] = useState([]);
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
    estado: {
      hasError: false,
      value: viacep.uf,
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
      value: horario,
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

  useEffect(() => {
    handleChangeDados("cidade", "value", viacep.localidade);
    handleChangeDados("endereco", "value", viacep.logradouro);
    handleChangeDados("estado", "value", viacep.uf);
  }, [viacep]);

  useEffect(() => {
    handleChangeDados("horario", "value", horario);
  }, [horario]);

  const emptyValidation = () => {
    let aux = false;
    horario.map((content) => {
      if (content.das === "" || content.as === "") {
        aux = true;
      }
    });
    return handleChangeDados("horario", "hasError", aux);
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

  const fetchHemocentro = async () => {
    await setDoc(doc(db, "Hemocentro", dados.abreviacao.value), {
      nome: dados.nome.value,
      email: dados.email.value,
      abreviacao: dados.abreviacao.value,
      senha: dados.senha.value,
      estado: dados.estado.value,
      cidade: dados.cidade.value,
      telefone: dados.telefone.value,
      cep: cep,
      complemento: dados.complemento.value,
      endereco: dados.endereco.value,
    })
      .then(async () => {
        await setDoc(doc(collection(db, "campanha")), {
          nome: dados.abreviacao.value + " - " + dados.nome.value,
          cidade: dados.cidade.value,
          complemento: dados.complemento.value,
          data: "-",
          endereco: dados.endereco.value,
          horario: dados.horario.value,
          estado: dados.estado.value,
          hemocentro: dados.abreviacao.value,
          observacao: "",
        })
          .then(() => {
            const auth = getAuth();
            createUserWithEmailAndPassword(
              auth,
              dados.email.value,
              dados.senha.value
            )
          })
          .then(() => {
            Toast.fire({
              icon: "sucess",
              title: "Campanha cadastrada com sucesso.",
            });
          })
          .catch(() => {
            Toast.fire({
              icon: "error",
              title: "Não foi possível cadastrar a campanha.",
            });
          });
        Toast.fire({
          icon: "sucess",
          title: "Hemocentro cadastrado com sucesso.",
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title:
            "Não conseguimos recuperar alguns dados. Por favor atualize a página.",
        });
      });
  };

  const beforeSave = () => {
    emptyValidation();
    fieldVerification("nome", dados.nome.value, 1);
    fieldVerification("email", dados.email.value, 1);
    fieldVerification("senha", dados.senha.value, 1);
    fieldVerification("abreviacao", dados.abreviacao.value, 1);
    fieldVerification("telefone", dados.telefone.value, 1);
    fieldVerification("cidade", dados.cidade.value, 1);
    fieldVerification("endereco", dados.endereco.value, 1);
    fieldVerification("estado", dados.estado.value, 1);
    fieldVerification("horario", dados.horario.value, 0);
    fieldVerification("complemento", dados.complemento.value, 1);
    if (
      dados.nome.hasError === true ||
      dados.email.hasError === true ||
      dados.senha.hasError === true ||
      dados.abreviacao.hasError === true ||
      dados.telefone.hasError === true ||
      dados.endereco.hasError === true ||
      dados.cidade.hasError === true ||
      dados.estado.hasError === true ||
      dados.complemento.hasError === true 
    ) {
      Toast.fire({
        icon: "error",
        title: "Verifique se todos os campos foram digitados corretamente.",
      });
    } else {
      fetchHemocentro();
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
            handleChangeDados(
              "abreviacao",
              "value",
              e.target.value.toUpperCase()
            )
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
        <InputMask
          type="text"
          className="form-control f-09"
          placeholder="(00) 00000-0000"
          mask={
            dados.telefone.value.length <= 14
              ? "(99) 9999-9999"
              : "(99) 99999-9999"
          }
          onChange={(e) =>
            handleChangeDados("telefone", "value", e.target.value)
          }
          onBlur={(e) => {
            let val_length_without_dashes = e.target.value.replace(
              / |-|_/g,
              ""
            );
            console.log(val_length_without_dashes);
            fieldVerification("telefone", val_length_without_dashes, 11);
          }}
        />
        {dados.telefone.hasError ? (
          <div className="f-07 text-danger">{dados.telefone.errorMessage}</div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        <ViaCep cep={cep} lazy>
          {({ data, fetch, error }) => {
            let erro = false;
            if (error) {
              erro = true;
            }
            if (data) {
              setViacep(data);
              erro = false;
            }
            return (
              <div>
                CEP{" "}
                <InputMask
                  type="text"
                  className="form-control f-09"
                  placeholder="00000-000"
                  mask={"99999-999"}
                  onBlur={fetch}
                  onChange={(e) => setCep(e.target.value)}
                />
                {erro ? (
                  <div className="f-07 text-danger">
                    Verifique se o CEP foi digitado corretamente.
                  </div>
                ) : null}
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
          value={viacep.logradouro}
        />
        {dados.endereco.hasError ? (
          <div className="f-07 text-danger">{dados.endereco.errorMessage}</div>
        ) : null}
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
            fieldVerification("complemento", e.target.value, 1);
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
        Horário de funcionamento para doação de sangue{" "}
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button
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
        {dados.horario.hasError ? (
          <div className="f-07 text-danger">{dados.horario.errorMessage}</div>
        ) : null}
        <FieldHorario setHorario={setHorario} />
      </div>

      <button className="btn-red p-1 mt-4" onClick={() => beforeSave()}>
        Cadastrar
      </button>
      <a href="/login" className="f-08 text-center c-pointer mt-2 mb-4">
        <u>Já é cadastrado no hemo.loc? Faça seu login.</u>
      </a>
    </>
  );
};

export default FieldHemocentro;
