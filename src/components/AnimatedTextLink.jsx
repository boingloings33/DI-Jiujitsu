import { Link, Typography } from "@mui/material";

export default function AnimatedTextLink({ href, children, variant = "subtitle2", sx, linkSx }) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        alignSelf: "center",
        textAlign: "center",
        width: "fit-content",
        ...linkSx,
      }}
    >
      <Typography
        variant={variant}
        sx={{
          fontSize: 14,
          fontWeight: 400,
          cursor: "pointer",
          color: "text.background",
          position: "relative",
          display: "inline-block",

          opacity: 0.8,
          transition: "opacity 200ms ease, transform 200ms ease",

          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -3,
            width: "100%",
            height: "1px",
            backgroundColor: "currentColor",
            transform: "translateX(-50%) scaleX(0)",
            transformOrigin: "center",
            opacity: 0,
            transition: "transform 220ms ease, opacity 220ms ease",
          },

          "&:hover": {
            opacity: 1,
            transform: "scale(1.03)",
          },

          "&:hover::after": {
            transform: "translateX(-50%) scaleX(1)",
            opacity: 1,
          },

          ...sx,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}
