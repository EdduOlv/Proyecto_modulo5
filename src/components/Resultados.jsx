import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BookCard } from "./BookCard";

export const Resultados = ({ books, loading }) => {

  return (
    <>
      <Box books={books} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <BookCard books={books} loading={loading} />
        </Grid>
      </Box>
    </>
  );
};
