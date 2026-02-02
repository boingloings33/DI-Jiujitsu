import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          {/* Column 1 — Logo + blurb */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Box component="img" src={logo} alt="Logo" sx={{ height: 40, mb: 2 }} />

              <Typography variant="body2" color="text.footerAlt" sx={{ maxWidth: 270 }}>
                A place of discipline, respect, and mastery. Dedicated to the traditional art of Brazilian Jiu
                Jitsu and the cultivation of the human spirit.
              </Typography>
            </Box>
          </Grid>

          {/* Column 2 — Explore */}
          <Grid item xs={12} md={3}>
            <Typography variant="footerSubtitle" gutterBottom>
              Explore
            </Typography>

            {/* content later */}
          </Grid>

          {/* Column 3 — Visit Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="footerSubtitle" gutterBottom>
              Visit Us
            </Typography>

            {/* content later */}
          </Grid>

          {/* Column 4 — Connect */}
          <Grid item xs={12} md={3}>
            <Typography variant="footerSubtitle" gutterBottom>
              Connect
            </Typography>

            {/* content later */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
