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
              backgroundImage: "url(/images/card1.png)",
              backgroundSize: "cover",
              borderRadius: "100%",
            }}
          ></div>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography color="primary" variant="h6" align="center">
              On demand watershed forecasts
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography align="center">
              Users can quickly explore current and future watershed conditions
              anywhere in the US without any modeling experience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardA;
