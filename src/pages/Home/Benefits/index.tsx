import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DetailCard from "../../../components/Cards/DetailCard";
import IntroCard from "../../../components/Cards/IntroCard";
import Carousel from "../../../components/Carousel";
import Tabs from "../../../components/Tabs";
import { Text } from "../../../components/Text";
import { benefitsStyles } from "./styles";
import Button from "../../../components/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Benefits = () => {
  return (
    <Box sx={benefitsStyles.root}>
      <Box sx={benefitsStyles.benefitsRoot}>
        <IntroCard
          title={"Built for the most demanding video workflows."}
          dark
          info={
            "Designed for organizations working with video at scale -- turning raw, passive footage into a strategic asset teams can actually use."
          }
        />
        <Grid container sx={benefitsStyles.detailCardsCarousel}>
          <Grid
            size={{ xs: "auto", lg: 3 }}
            sx={benefitsStyles.detailCardCarouselItem}
          >
            <DetailCard
              title="Search & Discover"
              description="Search entire video libraries using natural language. Locate specific actions, scenes, dialogue, and even human emotions across hours or years of footage, no tags needed. One index. Every modality. SOTA composite accuracy."
            />
          </Grid>
          <Grid
            size={{ xs: "auto", lg: 3 }}
            sx={benefitsStyles.detailCardCarouselItem}
          >
            <DetailCard
              title="Search & Discover"
              description="Search entire video libraries using natural language. Locate specific actions, scenes, dialogue, and even human emotions across hours or years of footage, no tags needed. One index. Every modality. SOTA composite accuracy."
            />
          </Grid>
          <Grid
            size={{ xs: "auto", lg: 3 }}
            sx={benefitsStyles.detailCardCarouselItem}
          >
            <DetailCard
              title="Search & Discover"
              description="Search entire video libraries using natural language. Locate specific actions, scenes, dialogue, and even human emotions across hours or years of footage, no tags needed. One index. Every modality. SOTA composite accuracy."
            />
          </Grid>
          <Grid
            size={{ xs: "auto", lg: 3 }}
            sx={benefitsStyles.detailCardCarouselItem}
          >
            <DetailCard
              title="Search & Discover"
              description="Search entire video libraries using natural language. Locate specific actions, scenes, dialogue, and even human emotions across hours or years of footage, no tags needed. One index. Every modality. SOTA composite accuracy."
            />
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
              weight={500}
            >
              Designed for organizations working
              <br /> with video at scale -- turning raw,
              <br /> passive footage into a strategic asset
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
        <IntroCard
          title={"Built for every video workflow."}
          dark
          info={
            "Video intelligence for teams in media, sports, advertising, government, security, and more."
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

        <Grid size={{ xs: 6, md: 6 }} sx={{display : 'flex',alignItems:'center'}}>
          <Box sx={[benefitsStyles.layersRightPanel]}>
            <Text
              color="text.secondary"
              size="bigHeader"
              sx={benefitsStyles.titleText}
              weight={500}
            >
              Secure by design
            </Text>
            <Text
              color="text.secondary"
              size="body"
              weight={500}
              sx={benefitsStyles.bodyText}
            >
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
