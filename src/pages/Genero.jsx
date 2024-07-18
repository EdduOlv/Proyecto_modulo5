import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Resultados } from "../components/Resultados";

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));
const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const Genero = () => {
  const [gender, setGender] = useState("");
  const [relevance, setRelevance] = useState("orderBy=relevance&");
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const buttonRefs = useRef([]);

  const handleClick = (buttonText) => {
    if (buttonText !== "relevance") {
      setGender(`subject:${buttonText}&`);
      setRelevance("");
      setUpdate(!update);
    } else {
      setRelevance(`orderBy=${buttonText}&`);
      setGender("");
      setLoading(false);
      setUpdate(!update);
    }
  };

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${relevance}${gender}printType=books&maxResults=40&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8`
        );
        if (!response.ok) {
          throw new Error(`No se han encontrado los libros carga nuevamente`);
          setLoading(false);
        }
        const data = await response.json();
        setBooks(data.items);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setBooks(null);
        setLoading(false);
      }
    };
    fetchSubject();
  }, [update]);
  return (
    <Item2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item1>
              <Typography variant="h4">
                Busca algun genero en especifico
              </Typography>
            </Item1>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item1>
              {" "}
              <Button
                ref={(el) => (buttonRefs.current[0] = el)}
                onClick={() => handleClick("relevance")}
                variant="contained"
              >
                Relevancia
              </Button>
            </Item1>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item1>
              {" "}
              <Button
                ref={(el) => (buttonRefs.current[1] = el)}
                onClick={() => handleClick("romance")}
                variant="contained"
              >
                Romance
              </Button>
            </Item1>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item1>
              {" "}
              <Button
                ref={(el) => (buttonRefs.current[2] = el)}
                onClick={() => handleClick("fantasy")}
                variant="contained"
              >
                Fantasia
              </Button>
            </Item1>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item1>
              {" "}
              <Button
                ref={(el) => (buttonRefs.current[3] = el)}
                onClick={() => handleClick("education")}
                variant="contained"
              >
                Educativo
              </Button>
            </Item1>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item1>
              <Button
                ref={(el) => (buttonRefs.current[4] = el)}
                onClick={() => handleClick("juvenile")}
                variant="contained"
              >
                Juvenil
              </Button>
            </Item1>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item1>
              {" "}
              <Button
                ref={(el) => (buttonRefs.current[5] = el)}
                onClick={() => handleClick("horror")}
                variant="contained"
              >
                Horror
              </Button>
            </Item1>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "3.5rem" }}>
        <Resultados books={books} loading={loading} />
      </Box>
    </Item2>
  );
};
