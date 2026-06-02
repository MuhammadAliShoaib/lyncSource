import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    ternary: string;
    black: string;
    white: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    neutral: PaletteColor;
    static: {
      black: string;
      white: string;
      primary: string;
      secondary: string;
      tertiary: string;
      neutral: string;
    };
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    neutral?: PaletteColorOptions;
    static?: {
      black?: string;
      white?: string;
      primary?: string;
      secondary?: string;
      tertiary?: string;
      neutral?: string;
    };
  }
}
