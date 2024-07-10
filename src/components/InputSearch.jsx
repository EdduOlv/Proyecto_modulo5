import React, { useState, useEffect } from "react";

export const InputSearch = () => {
  const [value, setValue] = useState("");
  const [books, setBooks] = useState(null);
  const [update, setUpdate] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };


  useEffect(() => {
    if (update) {
      const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + value + "&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8"
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("se llamo a la api");
          setBooks(data);
          if (books) {
            console.log(books);
            console.log("ahora si funciona");
          }else{
            console.log("no se pudo hacer nah papito");
          }
        });
      setUpdate(false);
    }
  }, [update,value]);

  return (
    <div>
      <h1>Busca tu libro</h1>
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setUpdate(!update);
          }
        }}
      />
    </div>
  );
};

