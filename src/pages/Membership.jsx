import { Container, Typography, Box } from "@mui/material";
import PlanCard from "../components/PlanCard.jsx";
import bgMembership from "../assets/bg-membership.svg";

export default function Membership() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgMembership})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h2" gutterBottom color="primary.main">
            Student Plans
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "text.secondary",
              textTransform: "none",
              lineHeight: 1.6,
              letterSpacing: 0.5,
            }}
          >
            Membership at Daniel Island Jiu Jitsu is a commitment to your own
            growth. We offer straightforward options with{" "}
            <strong>no hidden fees</strong> or long-term binding contracts.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%" }}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={1.5}
        >
          <PlanCard
            title="Adults + Teens"
            subtitle="Train at your own pace. All levels welcomed!"
            price={189}
            time="month"
            bullets={[
              "Unlimited Training",
              "Access to open mat (Saturday)",
              "Ages 13 and up",
              "Technical training for strength and resilience.",
            ]}
          />
          <PlanCard
            title="Kids"
            subtitle="Build strong fundamentals, discipline, and character"
            price={189}
            time="month"
            bullets={[
              "Unlimited Training",
              "Youth character development program",
              "Progress tracking & belt system",
              "Ages 6 to 12",
            ]}
          />
          <PlanCard
            title="Women's Self Defense"
            subtitle="Learn self defense skills."
            price={80}
            time="month"
            bullets={[
              "Thursdays Only",
              "Drop-In Class: $25 per visit",
              "Practical self defense techniques",
              "Best drills for improving guard retention",
            ]}
          />
          <PlanCard
            title="Parents + Child"
            subtitle="Train together and bond as family!"
            price={80}
            time="month"
            bullets={[
              "Wednesdays Only",
              "Family training with real-world skills",
              "Have fun and build confidence as a team",
              "Train together and work side by side",
            ]}
          />
          <PlanCard
            title="Drop In Class"
            subtitle="Try a class out before committing."
            price={25}
            time="session"
            bullets={[
              "Plug in and start rolling.",
              "Flexible training for busy schedules.",
              "Fresh partners. New challenges.",
              "Visiting? Get quality rounds here.",
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}
