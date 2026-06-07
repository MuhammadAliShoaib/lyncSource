import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Text } from "../Text";
import { tabsStyles } from "./styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const useCaseTabs = [
  {
    label: "Development",
    title: "Development",
    image: "development.jpeg",
    description:
      "Build powerful digital products tailored to your business needs, from web platforms to mobile applications.",
  },
  {
    label: "Technology",
    title: "Technology",
    image: "ai.jpeg",
    description:
      "Leverage modern technologies, AI solutions, and scalable architectures to stay ahead.",
  },
  {
    label: "Solutions",
    title: "Solutions",
    image: "solutions.jpeg",
    description:
      "Solve real business challenges with custom software designed to improve efficiency and growth.",
  },
];

const Tabs = () => {
  const [activeUseCase, setActiveUseCase] = useState(1);
  const [switchDirection, setSwitchDirection] = useState<"next" | "previous">(
    "next"
  );

  const visibleUseCases = [
    useCaseTabs[(activeUseCase + useCaseTabs.length - 1) % useCaseTabs.length],
    useCaseTabs[activeUseCase],
    useCaseTabs[(activeUseCase + 1) % useCaseTabs.length],
  ];

  const handleTabChange = (index: number) => {
    if (index === activeUseCase) {
      return;
    }

    const nextIndex = (activeUseCase + 1) % useCaseTabs.length;
    setSwitchDirection(index === nextIndex ? "next" : "previous");
    setActiveUseCase(index);
  };

  return (
    <Grid size={{ xs: 12 }} sx={tabsStyles.useCasesSection}>
      <Box sx={tabsStyles.useCaseTabList} role="tablist">
        {useCaseTabs.map((tab, index) => {
          const isActive = activeUseCase === index;

          return (
            <Box
              key={tab.label}
              component="button"
              type="button"
              role="tab"
              aria-selected={isActive}
              sx={[
                tabsStyles.useCaseTab,
                isActive && tabsStyles.useCaseTabActive,
              ]}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </Box>
          );
        })}
      </Box>

      <Box
        key={`${activeUseCase}-${switchDirection}`}
        sx={tabsStyles.useCaseShowcase}
        data-direction={switchDirection}
      >
        {visibleUseCases.map((item, index) => {
          const isActive = index === 1;
          const imageUrl = item.image.startsWith("/")
            ? item.image
            : `/${item.image}`;

          return (
            <Box
              key={`${item.label}-${activeUseCase}`}
              sx={[
                tabsStyles.useCaseCard,
                {
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.2)), url('${imageUrl}')`,
                },
                isActive
                  ? tabsStyles.useCaseCardActive
                  : tabsStyles.useCaseCardPreview,
              ]}
            >
              <Box sx={tabsStyles.useCaseContent}>
                <Text
                  size="bigHeader"
                  color="static.neutral"
                  sx={tabsStyles.useCaseTitle}
                >
                  {item.title}
                </Text>
                <Text
                  size="header"
                  color="static.neutral"
                  sx={tabsStyles.useCaseDescription}
                >
                  {item.description}
                </Text>
                <Box component="span" sx={tabsStyles.useCaseLink}>
                  Learn more
                  <OpenInNewIcon sx={tabsStyles.useCaseIcon} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Tabs;
