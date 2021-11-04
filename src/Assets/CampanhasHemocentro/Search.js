import { useHistory } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={onSubmit}
      className="d-flex mt-4 mb-5"
    >
      <label className="pr-1r align-self-center">Pesquisar</label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        className="form-control pr-2"
        placeholder="Digite o nome da campanha"
        name="s"
      />
    </form>
  );
};

export default SearchBar;
