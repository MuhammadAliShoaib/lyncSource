import type { Theme } from "@mui/material/styles";

export const styles = {
  root: {
    backgroundColor: (theme: Theme) => theme.palette.static.white,
  },
  solution: {
    padding: "30px",
  },
};
