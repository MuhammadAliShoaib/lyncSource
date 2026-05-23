export const welcomeStyles = {
  root: {
    position: "relative",
    height: "90vh",
    overflow: "hidden",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    px: { xs: 3, md: 10 },
    alignItems: "center",
  },

  contentBox: {
    maxWidth: 600,
  },

  title: {
    lineHeight: "45px",
  },

  subtitle: {
    margin: "20px 0px 25px 0px",
  },

  buttonRow: {
    display: "flex",
    gap: 2,
  },
};