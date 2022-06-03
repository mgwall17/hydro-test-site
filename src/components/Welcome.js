import * as React from "react";
import {
  Box,
  Paper,
  Avatar,
  Grid,
  IconButton,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
import HydroIconLarge from "../components/icons/HydroIconLarge";
import Image from "next/image";

// BANNER WOULD ONLY SHOW FOR LOGGED OUT VIEW

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
            <Grid item md={4}>
              <Image
                src="https://github.com/mgwall17/hydrogen-site/blob/main/public/images/squiggle2.png"
                height="500px"
                width="500px"
                layout="responsive"
              />
            </Grid>
            <Grid item md={4}>
              <Typography
                textAlign="center"
                variant="h2"
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
              <Typography
                textAlign="center"
                variant="h6"
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                The Accessible Supercomputing and <br /> Machine Learning Tool
                for Watershed Forecasting
                <br />
                <Button
                  variant="contained"
                  size="large"
                  sx={{ margin: "2rem" }}
                >
                  Sign Up
                </Button>
                <Button size="large" sx={{ margin: "2rem" }}>
                  Log In
                </Button>
              </Typography>
            </Grid>
            <Grid item md={4}>
              {" "}
              <Image
                src="https://github.com/mgwall17/hydrogen-site/blob/main/public/images/squiggle.png"
                height="500px"
                width="500px"
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default Welcome;
