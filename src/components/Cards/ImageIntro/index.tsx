import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "../../../components/Button";
import { Text } from "../../../components/Text";
import { imageIntroStyles } from "./styles";
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
  const imageOrder = imageLeft ? { xs: 1, md: 1 } : { xs: 1, md: 2 };
  const contentOrder = imageLeft ? { xs: 2, md: 2 } : { xs: 2, md: 1 };

  return (
    <Grid container sx={imageIntroStyles.topGrid}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={[imageIntroStyles.layersLeftPanel, { order: imageOrder }]}
      >
        <Box component="img" src={image} sx={imageIntroStyles.layersImage} />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        sx={[imageIntroStyles.contentPanel, { order: contentOrder }]}
      >
        <Box
          sx={[
            imageIntroStyles.layersRightPanel,
            imageLeft
              ? imageIntroStyles.borderLeft
              : imageIntroStyles.borderRight,
          ]}
        >
          <Text size="bigHeader" sx={imageIntroStyles.titleText} weight={500}>
            {title}
          </Text>
          <Text size="body" weight={500} sx={imageIntroStyles.bodyText}>
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
    </Grid>
  );
};

export default memo(ImageIntro);
