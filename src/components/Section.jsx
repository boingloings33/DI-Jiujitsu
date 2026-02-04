import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export default function Section({
  imageSrc,
  imageAlt = "",
  imagePosition = "left", // "left" | "right"
  preTitle,
  title,
  paragraph,
  list = [],
}) {
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

        mb: 12,
      }}>
      {/* Image */}
      <Box
        sx={{
          flex: "1 1 60%",
          height: 480,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Content */}
      <Box
        sx={{
          flex: "1 1 60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        {/* Pre-title */}
        {preTitle && (
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 1.6,
              fontWeight: 400,
              color: "text.secondary",
            }}>
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
              fontSize: 18,
            }}>
            {paragraph}
          </Typography>
        )}

        {list.length > 0 && (
          <List disablePadding>
            {list.map((item, index) => (
              <ListItem key={index} disableGutters alignItems="flex-start">
                <ListItemIcon
                  sx={{
                    minWidth: 24,
                    color: "success.main",
                    mt: "4px",
                  }}>
                  <CheckIcon fontSize="small" />
                </ListItemIcon>

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
    </Box>
  );
}
