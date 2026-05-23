import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Carousel from "../../../components/Carousel";
import Tabs from "../../../components/Tabs";
import { Text } from "../../../components/Text";
import { benefitsStyles } from "./styles";

const Benefits = () => {
  return (
    <Box sx={benefitsStyles.root}>
      <Box sx={benefitsStyles.benefitsRoot}>
        <Grid container sx={benefitsStyles.topGrid}>
          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.leftPanel}>
            <Text
              size="bigHeader"
              sx={benefitsStyles.titleText}
              color="text.secondary"
              weight={500}
            >
              Built for the most demanding video workflows.
            </Text>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.rightPanel}>
            <Text
              size="body"
              sx={benefitsStyles.bodyText}
              color="text.secondary"
            >
              Designed for organizations working
              <br /> with video at scale -- turning raw,
              <br /> with video at scale -- turning raw,
              <br /> teams can actually use.
            </Text>
          </Grid>
        </Grid>
        <Grid container sx={benefitsStyles.topGrid2}>
          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.leftPanel2}>
            <Text
              size="bigHeader"
              sx={benefitsStyles.titleText}
              color="text.secondary"
              weight={500}
            >
              Create, scale & move faster with video
            </Text>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.rightPanel2}>
            <Text
              size="body"
              sx={benefitsStyles.bodyText}
              color="text.secondary"
            >
              Designed for organizations working
              <br /> with video at scale -- turning raw,
              <br /> with video at scale -- turning raw,
              <br /> teams can actually use.
            </Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={benefitsStyles.leftPanel3}>
            <Text
              size="bigHeader"
              sx={benefitsStyles.titleText}
              color="text.secondary"
              weight={500}
            >
              +13.1%
            </Text>
            <Text
              size="header"
              sx={benefitsStyles.statText}
              color="text.secondary"
            >
              Pegasus 1.5 over Gemini 3.1 Pro on Multimodal Prompting
            </Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={benefitsStyles.leftPanel3}>
            <Text
              size="bigHeader"
              sx={benefitsStyles.titleText}
              color="text.secondary"
              weight={500}
            >
              10x
            </Text>
            <Text
              size="header"
              sx={benefitsStyles.statText}
              color="text.secondary"
            >
              Pegasus 1.5 over Gemini 3.1 Pro on Multimodal Prompting
            </Text>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={benefitsStyles.leftPanel3}>
            <Text
              size="bigHeader"
              sx={benefitsStyles.titleText}
              color="text.secondary"
              weight={500}
            >
              4 hrs
            </Text>
            <Text
              size="header"
              sx={benefitsStyles.statText}
              color="text.secondary"
            >
              Pegasus 1.5 over Gemini 3.1 Pro on Multimodal Prompting
            </Text>
          </Grid>
        </Grid>
        <Grid container sx={benefitsStyles.topGrid}>
          <Grid size={{ xs: 12, md: 12 }} sx={benefitsStyles.trustedByWrapper}>
            <Box sx={benefitsStyles.trustedByBox}>
              <Text size="sub" color="text.secondary">
                TRUSTED BY
              </Text>
            </Box>
          </Grid>
          <Carousel />
        </Grid>
        <Grid container sx={benefitsStyles.topGrid}>
          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.leftPanel}>
            <Text
              size="bigHeader"
              sx={benefitsStyles.titleText}
              color="text.secondary"
              weight={500}
            >
              Built for every <br /> video workflow.
            </Text>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={benefitsStyles.rightPanel}>
            <Text
              size="body"
              sx={benefitsStyles.bodyText}
              color="text.secondary"
            >
              Video intelligence for teams in media,
              <br /> sports, advertising, government,
              <br /> security, and more.
            </Text>
          </Grid>
        </Grid>
      </Box>
      <Tabs />
    </Box>
  );
};

export default Benefits;
