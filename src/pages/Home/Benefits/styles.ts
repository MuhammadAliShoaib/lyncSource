import type { Theme } from "@mui/material/styles";

export const benefitsStyles = {
  root: {
    py: { xs: 4, md: "30px" },
    backgroundColor: (theme: Theme) => theme.palette.text.primary,
  },
  benefitsRoot: {
    px: { xs: 2, sm: 3, md: "30px" },
  },

  pointsBox: {
    width: "95%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: 40,
    height: "85vh",
  },

  topGrid: {
    mb: { xs: 6, md: 10 },
    mt: { xs: 5, md: 8 },
  },

  topGrid2: {
    display: "flex",
    justifyContent: "center",
    mt: { xs: 5, md: 8 },
  },

  detailCardsCarousel: {
    display: "flex",
    justifyContent: { xs: "flex-start", lg: "center" },
    flexWrap: { xs: "nowrap", lg: "wrap" },
    gap: { xs: 2, lg: 0 },
    mt: { xs: 5, md: 8 },
    mx: { xs: -2, sm: -3, lg: 0 },
    px: { xs: 2, sm: 3, lg: 0 },
    pb: { xs: 1, lg: 0 },
    overflowX: { xs: "auto", lg: "visible" },
    scrollPaddingLeft: { xs: 16, sm: 24 },
    scrollSnapType: { xs: "x proximity", lg: "none" },
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  detailCardCarouselItem: {
    display: "flex",
    flex: { xs: "0 0 auto", lg: "initial" },
    justifyContent: "center",
    scrollSnapAlign: "start",
  },

  trustedByWrapper: {
    display: "flex",
    justifyContent: "center",
    mt: { xs: 6, md: 10 },
  },

  trustedByBox: {
    display: "inline-flex",
    border: "1px solid black",
    px: 0.5,
    py: 0.2,
    borderRadius: 2,
  },

  leftPanel: {
    px: { xs: 2, sm: 3, md: "45px" },
    pb: { xs: 3, md: "35px" },
    borderLeft: "1px solid #1d1c1c33",
    borderRight: { xs: "none", md: "1px solid #1d1c1c33" },
  },

  layersLeftPanel: {
    px: { xs: 2, sm: 3, md: "45px" },
  },

  leftPanel2: {
    px: { xs: 2, sm: 3, md: "45px" },
    pb: { xs: 3, md: "35px" },
    borderLeft: "1px solid #1d1c1c33",
  },

  leftPanel3: {
    px: { xs: 2, sm: 3, md: "45px" },
    py: { xs: 3, sm: 4, md: "50px" },
    borderLeft: "1px solid #1d1c1c33",
    borderTop: { xs: "1px solid #1d1c1c33", sm: "none" },
  },

  rightPanel: {
    px: { xs: 2, sm: 3, md: "45px" },
    pb: { xs: 3, md: "35px" },
    borderLeft: { xs: "1px solid #1d1c1c33", md: "none" },
    borderRight: { xs: "none", md: "1px solid #1d1c1c33" },
  },
  layersRightPanel: {
    px: { xs: 2, sm: 3, md: "45px" },
    borderLeft: { xs: "1px solid #1d1c1c33" },
  },

  rightPanel2: {
    px: { xs: 2, sm: 3, md: "45px" },
    pb: { xs: 3, md: "35px" },
    borderLeft: { xs: "1px solid #1d1c1c33", md: "none" },
    borderRight: { xs: "none", md: "1px solid #1d1c1c33" },
  },

  titleText: {
    lineHeight: { xs: 1.15, md: "50px" },
    maxWidth: "450px",
    mb: 3,
  },

  bodyText: {
    lineHeight: 1.7,
    marginBottom: { xs: 0, md: "30px" },

    "& br": {
      display: { xs: "none", sm: "block" },
    },
  },

  statText: {
    lineHeight: 1.35,
  },

  bottomLeft: {
    padding: "0px 45px 0px 25px",
    borderLeft: "1px solid #1d1c1c33",
  },

  bottomRight: {
    padding: "0px 45px 0px 25px",
  },

  image: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  layersImage: {
    width: "100%",
  },
};
