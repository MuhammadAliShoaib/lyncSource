import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import { Text } from "../Text";
import { accordionStyles } from "./styles";

const accordians = [
  {
    name: "panel1",
    title: "1. Strategy",
    info: "Turning ideas into actionable digital roadmaps that align with business goals.",
    onClick: () => {},
  },
  {
    name: "panel2",
    title: "2. Experience",
    info: "Crafting seamless customer journeys that enhance engagement and satisfaction.",
    onClick: () => {},
  },
  {
    name: "panel3",
    title: "3. Automation",
    info: "Optimizing operations through smart workflows and intelligent processes.",
    onClick: () => {},
  },
  {
    name: "panel4",
    title: "4. Growth",
    info: "Helping businesses expand their reach, improve performance, and unlock new opportunities.",
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

            {/* <Button
              onClick={item.onClick}
              Icon={ArrowOutwardIcon}
              text="Developer Hub"
              outlined
              type="secondary"
              size="sm"
            /> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
