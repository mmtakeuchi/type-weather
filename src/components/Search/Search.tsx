import React, { useState } from "react";
import "./Search.scss";

type Props = {};

const Search = (props: Props) => {
  const [query, setQuery] = useState<string>("");
  console.log(query);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
