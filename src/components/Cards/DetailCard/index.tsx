import Box from "@mui/material/Box";
import { memo, type FC } from "react";
import { Text } from "../../Text";
import { detailCardStyle } from "./styles";

interface IDetailCard {
  title: string;
  description: string;
}

const DetailCard: FC<IDetailCard> = ({ title, description }) => {
  return (
    <Box sx={[detailCardStyle.useCaseCard]}>
      <Box sx={detailCardStyle.useCaseContent}>
        <Text
          size="header"
          color="text.primary"
          sx={detailCardStyle.useCaseTitle}
        >
          {title}
        </Text>
        <Text
          size="sub"
          color="text.primary"
          sx={detailCardStyle.useCaseDescription}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default memo(DetailCard);
