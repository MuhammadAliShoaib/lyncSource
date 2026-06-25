import Box from "@mui/material/Box";
import Welcome from "./Welcome";
import Results from "./Results";
import Benefits from "./Benefits";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <Box>
      <Welcome />
      <Results />
      <Benefits />
      <FAQ />
    </Box>
  );
};

export default Home;
