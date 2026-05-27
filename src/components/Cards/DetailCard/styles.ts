export const detailCardStyle = {
  useCaseCard: {
    display: "flex",
    alignItems: "flex-end",
    minHeight: { xs: 320, sm: 380, md: 420, lg: 500 },
    width: { xs: "min(74vw, 230px)", sm: 260, md: 280, lg: "100%" },
    maxWidth: { xs: 230, sm: 260, md: 280, lg: 300 },
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.2)), url('/mock.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    borderRadius: { xs: 5, lg: 10 },
    p: { xs: 2, lg: 3 },
    mb: { xs: 0, lg: 2 },
  },

  useCaseCardActive: {
    borderRadius: { xs: "28px", sm: "40px", md: "80px" },
  },

  useCaseCardPreview: {
    display: "flex",
    borderRadius: { xs: "28px", sm: "40px", md: "80px" },
    filter: "brightness(0.72)",
  },
  useCaseContent: {
    position: "relative",
    zIndex: 1,
  },

  useCaseTitle: {
    lineHeight: 1.08,
    mb: { xs: 1, lg: 3 },
    fontSize: { xs: "1rem", sm: "1.1rem", lg: "1.5rem" },
  },

  useCaseDescription: {
    lineHeight: 1.4,
    mb: { xs: 0, lg: 4 },
    fontSize: { xs: "0.75rem", sm: "0.82rem", lg: "0.875rem" },
  },
};
