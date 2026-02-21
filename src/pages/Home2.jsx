import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import heroBg from "../assets/tom-hero.webp";
import heroLogo from "../assets/logo-tagline-white.webp";
import bgMission from "../assets/bg-mission.svg";
import bgSchedule from "../assets/bg-schedule.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cards from "../components/Cards.jsx";
import { alpha } from "@mui/material/styles";
import AnimatedTextLink from "../components/AnimatedTextLink";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const navigate = useNavigate();
  // const accentColor = "#a3a3a344";
  const heroContentRef = useRef(null);
  const missionRef = useRef(null);
  const trainingHeaderRef = useRef(null);
  const scheduleBoxesRef = useRef(null);
  const scheduleTitleRef = useRef(null);
  const openSectionRef = useRef(null);

  // Stacked pinning effect - hero stays pinned while mission slides over it
  useEffect(() => {
    const heroSection = heroContentRef.current?.closest("section");
    if (!heroSection) return;

    // Account for a fixed header (AppBar) so pin starts below it and avoids a jump equal to header height
    const headerEl = document.querySelector("header");
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;

    const pinTrigger = ScrollTrigger.create({
      trigger: heroSection,
      start: `top top+=${headerHeight}`,
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      pinType: "fixed",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });
    return () => {
      if (pinTrigger) pinTrigger.kill(true);
    };
  }, []);

  // Hero content fade-in animation
  useGSAP(() => {
    if (!heroContentRef.current) return;

    gsap.from(heroContentRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  // Mission section fade-in
  useGSAP(() => {
    if (!missionRef.current) return;

    gsap.from(missionRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // Training header animation
  useGSAP(() => {
    if (!trainingHeaderRef.current) return;

    gsap.from(trainingHeaderRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trainingHeaderRef.current,
        start: "top 85%",
      },
    });
  }, []);

  // Schedule title box animation
  useGSAP(() => {
    if (!scheduleTitleRef.current) return;

    gsap.from(scheduleTitleRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: scheduleTitleRef.current,
        start: "top 85%",
      },
    });
  }, []);

  // Schedule boxes stagger animation with slide
  useGSAP(() => {
    if (!scheduleBoxesRef.current) return;

    gsap.fromTo(
      scheduleBoxesRef.current.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scheduleBoxesRef.current,
          start: "top 96%",
        },
      },
    );
  }, []);
  // Open section fade-in
  useGSAP(() => {
    if (!openSectionRef.current) return;

    gsap.from(openSectionRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: openSectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <>
      {/* 1) HERO */}
      <Box>
        <Box
          component="section"
          id="hero"
          sx={{
            position: "relative",
            overflow: "hidden",
            minHeight: { xs: "80vh", md: "100vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}>
          {/* Background image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: { xs: "20%", md: "top" },
              zIndex: -1,
              filter: "brightness(.65)",
            }}
          />
          {/* Dark overlay for better text contrast */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(to bottom, ${alpha("#000", 0.25)}, ${alpha("#000", 0.1)})`,
              zIndex: 0,
            }}
          />
          {/* Content */}
          <Box
            ref={heroContentRef}
            maxWidth="700px"
            sx={{
              px: 2,
              position: "relative",
              zIndex: 1,
              mb: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            {/* <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "36px", sm: "48px", md: "64px", xl: "80px" },
              }}
            >
              Daniel Island Jiu Jitsu
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.tertiary",
                mb: 4,
                fontSize: { md: "1.1rem", xl: "1.25rem" },
                lineHeight: 1.7,
              }}
            >
              Welcome to Daniel Island Jiu Jitsu. A sanctuary for the study of Brazilian Jiu Jitsu, rooted in
              tradition and forged in the modern era.
            </Typography> */}

            <Box
              component="img"
              src={heroLogo}
              alt="Daniel Island Jiu Jitsu logo"
              sx={{ maxWidth: { xs: "86%", lg: 360, xl: "86" }, mb: 2 }}
            />
            <Button
              variant="hero"
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                const target = document.getElementById("mission");
                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 0;
                if (target) {
                  const top =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}>
              Begin Your Journey
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 2) OUR MISSION  */}
      <Box>
        <Box
          component="section"
          id="mission"
          sx={{
            position: "relative",
            minHeight: { md: "70vh", lg: "80vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: { xs: 10, md: 16, lg: 20 },
            bgcolor: "backgroundAlt",
            backgroundImage: `url(${bgMission})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}>
          <Container maxWidth="lg">
            <Box
              ref={missionRef}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xl: "56px" },
                }}>
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { md: "1.15rem", lg: "1.2rem", xl: "1.35rem" },
                  lineHeight: 1.8,
                  maxWidth: 800,
                }}>
                At Daniel Island Jiu Jitsu, our mission is to empower
                individuals of all ages to become their best selves by building
                character and confidence through the transformative practice of
                martial arts.
              </Typography>
              {/* Bottom accent line - positioned relative to text */}
              {/* <Box
                sx={{
                  width: { xs: 100, md: 120, lg: 140 },
                  height: 2,
                  bgcolor: accentColor,
                  mt: { xs: 5, md: 6, lg: 7 },
                }}
              /> */}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* 3) TRAINING PROGRAMS */}
      <Box
        component="section"
        id="training"
        sx={{
          position: "relative",
          minHeight: { lg: "100vh" },
          display: "flex",
          alignItems: "center",
          py: { xs: 10, md: 14 },
          zIndex: 1,
          bgcolor: "background.default",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, ${alpha("#006255", 0.03)} 0%, transparent 50%)`,
            pointerEvents: "none",
          },
        }}>
        <Container maxWidth="lg">
          <Box
            ref={trainingHeaderRef}
            sx={{
              textAlign: "center",
              mb: { xs: 6 },
            }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              color="text.secondary"
              sx={{
                fontSize: { md: "0.85rem", xl: "0.95rem" },
              }}>
              Our Curriculum
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontSize: { md: "32px", lg: "40px", xl: "52px" },
              }}>
              Training Programs
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 3,
                bgcolor: "secondary.main",
                mx: "auto",
              }}
            />
          </Box>

          {/* Enhanced Cards Grid */}
          <Grid
            container
            spacing={{ xs: 3, md: 4, lg: 5 }}
            justifyContent="center">
            <Grid item xs={12}>
              <Cards />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
            <AnimatedTextLink
              onClick={() => navigate("/programs")}
              sx={{
                color: "text.primary",
                fontSize: { xs: "1rem", xl: "1.1rem" },
              }}>
              View All Programs →
            </AnimatedTextLink>
          </Box>
        </Container>
      </Box>

      {/* 4) SCHEDULE */}
      <Box
        component="section"
        variant="h2"
        id="schedule"
        sx={{
          position: "relative",
          minHeight: { md: "80vh", lg: "90vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "primary.main",
          py: { xs: 10, md: 14, lg: 18 },
          fontSize: 14,
          backgroundImage: `url(${bgSchedule})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          gap: { xs: 4, md: 6, lg: 7 },
        }}>
        {/* Glass morphism title box */}
        <Container maxWidth="lg">
          <Box
            ref={scheduleTitleRef}
            sx={{
              textAlign: "center",

              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: `1px solid ${alpha("#fff", 0.15)}`,

              p: { xs: 4, md: 5, lg: 6 },
            }}>
            <Typography
              variant="h2"
              gutterBottom
              color="text.background"
              sx={{
                mb: { xs: 2, md: 3 },
                fontSize: { md: "48px", xl: "64px" },
              }}>
              Schedule & Routine
            </Typography>
            <Typography
              variant="body1"
              color="text.footerAlt"
              sx={{
                fontSize: { md: "1.1rem", xl: "1.25rem" },
                lineHeight: 1.7,
                maxWidth: 600,
                mx: "auto",
              }}>
              Consistency is the key to mastery. Our doors are open daily for
              anyone ready to learn, grow, and have fun along the way.
            </Typography>
          </Box>
        </Container>

        {/* Schedule boxes with enhanced animations */}
        <Box
          ref={scheduleBoxesRef}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: 3, md: 4, lg: 5 }}
          justifyContent="center"
          alignItems="center"
          px={{ xs: 2, md: 0 }}>
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: { md: 420, lg: 480 },
              backgroundColor: alpha("#F9F7F2", 0.08),
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: `2px solid ${alpha("#F9F7F2", 0.15)}`,
              display: "flex",
              alignItems: "center",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${alpha("#fff", 0.1)}, transparent)`,
                transition: "left 0.5s ease",
              },
              "&:hover": {
                backgroundColor: alpha("#F9F7F2", 0.15),
                transform: "translateY(-8px)",
                boxShadow: `0 12px 40px ${alpha("#000", 0.3)}`,
                borderColor: alpha("#F9F7F2", 0.3),

                "&::before": {
                  left: "100%",
                },
              },
            }}>
            <Box
              sx={{
                color: "text.background",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 2, lg: 3 },
                px: { xs: 3, md: 4, lg: 5 },
                py: { xs: 3, lg: 4 },
                width: "100%",
              }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  flexShrink: 0,
                  fontSize: { md: "1.1rem", lg: "1.3rem", xl: "1.5rem" },
                }}>
                Fundamentals
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  letterSpacing: 1.6,
                  fontSize: { xs: 10, lg: 12, xl: 13 },
                  lineHeight: 1.6,
                }}>
                MON—TUE <br /> 5:45PM — 6:45PM
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: { md: 420, lg: 480 },
              backgroundColor: alpha("#F9F7F2", 0.08),
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: `2px solid ${alpha("#F9F7F2", 0.15)}`,
              display: "flex",
              alignItems: "center",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${alpha("#fff", 0.1)}, transparent)`,
                transition: "left 0.5s ease",
              },
              "&:hover": {
                backgroundColor: alpha("#F9F7F2", 0.15),
                transform: "translateY(-8px)",
                boxShadow: `0 12px 40px ${alpha("#000", 0.3)}`,
                borderColor: alpha("#F9F7F2", 0.3),
                "&::before": {
                  left: "100%",
                },
              },
            }}>
            <Box
              sx={{
                color: "text.background",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 2, lg: 3 },
                px: { xs: 3, md: 4, lg: 5 },
                py: { xs: 3, lg: 4 },
                width: "100%",
              }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  flexShrink: 0,
                  fontSize: { md: "1.1rem", lg: "1.3rem", xl: "1.5rem" },
                }}>
                Kids Training
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  letterSpacing: 1.6,
                  fontSize: { xs: 10, lg: 12, xl: 13 },
                  lineHeight: 1.6,
                }}>
                MON—THURS <br /> 4:00PM — 5:30PM
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: { xs: 2, md: 3 } }}>
          <AnimatedTextLink
            onClick={() => navigate("/schedule")}
            sx={{
              fontSize: { xs: "1rem", xl: "1.1rem" },
            }}>
            View Full Class Schedule →
          </AnimatedTextLink>
        </Box>
      </Box>

      {/* 5) NOW OPEN */}
      <Box
        component="section"
        id="now-open"
        sx={{
          position: "relative",
          minHeight: { md: "70vh", lg: "80vh" },
          display: "flex",
          alignItems: "center",
          py: { xs: 10, md: 16, lg: 20 },
          bgcolor: "background.default",
        }}>
        <Container
          ref={openSectionRef}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "100%", lg: "md" },
          }}>
          <Typography
            variant="h2"
            gutterBottom
            color="primary.main"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "36px", md: "64px" },
            }}>
            Daniel Island Jiu Jitsu is Now Open!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 4, md: 5 },
              fontSize: { md: "1.15rem", xl: "1.3rem" },
              lineHeight: 1.8,
              maxWidth: 700,
              color: "text.primary",
            }}>
            Take the first step. Drop in, watch a class, meet our instructors,
            and experience the dojo for yourself!
          </Typography>
          <Button
            onClick={() => navigate("/contact")}
            variant="outlined"
            sx={{ paddingY: 2, paddingX: 8 }}>
            Get in Touch
          </Button>
        </Container>
      </Box>
    </>
  );
}
