import {
  Container,
  Typography,
  Box,
  Divider,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Skeleton,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import bgPrograms from "../assets/Group 3.svg";
import React from "react";

export default function Contact() {
  const [mapLoaded, setMapLoaded] = React.useState(false);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgPrograms})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{
          py: 8,
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom color="primary.main">
            Connect
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              textTransform: "none",
              lineHeight: 1.6,
              letterSpacing: 0.5,
            }}
          >
            We look forward to rolling with you! If you have any questions, please don't hesitate to contact us.
          </Typography>
        </Box>
        <Divider sx={{ width: "100%", my: 4 }} />
        {/* CONTENT */}
        <Grid container spacing={2} alignItems="stretch">
          {/* First Column */}
          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            sx={{ pt: 3, height: "100%" }}
          >
            <Box
              textAlign="left"
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{ flexGrow: 1, width: "100%" }}
            >
              <Typography variant="h4" color="primary.main">
                Location
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                  maxWidth: { xs: "100%", md: 500 },
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    color: "text.secondary",
                    position: "relative",
                    left: -4,
                  }}
                />
                <Typography variant="body1" color="text.secondary" textAlign="left">
                  126 Seven Farms Drive, Suite 270 Daniel Island, SC 29492
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1, position: "relative", minHeight: 220 }}>
                {/* Skeleton */}
                {!mapLoaded && (
                  <Skeleton
                    variant="rectangular"
                    animation="pulse"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 1,
                      minHeight: 280,
                      backgroundColor: "rgba(220, 217, 208, 0.35)",
                      animationDuration: "0.5s",
                    }}
                  />
                )}
                {/* Google Map */}
                <Box
                  component="iframe"
                  title="Daniel Island Jiu Jitsu Location"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJaz9PjT6J5hj-BwVgd7Ch0QY3yZSXFDI&q=126+Seven+Farms+Drive+Suite+270+Daniel+Island+SC+29492"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    borderRadius: 1,
                    opacity: mapLoaded ? 1 : 0,
                    transition: "opacity 300ms ease",
                    minHeight: 280,
                  }}
                />
              </Box>
            </Box>
            <Box textAlign="left" display="flex" flexDirection="column" gap={2}>
              <Typography variant="h4" color="primary.main">
                Contact
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                  maxWidth: 300,
                }}
              >
                <PhoneOutlinedIcon
                  sx={{
                    color: "text.secondary",
                    position: "relative",
                    left: -4,
                  }}
                />
                <Typography variant="body1" color="text.secondary" textAlign="left">
                  (843) 343-0004
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                  maxWidth: 300,
                }}
              >
                <EmailOutlinedIcon
                  sx={{
                    color: "text.secondary",
                    position: "relative",
                    left: -4,
                  }}
                />
                <Typography variant="body1" color="text.secondary" textAlign="left">
                  info@dijiujitsu.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Second Column */}
          <Grid
            item
            xs={12}
            md
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              flexGrow: 1,
              backgroundColor: "backgroundAlt",
              borderColor: "#DCD9D0",
              borderWidth: 1,
              borderStyle: "solid",
              padding: 3,
              mb: 4,
            }}
          >
            <Typography variant="h4" gutterBottom color="primary.main">
              Send a Message
            </Typography>
            {/* Name */}
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: "background.default",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#DCD9D0",
                },
              }}
            />
            {/* Email */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: "background.default",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#DCD9D0",
                },
              }}
            />
            {/* Interests */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "text.secondary", letterSpacing: 0.5 }}>
                What are you interested in?
              </Typography>
              <FormGroup>
                {["Drop-in Class", "Adult Membership + Pricing", "Future Kids Program", "Other"].map((label) => (
                  <FormControlLabel
                    key={label}
                    control={
                      <Checkbox
                        sx={{
                          color: "#DCD9D0",
                          "&.Mui-checked": {
                            color: "primary.main",
                          },
                        }}
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
            </Box>
            {/* Additional Info */}
            <TextField
              label="Additional Info"
              multiline
              rows={2}
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: "background.default",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#DCD9D0",
                },
              }}
            />
            {/* Submit */}
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                py: 1.5,
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
