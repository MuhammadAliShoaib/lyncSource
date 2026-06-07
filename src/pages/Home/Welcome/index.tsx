import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Button from "../../../components/Button";
import { Text } from "../../../components/Text";
import { welcomeStyles } from "./styles";

const Welcome = () => {
  return (
    <Box component="section" sx={welcomeStyles.root}>
      <Box sx={welcomeStyles.content}>
        <Text
          size="subHeader"
          weight={500}
          color="text.secondary"
          sx={welcomeStyles.title}
        >
          Lync Source
          <Box component="span" sx={welcomeStyles.titleBreak}>
            Your Digital Outsourcing Ally
          </Box>
        </Text>

        <Text
          component="p"
          size="subHeader"
          weight={400}
          color="#1d1c1b"
          sx={welcomeStyles.subtitle}
        >
          At Lync Source, we bring your ideas to life with innovative digital
          solutions. As your dedicated partner, we work closely with you—from
          the initial concept through design, development, and deployment—to
          ensure every detail is perfect.
        </Text>

        <Button
          type="secondary"
          // height="64px"
          size="sm"
          onClick={() => {}}
          text="Talk To Sales"
          Icon={ArrowOutwardIcon}
        />
      </Box>
    </Box>
  );
};

export default Welcome;
