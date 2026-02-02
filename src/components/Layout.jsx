import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2, md: 4 }, // mobile / desktop padding
      }}
    >
      {children}
    </Container>
  );
}
