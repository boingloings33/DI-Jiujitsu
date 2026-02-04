import { Container, Typography, Box } from "@mui/material";

export default function Membership() {
  return (
    <Box
      component="section"
      id="now-open"
      sx={{
        py: { xs: 8, md: 10 },
        mb: 6,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box sx={{ maxWidth: "620px" }}>
        <Typography variant="h2" gutterBottom color="primary.main">
          Student Plans
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            color: "text.secondary",
            textTransform: "none",
            lineHeight: 1.6,
          }}>
          Membership at Daniel Island Jiu Jitsu is a commitment to your own
          growth. We offer straightforward options with no hidden fees or
          long-term binding contracts.
        </Typography>
      </Box>
    </Box>
  );
}
