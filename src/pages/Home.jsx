import { Box, Container, Typography, Button, Link } from "@mui/material";
import heroBg from "../assets/bg-placeholder.png";
import bgMission from "../assets/bg-mission.svg";
import bgSchedule from "../assets/bg-schedule.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cards from "../components/Cards.jsx";
import { alpha } from "@mui/material/styles";
import AnimatedTextLink from "../components/AnimatedTextLink";

<Button variant="hero" endIcon={<ArrowForwardIcon />}>
  Begin Your Journey
</Button>;

export default function Home() {
  const accentColor = "#a3a3a344";
  return (
    <Box>
      {/* 1) HERO (bg image later) */}
      <Box
        component="section"
        id="hero"
        sx={{
          minHeight: { xs: "70vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${heroBg})`,
          justifyContent: "center",
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content container ONLY */}
        <Box maxWidth="600px">
          <Typography variant="h1" gutterBottom>
            Daniel Island Jiu Jitsu
          </Typography>

          <Typography variant="body1" sx={{ color: "text.tertiary", mb: 3 }}>
            Welcome to Daniel Island Jiu Jitsu. A sanctuary for the study of Brazilian Jiu Jitsu, rooted in
            tradition and forged in the modern era.
          </Typography>

          <Button variant="hero" endIcon={<ArrowForwardIcon />}>
            Begin Your Journey
          </Button>
        </Box>
      </Box>

      {/* 2) OUR MISSION */}
      <Box
        component="section"
        id="mission"
        sx={{
          py: {
            xs: 8,
            md: 24,
          },
          backgroundImage: `url(${bgMission})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "backgroundAlt",
        }}
      >
        <Box
          sx={{
            width: 2,
            height: 84,
            mx: "auto",
            mb: 4,
            bgcolor: accentColor,
          }}
        />
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            At Daniel Island Jiu Jitsu, our mission is to empower individuals of all ages to become their best
            selves by building character and confidence through the transformative practice of martial arts.
          </Typography>
        </Container>
        <Box
          sx={{
            width: 128,
            height: 2,
            mx: "auto",
            mt: 5,
            bgcolor: accentColor,
          }}
        />
      </Box>

      {/* 3) TRAINING COURSES */}
      <Box component="section" id="training" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="subtitle2" gutterBottom color="text.secondary">
                Our Curriculum
              </Typography>
              <Typography variant="h3" gutterBottom>
                Training Programs
              </Typography>
            </Box>

            <AnimatedTextLink sx={{ color: "text.primary" }} href="/programs">
              View All Programs →
            </AnimatedTextLink>
          </Box>
          <Cards />
        </Container>
      </Box>

      {/* 4) SCHEDULE */}
      <Box
        component="section"
        variant="h2"
        id="schedule"
        sx={{
          bgcolor: "primary.main",
          py: { xs: 8, md: 24 },
          fontSize: 14,
          backgroundImage: `url(${bgSchedule})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h2" gutterBottom color="text.background">
            Schedule & Routine
          </Typography>
          <Typography variant="body3" color="text.footerAlt">
            Consistency is the key to mastery. Our doors are open daily for anyone ready to learn, grow, and have
            fun along the way.
          </Typography>
        </Container>
        <Box display={"flex"} flexDirection={"row"} gap={2} justifyContent={"center"}>
          <Box
            maxWidth={350}
            sx={{
              backgroundColor: alpha("#F9F7F2", 0.05),
              border: `1px solid ${alpha("#F9F7F2", 0.1)}`,
              display: "flex",
              alignItems: "center", // vertical centering
            }}
          >
            <Box
              sx={{
                color: "text.background",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 300 }}>
                Kids Training
              </Typography>
              <Typography variant="body2" sx={{ letterSpacing: 1.6, fontSize: 12 }}>
                MON–THURS <br /> 4:00PM – 5:30PM
              </Typography>
            </Box>
          </Box>
          <Box
            maxWidth={350}
            sx={{
              backgroundColor: alpha("#F9F7F2", 0.05),
              border: `1px solid ${alpha("#F9F7F2", 0.1)}`,
              display: "flex",
              alignItems: "center", // vertical centering
            }}
          >
            <Box
              sx={{
                color: "text.background",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 300 }}>
                Fundamentals
              </Typography>
              <Typography variant="body2" sx={{ letterSpacing: 1.6, fontSize: 12 }}>
                MON–THURS 5:30PM – 7:00PM
              </Typography>
            </Box>
          </Box>
        </Box>

        <AnimatedTextLink href="/schedule">View Full Class Schedule →</AnimatedTextLink>
      </Box>

      {/* 5) NOW OPEN */}
      <Box component="section" id="now-open" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Now Open
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Placeholder content for opening announcement, location, and “Join” CTA.
          </Typography>
          <Button variant="outlined">View Membership</Button>
        </Container>
      </Box>
    </Box>
  );
}
