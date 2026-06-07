import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "../../../components/Button";
import IntroCard from "../../../components/Cards/IntroCard";
import Carousel from "../../../components/Carousel";
import Tabs from "../../../components/Tabs";
import { Text } from "../../../components/Text";
import { benefitsStyles } from "./styles";

const Benefits = () => {
  return (
    <Box sx={benefitsStyles.root}>
      <Box sx={benefitsStyles.benefitsRoot}>
        <IntroCard
          title={"Built for Scale."}
          info={
            "Designed for organizations seeking digital transformation—turning ideas, processes, and challenges into scalable software solutions that drive growth and efficiency."
          }
        />

        <Grid container sx={benefitsStyles.topGrid2}>
          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.leftPanel2}>
            <Text size="bigHeader" sx={benefitsStyles.titleText} weight={500}>
              Accelerate your digital growth
            </Text>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.rightPanel2}>
            <Text size="body" sx={benefitsStyles.bodyText} weight={500}>
              Built for organizations seeking scalable technology solutions that
              improve efficiency, enhance customer experiences, and drive
              long-term success.
            </Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={benefitsStyles.leftPanel3}>
            <Text size="bigHeader" sx={benefitsStyles.titleText} weight={500}>
              +35%
            </Text>
            <Text size="header" sx={benefitsStyles.statText}>
              Increase in customer engagement through better digital experiences
            </Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={benefitsStyles.leftPanel3}>
            <Text size="bigHeader" sx={benefitsStyles.titleText} weight={500}>
              24/7
            </Text>
            <Text size="header" sx={benefitsStyles.statText}>
              Digital systems designed for continuous business operations
            </Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={benefitsStyles.leftPanel3}>
            <Text size="bigHeader" sx={benefitsStyles.titleText} weight={500}>
              +45%
            </Text>
            <Text size="header" sx={benefitsStyles.statText}>
              Boost in productivity with tailored business solutions
            </Text>
          </Grid>
        </Grid>
        <Grid container sx={benefitsStyles.topGrid}>
          <Grid size={{ xs: 12, md: 12 }} sx={benefitsStyles.trustedByWrapper}>
            <Box sx={benefitsStyles.trustedByBox}>
              <Text size="sub">TRUSTED BY</Text>
            </Box>
          </Grid>
          <Carousel />
        </Grid>
        <IntroCard
          title={"Built for every business challenge."}
          info={
            "Custom software solutions for startups, enterprises, healthcare, fintech, e-commerce, logistics, and more."
          }
        />
      </Box>
      <Tabs />
      <Grid container sx={benefitsStyles.topGrid}>
        <Grid size={{ xs: 6, md: 6 }} sx={[benefitsStyles.layersLeftPanel]}>
          <Box
            component="img"
            src={"/layers.png"}
            sx={benefitsStyles.layersImage}
          />
        </Grid>

        <Grid
          size={{ xs: 6, md: 6 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box sx={[benefitsStyles.layersRightPanel]}>
            <Text size="bigHeader" sx={benefitsStyles.titleText} weight={500}>
              Secure by design
            </Text>
            <Text size="body" weight={500} sx={benefitsStyles.bodyText}>
              SOC 2 Type II certified. Encrypted data handling. The entire
              intelligence stack deploys where you want.
            </Text>

            <Button
              onClick={() => {}}
              Icon={ArrowOutwardIcon}
              text="Learn More"
              type="secondary"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Benefits;
