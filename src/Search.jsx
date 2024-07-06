import React, { useEffect, useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
    useEffect 

  return (
    <div>
      <h1>busca un libro</h1>
        <input
          type="text"
          placeholder="Escribe el libro que buscas"
          value={search}
          onChange={(Event) => setSearch(Event.target.value)}
          onKeyDown={searchBook}
        />
        <button><i className="fas fa-search"></i></button>

    </div>
  );
};
