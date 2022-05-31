import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Link, Typography, Box, Divider } from "@mui/material";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">{props.children}</Container>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
