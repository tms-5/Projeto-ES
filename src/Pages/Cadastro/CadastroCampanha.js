import ViaCep from "react-via-cep/dist/components/ViaCep";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import { useEffect, useState } from "react";
import FieldHorario from "./FieldHorario";
import Toast from "../../Assets/Toast/Toast.js";
import API from "../../Axios/API";

const CadastroCampanha = () => {
  const [endereco, setEndereco] = useState({});
  const [cep, setCep] = useState("");
  const [validado, setValidado] = useState(false);
  const [horario, setHorario] = useState([]);
  const [dados, setDados] = useState({
    nome: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    data: {
      hasError: false,
      value: "",
      errorMessage: "Data da campanha não pode ficar vazia.",
    },
    cidade: {
      hasError: false,
      value: "",
      errorMessage: "Insira uma região válida.",
    },
    complemento: {
      hasError: false,
      value: "",
      errorMessage: "Campo de complemento não pode ficar em branco.",
    },
    horario: {
      hasError: false,
      value: horario,
      errorMessage: "Campos dos horários não podem ficar em branco.",
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
    return;
  };

  const fieldVerification = (field, value, size) => {
    if (value === "" || value === " " || value.length <= size) {
      handleChangeDados(field, "hasError", true);
    } else {
      handleChangeDados(field, "hasError", false);
    }
  };

  const emptyValidation = () => {
    horario.map((content, i) => {
      if (content.das === "" || content.as === "") {
        handleChangeDados("horario", "hasError", true);
      }
      return;
    });
    return;
  };

  useEffect(() => {
    handleChangeDados("horario", "value", horario);
  }, [validado]);

  const fetchCampanhas = async () => {
    await API.post("/campanha", {
      nome: dados.nome.value,
      data: dados.data.value,
      cidade: dados.cidade.value,
      complemento: dados.complemento.value,
      horario: dados.complemento.value,
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
    emptyValidation();
    if (
      dados.nome.hasError === true ||
      dados.data.hasError === true ||
      dados.cidade.hasError === true ||
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
    <div className="font-montserrat p-relative" id="CadastroCampanha">
      <Topbar />
      <div className="mt-5">
        <Inicio text={"Cadastre uma campanha"} ilustracao={false} />
      </div>
      <div className="container" style={{ minHeight: "58vh" }}>
        <div className="row">
          <div className="col">
            <div>Nome da campanha</div>
            <input
              type="text"
              className="form-control f-09"
              placeholder="Digite o nome da campanha"
              onChange={(e) =>
                handleChangeDados("nome", "value", e.target.value)
              }
              onBlur={(e) => {
                fieldVerification("nome", e.target.value, 1);
              }}
            />
            {dados.nome.hasError ? (
              <div className="f-07 text-danger">{dados.nome.errorMessage}</div>
            ) : null}
          </div>
          <div className="col">
            <div>Data da campanha</div>
            <div className="d-flex align-center">
              <input
                type="date"
                className="form-control f-09 w-50 mr-1r"
                placeholder="Digite o complemento do endereço"
                id="DataInicioCampanha"
              />
              até
              <input
                type="date"
                className="form-control f-09 w-50 ml-1r"
                placeholder="Digite o complemento do endereço"
                onBlur={(e) =>
                  handleChangeDados(
                    "data",
                    "value",
                    document.querySelector("#DataInicioCampanha") +
                      e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <ViaCep cep={cep} lazy>
              {({ data, fetch }) => {
                if (data) {
                  setEndereco(data);
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
          <div className="col">
            <div>Endereço da campanha</div>
            <input
              type="text"
              className="form-control f-09"
              value={endereco.logradouro}
              readOnly
            />
          </div>
          <div className="row mt-4 m-0">
            <div>Complemento do endereço</div>
            <input
              type="text"
              className="form-control f-09"
              placeholder="Digite o complemento do endereço"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div>Horário da campanha</div>
          <FieldHorario setHorario={setHorario} setValidado={setValidado} />
        </div>
        <div className="col text-end mt-4 mb-3">
          <button className="btn-red f-09" onClick={() => beforeSave()}>
            Cadastrar campanha
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CadastroCampanha;
