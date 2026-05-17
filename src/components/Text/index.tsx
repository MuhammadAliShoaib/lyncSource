import { Typography, styled, type TypographyProps } from "@mui/material";
import { baseFontSizes } from "../../utils/font";

type SizeKey = keyof typeof baseFontSizes;

interface TextProps extends TypographyProps {
  size: SizeKey;
  weight?: string | number;
  color?: string;
  fontSize?: string | number;
}

export const Text = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "size" && prop !== "weight" && prop !== "fontSize" && prop !== "color",
})<TextProps>(({ theme, size, weight, color, fontSize }) => ({
  fontSize: fontSize ?? baseFontSizes[size].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[size].small,
  },
  fontWeight: weight,
  color: color ?? theme.palette.primary.main,
}));
