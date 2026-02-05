import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Container,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-main.svg";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import theme from "../theme/theme.js";
const pages = [
  { label: "Home", path: "/" },
  { label: "Programs", path: "/programs" },
  { label: "Membership", path: "/membership" },
  { label: "Schedule", path: "/schedule" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: trigger
            ? alpha(theme.palette.background.paper, 0.9)
            : "background.paper",
          backdropFilter: trigger ? "blur(8px)" : "none",
          transition: "all 200ms ease",
        }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, md: 4, lg: 10, xl: 14 },
          }}>
          {/* Logo */}

          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 40,
              }}
            />
          </Box>

          {/* Desktop links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { lg: 0, xl: 2 },
            }}>
            {pages.map((p) => (
              <Button
                variant="nav"
                key={p.path}
                component={NavLink}
                to={p.path}
                end={p.path === "/"}
                sx={{ fontSize: 12 }}>
                {p.label}
              </Button>
            ))}

            {/* Member Button */}
            <Button sx={{ marginLeft: 2 }} variant="outlined">
              Members Login
            </Button>
          </Box>

          {/* Mobile menu */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            color="primary"
            onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {pages.map((p) => (
              <ListItem key={p.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={p.path}
                  onClick={() => setOpen(false)}>
                  {p.label}
                </ListItemButton>
              </ListItem>
            ))}

            <Box sx={{ p: 2 }}>
              <Button fullWidth variant="contained">
                Join Now
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
