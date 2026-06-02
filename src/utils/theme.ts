const theme = () => {
  const primaryPalette = {
    main: "#3A3A3A",
    contrastText: "#FFFFFF",
  };

  const secondaryPalette = {
    main: "#EB4E1B",
    contrastText: "#FFFFFF",
  };

  const tertiaryPalette = {
    main: "#6593BC",
    contrastText: "#000000",
  };

  const neutralPalette = {
    main: "#E5E5E5",
    contrastText: "#000000",
  };

  const staticColorPalette = {
    black: "#000000",
    white: "#FFFFFF",
    primary: primaryPalette.main,
    secondary: secondaryPalette.main,
    tertiary: tertiaryPalette.main,
    neutral: neutralPalette.main,
  };

  return {
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 960, // Medium devices (tablets)
        lg: 1280, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },

    typography: {
      fontFamily: "inherit",
    },
    palette: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      tertiary: tertiaryPalette,
      neutral: neutralPalette,
      text: {
        primary: primaryPalette.main,
        secondary: secondaryPalette.main,
      },
      static: staticColorPalette,
    },
  };
};

export default theme;
