import {
  Box,
  Divider,
  ListItemText,
  MenuItem,
  Menu as MuiMenu
} from "@mui/material";
import Button from "@mui/material/Button";
import { type MenuProps } from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import * as React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <MuiMenu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    overflow: "hidden",
    minWidth: 240,
    boxShadow: "rgba(0,0,0,0.08) 0px 10px 30px",
  },
}));

export interface MenuOption {
  label?: string;
  onClick?: () => void;
  divider?: boolean;
  disabled?: boolean;
}

interface CustomMenuProps {
  buttonText?: string;
  options: MenuOption[];
}

export default function Menu({
  buttonText = "Options",
  options,
}: CustomMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns: MenuOption[][] = [];
  let currentColumn: MenuOption[] = [];

  options.forEach((item) => {
    if (item.divider) {
      columns.push(currentColumn);
      currentColumn = [];
    } else {
      currentColumn.push(item);
    }
  });

  if (currentColumn.length) {
    columns.push(currentColumn);
  }

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          padding: 0,
          margin: "0 9px 0 9px",
          backgroundColor: "transparent",
          color: "white",
          "& .MuiButton-endIcon": {
            marginLeft: "2px",
          },
        }}
      >
        {buttonText}
      </Button>

      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            p : 2,
          }}
        >
          {columns.map((column, columnIndex) => (
            <React.Fragment key={columnIndex}>
              <Box
                sx={{
                  minWidth: 180,
                }}
              >
                {column.map((item, index) => (
                  <MenuItem
                    key={index}
                    disabled={item.disabled}
                    onClick={() => {
                      item.onClick?.();
                      handleClose();
                    }}
                    sx={{m : 3,px : 5}}
                  >
                    <ListItemText sx={{color : 'black'}}>{item.label}</ListItemText>
                  </MenuItem>
                ))}
              </Box>

              {columnIndex !== columns.length - 1 && (
                <Divider orientation="vertical" flexItem />
              )}
            </React.Fragment>
          ))}
        </Box>
      </StyledMenu>
    </>
  );
}
