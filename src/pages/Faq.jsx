import { Container, Typography, Box, Divider, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Faq() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
      }}
    >
      <Box sx={{ textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <Typography variant="h2" gutterBottom color="primary.main">
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            textTransform: "none",
            lineHeight: 1.6,
            letterSpacing: 0.5,
            maxWidth: "sm",
          }}
        >
          Check out some of our most frequently asked questions below. If you have a question that’s not answered
          here, feel free to reach out to us directly!
        </Typography>
      </Box>

      <Typography
        variant="h4"
        sx={{
          color: "text.secondary",
          textAlign: "left",
        }}
      >
        General Questions
      </Typography>
      <Divider sx={{ width: "100%", mb: 4 }} />
      <Box sx={{ textAlign: "left", width: "100%", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.10)", marginBottom: 6 }}>
        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              What is Brazilian Jiu Jitsu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            BJJ is a ground-based martial art that uses leverage and technique to control or submit an opponent.
            Designed to enable smaller individuals to defend themselves against larger ones, it’s highly effective
            for self-defense and is widely practiced in competitive circles.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Why do people train in Jiu Jitsu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Beyond self-defense, jiu jitsu enhances fitness, reduces stress, builds confidence, and fosters a sense
            of community. Many people come for the martial art and stay because of how it transforms their physical
            and mental well-being.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Why choose Daniel Island Jiu Jitsu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            We prioritize community, safety, and high-quality instruction. Whether you're training for fun,
            fitness, or competition, our experienced instructors are on the mats daily to guide and support you.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Is Jiu Jitsu right for me?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Absolutely! If you’re looking to build confidence, get in shape, learn self-defense, or simply try
            something new, you’re in the right place. Jiu Jitsu is for everyone, regardless of age, size, or
            fitness level. No experience is necessary, and we’ll support you every step of the way.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Can I watch while someone I know is training?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Yes, visitors are welcome to observe a class. We have seating available; we ask that you remain quiet
            and respectful while instruction is in progress to help maintain a focused learning environment.
          </AccordionDetails>
        </Accordion>
      </Box>

      <Typography variant="h4" sx={{ color: "text.secondary", textAlign: "left" }}>
        New Students
      </Typography>
      <Divider sx={{ width: "100%", mb: 4 }} />

      <Box sx={{ textAlign: "left", width: "100%", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.10)", marginBottom: 6 }}>
        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              I'm brand new. What class should I attend first?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Any of our 5:30 fundamentals classes (M-TH) would be a great way to start your training. We’ll be there
            to guide you through everything and ensure you're paired with a higher belt, allowing you to learn at
            your own pace.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Do I need to register before coming to my first class?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Yes, register and complete our waiver here. Please arrive 10–15 minutes early and ask for Tom. Feel
            free to email us at info@dijiujitsu.com so we can prepare for your visit.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Do I need a Gi (uniform)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Not for your first class—just wear a t-shirt and shorts. After that, we’ll help you find the right gi
            if you decide to continue training.
          </AccordionDetails>
        </Accordion>
      </Box>

      <Typography variant="h4" sx={{ color: "text.secondary", textAlign: "left" }}>
        Membership + Drop-ins
      </Typography>
      <Divider sx={{ width: "100%", mb: 4 }} />

      <Box sx={{ textAlign: "left", width: "100%", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.10)" }}>
        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Do I need to sign a contract?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Nope! All memberships are month-to-month. Train because you want to, not because you have to.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              I'm visiting from out of town. Can I drop in?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Yes! All visitors are welcome. Drop-in classes are $25, and free for members of Devine affiliate
            schools (see our drop-in policy). Please ensure you sign a waiver before dropping in.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", sm: "1.15rem" } }}>
              Is there a specific enrollment period?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>Nope! You can join anytime.</AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
