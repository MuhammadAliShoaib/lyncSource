import type { Theme } from "@mui/material/styles";

export const faqStyles = {
  root: {
    px: { xs: 3, sm: 5, md: 8 },
    py: { xs: 7, md: 11 },
    backgroundColor: (theme: Theme) => theme.palette.neutral.main,
  },

  header: {
    position: "relative",
    maxWidth: 780,
    mb: { xs: 5, md: 10 },
  },

  title: {
    position: "relative",
    display: "inline-block",
    mb: { xs: 2.5, md: 3 },
    color: (theme: Theme) => theme.palette.primary.main,
    fontSize: { xs: "2.35rem", sm: "3rem", md: "4rem" },
    lineHeight: { xs: 1.05, md: 1 },
    letterSpacing: 0,
    "&::before": {
      content: '""',
      position: "absolute",
      top: { xs: -18, md: -28 },
      right: { xs: -34, md: -58 },
      width: { xs: 8, md: 11 },
      height: { xs: 24, md: 34 },
      borderRadius: 999,
      backgroundColor: (theme: Theme) => theme.palette.tertiary.main,
      transform: "rotate(3deg)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: { xs: 22, md: 36 },
      right: { xs: -48, md: -78 },
      width: { xs: 9, md: 13 },
      height: { xs: 28, md: 36 },
      borderRadius: 999,
      backgroundColor: (theme: Theme) => theme.palette.secondary.main,
      transform: "rotate(74deg)",
    },
  },

  subtitle: {
    maxWidth: 700,
    color: (theme: Theme) => theme.palette.primary.main,
    lineHeight: 1.6,
  },

  subtitleLink: {
    color: (theme: Theme) => theme.palette.primary.main,
    textDecorationColor: (theme: Theme) => theme.palette.secondary.main,
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
    fontWeight: 600,
    "&:hover": {
      color: (theme: Theme) => theme.palette.secondary.main,
    },
  },

  grid: {
    maxWidth: 1500,
  },

  gridSpacing: {
    xs: 5,
    md: 7,
    lg: 9,
  },

  faqItem: {
    pr: { lg: 3 },
  },

  question: {
    mb: 1.5,
    color: (theme: Theme) => theme.palette.primary.main,
    lineHeight: 1.25,
    fontWeight: 700,
  },

  answer: {
    m: 0,
    color: (theme: Theme) => theme.palette.primary.main,
    lineHeight: 1.55,
    opacity: 0.9,
  },
};
