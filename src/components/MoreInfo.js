import React from "react";
import { Box, Paper, Typography, Grid, Button, Link } from "@mui/material"

export default function MoreInfo() {
  return (
    <Paper style={{padding:'1rem 0 0rem 0rem',marginTop:'2rem'}}>
      <Box>
        <Box sx={{ width: '70%', margin: '0 auto',textAlign:'center' }}>
          <Typography variant="h4" color="primary" >New Release Coming Soon! </Typography>
          <Typography sx={{marginTop:'1rem',fontSize:'1.3rem'}}>Our first launch is being rolled out to a small set of users, if you would like more information or to be notified for access on our next launch <Link style={{fontWeight:'bold'}} href="https://forms.gle/7wxG2DGibFEu4QWZ9" target="_blank"> please subscribe here </Link>.
          </Typography></Box>
        <div style={{
          backgroundImage: "url(/images/people.png)",
          backgroundSize: "cover",
          width: "100%",
          minWidth: "500px",
          minHeight: "50vh",
          height: "100%",
          backgroundPosition: "center",
          borderRadius: "5px",
        }} />
      </Box>
    </Paper>
  );
}
