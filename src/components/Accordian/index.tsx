import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import { Text } from "../Text";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Button from "../Button";
import { accordionStyles } from "./styles";

const accordians = [
  {
    name: "panel1",
    title: "1. Infrastructure",
    info: "Ingest multimodal data through a single pipeline at ~60x real-time speed. Index an hour of video in a minute. 10k+ hours per day.",
    onClick: () => {},
  },
  {
    name: "panel2",
    title: "2. API + SDK",
    info: "Access powerful APIs and SDKs to build on top of our platform. Seamless integration with your existing tools and workflows.",
    onClick: () => {},
  },
  {
    name: "panel3",
    title: "3. MCP",
    info: "Model Context Protocol enables seamless interaction with AI systems. Standardized, efficient data exchange for your AI workflows.",
    onClick: () => {},
  },
  {
    name: "panel4",
    title: "4. Integrations",
    info: "Connect with your favorite platforms and services. Extend functionality with pre-built integrations and custom extensions.",
    onClick: () => {},
  },
];

export default function Accordian() {
  const id = React.useId();
  const [expanded, setExpanded] = React.useState<string>("panel1");

  const handleChange = (panel: string) => () => {
    setExpanded(panel);
  };

  return (
    <div>
      {accordians.map((item) => (
        <Accordion
          key={item.name}
          expanded={expanded === item.name}
          onChange={handleChange(item.name)}
          sx={accordionStyles.root}
        >
          <AccordionSummary
            aria-controls={`${id}-${item.name}-content`}
            id={`${id}-${item.name}-header`}
            sx={accordionStyles.summary(expanded === item.name)}
          >
            <Text
              size="subHeader"
              weight={500}
              color={expanded === item.name ? "static.neutral" : "text.primary"}
            >
              {item.title}
            </Text>
          </AccordionSummary>

          <AccordionDetails sx={accordionStyles.details}>
            <Text
              size="body"
              sx={{ marginBottom: "20px" }}
              color="text.primary"
            >
              {item.info}
            </Text>

            <Button
              onClick={item.onClick}
              Icon={ArrowOutwardIcon}
              text="Developer Hub"
              outlined
              type="secondary"
              size="sm"
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
