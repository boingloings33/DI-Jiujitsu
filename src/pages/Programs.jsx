import { Container, Box, Typography } from "@mui/material";
import imgAdultsTeens from "../assets/adults-teens.webp";
import imgKids from "../assets/kids.webp";
import imgWsd from "../assets/card-3.jpg";
import Section from "../components/Section.jsx";
import bgPrograms from "../assets/Group 3.svg";

export default function Programs() {
  return (
    <Box
      sx={{
        py: 8,
        px: { md: 10 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgPrograms})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      {/* Header */}

      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom color="primary.main">
          Training Programs
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            lineHeight: 1.6,
            maxWidth: 520,
          }}
        >
          The journey of a thousand miles begins with a single step. Choose the path that aligns with your goals.
        </Typography>
      </Container>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2,
            md: 10,
            lg: 18,
          },
          pb: 6,
        }}
      >
        <Section
          imageSrc={imgWsd}
          preTitle="Discipline. Respect. Confidence."
          title="Adults + Teens (Ages 16+)"
          paragraph="Our comprehensive Jiu Jitsu program focuses on ground-based techniques, including joint locks and chokeholds, that enable smaller practitioners to effectively defend themselves by utilizing leverage over brute strength. Whether your goal is self-defense, fitness, or competition, Jiu Jitsu offers real-world benefits: improved cardiovascular health, weight loss, enhanced self-confidence, and personal discipline."
          list={[
            "5 minutes of warm-up exercises.",
            "30–40 minutes of technique instruction.",
            "15–30 minutes of live sparring.",
          ]}
        />

        <Section
          imageSrc={imgKids}
          imagePosition="right"
          preTitle="Fun. Focus. Fearless."
          title="Kids (Ages 6–12)"
          paragraph="At Daniel Island Jiu Jitsu, we believe in starting strong from a young age. Our Kids Program is designed to help children develop confidence, discipline, coordination, and respect—all while having fun and staying active in a safe and structured environment.

Classes are organized by age and skill level, ensuring that each student receives personalized instruction and support from experienced coaches. Through engaging drills, games, and techniques, kids develop focus, strength, and the tools to navigate life on and off the mats."
          list={[
            "Basic and advanced Jiu-Jitsu techniques",
            "Goal setting, teamwork, and resilience",
            "Respect for themselves and others",
          ]}
        />

        <Section
          imageSrc={imgAdultsTeens}
          preTitle="Defense Starts With You."
          title="Women's Self Defense"
          paragraph="At Daniel Island Jiu Jitsu, we believe every woman deserves to feel confident and capable in any situation. Classes focus on techniques that are effective in real life while improving fitness. Students receive personalized guidance from experienced instructors who prioritize safety, confidence, and growth."
          list={[
            "Real-world self-defense scenarios",
            "Strength, conditioning, and confidence",
            "Supportive, instructor-led training",
          ]}
        />
      </Container>
    </Box>
  );
}
