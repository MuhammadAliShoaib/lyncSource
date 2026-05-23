import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar";
import Welcome from "./Welcome";
import Results from "./Results";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <AppBar />
      <Welcome />
      <Results />
    </Box>
  );
};

export default Home;
