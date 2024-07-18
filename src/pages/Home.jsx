import React from "react";
import { InputSearch } from "../components/InputSearch";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  return (
    <Item2>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Busca el nombre de un libro</Typography>
      </Grid>
      <Box   sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <InputSearch />

      </Box>
    </Item2>
  );
};
