import * as React from "react";
import {
  Box,
  Paper,
  Avatar,
  IconButton,
  Typography,
  MenuItem,
  Container,
  Tooltip,
  Button,
} from "@mui/material";
import HydroIcon from "../components/icons/HydroIcon";

const Header = () => {
  return (
    <React.Fragment>
      <Paper elevation={3}>
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              padding: ".3rem",
              alignContent: "center",
              justifyContent: "space-between",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Box sx={{ alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    paddingTop: "3px",
                    paddingRight: ".3rem",
                  }}
                >
                  <HydroIcon />
                </Box>
                <Typography variant="h6" color="primary">
                  HydroGEN
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              {/* <MenuItem>About</MenuItem> <MenuItem>Media</MenuItem>
                <MenuItem>API</MenuItem>*/}
            </Box>
          </Box>
        </Container>
      </Paper>
      <Paper
        elevation={0}
        style={{
          background: "rgba(88, 127, 227, 1.0)",
          // eslint-disable-next-line no-dupe-keys
          background:
            "-webkit-linear-gradient(left, rgba(88, 127, 227, 1.0), rgba(17, 235, 213, 1.0))",
          // eslint-disable-next-line no-dupe-keys
          background:
            "-moz-linear-gradient(left, rgba(88, 127, 227, 1.0), rgba(17, 235, 213, 1.0))",
          // eslint-disable-next-line no-dupe-keys
          background:
            "linear-gradient(to right, rgba(88, 127, 227, 1.0), rgba(17, 235, 213, 1.0))",
        }}
        sx={{ height: ".5rem" }}
      ></Paper>
    </React.Fragment>
  );
};

export default Header;
