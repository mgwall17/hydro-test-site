import * as React from "react";
import { Box, Paper, Link, Avatar, Grid, IconButton, Typography, Button, Tooltip, } from "@mui/material";
import HydroIconLarge from "../components/icons/HydroIconLarge";
import Image from "next/image";
import SquigglesL from "../../public/images/squigglesL";
import SquigglesR from "../../public/images/squigglesR";
import { OpenInNew } from "@mui/icons-material";

const Welcome = () => {
  return (
    <React.Fragment>
      <Box sx={{ marginBottom: "1rem", marginTop: "1rem" }}>
        <Paper>
          <Grid
            container
            direction="row"
            display="flex"
            justifyContent="space-evenly"
            alignContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={0} md={3}>
              <Box
                component="div"
                sx={{ display: { sm: "none", md: "block" } }}
              >
                <SquigglesL />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography
                textAlign="center"
                variant="h2"
                component={"p"}
                color="secondary"
                fontSize={"2em"}
              >
                Welcome to
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Box>
                  <HydroIconLarge />
                </Box>
                <Box>
                  <Typography variant="h2" color="secondary">
                    <Box component="span" style={{ fontWeight: "bolder" }}>
                      Hydro
                    </Box>
                    <Box component="span" style={{ fontWeight: "bold" }}>
                      GEN
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                <Typography
                  variant="h5"
                  fontSize="2rem"
                  color="secondary"
                >
                  Hydrologic Scenario Generation <br /> for a Changing World</Typography>
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                mt={2}
                display="flex"
                direction="column"
              >
                <Box><Button endIcon={<OpenInNew />} size="large" variant="contained" target="_blank" href="https://hydrogen.princeton.edu/">
                  Open Application
                </Button></Box></Box>
              <Box justifyContent="center"
                alignItems="center"
                alignContent="center"
                my={2}
                display="flex"
                direction="column">
                <Link style={{ fontWeight: 'bold' }} href="https://forms.gle/7wxG2DGibFEu4QWZ9" target="_blank">
                  Subscribe for Future Release
                </Link>
              </Box>
            </Grid>
            <Grid item xs={0} md={3}>
              <Box
                component="div"
                sx={{ display: { sm: "none", md: "block" } }}
              >
                <SquigglesR />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default Welcome;
