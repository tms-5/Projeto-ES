import { useEffect, useState } from "react";
import Estado from "../../Assets/Estados/Estados";
import Toast from "../../Assets/Toast/Toast.js";
import { doc, setDoc, collection } from "firebase/firestore";
import db from "../../Axios/Firebase";

const FieldUsuario = () => {
  const [city, setCity] = useState("");
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
    sexo: {
      hasError: false,
      value: "",
      errorMessage: "Selecione uma opção.",
    },
    idade: {
      hasError: false,
      value: "",
      errorMessage: "Insira uma idade válida.",
    },
    cidade: {
      hasError: false,
      value: "",
      errorMessage: "Selecione uma opção.",
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

  useEffect(() => {
    handleChangeDados("cidade", "value", city);
  }, [city]);

  const fetchUsuario = async () => {
    await setDoc(doc(collection(db, "usuarios")), {
      nome: dados.nome.value,
      email: dados.email.value,
      senha: dados.senha.value,
      sexo: dados.sexo.value,
      idade: dados.idade.value,
      cidade: dados.cidade.value,
    })
      .then(() => {
        Toast.fire({
          icon: "sucess",
          title: "Usuário cadastrado com sucesso.",
        });
      })
      .catch(() => {
        Toast.fire({
          icon: "error",
          title:
            "Não conseguimos recuperar alguns dados. Por favor atualize a página.",
        });
      });
  };
  const beforeSave = () => {
    fieldVerification("nome", dados.nome.value, 1);
    fieldVerification("email", dados.email.value, 1);
    fieldVerification("senha", dados.senha.value, 1);
    fieldVerification("sexo", dados.sexo.value, 1);
    fieldVerification("idade", dados.idade.value, 1);
    fieldVerification("cidade", dados.cidade.value, 1);
    if (
      dados.nome.hasError === true ||
      dados.email.hasError === true ||
      dados.senha.hasError === true ||
      dados.sexo.hasError === true ||
      dados.idade.hasError === true ||
      dados.cidade.hasError === true
    ) {
      Toast.fire({
        icon: "error",
        title: "Verifique se todos os campos foram digitados certos.",
      });
    } else {
      fetchUsuario();
    }
  };
  return (
    <>
      <h1 className="scroll-none">Cadastro de usuário</h1>
      <div className="col p-0 fw-bolder mt-4">
        Nome{" "}
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
      <div className="col p-0 fw-bolder mt-4">
        Sexo{" "}
        <select
          className="form-select"
          onChange={(e) => handleChangeDados("sexo", "value", e.target.value)}
        >
          <option value="0" selected disabled>
            Selecionar...
          </option>
          <option>Feminino</option>
          <option>Masculino</option>
          <option>Prefiro não me identificar</option>
        </select>
        {dados.sexo.hasError ? (
          <div className="f-07 text-danger">{dados.sexo.errorMessage}</div>
        ) : null}
      </div>
      <div className="col p-0 fw-bolder mt-4">
        Idade{" "}
        <input
          type="number"
          className="form-control"
          placeholder="Digite sua idade"
          onChange={(e) => handleChangeDados("idade", "value", e.target.value)}
          onBlur={(e) => {
            fieldVerification("idade", e.target.value, 1);
          }}
        />
        {dados.idade.hasError ? (
          <div className="f-07 text-danger">{dados.idade.errorMessage}</div>
        ) : null}
      </div>
      <Estado setCity={setCity} />
      {dados.cidade.hasError ? (
        <div className="f-07 fw-bolder text-danger">
          {dados.cidade.errorMessage}
        </div>
      ) : null}
      <button className="btn-red p-1 mt-4" onClick={beforeSave}>
        Cadastrar
      </button>
      <a href="/login" className="f-08 text-center c-pointer mt-2 mb-4">
        <u>Já é cadastrado no hemo.loc? Faça seu login.</u>
      </a>
    </>
  );
};

export default FieldUsuario;
