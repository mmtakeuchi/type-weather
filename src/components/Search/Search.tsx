import React, { useState } from "react";
import "./Search.scss";
import { ISearch } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ handleQuery }: ISearch) => {
  const [input, setInput] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleQuery(input);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <label>
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <input
        type="text"
        placeholder="Search Location"
        value={input}
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
