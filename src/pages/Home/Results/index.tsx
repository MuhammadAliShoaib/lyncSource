import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordian from "../../../components/Accordian";
import IntroCard from "../../../components/Cards/IntroCard";
import { resultsStyles } from "./styles";

const Results = () => {
  return (
    <Box sx={resultsStyles.root}>
      <IntroCard
        title={"Results in minutes."}
        info={
          "Infrastructure for video intelligence, turning raw video into searchable, AI-ready data at massive scale."
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
