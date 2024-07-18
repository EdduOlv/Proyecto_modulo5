import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Resultados } from "./Resultados";

export const InputSearch = () => {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const inputRef = useRef(null);

  const fetchBooks = async () => {
    const foundBook = inputRef.current.value;
    try {
      setLoading(true)
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${foundBook}&maxResults=40&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8`
      );
      if (!response.ok) {
        throw new Error(`El libro no existe en la libreria`);
        setLoading(false)
      }
      const data = await response.json();
      setBooks(data.items);
      setError(null);
      setLoading(false)
    } catch (error) {
      setError(error.message);
      setBooks(null);
      setLoading(false)
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
      <TextField
        sx={{ maxWidth: 200 }}
        onKeyDown={fetchBooks}
        inputRef={inputRef}
        fullWidth
        variant="standard"
        placeholder="Ingrese titulo del libro"
        margin="normal"
      />
    <Button variant="contained" onClick={fetchBooks}>
        Buscar
      </Button>
      </Grid>
      <Grid></Grid>
      {error && (
        <Typography variant="body1" color={error}>
          {error}
        </Typography>
      )}
      

      <Resultados books={books} loading={loading} />
    </>
  );
};
