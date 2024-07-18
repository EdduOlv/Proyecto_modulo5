import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

export const Detail = () => {
  const { state } = useLocation();
  const book = state?.book;


  return (
    <Item2>
      <Box>
        <Grid container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
            sm={6}
          >
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Thumbnail" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid>
              <Typography variant="h5" gutterBottom>
                {book.volumeInfo.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Autor/es: {book.volumeInfo.authors}
              </Typography>
              {book.volumeInfo.publisher && (
                <Typography variant="subtitle1" gutterBottom>
                  Editorial: {book.volumeInfo.publisher}
                </Typography>
              )}
              {book.volumeInfo.publishedDate && (
                <Typography variant="subtitle1" gutterBottom>
                  Fecha de publicacion: {book.volumeInfo.publishedDate}
                </Typography>
              )}
              {book.volumeInfo.categories && (
                <Typography variant="subtitle1" gutterBottom>
                  Categoria: {book.volumeInfo.categories}
                </Typography>
              )}
              {book.volumeInfo.pageCount  && (
                <Typography variant="subtitle1" gutterBottom>
                  Paginas: {book.volumeInfo.pageCount}
                </Typography>
              )}
               {book.saleInfo.listPrice && (
                <Typography variant="subtitle1" gutterBottom>
                  Precio: $ {book.saleInfo.listPrice.amount}
                </Typography>
              )}
              {book.volumeInfo.description && (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Resumen</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{book.volumeInfo.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Item2>
  );
};
