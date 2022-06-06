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
            <Grid item xs={0} md={4}>
              <SquigglesL />
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
                color="secondary"
                sx={{ marginTop: "1rem" }}
              >
                Hydrologic scenario Generation for a changing world
              </Typography>
              <Typography
                textAlign="center"
                fontSize={"1.2rem"}
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                Our mission is to better predict and prepare for the risks we
                are facing by putting the best hydrologic science directly in
                the hands of decision makers.
                <br />
                <Typography
                  variant="overline"
                  fontSize={"1.2rem"}
                  color="textSecondary"
                  sx={{ margin: "2rem" }}
                >
                  App coming soon
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={0} md={4}>
              <SquigglesR style={{ display: "hidden" }} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default Welcome;
