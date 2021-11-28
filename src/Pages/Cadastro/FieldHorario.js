import { useEffect, useState } from "react";

const FieldHorario = (params) => {
  const [validado, setValidado] = useState(false);
  const [horario, setHorario] = useState([
    { dia: "Segunda", das: "", as: "" },
    { dia: "Terça", das: "", as: "" },
    { dia: "Quarta", das: "", as: "" },
    { dia: "Quinta", das: "", as: "" },
    { dia: "Sexta", das: "", as: "" },
    { dia: "Sábado", das: "", as: "" },
    { dia: "Domingo", das: "", as: "" },
  ]);

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

  useEffect(
    function emptyValidation() {
      horario.map((content) => {
        if (content.das === "" || content.as === "") {
          return setValidado(false);
        } else {
          return setValidado(true);
        }
      });
    },
    [horario]
  );

  useEffect(() => {
    params.setHorario(horario);
    params.setValidado(validado);
  }, [validado]);

  return (
    <>
      <div className="col">
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">SEG</p>
          </div>
          <input
            type="number"
            id="DasSegunda"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 0)}
          />
          -
          <input
            type="number"
            id="AsSegunda"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 0)}
          />
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">TER</p>
          </div>
          <input
            type="number"
            id="DasTerça"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 1)}
          />
          -
          <input
            type="number"
            id="AsTerça"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 1)}
          />
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">QUA</p>
          </div>
          <input
            type="number"
            id="DasQuarta"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 2)}
          />
          -
          <input
            type="number"
            id="AsQuarta"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 2)}
          />
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">QUI</p>
          </div>
          <input
            type="number"
            id="DasQuinta"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 3)}
          />
          -
          <input
            type="number"
            id="AsQuinta"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 3)}
          />{" "}
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">SEX</p>
          </div>
          <input
            type="number"
            id="DasSexta"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 4)}
          />
          -
          <input
            type="number"
            id="AsSexta"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 4)}
          />{" "}
        </div>
      </div>
      <div className="col">
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">SÁB</p>
          </div>
          <input
            type="text"
            id="DasSabado"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 5)}
          />
          -
          <input
            type="text"
            id="AsSabado"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 5)}
          />{" "}
        </div>
        <div className="d-flex mt-2">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">DOM</p>
          </div>
          <input
            type="text"
            id="DasDomingo"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onBlur={(e) => handleChangeHorario("das", e.target.value, 6)}
          />
          -
          <input
            type="text"
            id="AsDomingo"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onBlur={(e) => handleChangeHorario("as", e.target.value, 6)}
          />{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default FieldHorario;
