import { Box, Container, Typography } from "@mui/material";
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
  { label: "FAQ", path: "/faq" },
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
        display: "flex",
        height: "fit-content",
        py: 6,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Row 1 — Logo (left) + Explore (right) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "space-between", md: "flex-start" },
              alignItems: "flex-start",
              gap: { xs: 4, md: 8 },
              width: { xs: "100%", md: "50%" },
            }}
          >
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
                sx={{ maxWidth: 160 }}
              >
                A place of discipline, respect, and mastery. Dedicated to the
                traditional art of Brazilian Jiu Jitsu and the cultivation of
                the human spirit.
              </Typography>
            </Box>

            {/* Column 2 — Explore */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: { xs: "flex-end", md: "flex-start" },
                textAlign: { xs: "right", md: "left" },
              }}
            >
              <Typography
                variant="footerSubtitle"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Explore
              </Typography>
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
                  }}
                >
                  {page.label}
                </Typography>
              ))}
            </Box>
          </Box>
          {/* Row 2 — Visit Us (left) + Connect (right) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "space-between", md: "flex-end" },
              width: { xs: "100%", md: "10%" },
              gap: { xs: 4, md: 5 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Address */}
              <Typography
                variant="footerSubtitle"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Visit Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                  maxWidth: 260,
                }}
              >
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
                  (843) 343-0004
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
                  info@dijiujitsu.com
                </Typography>
              </Box>
            </Box>

            {/* Column 4 — Connect */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "flex-end",
                textAlign: "right",
              }}
            >
              <Typography
                variant="footerSubtitle"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Connect
              </Typography>
              {/* Social icons row */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="a"
                  href="https://www.facebook.com/DIJiuJitsu/"
                  target="_blank"
                  sx={{
                    color: "text.footerAlt",
                    display: "flex",
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  <FacebookOutlinedIcon />
                </Box>

                <Box
                  component="a"
                  href="https://www.instagram.com/danielislandjiujitsu/"
                  target="_blank"
                  sx={{
                    color: "text.footerAlt",
                    display: "flex",
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  <InstagramIcon />
                </Box>
              </Box>

              {/* Copyright */}
              <Typography
                variant="footerAlt"
                color="text.footerAlt"
                sx={{ maxWidth: 170, marginTop: 2 }}
              >
                © 2026 Daniel Island Jiu Jitsu. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
