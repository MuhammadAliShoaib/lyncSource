import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar";
import Welcome from "./Welcome";
import Results from "./Results";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <AppBar />
      <Welcome />
      <Results />
      <Benefits />
    </Box>
  );
};

export default Home;
