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
import SquigglesL from "../../public/images/squigglesL";
import SquigglesR from "../../public/images/squigglesR";



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
              <SquigglesL />
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
              <Box>
                <Typography
                  textAlign="center"
                  variant="h5"
                  fontSize="2rem"
                  color="secondary"
                  sx={{ marginTop: "1rem" }}
                >
                  Hydrologic Scenario Generation <br /> for a Changing World
                  <br />
                  <Typography
                    variant="overline"
                    fontSize={"1.2rem"}
                    color="textSecondary"
                    textAlign="center"
                    sx={{ margin: "2rem" }}
                  >
                    App coming soon
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={0} md={3}>
              <SquigglesR style={{ display: "hidden" }} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default Welcome;
