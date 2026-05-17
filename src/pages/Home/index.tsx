import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "../../components/AppBar";
import Button from "../../components/Button";
import { Text } from "../../components/Text";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <AppBar />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/sample.mp4" type="video/mp4" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
            zIndex: 1,
          }}
        />

        <Grid
          container
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            px: { xs: 3, md: 10 },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: 600 }}>
              <Text size="bigHeader">See the unseen. Know the unknowable</Text>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  onClick={() => {}}
                  text="Try on Playground"
                  Icon={ArrowOutwardIcon}
                />
                <Button
                  onClick={() => {}}
                  outlined
                  text="Talk to Sales"
                  Icon={ArrowOutwardIcon}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
