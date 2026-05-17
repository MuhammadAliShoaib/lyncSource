import React, { memo } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: React.ElementType;
  disabled?: boolean;
  text: string;
  type?: "primary" | "secondary";
  outlined?: boolean;
  loading?: boolean;
  size?: "sm" | "md" | "lg" | "";
  height?: string;
  width?: string;
  buttonType?: "button" | "submit" | "reset";
  preventDefault?: boolean;
};

const MuiButton = ({
  onClick,
  Icon,
  disabled = false,
  text = "Button",
  type = "primary",
  outlined = false,
  loading = false,
  size = "md",
  height = "50px",
  width,
  buttonType = "button",
  preventDefault = false,
}: ButtonProps) => {
  const colors = {
    primary: {
      main: "#f4f3f3",
      contrastText: "#1d1c1b",
    },
    secondary: {
      main: "#1d1c1b",
      contrastText: "#f4f3f3",
    },
  };

  const widths: Record<string, string> = {
    sm: "120px",
    md: "200px",
    lg: "100%",
    "": "auto",
  };

  const selected = colors[type] || colors.default;

  const onPress = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (preventDefault) {
      e.preventDefault();
    }
    onClick?.(e);
  };

  return (
    <Button
      onClick={onPress}
      type={buttonType}
      disabled={disabled || loading}
      variant={outlined ? "outlined" : "contained"}
      endIcon={!loading && Icon && <Icon />}
      aria-label={text}
      aria-busy={loading}
      sx={{
        height,
        borderRadius: "12px",
        width: width ?? widths[size],
        textTransform: "none",
        fontSize: "1rem",
        ...(outlined
          ? {
              color: selected.main,
              borderColor: selected.main,
              "&:hover": {
                borderRadius: "16px",
                backgroundColor : 'rgba(244,243,243,0.1)'
              },
            }
          : {
              backgroundColor: selected.main,
              borderColor: selected.contrastText,
              color: selected.contrastText,
              "&:hover": {
                backgroundColor: selected.main,
              },
            }),
      }}
    >
      {loading ? (
        <CircularProgress
          size={18}
          sx={{
            color: outlined ? selected.main : selected.contrastText,
          }}
        />
      ) : (
        text
      )}
    </Button>
  );
};

export default memo(MuiButton);
