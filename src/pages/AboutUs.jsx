import { Container, Typography, Box, Divider, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import CoachCarousel from "../components/CoachCarousel";

import coachTom from "../assets/coaches/headshot-Tom-Small_convert.webp";
import coachJosh from "../assets/coaches/headshot-Josh-Small.jpg";
import coachEmmy from "../assets/coaches/headshot-Emmy-Small.jpg";
import coachTravis from "../assets/coaches/headshot-Travis-small.webp";
import AddIcon from "@mui/icons-material/Add";
import bgPrograms from "../assets/Group 3.svg";
export default function AboutUs() {
  const carouselSlides = [
    {
      image: coachTom,
      title: "Tom Sheehan",
      description: `Tom Sheehan is a first-degree black belt in Brazilian Jiu-Jitsu under Scott Devine. Together, Tom and Scott served as instructors for the United States Secret Service, where they developed the agency’s ground fighting program for agents and officers nationwide.\n\n With over 25 years of combined service in the Secret Service and Federal Air Marshal Service, Tom has dedicated much of his career to teaching defensive tactics and firearms training to fellow agents. His battle-tested experience, passion for Jiu-Jitsu, and laid-back teaching style make him one of the most respected and approachable instructors on the mat. Tom lives on Daniel Island with his wife and three children.`,
    },
    {
      image: coachJosh,
      title: "Josh Williams",
      description:
        "With two decades of grappling and combat sports experience, Josh Williams is a two-stripe Brazilian Jiu-Jitsu black belt with a foundation in wrestling. He started his journey on the mat as a high school wrestler, later transitioning into Brazilian Jiu-Jitsu and MMA in 2010. Since then, he’s competed extensively—both in Jiu-Jitsu tournaments and professional MMA bouts—testing his skills across multiple organizations.\n\n Josh’s style is rooted in wrestling-based Jiu-Jitsu, emphasizing pressure, control, and takedowns. His teaching focuses on core concepts rather than isolated techniques, helping students adapt and apply what they learn across a wide range of positions, styles, and skill levels. Whether you’re a beginner or a competitor, Josh brings real-world experience, clarity, and intensity to every class.",
    },
    {
      image: coachTravis,
      title: "Travis Maynard",
      description:
        "Travis began training in Brazilian Jiu-Jitsu at Gracie Barra in Pelham, Alabama, in March of 2016. After suffering a painful basketball injury, he searched for a sport that offered the same physical intensity and competitive edge, but with a lower risk of injury, which led him to BJJ. In January 2018, shortly after earning his blue belt, Travis relocated with his family to Northern Virginia for work. \n\nThere, he quickly found a great fit at Battlefield Jiu-Jitsu and trained consistently for the next 18 months until another job-related move brought him to the Charleston area. After visiting a few local gyms, he immediately felt at home at Devine Jiu-Jitsu under Professor Tom Sheehan. One evening class and a few welcoming rolls with highly skilled teammates were all it took to know he had found the right place.",
    },
    {
      image: coachEmmy,
      title: "Emily Zeller",
      description:
        "Emily began her Jiu-Jitsu journey in May 2018 while building a workout routine at the UFC Gym in Baton Rouge. Initially drawn to boxing and kickboxing conditioning classes, she soon realized she wanted to learn real self-defense. That curiosity led her to the gym’s Jiu-Jitsu program. During a summer internship in Texas, Emily trained at a Muay Thai and Jiu-Jitsu gym, where her passion for both arts deepened. \n\nUpon returning to Baton Rouge, she continued her Jiu-Jitsu training and added boxing to her regimen. After graduating from LSU in May 2019, Emily moved to Charleston and began training exclusively in Jiu-Jitsu under Tom Sheehan. She has earned all of her belt promotions from Tom and was awarded her black belt in October 2025.",
    },
  ];
  const options = {
    loop: true,
    align: "start",
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgPrograms})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{
          py: {xs: 4, md: 8},
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Box>
          <Typography variant="h2" gutterBottom color="primary.main">
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "text.secondary",
              textTransform: "none",
              lineHeight: 1.6,
              letterSpacing: 0.5,
              maxWidth: "md",
            }}
          >
            At Daniel Island Jiu Jitsu, we believe Jiu Jitsu is more than just learning submissions and
            techniques—it’s a way of life. The discipline, resilience, and respect developed on the mat extend into
            everyday life. Our mission is to help students of all ages grow in confidence and character through this
            powerful and transformative martial art.
          </Typography>
        </Box>
        <Divider sx={{ my: 4, width: "100%" }} /> */}
        <Typography variant="h2" gutterBottom color="primary.main">
          Meet Our Coaches
        </Typography>
        <Divider sx={{ width: "100%", mb: 4 }} />
        <CoachCarousel slides={carouselSlides} options={options} />
        <Divider sx={{ width: "100%", my: 4 }} />
        <Typography variant="h2" gutterBottom color="primary.main">
          Gym Rules & Etiquette
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
          At Daniel Island Jiu Jitsu, respect, safety, and a strong team culture are at the core of everything we
          do. Please take a moment to review our key guidelines:
        </Typography>
        <Box sx={{ textAlign: "left", width: "100%", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.10)" }}>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
              Hygiene & Cleanliness
            </AccordionSummary>
            <AccordionDetails>
              - Always wear a clean gi and shower before class. <br />
              - Keep nails trimmed and hair tied back. Stay home if you’re feeling sick.
              <br /> - Change clothes in the restrooms, not in open areas.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
              Equipment
            </AccordionSummary>
            <AccordionDetails>
              - Consult with your instructor if you're unsure about what gear to purchase.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
              Safety & Respect
            </AccordionSummary>
            <AccordionDetails>
              - Train with control. Tap early and give your partner time to tap. <br />
              - Be aware of your surroundings, avoid collisions, and stay on the mat. <br />
              - Apologize if you accidentally hurt someone. <br />- Train slowly and methodically; always take care
              of your training partner.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
              Mat Etiquette
            </AccordionSummary>
            <AccordionDetails>
              - No shoes on the mats. Wear flip-flops or slides off the mat and in the restroom. <br />
              - Pay attention during instruction. Don’t interrupt or talk over the coach.
              <br />
              - Drill the technique shown—repetition is how you learn. <br />- Use respectful language as this is a
              family-friendly environment.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
              Attitude & Culture
            </AccordionSummary>
            <AccordionDetails>
              - Be welcoming to new students. <br />
              - No bragging or celebrating submissions—stay humble.
              <br />
              - Clean up after yourself. <br />
              - Help others learn (if you’re qualified), and ask questions with curiosity. <br />- Work hard, be
              consistent, and have fun!
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1-content" id="panel1-header">
              Time & Focus
            </AccordionSummary>
            <AccordionDetails>
              - Arrive on time. If you’re late, check with your instructor before jumping in. <br />- If you must
              keep your phone nearby, only check it during breaks.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}
