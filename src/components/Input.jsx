import React, { useState, useEffect } from "react";

export const Input = () => {
  const [value, setValue] = useState("");
  const [books, setBooks] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("la busqueda a iniciado");
    useEffect(() => {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          value +
          "&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("SE LLAMO A LA API");
          setBooks(data);
          console.log(books);
        })
        .catch((error) => console.log(error));
    }, []);
  };

  return (
    <div>
      <h1>busca tu imagen</h1>
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};
