import { Button, Typography } from "@mui/material";
import ShimmerOverlay from "./ShimmerOverlay.jsx";
const VARIANTS = {
  allLevels: {
    defaultText: "BJJ All Levels",
    bg: "#F0EFED",
    border: "#DBDBD9",
    color: "text.primary",
  },

  advanced: {
    defaultText: "Advanced",
    bg: "primary.main",
    border: "#C9D3E0", // light greyish blue
    color: "text.background",
  },

  kids: {
    defaultText: "Kids (5-8)",
    bg: "#D6D2C4",
    border: "#C4C0B4",
    color: "text.primary",
  },

  fundamentals: {
    defaultText: "Fundamentals",
    bg: "backgroundAlt",
    border: "#C4C0B4",
    color: "text.primary",
  },
};

export default function ScheduleButton({ variant = "fundamentals", text }) {
  const config = VARIANTS[variant] ?? VARIANTS.fundamentals;
  const label = text ?? config.defaultText;

  return (
    <Button
      variant="outlined"
      disableRipple
      sx={{
        width: "100%",
        height: "100%",
        padding: 0,
        borderRadius: 0.2,
        backgroundColor: config.bg,
        borderColor: config.border,
        color: config.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",

        "&:hover": {
          backgroundColor: config.bg,
          borderColor: config.border,
        },
      }}
    >
      <ShimmerOverlay>
        <Typography variant="body2">{label}</Typography>
      </ShimmerOverlay>
    </Button>
  );
}
