import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Text } from "../../../components/Text";
import Button from "../../../components/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Accordian from "../../../components/Accordian";
import { resultsStyles } from "./styles";

const Results = () => {
  return (
    <Box sx={resultsStyles.root}>
      <Grid container sx={resultsStyles.topGrid}>
        <Grid size={{ xs: 12, md: 6 }} sx={resultsStyles.leftPanel}>
          <Text size="bigHeader" sx={resultsStyles.titleText}>
            Results in minutes.
          </Text>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={resultsStyles.rightPanel}>
          <Text size="body" sx={resultsStyles.bodyText}>
            Infrastructure for video intelligence,
            <br /> turning raw video into searchable,
            <br /> AI-ready data at massive scale.
          </Text>

          <Button
            onClick={() => {}}
            Icon={ArrowOutwardIcon}
            text="Developer Hub"
            outlined
          />
        </Grid>
      </Grid>

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