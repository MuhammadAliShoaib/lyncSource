import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "../../../components/Button";
import { Text } from "../../../components/Text";
import { ImageIntroStyles } from "./styles";
import { memo, type FC } from "react";

interface IImageIntro {
  onClick?: () => void;
  description: string;
  title: string;
  image: string;
  imageLeft?: boolean;
}

const ImageIntro: FC<IImageIntro> = ({
  onClick,
  title,
  description,
  image,
  imageLeft = true,
}) => {
  return (
    <Grid container sx={ImageIntroStyles.topGrid}>
      {imageLeft ? (
        <Grid size={{ xs: 6, md: 6 }} sx={[ImageIntroStyles.layersLeftPanel]}>
          <Box component="img" src={image} sx={ImageIntroStyles.layersImage} />
        </Grid>
      ) : null}

      <Grid
        size={{ xs: 6, md: 6 }}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box sx={[ImageIntroStyles.layersRightPanel]}>
          <Text size="bigHeader" sx={ImageIntroStyles.titleText} weight={500}>
            {title}
          </Text>
          <Text size="body" weight={500} sx={ImageIntroStyles.bodyText}>
            {description}
          </Text>

          {onClick ? (
            <Button
              onClick={onClick}
              Icon={ArrowOutwardIcon}
              text="Learn More"
              type="secondary"
            />
          ) : null}
        </Box>
      </Grid>
      {!imageLeft ? (
        <Grid size={{ xs: 6, md: 6 }} sx={[ImageIntroStyles.layersLeftPanel]}>
          <Box component="img" src={image} sx={ImageIntroStyles.layersImage} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default memo(ImageIntro);
