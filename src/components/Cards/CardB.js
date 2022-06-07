import * as React from "react";
import {
  Box,
  Paper,
  Avatar,
  IconButton,
  Typography,
  MenuItem,
  Tooltip,
  Button,
} from "@mui/material";

const CardA = () => {
  return (
    <React.Fragment>
      <Box sx={{ marginY: "2rem", height: "15.625rem" }}>
        <Box alignItems={"center"}>
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              backgroundImage: "url(/images/card2.png)",
              backgroundSize: "cover",
              borderRadius: "100%",
            }}
          ></div>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography color="primary" variant="h6" align="center">
              More than just streamflow
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography align="center">
              We provide analysis of the entire watershed including snowpack,
              soil moisture and groundwater allowing users to get a complete
              picture of water availability.
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardA;
