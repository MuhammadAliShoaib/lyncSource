export const accordionStyles = {
  root: {
    backgroundColor: "transparent",
    maxWidth: "280px",
    boxShadow: 0,
    "&::before": {
      display: "none",
    },
  },

  summary: (expanded: boolean) => ({
    backgroundColor: expanded ? "#333231" : "transparent",
    transition: "background-color 0.3s ease",
    minHeight: "55px !important",
    borderRadius: "18px",

    "& .MuiAccordionSummary-content": {
      margin: "8px 0",
    },
  }),

  details: {
    width: "250px",
    pt: 4,
    px: 0,
  },
};