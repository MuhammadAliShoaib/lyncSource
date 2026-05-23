import AdbIcon from "@mui/icons-material/Adb";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "../Button";
import Menu from "../Menu";

const pages = [
  "Platform",
  "Pricing",
  "Solutions",
  "Build",
  "Resources",
  "Company",
];

const options = [
  {
    label: "Edit",
    onClick: () => console.log("Edit clicked"),
  },
  {
    label: "Duplicate",
    onClick: () => console.log("Duplicate clicked"),
  },
  {
    divider: true,
  },
  {
    label: "Delete",
    onClick: () => console.log("Delete clicked"),
  },
];

function AppBar() {
  return (
    <MuiAppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/logo.png" style={{ width: "120px", height: "50px" ,backgroundColor:'red'}} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Menu options={options} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                size="sm"
                onClick={() => {}}
                text="Playground"
                Icon={ArrowOutwardIcon}
              />
              <Button
                size="sm"
                onClick={() => {}}
                outlined
                text="Talk to Sales"
                Icon={ArrowOutwardIcon}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
export default React.memo(AppBar);
