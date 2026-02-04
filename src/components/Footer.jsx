import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; // MUI doesn't ship TikTok, we fake it cleanly

const pages = [
  { label: "Home", path: "/" },
  { label: "Programs", path: "/programs" },
  { label: "Membership", path: "/membership" },
  { label: "Schedule", path: "/schedule" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];
import logo from "../assets/logo-white.svg"; // adjust path if needed

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        borderTop: "1px solid",
        borderColor: "divider",

        py: 6,
      }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start">
          {/* Column 1 — Logo + blurb */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ height: 40, mb: 2 }}
              />

              <Typography
                variant="body2"
                color="text.footerAlt"
                sx={{ maxWidth: 270 }}>
                A place of discipline, respect, and mastery. Dedicated to the
                traditional art of Brazilian Jiu Jitsu and the cultivation of
                the human spirit.
              </Typography>
            </Box>
          </Grid>

          {/* Column 2 — Explore */}
          <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="footerSubtitle" gutterBottom>
              Explore
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginTop: 3,
              }}>
              {pages.map((page) => (
                <Typography
                  key={page.path}
                  variant="footerNav"
                  component={Link}
                  to={page.path}
                  sx={{
                    textDecoration: "none",
                    color: "text.footerAlt",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}>
                  {page.label}
                </Typography>
              ))}
            </Box>

            {/* content later */}
          </Grid>

          {/* Column 3 — Visit Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="footerSubtitle" gutterBottom>
              Visit Us
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
              {/* Address */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                  maxWidth: 300,
                }}>
                <LocationOnOutlinedIcon
                  sx={{
                    color: "text.footerAlt",
                    position: "relative",
                    left: -4,
                  }}
                />
                <Typography variant="footerNav" color="text.footerAlt">
                  126 Seven Farms Drive, Suite 270 Daniel Island, SC 29492
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <PhoneOutlinedIcon
                  sx={{
                    color: "text.footerAlt",
                    position: "relative",
                    left: -4,
                  }}
                />
                <Typography variant="footerNav" color="text.footerAlt">
                  (555) 555-555
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <EmailOutlinedIcon
                  sx={{
                    color: "text.footerAlt",
                    position: "relative",
                    left: -4,
                  }}
                />
                <Typography variant="footerNav" color="text.footerAlt">
                  email@email.com
                </Typography>
              </Box>
            </Box>

            {/* content later */}
          </Grid>

          {/* Column 4 — Connect */}
          <Grid item xs={12} md={3}>
            <Typography variant="footerSubtitle" gutterBottom>
              Connect
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
              {/* Social icons row */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    color: "text.footerAlt",
                    display: "flex",
                    "&:hover": { opacity: 0.7 },
                  }}>
                  <FacebookOutlinedIcon />
                </Box>

                <Box
                  component="a"
                  href="#"
                  sx={{
                    color: "text.footerAlt",
                    display: "flex",
                    "&:hover": { opacity: 0.7 },
                  }}>
                  <InstagramIcon />
                </Box>
              </Box>

              {/* Copyright */}
              <Typography
                variant="footerAlt"
                color="text.footerAlt"
                sx={{ maxWidth: 170, marginTop: 2 }}>
                © 2026 Daniel Island Jiu Jitsu. All rights reserved.
              </Typography>
            </Box>

            {/* content later */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
