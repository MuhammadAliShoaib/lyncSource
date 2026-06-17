import type { Theme } from "@mui/material/styles";

export const appBarStyles = {
  root: (isVisible: boolean, mobileOpen: boolean, isLight: boolean) => ({
    top: 0,
    left: 0,
    right: 0,
    transform:
      !mobileOpen && isVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 220ms ease",
    background: "rgba(0,0,0, 0)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderBottom: `1px solid ${
      isLight ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.08)"
    }`,
    boxShadow: "none",
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  }),

  container: {
    px: { xs: 3, md: 6.5 },
  },

  toolbar: {
    minHeight: { xs: 104, md: 108 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr auto", md: "auto 1fr auto" },
    gap: { xs: 2, md: 4 },
  },

  logoLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: { xs: 0.5, md: 0.75 },
    width: "fit-content",
    maxWidth: { xs: "64vw", md: "none" },
    textDecoration: "none",
  },

  logoImage: {
    display: "block",
    width: 45,
    height: 100,
    flexShrink: 0,
    objectFit: "cover",
    objectPosition: "center",
  },

  navigation: {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    alignItems: "center",
    gap: { md: 1, lg: 2 },
  },

  navigationLink: (isLight: boolean) => ({
    color: isLight ? "#fff" : "rgb(0,0,0)",
    px: 1.5,
    py: 1,
    borderRadius: "16px",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.4,
    textDecoration: "none",
    "&:hover": {
      color: isLight ? "rgba(255,255,255,0.78)" : "text.secondary",
    },
  }),

  logoText: (isLight: boolean) => ({
    color: isLight ? "#fff" : "black",
    flexShrink: 0,
    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.35rem" },
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
  }),

  desktopActions: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 1.5,
  },

  menuButton: (isLight: boolean) => ({
    display: { xs: "inline-flex", md: "none" },
    justifySelf: "end",
    color: isLight ? "#fff" : "black",
    width: 58,
    height: 58,
    "& .MuiSvgIcon-root": {
      fontSize: 46,
    },
  }),

  drawerPaper: {
    width: "min(84vw, 360px)",
    backgroundColor: "#111",
    color: "#fff",
    p: 2,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    mb: 2,
  },

  drawerBrand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.75,
    minWidth: 0,
  },

  drawerLogo: {
    width: 44,
    height: 56,
    flexShrink: 0,
    objectFit: "cover",
    objectPosition: "center",
  },

  drawerLogoText: {
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: 1,
    whiteSpace: "nowrap",
  },

  drawerCloseButton: {
    color: "#fff",
    flexShrink: 0,
    width: 44,
    height: 44,
    "& .MuiSvgIcon-root": {
      fontSize: 28,
    },
  },

  drawerDivider: {
    borderColor: "rgba(255,255,255,0.12)",
  },

  drawerActionsDivider: {
    borderColor: "rgba(255,255,255,0.12)",
    mb: 2,
  },

  drawerList: {
    py: 1,
  },

  drawerListItemText: {
    fontSize: 18,
    fontWeight: 500,
  },

  drawerActions: {
    display: "grid",
    gap: 1.5,
  },
};
