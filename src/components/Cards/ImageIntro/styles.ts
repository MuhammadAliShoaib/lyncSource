export const imageIntroStyles = {
  topGrid: {
    mb: { xs: 6, md: 10 },
    mt: { xs: 5, md: 8 },
  },
  layersLeftPanel: {
    px: { xs: 0, md: "45px" },
    mb: { xs: 3, md: 0 },
  },
  contentPanel: {
    display: "flex",
    alignItems: "center",
  },
  layersRightPanel: {
    px: { xs: 2, sm: 3, md: "45px" },
    pb: { xs: 1, md: 0 },
  },
  borderLeft : {
    borderLeft: { xs: "1px solid #1d1c1c33" },
  },
  borderRight : {
    borderLeft: { xs: "1px solid #1d1c1c33", md: "none" },
    borderRight: { xs: "none", md: "1px solid #1d1c1c33" },
  },
  layersImage: {
    width: "100%",
    display: "block",
    borderRadius: { xs: "24px", md: 0 },
  },
  titleText: {
    lineHeight: { xs: 1.15, md: "50px" },
    maxWidth: "450px",
    mb: 3,
  },

  bodyText: {
    lineHeight: 1.7,
    marginBottom: { xs: 0, md: "30px" },
    // maxWidth: "270px",
    "& br": {
      display: { xs: "none", sm: "block" },
    },
  },
};
