const theme = () => {
  const primaryPalette = {
    main: "#f4f3f3",
  };
  const secondaryPalette = {
    main: "#1d1c1b",
  };

  const staticColorPalette = {
    brown : ''
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
      text: {
        primary: primaryPalette.main,
        secondary: secondaryPalette.main,
      },
      static: staticColorPalette,
    },
  };
};

export default theme;
