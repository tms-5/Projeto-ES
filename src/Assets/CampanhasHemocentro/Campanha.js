import deleteImg from "../Img/delete.png";
import editImg from "../Img/pencil.png";

const Campanha = (prop) => {
  return (
    <div className="row mb-5 mt-2">
      <div className="col fw-500 c-red">
        <li key={prop.id}>{prop.nome}</li>{" "}
      </div>
      <div className="col-2 text-center">
        <button className="btn">
          <img src={deleteImg} width="15px" alt="Ícone de lixeira" />
        </button>
        <button className="btn">
          <img src={editImg} width="15px" alt="Ícone de um lápis" />
        </button>
      </div>
    </div>
  );
};
export default Campanha;
