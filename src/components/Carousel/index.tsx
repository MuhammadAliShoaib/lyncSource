import Box from "@mui/material/Box";

const partners = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];

const PartnersCarousel = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 4,
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: { xs: 4, sm: 6, md: 8 },
          width: "max-content",
          animation: "scroll 30s linear infinite",

          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...partners, ...partners].map((logo, i) => (
          <Box
            key={i}
            component="img"
            src={logo}
            alt="partner"
            sx={{
              height: { xs: 34, sm: 42, md: 50 },
              width: "auto",
              opacity: 0.85,
              filter: "grayscale(100%)",
              transition: "0.3s",

              "&:hover": {
                opacity: 1,
                filter: "grayscale(0%)",
                transform: "scale(1.05)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PartnersCarousel;
