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
  size = "lg",
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

  const variation: Record<string, Record<string, string>> = {
    sm: {
      padding: "0px 16px 0px 16px",
      borderRadius: "16px",
    },
    lg: {
      padding: "29px 24.5px 29px 24.5px",
      borderRadius: "18px",
    },
  };

  const selected = colors[type];

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
        borderRadius: variation[size].borderRadius,
        width: width ?? "auto",
        textTransform: "none",
        fontSize: "1.05rem",
        padding: variation[size].padding,
        ...(outlined
          ? {
              color: selected.main,
              borderColor: selected.main,
              "&:hover": {
                borderRadius: "16px",
                backgroundColor: "rgba(244,243,243,0.1)",
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
