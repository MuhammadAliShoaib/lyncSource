import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Text } from "../Text";
import { tabsStyles } from "./styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const useCaseTabs = [
  {
    label: "Creative Industries",
    title: "Creative Industries",
    description:
      "Search, segment, and reuse video moments across archives, edits, campaigns, and production libraries.",
  },
  {
    label: "Advertising and Marketing",
    title: "Advertising and Marketing",
    description:
      "Actually contextual targeting, driven by understanding, not metadata. Place ads only in brand-safe scenes, no tags, no manual review.",
  },
  {
    label: "Public Sector",
    title: "Public Sector",
    description:
      "Evidence management, incident reporting, and fast video review for teams that need reliable visual intelligence.",
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

          return (
            <Box
              key={`${item.label}-${activeUseCase}`}
              sx={[
                tabsStyles.useCaseCard,
                isActive
                  ? tabsStyles.useCaseCardActive
                  : tabsStyles.useCaseCardPreview,
              ]}
            >
              <Box sx={tabsStyles.useCaseContent}>
                <Text
                  size="bigHeader"
                  color="text.primary"
                  sx={tabsStyles.useCaseTitle}
                >
                  {item.title}
                </Text>
                <Text
                  size="header"
                  color="text.primary"
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
