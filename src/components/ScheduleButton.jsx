import { Button, Typography } from "@mui/material";
import ShimmerOverlay from "./ShimmerOverlay.jsx";
const VARIANTS = {
  kids2: {
    defaultText: "Kids (10-12)",
    bg: "#8ba388ff",
    border: "secondary.main",
    color: "text.background",
  },

  advanced: {
    defaultText: "Adults & Teens",
    bg: "primary.main",
    border: "#C9D3E0", // light greyish blue
    color: "text.background",
  },

  kids: {
    defaultText: "Kids (6-9)",
    bg: "#D6D2C4",
    border: "#C4C0B4",
    color: "text.primary",
  },

  fundamentals: {
    defaultText: "Fundamentals",
    bg: "#a7a7b65d",
    border: "text.primary",
    color: "text.primary",
  },
};

export default function ScheduleButton({ variant = "fundamentals", text }) {
  const config = VARIANTS[variant] ?? VARIANTS.fundamentals;
  const label = text ?? config.defaultText;

  return (
    <Button
      variant="outlined"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        px: 1,
        borderRadius: 0.2,
        backgroundColor: config.bg, 
        borderColor: config.border,
        color: config.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        overflow: "hidden",

        "&:hover": {
          backgroundColor: config.bg,
          borderColor: config.border,
        },
      }}
    >
      <ShimmerOverlay>
        <Typography variant="body2" sx={{ fontSize: { xs: 10, xl: 12 }, position: "relative", zIndex: 2 }}>
          {label}
        </Typography>
      </ShimmerOverlay>
    </Button>
  );
}
