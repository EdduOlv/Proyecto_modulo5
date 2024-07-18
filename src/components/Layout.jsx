import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { SideNav } from "./SideNav";

export const Layout = () => {
  return (
    <>
      <Box sx={{ display: "flex",  backgroundColor: "#F4F4EFff"}}>
        <SideNav />
        <Container
          fixed
          sx={{
            marginTop: "2rem",
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%", marginTop: "3.5rem", }} >
            <Outlet />
          </Box>
        </Container>
      </Box>
    </>
  );
};
