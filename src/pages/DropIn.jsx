import {
  Container,
  Typography,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import bgMembership from "../assets/bg-membership.svg";
import AddIcon from "@mui/icons-material/Add";
export default function DropIn() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgMembership})`,
        backgroundSize: { xs: "fill", md: "cover" },
      }}
    >
      <Container
        sx={{
          py: { xs: 4, md: 8 },
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom color="primary.main">
          Drop-in Policy
        </Typography>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Box
          sx={{
            textAlign: "left",
            width: "100%",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Devine affiliate members
            </AccordionSummary>
            <AccordionDetails>
              You're welcome to drop in for free! Just complete the{" "}
              <Link to="/contact">contact form</Link> and let us know when
              you’ll be joining us.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              New Visitors
            </AccordionSummary>
            <AccordionDetails>
              Not part of a Devine affiliate? No problem! Register using the{" "}
              <Link to="/contact">contact form</Link>, complete the waiver, and
              submit the $25 drop-in fee at the door.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}
