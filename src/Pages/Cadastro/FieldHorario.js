import e from "cors";
import { useState } from "react";
import save from "../../Assets/Img/save.png";

const FieldHorario = () => {
  const [horarios, setHorario] = useState([
    { dia: "segunda", horario: "" },
    { dia: "terca", horario: "" },
    { dia: "quarta", horario: "" },
    { dia: "quinta", horario: "" },
    { dia: "sexta", horario: "" },
    { dia: "sabado", horario: "" },
    { dia: "domingo", horario: "" },
  ]);
  const [segunda, setSegunda] = useState({ das: "05", as: "17" });
  const handleChangeHorario = (value, position) => {
    setHorario(() =>
      horarios.map((content, i) =>
        i === position ? {dia: content.dia, horario: value } : content
      )
    );
  };

  return (
    <>
      <div className="col">
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">SEG</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
            onChange={(e) => setSegunda({ das: e.target.value })}
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
            onChange={(e) => setSegunda({ as: e.target.value })}
          />
          <button
            className="btn-red"
            style={{ padding: "0px 10px" }}
            onClick={() =>
              handleChangeHorario(`Das ${segunda.das}h às ${segunda.as}h`, 0)
            }
          >
            <img src={save} width="10px" />
          </button>
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">TER</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
          />
          <button className="btn-red " style={{ padding: "0px 10px" }}>
            <img src={save} width="10px" />
          </button>
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">QUA</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
          />
          <button className="btn-red " style={{ padding: "0px 10px" }}>
            <img src={save} width="10px" />
          </button>
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">QUI</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
          />{" "}
          <button className="btn-red " style={{ padding: "0px 10px" }}>
            <img src={save} width="10px" />
          </button>
        </div>
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">SEX</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
          />{" "}
          <button className="btn-red " style={{ padding: "0px 10px" }}>
            <img src={save} width="10px" />
          </button>
        </div>
      </div>
      <div className="col">
        <div className="d-flex mt-1">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">SÁB</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
          />{" "}
          <button className="btn-red " style={{ padding: "0px 10px" }}>
            <img src={save} width="10px" />
          </button>
        </div>
        <div className="d-flex mt-2">
          <div class="circle mr-1r">
            <p class="circle-content f-09 fw-500">DOM</p>
          </div>
          <input
            type="number"
            className="form-control f-09 w-25 mr-1r"
            placeholder="Das"
          />
          -
          <input
            type="number"
            className="form-control f-09 w-25 ml-1r mr-1r"
            placeholder="às"
          />{" "}
          <button className="btn-red " style={{ padding: "0px 10px" }}>
            <img src={save} width="10px" />
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default FieldHorario;
