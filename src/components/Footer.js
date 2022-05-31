import { Typography, Box, Grid } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <Box mb={3} mx={2} mt={4}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={12} align="center">
            <Typography variant="body2" color="inherit" align="center">
              {"Copyright © "}
              HydroGEN {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
export default Footer;
