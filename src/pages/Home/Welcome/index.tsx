import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "../../../components/Button";
import { Text } from "../../../components/Text";
import { welcomeStyles } from "./styles";

const Welcome = () => {
  return (
    <Box sx={welcomeStyles.root}>
      <Box component="video" autoPlay muted loop playsInline sx={welcomeStyles.video}>
        <source src="/videos/sample.mp4" type="video/mp4" />
      </Box>

      <Box sx={welcomeStyles.overlay} />

      <Grid container sx={welcomeStyles.container}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={welcomeStyles.contentBox}>
            <Text size="bigHeader" sx={welcomeStyles.title}>
              See the unseen.
              <br /> Know the unknowable
            </Text>

            <Text size="subHeader" sx={welcomeStyles.subtitle}>
              Your video contains every insight, every event, every decision
              that mattered. Extracting it has been impossible. Until now.
            </Text>

            <Box sx={welcomeStyles.buttonRow}>
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
  );
};

export default Welcome;