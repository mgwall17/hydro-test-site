import Layout from "../components/Layout";
import {
  Paper,
  Avatar,
  Divider,
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";
import Welcome from "../components/Welcome";
import CardA from "../components/Cards/CardA";
import CardB from "../components/Cards/CardB";
import CardC from "../components/Cards/CardC";
import { mdiWater } from "@mdi/js";
import Icon from "@mdi/react";

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: "5rem" }}
        >
          <Box>
            <Typography
              textAlign="center"
              variant="h5"
              fontSize="1.8rem"
              component="h3"
              color="primary"
              sx={{ marginTop: "5rem" }}
            >
              Our mission is to better predict and prepare for the risks we are
              facing by putting the best hydrologic science directly in the
              hands of decision makers.
            </Typography>
          </Box>
          <Grid item sm={12} md={4}>
            <CardA />
          </Grid>
          <Grid item sm={12} md={4}>
            <CardB />
          </Grid>
          <Grid item sm={12} md={4}>
            <CardC />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent={"center"} spacing={2}>
          <Grid item md={6}>
            <Box
              display="flex"
              justifyContent={"flex-start"}
              alignItems={"center"}
              sx={{ marginBottom: "1rem" }}
            >
              <Box sx={{ marginTop: ".2rem" }}>
                <Icon path={mdiWater} size={2} color="#1981bc" />
              </Box>
              <Typography variant="h4" color="primary">
                How do we do it?
              </Typography>
            </Box>
            <Typography sx={{ lineHeight: 1.7 }}>
              We train machine learning models on advanced physics based
              simulations and observations. These machine learning models allow
              users to explore watershed conditions and build customized
              scenarios on the fly without the extensive time and expertise
              typically needed to build a custom watershed model.
            </Typography>

            <Box
              display="flex"
              justifyContent={"flex-start"}
              alignItems={"center"}
              sx={{ marginTop: "2rem", marginBottom: "1rem" }}
            >
              <Box sx={{ marginTop: ".2rem" }}>
                <Icon path={mdiWater} size={2} color="#1981bc" />
              </Box>
              <Typography variant="h4" color="primary">
                Our Team
              </Typography>
            </Box>
            <Typography sx={{ lineHeight: 1.7 }}>
              Our team is an interdisciplinary group of hydrologists, software
              engineers, data scientists and machine learning specialists,
              working in academia, government and private industry. We came
              together through the NSF convergence accelerator program with the
              shared vision of improving hydrologic forecasts.
            </Typography>
            <Box
              display="flex"
              justifyContent={"flex-start"}
              alignItems={"center"}
              sx={{ marginTop: "2rem", marginBottom: "1rem" }}
            >
              <Box sx={{ marginTop: ".2rem" }}>
                <Icon path={mdiWater} size={2} color="#1981bc" />
              </Box>
              <Typography variant="h4" color="primary">
                Our application is coming soon!
              </Typography>
            </Box>
            <Typography sx={{ lineHeight: 1.7 }}>
              Please check back for more information when it is released.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <div
              style={{
                backgroundImage: "url(/images/Drew-Bennett.jpg)",
                backgroundSize: "cover",
                width: "100%",
                minWidth: "500px",
                minHeight: "50vh",
                height: "100%",
                backgroundPosition: "center",
                borderRadius: "5px",
              }}
            ></div>
            <Typography
              variant="subtitle2"
              textAlign="center"
              fontSize={".7rem"}
            >
              Photos by Drew Bennett
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
