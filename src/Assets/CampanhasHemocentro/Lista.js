import { useEffect, useState } from "react";
import deleteImg from "../Img/delete.png";
import editImg from "../Img/pencil.png";
import SearchBar from "./Search";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import db from "../../Axios/Firebase";
import Campanha from "./Campanha";

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

  useEffect(() => {
    async function importQuery() {
      const q = query(
        collection(db, "campanha"),
        where("hemocentro", "==", props.id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        handleChangeDados(doc.data(), doc.id);
      });
    }
    importQuery();
  }, []);

  const handleChangeDados = (data, id) => {
    setCampanha((prevState) => [...prevState, { data, id }]);
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
          {filteredPosts.map((post, i) => (
            <Campanha key={i} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lista;
