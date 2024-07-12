import { Button, Container, TextField, Typography, } from "@mui/material";

import React, { useRef, useState } from "react";


export const InputSearch = () => {

  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null)

  const fetchBooks = async () => {
    const foundBook =inputRef.current.value;
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${foundBook}&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8`)
      if (!response.ok) {
        throw new Error(`El libro no existe en la libreria`)
      }
      const data = await response.json();
      setBooks(data)
      setError(null)

    } catch (error) {

      setError(error.message)
      setBooks(null);
    }
  }

  return (

    <Container elevation={4}>
      <h1>Busca tu libro</h1>
      <TextField
        onKeyDown={fetchBooks}
        inputRef={inputRef}
        fullWidth
        variant="standard"
        placeholder="Ingrese titulo del libro"
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={fetchBooks}
      >
        Buscar
      </Button>
      {error && (
        <Typography variant="body1" color={error}>
          {error}
        </Typography>
      )}
      {
        books && (
          <div>la data se mostrata en consola{console.log(books)}</div>
        )
      }
    </Container>


  );




};