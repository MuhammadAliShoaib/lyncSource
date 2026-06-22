import type { Theme } from "@mui/material/styles";

export const styles = {
  root: {
    backgroundColor: (theme: Theme) => theme.palette.static.white,
    color: "primary.main",
    pt: "20px",
  },
  solution: {
    pt: { xs: "60px", md: "30px" },
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
    gap: { xs: 4, md: 4 },
    px: { xs: 2, sm: 4, md: 5, lg: 6 },
    pt: { xs: 2, md: 5 },
    pb: { xs: 7, md: 9 },
  },
  projectCard: {
    minWidth: 0,
  },
  projectImageCarousel: {
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    borderRadius: "8px",
    border: "1px solid rgba(58, 58, 58, 0.12)",
    boxShadow: "0 14px 34px rgba(0, 0, 0, 0.12)",
    transition: "box-shadow 0.25s ease, transform 0.25s ease",

    "&:hover": {
      boxShadow: "0 18px 44px rgba(0, 0, 0, 0.18)",
      transform: "translateY(-2px)",
    },

    "&:hover .project-image-track": {
      animation: "projectImageSlide 12s ease-in-out infinite",
    },
  },
  projectImageTrack: {
    display: "flex",
    height: "100%",
    transform: "translateX(0)",

    "@keyframes projectImageSlide": {
      "0%, 25%": {
        transform: "translateX(0)",
      },
      "33%, 58%": {
        transform: "translateX(-100%)",
      },
      "66%, 91%": {
        transform: "translateX(-200%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  },
  projectImage: {
    width: "100%",
    height: "100%",
    flex: "0 0 100%",
    display: "block",
    objectFit: "cover",
  },
  projectContent: {
    pt: { xs: 2.5, md: 3 },
  },
  projectTitle: {
    fontSize: { xs: "1.75rem", md: "2rem" },
    lineHeight: 1.1,
    letterSpacing: 0,
    mb: { xs: 2, md: 3 },
  },
  projectDescription: {
    maxWidth: 560,
    lineHeight: 1.35,
    letterSpacing: 0,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
};
