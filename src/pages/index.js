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
        >
          <Grid item md={4}>
            <CardA />
          </Grid>
          <Grid item md={4}>
            <CardB />
          </Grid>
          <Grid item md={4}>
            <CardC />
          </Grid>
        </Grid>

        <Box
          display="flex"
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ marginBottom: "1rem" }}
        >
          <Box sx={{ marginTop: ".2rem" }}>
            <Icon path={mdiWater} size={3} color="#1981bc" />
          </Box>
          <Typography variant="h4" color="primary">
            Why HydroGEN
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: 1.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in
          hendrerit gravida rutrum. Tempus urna et pharetra pharetra massa massa
          ultricies mi quis. Leo integer malesuada nunc vel risus commodo.
          Molestie at elementum eu facilisis sed odio morbi quis commodo.
          Venenatis urna cursus eget nunc scelerisque viverra mauris in. Orci
          phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Ac
          feugiat sed lectus vestibulum mattis ullamcorper. Sollicitudin nibh
          sit amet commodo nulla facilisi nullam. Mattis rhoncus urna neque
          viverra justo nec ultrices dui sapien. Semper quis lectus nulla at
          volutpat. Molestie at elementum eu facilisis. Ut etiam sit amet nisl
          purus. Turpis cursus in hac habitasse platea dictumst quisque.
        </Typography>

        <Box
          display="flex"
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ marginTop: "2rem", marginBottom: "1rem" }}
        >
          <Box sx={{ marginTop: ".2rem" }}>
            <Icon path={mdiWater} size={3} color="#1981bc" />
          </Box>
          <Typography variant="h4" color="primary">
            About the Project
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: 1.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in
          hendrerit gravida rutrum. Tempus urna et pharetra pharetra massa massa
          ultricies mi quis. Leo integer malesuada nunc vel risus commodo.
          Molestie at elementum eu facilisis sed odio morbi quis commodo.
          Venenatis urna cursus eget nunc scelerisque viverra mauris in. Orci
          phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Ac
          feugiat sed lectus vestibulum mattis ullamcorper. Sollicitudin nibh
          sit amet commodo nulla facilisi nullam. Mattis rhoncus urna neque
          viverra justo nec ultrices dui sapien. Semper quis lectus nulla at
          volutpat. Molestie at elementum eu facilisis. Ut etiam sit amet nisl
          purus. Turpis cursus in hac habitasse platea dictumst quisque.
        </Typography>
      </Container>
    </Layout>
  );
}
