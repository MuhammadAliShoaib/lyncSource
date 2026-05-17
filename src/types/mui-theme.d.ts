import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeText {
        ternary: string;
        black: string;
        white: string;
    }

    interface Palette {
        primary: PaletteColor;
        secondary: PaletteColor;
    }

    interface PaletteOptions {
        primary?: PaletteColorOptions;
        secondary?: PaletteColorOptions;
    }
}