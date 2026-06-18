import type { Theme } from "@mui/material/styles";

export const styles = {
  root: {
    backgroundColor: (theme: Theme) => theme.palette.static.white,
    color: "primary.main",
  },

  solution: {
    pt: {xs : '60px', md : "30px"},
  },

  content: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
    gap: { xs: 5, md: 6, lg: 8 },
    alignItems: "start",
    width: "100%",
    boxSizing: "border-box",
    // maxWidth: 1280,
    mx: "auto",
    px: { xs: 2, sm: 4, md: 5, lg: 8 },
    py: 12,
    overflow: "hidden",
  },

  intro: {
    pt: { xs: 0, md: 2 },
    minWidth: 0,
  },

  title: {
    color: "primary.main",
    fontSize: { xs: "2.5rem", sm: "3.4rem", md: "4.4rem" },
    fontWeight: 500,
    lineHeight: 1.03,
    mb: { xs: 3, md: 5 },
    maxWidth: 640,
  },

  description: {
    color: "primary.main",
    fontSize: { xs: "1.05rem", md: "1.25rem" },
    lineHeight: 1.45,
    maxWidth: 620,
  },

  form: {
    display: "grid",
    gap: { xs: 2.5, md: 3 },
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    backgroundColor: "static.white",
    border: "1px solid rgba(58,58,58,0.14)",
    borderRadius: { xs: "20px", md: "28px" },
    p: { xs: 2, sm: 4, md: 5 },
  },

  formTitle: {
    color: "primary.main",
    fontSize: { xs: "2rem", md: "2.7rem" },
    fontWeight: 600,
    lineHeight: 1.1,
    mb: 1,
  },

  fieldGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: { xs: 2.5, md: 2 },
    minWidth: 0,
  },

  input: {
    width: "100%",
    minWidth: 0,
    "& .MuiInputLabel-root": {
      color: "primary.main",
      fontWeight: 500,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "secondary.main",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: "static.white",
      color: "primary.main",
      "& fieldset": {
        borderColor: "rgba(58,58,58,0.24)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(58,58,58,0.48)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "secondary.main",
      },
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "1rem",
      py: 1.65,
    },
    "& .MuiOutlinedInput-input::placeholder": {
      color: "rgba(58,58,58,0.52)",
      opacity: 1,
    },
  },
};
