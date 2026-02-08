import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function ShimmerOverlay({ children }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-120%",
          width: "120%",
          height: "100%",
          background: `linear-gradient(
            90deg,
            transparent,
            ${alpha("#fff", 0.35)},
            transparent
          )`,
          pointerEvents: "none",
        },

        // Triggered by parent hover (Button)
        ".MuiButton-root:hover &::before": {
          left: "120%",
          transition: "left 0.45s ease",
        },
      }}
    >
      {/* content layer */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
