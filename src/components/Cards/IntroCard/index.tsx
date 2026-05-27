import Grid from "@mui/material/Grid";
import { memo, type FC } from "react";
import { Text } from "../../../components/Text";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Button from "../../Button";
import { introCardStyle } from "./styles";

interface IIntroCard {
  title: string;
  info: string;
  onClick?: () => void;
  dark?: boolean;
}

const IntroCard: FC<IIntroCard> = ({ title, info, onClick, dark = false }) => {
  const borderColor = { borderColor: dark ? "#1d1c1c33" : "#3a3a3a" };

  return (
    <Grid container sx={introCardStyle.topGrid}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={[introCardStyle.leftPanel, borderColor]}
      >
        <Text
          size="bigHeader"
          sx={introCardStyle.titleText}
          weight={500}
          color={dark ? "text.secondary" : "text.primary"}
        >
          {title}
        </Text>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={[introCardStyle.rightPanel,borderColor]}>
        <Text
          size="body"
          weight={500}
          color={dark ? "text.secondary" : "text.primary"}
          sx={introCardStyle.bodyText}
        >
          {info}
        </Text>

        {onClick ? (
          <Button
            onClick={onClick}
            Icon={ArrowOutwardIcon}
            text="Developer Hub"
            outlined
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default memo(IntroCard);
