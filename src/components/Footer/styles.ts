export const footerStyles = {
  root: {
    backgroundColor: "#030303",
    color: "#fff",
    px: { xs: 3, md: 8 },
    pt: { xs: 7, md: 10 },
    pb: { xs: 4, md: 3 },
  },

  content: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "minmax(280px, 1.2fr) minmax(180px, 0.7fr) minmax(260px, 1fr)",
    },
    gap: { xs: 5, md: 8 },
    maxWidth: 1280,
    mx: "auto",
  },

  brandLogo: {
    display: "block",
    width: { xs: 220, sm: 260, md: 300 },
    maxWidth: "100%",
    mb: 4,
  },

  description: {
    maxWidth: 520,
    color: "rgba(255,255,255,0.88)",
    lineHeight: 1.55,
    mb: 4,
  },

  socialList: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexWrap: "wrap",
  },

  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    color: "#fff",
    textDecoration: "none",
    transition: "color 180ms ease, transform 180ms ease",
    "&:hover": {
      color: "secondary.main",
      transform: "translateY(-2px)",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 34,
    },
  },

  sectionTitle: {
    color: "#fff",
    fontWeight: 800,
    lineHeight: 1.1,
    mb: 3,
    textTransform: "uppercase",
  },

  linkList: {
    display: "grid",
    gap: 2,
  },

  footerLink: {
    width: "fit-content",
    color: "rgba(255,255,255,0.9)",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.35,
    textDecoration: "none",
    transition: "color 180ms ease",
    "&:hover": {
      color: "secondary.main",
    },
  },

  contactList: {
    display: "grid",
    gap: 2,
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    color: "rgba(255,255,255,0.9)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.4,
    overflowWrap: "anywhere",
    transition: "color 180ms ease",
    "&:hover": {
      color: "secondary.main",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 22,
      flexShrink: 0,
    },
  },

  bottom: {
    maxWidth: 1280,
    mx: "auto",
    mt: { xs: 6, md: 9 },
    pt: 3,
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
  },

  copyright: {
    color: "rgba(255,255,255,0.62)",
    lineHeight: 1.5,
  },
};
