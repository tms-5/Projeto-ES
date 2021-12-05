import deleteImg from "../Img/delete.png";
import editImg from "../Img/pencil.png";
import { doc, deleteDoc } from "firebase/firestore";
import db from "../../Axios/Firebase";
import { Link } from "react-router-dom";

const Campanha = (props) => {
  async function deletarCampanha(id) {
    await deleteDoc(doc(db, "campanha", id));
    window.location.reload();
  }

  return (
    <div className="row mb-5 mt-2">
      <div className="col fw-500 c-red">
        <li>{props.post.data.nome}</li>
      </div>
      <div className="col-2 text-center">
        <button className="btn" onClick={() => deletarCampanha(props.post.id)}>
          <img src={deleteImg} width="15px" alt="Ícone de lixeira" />
        </button>
        <Link to={{ pathname: "/campanha", state: { id: props.post.id } }}>
          <button className="btn">
            <img src={editImg} width="15px" alt="Ícone de um lápis" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Campanha;
