import { useEffect, useState } from "react";
import close from "../../Assets/Img/close.png";

const FieldHorario = (props) => {
  const [horario, setHorario] = useState([
    { dia: "Segunda", das: "", as: "" },
    { dia: "Terça", das: "", as: "" },
    { dia: "Quarta", das: "", as: "" },
    { dia: "Quinta", das: "", as: "" },
    { dia: "Sexta", das: "", as: "" },
    { dia: "Sábado", das: "", as: "" },
    { dia: "Domingo", das: "", as: "" },
  ]);

  const [segunda, setSegunda] = useState(false);
  const [terca, setTerca] = useState(false);
  const [quarta, setQuarta] = useState(false);
  const [quinta, setQuinta] = useState(false);
  const [sexta, setSexta] = useState(false);
  const [sabado, setSabado] = useState(false);
  const [domingo, setDomingo] = useState(false);

  useEffect(() => {
    if (props.horario) {
      setHorario(props.horario);
    }
  }, [props.horario]);

  const handleChangeHorario = (field, value, position) => {
    setHorario(() =>
      horario.map((content, i) =>
        i === position
          ? field === "das"
            ? { dia: content.dia, das: value, as: content.as }
            : { dia: content.dia, das: content.das, as: value }
          : content
      )
    );
  };
  const handleNotWorking = (position) => {
    setHorario(() =>
      horario.map((content, i) =>
        i === position ? { dia: content.dia, das: "-", as: "-" } : content
      )
    );
  };

  useEffect(
    function emptyValidation() {
      horario.map((content) => {
        if (content.das === "" || content.as === "") {
          return "";
        } else {
          return props.setHorario(horario);
        }
      });
    },
    [horario]
  );

  return (
    <>
      <div className="col">
        <div className="d-flex mt-1">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">SEG</p>
          </div>
          <input
            type={segunda ? "text" : "time"}
            id="DasSegunda"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[0].das}
            readOnly={segunda}
            onChange={(e) => handleChangeHorario("das", e.target.value, 0)}
          />
          -
          <input
            type={segunda ? "text" : "time"}
            id="AsSegunda"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[0].as}
            readOnly={segunda}
            onChange={(e) => handleChangeHorario("as", e.target.value, 0)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              segunda
                ? setSegunda(false)
                : (handleNotWorking(0), setSegunda(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">TER</p>
          </div>
          <input
            type={terca ? "text" : "time"}
            id="DasTerça"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[1].das}
            readOnly={terca}
            onChange={(e) => handleChangeHorario("das", e.target.value, 1)}
          />
          -
          <input
            type={terca ? "text" : "time"}
            id="AsTerça"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[1].as}
            readOnly={terca}
            onChange={(e) => handleChangeHorario("as", e.target.value, 1)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              terca ? setTerca(false) : (handleNotWorking(1), setTerca(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">QUA</p>
          </div>
          <input
            type={quarta ? "text" : "time"}
            id="DasQuarta"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[2].das}
            readOnly={quarta}
            onChange={(e) => handleChangeHorario("das", e.target.value, 2)}
          />
          -
          <input
            type={quarta ? "text" : "time"}
            id="AsQuarta"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[2].as}
            readOnly={quarta}
            onChange={(e) => handleChangeHorario("as", e.target.value, 2)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              quarta ? setQuarta(false) : (handleNotWorking(2), setQuarta(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">QUI</p>
          </div>
          <input
            type={quinta ? "text" : "time"}
            id="DasQuinta"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[3].das}
            readOnly={quinta}
            onChange={(e) => handleChangeHorario("das", e.target.value, 3)}
          />
          -
          <input
            type={quinta ? "text" : "time"}
            id="AsQuinta"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[3].as}
            readOnly={quinta}
            onChange={(e) => handleChangeHorario("as", e.target.value, 3)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              quinta ? setQuinta(false) : (handleNotWorking(3), setQuinta(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">SEX</p>
          </div>
          <input
            type={sexta ? "text" : "time"}
            id="DasSexta"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[4].das}
            readOnly={sexta}
            onChange={(e) => handleChangeHorario("das", e.target.value, 4)}
          />
          -
          <input
            type={sexta ? "text" : "time"}
            id="AsSexta"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[4].as}
            readOnly={sexta}
            onChange={(e) => handleChangeHorario("as", e.target.value, 4)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              sexta ? setSexta(false) : (handleNotWorking(4), setSexta(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex mt-1">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">SÁB</p>
          </div>
          <input
            type={sabado ? "text" : "time"}
            id="DasSabado"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[5].das}
            readOnly={sabado}
            onChange={(e) => handleChangeHorario("das", e.target.value, 5)}
          />
          -
          <input
            type={sabado ? "text" : "time"}
            id="AsSabado"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[5].as}
            readOnly={sabado}
            onChange={(e) => handleChangeHorario("as", e.target.value, 5)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              sabado ? setSabado(false) : (handleNotWorking(5), setSabado(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
        <div className="d-flex mt-2">
          <div className="circle mr-1r">
            <p className="circle-content f-09 fw-500">DOM</p>
          </div>
          <input
            type={domingo ? "text" : "time"}
            id="DasDomingo"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            value={horario[6].das}
            readOnly={domingo}
            onChange={(e) => handleChangeHorario("das", e.target.value, 6)}
          />
          -
          <input
            type={domingo ? "text" : "time"}
            id="AsDomingo"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            value={horario[6].as}
            readOnly={domingo}
            onChange={(e) => handleChangeHorario("as", e.target.value, 6)}
          />
          <div
            className="align-self-center"
            onClick={(e) =>
              domingo
                ? setDomingo(false)
                : (handleNotWorking(6), setDomingo(true))
            }
          >
            <img src={close} width="16px" />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default FieldHorario;
