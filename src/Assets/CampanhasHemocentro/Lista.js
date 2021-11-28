import { useEffect, useState } from "react";
import deleteImg from "../Img/delete.png";
import editImg from "../Img/pencil.png";
import SearchBar from "./Search";
import Toast from "../Toast/Toast.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../Axios/Firebase";

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.nome.toLowerCase();
    return postName.includes(query);
  });
};

const Lista = (props) => {
  const { search } = window.location;
  const [campanha, setCampanha] = useState([]);
  const queries = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(queries || "");
  const filteredPosts = filterPosts(campanha, searchQuery);

  useEffect(async () => {
    const q = query(
      collection(db, "campanha"),
      where("hemocentro", "==", props.id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      handleChangeDados(doc.data());
    });
  }, []);

  const handleChangeDados = (data) => {
    setCampanha((prevState) => [...prevState, data]);
  };

  return (
    <div className="font-montserrat container mt-3">
      <div className="col text-end">
        <a href="/cadastro-campanha">
          <button className="btn-red f-08">Cadastrar campanha</button>
        </a>
      </div>
      <div className="row">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="col fw-500">Nome</div>
        <div className="col-2 fw-500 text-center">Ação</div>
        <div className="linha-horizontal mb-3"></div>
        <ul style={{ minHeight: "60vh" }}>
          {filteredPosts.map((post) => (
            <div className="row mb-5 mt-2">
              <div className="col fw-500 c-red">
                <li key={post.id}>{post.nome}</li>{" "}
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lista;
