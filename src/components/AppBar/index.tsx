import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Button from "../Button";
import { appBarStyles } from "./styles";
import { Text } from "../Text";

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

function AppBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isOverServicesHero, setIsOverServicesHero] = React.useState(
    location.pathname === "/services"
  );
  const lastScrollY = React.useRef(0);
  const isServicesPage = location.pathname === "/services";

  const toggleMobileMenu = () => {
    setMobileOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isOverHero =
        isServicesPage && currentScrollY < window.innerHeight - 76;

      if (currentScrollY < 16) {
        setIsVisible(true);
      } else if (Math.abs(currentScrollY - lastScrollY.current) > 8) {
        setIsVisible(!isScrollingDown);
      }

      setIsOverServicesHero(isOverHero);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isServicesPage]);

  return (
    <>
      <MuiAppBar
        position="fixed"
        elevation={0}
        sx={appBarStyles.root(isVisible, mobileOpen, isOverServicesHero)}
      >
        <Container maxWidth={false} sx={appBarStyles.container}>
          <Toolbar disableGutters sx={appBarStyles.toolbar}>
            <Box
              component={RouterLink}
              to="/"
              aria-label="TwelveLabs home"
              sx={appBarStyles.logoLink}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="TwelveLabs"
                sx={appBarStyles.logoImage}
              />
              <Text size="header" sx={appBarStyles.logoText(isOverServicesHero)}>
                Lync Source
              </Text>
            </Box>

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={appBarStyles.navigation}
            >
              {pages.map((page) => (
                <Box
                  key={page.href}
                  component={RouterLink}
                  to={page.href}
                  sx={appBarStyles.navigationLink(isOverServicesHero)}
                >
                  {page.label}
                </Box>
              ))}
            </Box>

            <Box sx={appBarStyles.desktopActions}>
              <Button
                size="sm"
                onClick={() => {}}
                outlined
                text="Talk to Sales"
                Icon={ArrowOutwardIcon}
                type={isOverServicesHero ? "primary" : "secondary"}
              />
            </Box>

            <IconButton
              aria-label="Open navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              onClick={toggleMobileMenu}
              sx={appBarStyles.menuButton(isOverServicesHero)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </MuiAppBar>

      <Drawer
        id="mobile-navigation"
        anchor="right"
        open={mobileOpen}
        onClose={closeMobileMenu}
        slotProps={{
          paper: {
            sx: appBarStyles.drawerPaper,
          },
        }}
      >
        <Box sx={appBarStyles.drawerHeader}>
          <Box sx={appBarStyles.drawerBrand}>
            <Box
              component="img"
              src="/logo.png"
              alt="TwelveLabs"
              sx={appBarStyles.drawerLogo}
            />
            <Text size="header" sx={appBarStyles.drawerLogoText}>
              Lync Source
            </Text>
          </Box>
          <IconButton
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            sx={appBarStyles.drawerCloseButton}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={appBarStyles.drawerDivider} />
        <List sx={appBarStyles.drawerList}>
          {pages.map((page) => (
            <ListItemButton
              key={page.href}
              component={RouterLink}
              to={page.href}
              onClick={closeMobileMenu}
            >
              <ListItemText
                primary={page.label}
                slotProps={{
                  primary: {
                    sx: appBarStyles.drawerListItemText,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={appBarStyles.drawerActionsDivider} />
        <Box sx={appBarStyles.drawerActions}>
          <Button
            size="sm"
            width="100%"
            onClick={closeMobileMenu}
            outlined
            text="Talk to Sales"
            Icon={ArrowOutwardIcon}
          />
        </Box>
      </Drawer>
    </>
  );
}
export default React.memo(AppBar);
