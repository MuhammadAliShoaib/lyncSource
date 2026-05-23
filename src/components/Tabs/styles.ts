export const tabsStyles = {
  useCasesSection: {
    mt: { xs: 4, md: 7 },
    overflow: "hidden",
  },

  useCaseTabList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 1, sm: 2, md: 3 },
    mb: { xs: 3, md: 5 },
    overflowX: "auto",
    px: { xs: 1, md: 0 },
    pb: 0.5,
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  useCaseTab: {
    border: 0,
    borderRadius: "14px",
    backgroundColor: "transparent",
    color: "#7e7e7e",
    cursor: "pointer",
    flex: "0 0 auto",
    font: "inherit",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    lineHeight: 1,
    px: { xs: 1.5, sm: 2, md: 2.5 },
    py: { xs: 1.1, md: 1.5 },
    transform: "translateY(0) scale(1)",
    transition:
      "background-color 220ms ease, color 220ms ease, transform 220ms ease",

    "&:hover": {
      color: "#1f1f1f",
      transform: "translateY(-1px)",
    },

    "&:active": {
      transform: "translateY(0) scale(0.98)",
    },
  },

  useCaseTabActive: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    transform: "translateY(0) scale(1.02)",

    "&:hover": {
      color: "#fff",
    },
  },

  useCaseShowcase: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "minmax(180px, 0.72fr) minmax(0, 1.48fr) minmax(180px, 0.72fr)",
    },
    gap: { xs: 0, md: 4 },
    alignItems: "stretch",
    mx: { xs: 0, md: "-18vw", lg: "-13vw" },
    animationDuration: "560ms",
    animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    animationFillMode: "both",
    willChange: "transform",

    "&[data-direction='next']": {
      animationName: "slideTabsNext",
    },

    "&[data-direction='previous']": {
      animationName: "slideTabsPrevious",
    },

    "@keyframes slideTabsNext": {
      "0%": {
        transform: "translateX(7%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "@keyframes slideTabsPrevious": {
      "0%": {
        transform: "translateX(-7%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "@media (max-width: 899.95px)": {
      "&[data-direction='next']": {
        animationName: "slideTabsMobileNext",
      },

      "&[data-direction='previous']": {
        animationName: "slideTabsMobilePrevious",
      },
    },

    "@keyframes slideTabsMobileNext": {
      "0%": {
        transform: "translateX(18%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "@keyframes slideTabsMobilePrevious": {
      "0%": {
        transform: "translateX(-18%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "@media (prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },

  useCaseCard: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    minHeight: { xs: 420, sm: 500, md: 620 },
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.2)), url('/machine.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",

    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.42))",
    },
  },

  useCaseCardActive: {
    borderRadius: { xs: "40px", sm: "56px", md: "96px" },
  },

  useCaseCardPreview: {
    display: { xs: "none", md: "flex" },
    borderRadius: "96px",
    filter: "brightness(0.72)",
  },

  useCaseContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: { xs: "100%", md: 650 },
    px: { xs: 3, sm: 5, md: 6 },
    pb: { xs: 4, sm: 6, md: 9 },
  },

  useCaseTitle: {
    lineHeight: 1.08,
    mb: { xs: 2, md: 3 },
  },

  useCaseDescription: {
    maxWidth: 580,
    lineHeight: 1.4,
    mb: { xs: 3, md: 4 },
  },

  useCaseLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    color: "#fff",
    fontSize: { xs: "1rem", md: "1.25rem" },
    lineHeight: 1,
  },

  useCaseIcon: {
    fontSize: "1em",
  },
};
