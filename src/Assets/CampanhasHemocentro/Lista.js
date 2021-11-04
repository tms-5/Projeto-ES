import { useState } from "react";
import deleteImg from "../Img/delete.png";
import editImg from "../Img/pencil.png";
import SearchBar from "./Search";

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.nome.toLowerCase();
    return postName.includes(query);
  });
};

const Lista = () => {
  const { search } = window.location;
  let data = require("../JSON/Campanha.json");
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(data, searchQuery);

  return (
    <div className="font-montserrat container mt-3">
      <div className="col text-end">
        <a href="/cadastro-campanha"><button className="btn-red f-08">Cadastrar campanha</button></a>
      </div>
      <div className="row">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="col fw-500">Nome</div>
        <div className="col-2 fw-500 text-center">Ação</div>
        <div className="linha-horizontal mb-3"></div>
        <ul>
          {filteredPosts.map((post) => (
            <div className="row mb-5 mt-2">
              <div className="col fw-500 c-red">
                <li key={post.id}>{post.nome}</li>{" "}
              </div>
              <div className="col-2 text-center">
                <button className="btn">
                  <img src={deleteImg} width="15px" />
                </button>
                <button className="btn">
                  <img src={editImg} width="15px" />
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
