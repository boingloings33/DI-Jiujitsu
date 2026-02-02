import { Container, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">Page content goes here.</Typography>
    </Container>
  );
}
