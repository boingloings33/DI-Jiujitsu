import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import { useState, useEffect } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function PageFadeIn({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <Box
      sx={{
        animation: isAnimating ? `${fadeIn} 0.5s ease-in-out forwards` : "none",
        opacity: isAnimating ? 1 : 0,
      }}
    >
      {children}
    </Box>
  );
}
