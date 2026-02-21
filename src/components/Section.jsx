import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

export default function Section({
  imageSrc,
  imageAlt = "",
  imagePosition = "left", // "left" | "right"
  preTitle,
  title,
  paragraph,
  list = [],
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isImageLeft = imagePosition === "left";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: isImageLeft ? "row" : "row-reverse",
        },
        alignItems: "stretch",
        justifyContent: "center",
        gap: { xs: 4, md: 6 },
      }}
    >
      {/* On mobile, show content first, then image. On desktop, order depends on imagePosition */}
      {/* Content */}
      <Box
        sx={{
          flex: "1 1 60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          order: { xs: 1, md: 0 },
        }}
      >
        {/* Pre-title */}
        {preTitle && (
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 1.6,
              fontWeight: 400,
              color: "text.secondary",
            }}
          >
            {preTitle}
          </Typography>
        )}
        {title && (
          <Typography variant="h3" sx={{ mb: 1 }}>
            {title}
          </Typography>
        )}
        <Box
          sx={{
            width: 64,
            height: "1px",
            backgroundColor: "divider",
            mb: 2,
          }}
        />
        {paragraph && (
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              color: "text.secondary",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "left",
            }}
          >
            {paragraph}
          </Typography>
        )}
        {list.length > 0 && (
          <List disablePadding>
            {list.map((item, index) => (
              <ListItem key={index} disableGutters alignItems="flex-start">
                <Typography mr={1} color="primary.main">
                  •
                </Typography>
                <ListItemText
                  primary={item}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 600,
                        color: "text.secondary",
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      {/* Image */}
      <Box
        sx={{
          flex: "1 1 60%",
          minHeight: "27.5rem",
          position: "relative",
          backgroundImage: isImageLoaded ? `url(${imageSrc})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          order: { xs: 2, md: 0 },
        }}
        role="img"
        aria-label={imageAlt}
      >
        {!isImageLoaded && (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            width="100%"
            height="100%"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: 1,
              backgroundColor: "rgba(220, 217, 208, 0.35)",
              animationDuration: "0.5s",
            }}
          />
        )}
        {/* Hidden img to detect when image is loaded */}
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          onLoad={() => setIsImageLoaded(true)}
          sx={{
            display: "none",
          }}
        />
      </Box>
    </Box>
  );
}
