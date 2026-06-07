import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordian from "../../../components/Accordian";
import IntroCard from "../../../components/Cards/IntroCard";
import { resultsStyles } from "./styles";

const Results = () => {
  return (
    <Box sx={resultsStyles.root}>
      <IntroCard
        title={"Digital Innovation Engine."}
        info={
          "Building digital solutions that transform ideas into scalable, high-performance products."
        }
        onClick={() => {}}
      />

      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} sx={resultsStyles.bottomLeft}>
          <Accordian />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={resultsStyles.bottomRight}>
          <img src="/machine.png" style={resultsStyles.image} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Results;
