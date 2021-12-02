import ViaCep from "react-via-cep/dist/components/ViaCep";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import FieldHorario from "./FieldHorario";

const FieldCampanha = forwardRef((props, ref) => {
  const [endereco, setEndereco] = useState({
    logradouro: "",
    localidade: "",
    uf: "",
  });
  const [cep, setCep] = useState("");
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
    endereco: {
      hasError: false,
      value: endereco.logradouro,
      errorMessage: "",
    },
    estado: {
      hasError: false,
      value: endereco.uf,
      errorMessage: "",
    },
    hemocentro: {
      hasError: false,
      value: props.hemocentro,
      errorMessage: "",
    },
    complemento: {
      hasError: false,
      value: "",
      errorMessage: "Campo de complemento não pode ficar em branco.",
    },
    observacao: {
      hasError: false,
      value: "",
      errorMessage: "",
    },
    horario: {
      hasError: true,
      value: horario,
      errorMessage: "Campos dos horários não podem ficar em branco.",
    },
  });

  useEffect(() => {
    handleChangeDados("horario", "value", horario);
  }, [horario]);

  useEffect(() => {
    emptyValidation();
  }, [dados.horario.value]);

  const emptyValidation = () => {
    let aux = false;
    horario.map((content) => {
      if (content.das === "" || content.as === "") {
        aux = true;
      }
    });
    return handleChangeDados("horario", "hasError", aux);
  };

  useImperativeHandle(ref, () => props.setDados(dados));

  useEffect(() => {
    handleChangeDados("cidade", "value", endereco.localidade);
    handleChangeDados("endereco", "value", endereco.logradouro);
    handleChangeDados("estado", "value", endereco.uf);
  }, [endereco]);

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

  return (
    <>
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
                onBlur={(e) =>
                  handleChangeDados(
                    "data",
                    "value",
                    new Date(e.target.value).toLocaleDateString("pt-BR", {
                      timeZone: "UTC",
                    }) +
                      " - " +
                      new Date(
                        document.querySelector("#DataFinalCampanha").value
                      ).toLocaleDateString("pt-BR", { timeZone: "UTC" })
                  )
                }
              />
              até
              <input
                type="date"
                className="form-control f-09 w-50 ml-1r"
                placeholder="Digite o complemento do endereço"
                id="DataFinalCampanha"
                onBlur={(e) =>
                  handleChangeDados(
                    "data",
                    "value",
                    new Date(
                      document.querySelector("#DataInicioCampanha").value
                    ).toLocaleDateString("pt-BR", { timeZone: "UTC" }) +
                      " - " +
                      new Date(e.target.value).toLocaleDateString("pt-BR", {
                        timeZone: "UTC",
                      })
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
                      placeholder="Digite o CEP da campanha"
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
        </div>
        <div className="row mt-4">
          <div className="col">
            <div>Complemento do endereço</div>
            <input
              type="text"
              className="form-control f-09"
              onChange={(e) =>
                handleChangeDados("complemento", "value", e.target.value)
              }
              onBlur={(e) => {
                fieldVerification("complemento", e.target.value, 1);
              }}
            />
          </div>
          <div className="col">
            <div>Observação</div>
            <input
              type="text"
              className="form-control f-09"
              onChange={(e) =>
                handleChangeDados("observacao", "value", e.target.value)
              }
              onBlur={(e) => {
                fieldVerification("observacao", e.target.value, 1);
              }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div>Horário da campanha</div>
          <FieldHorario setHorario={setHorario} />
        </div>
      </div>
    </>
  );
});
export default FieldCampanha;
