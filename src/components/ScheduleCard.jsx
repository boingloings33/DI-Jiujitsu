import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ScheduleCard({ icon: Icon, title, time, duration }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        // borderRadius: 1,
        backgroundColor: "backgroundAlt",
        border: `1px solid`,
        borderColor: "divider",
      }}
    >
      {/* Icon and Title Row */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "flex-start",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {Icon}
        </Box>

        {/* Content Column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          {/* Title */}
          <Typography variant="h4" color="primary.main" sx={{ textAlign: "left", width: "100%" }}>
            {title}
          </Typography>

          {/* Time and Duration */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {duration}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Book Now Button */}
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={handleBookNow}
        sx={{
          mt: 1,
        //   borderRadius: "12px"
        }}
      >
        Enroll Now!
      </Button>
    </Box>
  );
}
