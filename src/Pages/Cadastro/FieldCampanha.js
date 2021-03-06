import ViaCep from "react-via-cep/dist/components/ViaCep";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import FieldHorario from "./FieldHorario";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

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
    dataInicial: {
      hasError: false,
      value: "",
      errorMessage: "Data inicial campanha não pode ficar vazia.",
    },
    dataFinal: {
      hasError: false,
      value: "",
      errorMessage: "Data final da campanha não pode ficar vazia.",
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
      value: "",
      errorMessage: "",
    },
    complemento: {
      hasError: false,
      value: "",
      errorMessage: "Campo de complemento não pode ficar em branco.",
    },
    observacao: {
      hasError: false,
      value: " ",
      errorMessage: "",
    },
    horario: {
      hasError: true,
      value: horario,
      errorMessage: "Campos dos horários não podem ficar em branco.",
    },
  });
  const [campanha, setCampanha] = useState({
    horario: [{}, {}, {}, {}, {}, {}, {}],
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

  useEffect(() => {
    if (props.campanha) {
      setCampanha(props.campanha);
    }
  }, [props.campanha]);

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

  useEffect(() => {
    teste();
  }, [campanha]);

  const teste = () => {
    handleChangeDados("nome", "value", campanha.nome);
    handleChangeDados("endereco", "value", campanha.endereco);
    handleChangeDados("dataInicial", "value", campanha.dataInicial);
    handleChangeDados("dataFinal", "value", campanha.dataFinal);
    handleChangeDados("complemento", "value", campanha.complemento);
    handleChangeDados("observacao", "value", campanha.observacao);
    handleChangeDados("nome", "value", campanha.nome);
    handleChangeDados("estado", "value", campanha.estado);
    handleChangeDados("hemocentro", "value", campanha.hemocentro);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Caso a campanha não funcione em algum dia, clique no X à direita de cada
      campo.
    </Tooltip>
  );

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
              value={dados.nome.value}
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
                placeholder={dados.dataInicial.value}
                type="text"
                className="form-control f-09 w-50 mr-1r"
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                onBlur={(e) =>
                  handleChangeDados(
                    "dataInicial",
                    "value",
                    new Date(e.target.value).toLocaleDateString("pt-BR", {
                      timeZone: "UTC",
                    })
                  )
                }
              />
              até
              <input
                type="text"
                className="form-control f-09 w-50 ml-1r"
                placeholder={dados.dataFinal.value}
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                onBlur={(e) =>
                  handleChangeDados(
                    "dataFinal",
                    "value",
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
              value={dados.endereco.value}
              readOnly
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div>Estado</div>
            <input
              type="text"
              className="form-control f-09"
              value={dados.estado.value}
              onChange={(e) =>
                handleChangeDados("estado", "value", e.target.value)
              }
              onBlur={(e) => {
                fieldVerification("estado", e.target.value, 1);
              }}
              readOnly
            />
          </div>
          <div className="col">
            <div>Complemento do endereço</div>
            <input
              type="text"
              className="form-control f-09"
              value={dados.complemento.value}
              onChange={(e) =>
                handleChangeDados("complemento", "value", e.target.value)
              }
              onBlur={(e) => {
                fieldVerification("complemento", e.target.value, 1);
              }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div>Observação</div>
            <input
              type="text"
              className="form-control f-09"
              value={dados.observacao.value}
              onChange={(e) =>
                handleChangeDados("observacao", "value", e.target.value)
              }
            />
          </div>
        </div>
        <div className="row mt-4">
          <div>
            Horário da campanha
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button
                variant="success"
                className="b-none bg-transparent c-black f-07 ml-1r"
                style={{
                  border: "1px solid gray",
                  borderRadius: "50px",
                }}
              >
                ?
              </Button>
            </OverlayTrigger>
          </div>
          {props.campanha ? (
            <FieldHorario setHorario={setHorario} horario={campanha.horario} />
          ) : (
            <FieldHorario setHorario={setHorario} />
          )}
        </div>
      </div>
    </>
  );
});
export default FieldCampanha;
