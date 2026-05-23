export const benefitsStyles = {
  root: {
    py: { xs: 4, md: "30px" },
    backgroundColor: (theme: any) => theme.palette.text.primary,
  },
  benefitsRoot: {
    px: { xs: 2, sm: 3, md: "30px" },
  },

  topGrid: {
    mb: { xs: 6, md: 10 },
    mt: { xs: 5, md: 8 },
  },

  topGrid2: {
    mt: { xs: 5, md: 8 },
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
};
