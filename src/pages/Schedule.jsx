import { useState, useRef, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";

import { Link } from "react-router-dom";

import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";

import ScheduleCard from "../components/ScheduleCard.jsx";
import bgPrograms from "../assets/Group 3.svg";
import bgMembership from "../assets/bg-membership.svg";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0); // 0 = Monday
  const [showFade, setShowFade] = useState(false);
  const scrollContainerRef = useRef(null);

  const weekdays = ["M", "T", "W", "Th", "F", "Sa"];
  const weekdaysFull = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Scroll to top when day changes
    container.scrollTop = 0;

    const checkOverflow = () => {
      const hasScroll = container.scrollHeight > container.clientHeight;
      setShowFade(
        hasScroll &&
          container.scrollTop <
            container.scrollHeight - container.clientHeight - 10,
      );
    };

    const handleScroll = () => {
      checkOverflow();
    };

    checkOverflow();
    // Check again after a brief delay to account for layout shifts
    const timer = setTimeout(checkOverflow, 100);

    container.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [selectedDay]);

  const calculateEndTime = (startTime, duration) => {
    // Parse start time
    const timeParts = startTime.match(/(\d+):(\d+)\s(AM|PM)/i);
    let hours = parseInt(timeParts[1]);
    const minutes = parseInt(timeParts[2]);
    const period = timeParts[3].toUpperCase();

    // Convert to 24-hour format
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;

    // Parse duration
    let totalMinutes = 0;
    const hourMatch = duration.match(/(\d+)h/);
    const minMatch = duration.match(/(\d+)m/);

    if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
    if (minMatch) totalMinutes += parseInt(minMatch[1]);

    // Calculate end time
    let endHours = hours + Math.floor((minutes + totalMinutes) / 60);
    let endMinutes = (minutes + totalMinutes) % 60;

    // Convert back to 12-hour format
    const endPeriod = endHours >= 12 ? "PM" : "AM";
    if (endHours > 12) endHours -= 12;
    if (endHours === 0) endHours = 12;

    return `${endHours}:${endMinutes.toString().padStart(2, "0")} ${endPeriod}`;
  };

  const getIconForType = (type) => {
    switch (type) {
      case "parents-child":
        return (
          <FamilyRestroomIcon sx={{ fontSize: 40, color: "primary.main" }} />
        );
      case "kids":
        return (
          <SportsKabaddiIcon sx={{ fontSize: 40, color: "primary.main" }} />
        );
      case "self-defense":
        return (
          <HealthAndSafetyIcon sx={{ fontSize: 40, color: "primary.main" }} />
        );
      case "open-mat":
        return <AspectRatioIcon sx={{ fontSize: 40, color: "primary.main" }} />;
      case "fundamentals":
        return (
          <TempleBuddhistIcon sx={{ fontSize: 40, color: "primary.main" }} />
        );
      default:
        return (
          <SportsMartialArtsIcon sx={{ fontSize: 40, color: "primary.main" }} />
        );
    }
  };

  const scheduleData = [
    // Monday
    [
      {
        title: "Adults & Teens",
        time: "7:00 AM",
        duration: "1h 15m",
        type: "default",
      },
      {
        title: "Adults & Teens",
        time: "12:00 PM",
        duration: "1h",
        type: "default",
      },
      { title: "Kids (6-9)", time: "4:00 PM", duration: "45m", type: "kids" },
      { title: "Kids (10-12)", time: "4:45 PM", duration: "45m", type: "kids" },
      {
        title: "Adults (Fundamentals)",
        time: "5:45 PM",
        duration: "1h",
        type: "fundamentals",
      },
      {
        title: "Adults & Teens",
        time: "6:45 PM",
        duration: "1h 15m",
        type: "default",
      },
    ],
    // Tuesday
    [
      {
        title: "Adults & Teens",
        time: "12:00 PM",
        duration: "1h",
        type: "default",
      },
      { title: "Kids (6-9)", time: "4:00 PM", duration: "45m", type: "kids" },
      { title: "Kids (10-12)", time: "4:45 PM", duration: "45m", type: "kids" },
      {
        title: "Adults (Fundamentals)",
        time: "5:45 PM",
        duration: "1h",
        type: "fundamentals",
      },
      {
        title: "Adults & Teens",
        time: "6:45 PM",
        duration: "1h 15m",
        type: "default",
      },
    ],
    // Wednesday
    [
      {
        title: "Adults & Teens",
        time: "12:00 PM",
        duration: "1h",
        type: "default",
      },
      { title: "Kids (6-9)", time: "4:00 PM", duration: "45m", type: "kids" },
      { title: "Kids (10-12)", time: "4:45 PM", duration: "45m", type: "kids" },
      {
        title: "Parent/Child",
        time: "5:45 PM",
        duration: "1h",
        type: "parents-child",
      },
      {
        title: "Adults & Teens",
        time: "6:45 PM",
        duration: "1h 15m",
        type: "default",
      },
    ],
    // Thursday
    [
      {
        title: "Adults & Teens",
        time: "12:00 PM",
        duration: "1h",
        type: "default",
      },
      { title: "Kids (6-9)", time: "4:00 PM", duration: "45m", type: "kids" },
      { title: "Kids (10-12)", time: "4:45 PM", duration: "45m", type: "kids" },
      {
        title: "Women's Self Defense",
        time: "5:45 PM",
        duration: "1h",
        type: "self-defense",
      },
      {
        title: "Adults & Teens",
        time: "6:45 PM",
        duration: "1h 15m",
        type: "default",
      },
    ],
    // Friday
    [
      {
        title: "Adults & Teens",
        time: "9:00 AM",
        duration: "45m",
        type: "default",
      },
    ],
    // Saturday
    [
      {
        title: "Members Open Mat",
        time: "10:00 AM",
        duration: "2h",
        type: "open-mat",
      },
    ],
  ];
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url(${bgMembership})`,
          md: `url(${bgPrograms})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: { xs: "fill", md: "cover" },
      }}
    >
      <Container
        maxWidth="lg"
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
          Class Schedule
        </Typography>
        <Box sx={{ maxWidth: "520px" }}>
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
            Check the calendar below for the most up-to-date class schedule.
            Looking to drop in? Check out our drop-in policy{" "}
            <Link to="/dropin">here</Link>
          </Typography>
        </Box>

        {/* WEB DONT USE THIS AT ALL
        <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ScheduleTable  />
        </Box> */}

        {/* NEW VIEW */}
        <Box sx={{ width: "100%" }}>
          {/* Weekday Selector Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.5,
              mb: { xs: 2, md: 1 },
              overflow: "hidden",
            }}
          >
            {weekdays.map((day, index) => (
              <Button
                key={index}
                onClick={() => setSelectedDay(index)}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  px: 1,
                  py: 3,
                  // borderRadius: 1,
                  cursor: "pointer",
                  backgroundColor:
                    selectedDay === index ? "secondary.main" : "primary.main",
                  color:
                    selectedDay === index ? "text.tertiary" : "text.tertiary",
                  fontWeight: 700,
                  transition: "all 200ms ease",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "inherit",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {day}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "inherit",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {weekdaysFull[index]}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Content for Selected Day */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              maxHeight: { xs: "auto", md: "500px" },
              overflowY: { xs: "visible", md: "auto" },
              pr: { xs: 0, md: 1 },
              maskImage: {
                xs: "none",
                md: showFade
                  ? "linear-gradient(to bottom, black 85%, transparent 100%)"
                  : "none",
              },
              WebkitMaskImage: {
                xs: "none",
                md: showFade
                  ? "linear-gradient(to bottom, black 85%, transparent 100%)"
                  : "none",
              },
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "primary.main",
                borderRadius: "4px",
                "&:hover": {
                  background: "secondary.main",
                },
              },
            }}
          >
            {scheduleData[selectedDay].map((classItem, index) => (
              <ScheduleCard
                key={index}
                icon={getIconForType(classItem.type)}
                title={classItem.title}
                time={`${classItem.time} - ${calculateEndTime(classItem.time, classItem.duration)}`}
                duration={classItem.duration}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
