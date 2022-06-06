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
      <Box sx={{ marginY: "2rem", height: "250px" }}>
        <Box alignItems={"center"}>
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              backgroundImage: "url(/images/card3.png)",
              backgroundSize: "cover",
              borderRadius: "100%",
            }}
          ></div>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography color="primary" variant="h6" align="center">
              Seasonal outlooks
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography align="center">
              We go beyond two week weather forecasts to provide ensembles of
              seasonal forecasts, providing the lead time needed for decision
              makers and planners.
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardA;
