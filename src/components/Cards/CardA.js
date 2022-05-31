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
      <Box sx={{ marginY: "2rem" }}>
        <Box alignItems={"center"}>
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              backgroundColor: "#e2e2e2",
              borderRadius: "100%",
            }}
          ></div>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography color="primary" variant="h6" align="center">
              Accessible
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardA;
