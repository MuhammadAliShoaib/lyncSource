export const welcomeStyles = {
  root: {
    minHeight: "70vh",
    backgroundColor: (theme:any)=>theme.palette.static.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 3, sm: 5, md: 8 },
    py: { xs: 5, md: 7 },
  },

  content: {
    width: "100%",
    maxWidth: 980,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  title: {
    maxWidth: 860,
    mb: { xs: 4, md: 6 },
    fontSize: { xs: "2.8rem", sm: "3rem", md: "4rem" },
    lineHeight: { xs: 1.06, md: 1.02 },
    letterSpacing: 0,
  },

  titleBreak: {
    display: "block",
    color : 'text.primary'
  },

  subtitle: {
    maxWidth: 750,
    mb: { xs: 5, md: 7 },
    fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
    lineHeight: { xs: 1.34, md: 1.32 },
    letterSpacing: 0,
  },

};
