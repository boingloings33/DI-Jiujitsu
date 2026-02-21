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
  FormHelperText,
  Alert,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import bgPrograms from "../assets/Group 3.svg";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default function Contact() {
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      interests: {
        dropIn: false,
        adultMembership: false,
        futureKids: false,
        other: false,
      },
      additionalInfo: "",
    },
  });

  const selectedInterests = watch("interests");
  const hasSelectedInterest = Object.values(selectedInterests).some(
    (val) => val,
  );

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format interests as readable string
      const selectedInterestsList = Object.entries(data.interests)
        .filter(([, value]) => value)
        .map(([key]) => {
          const labels = {
            dropIn: "Drop-in Class",
            adultMembership: "Adult Membership + Pricing",
            futureKids: "Kids Program",
            other: "Other",
          };
          return labels[key];
        })
        .join(", ");

      // Prepare email template variables
      const templateParams = {
        to_email: "baiolemi@gmail.com",
        from_name: data.name,
        from_email: data.email,
        interests: selectedInterestsList,
        message: data.additionalInfo || "No additional info provided",
      };

      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          py: { xs: 4, md: 8 },
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom color="primary.main">
            Get in Touch
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
            We look forward to rolling with you! If you have any questions check
            out our <Link to="/faq">FAQs</Link>, otherwise please don't hesitate
            to contact us.
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
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="left"
                >
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
                  src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=126+Seven+Farms+Drive+Suite+270+Daniel+Island+SC+29492`}
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
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="left"
                >
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
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="left"
                >
                  info@dijiujitsu.com
                </Typography>
              </Box>
            </Box>
          </Grid>
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
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              {/* Status Alert */}
              {submitStatus && (
                <Alert severity={submitStatus.type} sx={{ mb: 2 }}>
                  {submitStatus.message}
                </Alert>
              )}
              {/* Name */}
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{
                      sx: {
                        backgroundColor: "background.default",
                      },
                    }}
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DCD9D0",
                      },
                    }}
                  />
                )}
              />
              {/* Email */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      sx: {
                        backgroundColor: "background.default",
                      },
                    }}
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DCD9D0",
                      },
                    }}
                  />
                )}
              />
              {/* Interests */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 1, color: "text.secondary", letterSpacing: 0.5 }}
                >
                  What are you interested in?
                </Typography>
                <FormGroup>
                  <Controller
                    name="interests.dropIn"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              color: "#DCD9D0",
                              "&.Mui-checked": {
                                color: "primary.main",
                              },
                            }}
                          />
                        }
                        label="Drop-in Class"
                      />
                    )}
                  />
                  <Controller
                    name="interests.adultMembership"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              color: "#DCD9D0",
                              "&.Mui-checked": {
                                color: "primary.main",
                              },
                            }}
                          />
                        }
                        label="Adult Membership + Pricing"
                      />
                    )}
                  />
                  <Controller
                    name="interests.futureKids"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              color: "#DCD9D0",
                              "&.Mui-checked": {
                                color: "primary.main",
                              },
                            }}
                          />
                        }
                        label="Kids Program"
                      />
                    )}
                  />
                  <Controller
                    name="interests.other"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              color: "#DCD9D0",
                              "&.Mui-checked": {
                                color: "primary.main",
                              },
                            }}
                          />
                        }
                        label="Other"
                      />
                    )}
                  />
                </FormGroup>
                {!hasSelectedInterest && (
                  <FormHelperText error sx={{ mt: 1 }}>
                    Please select at least one interest
                  </FormHelperText>
                )}
              </Box>
              {/* Additional Info */}
              <Controller
                name="additionalInfo"
                control={control}
                rules={{
                  maxLength: {
                    value: 500,
                    message: "Additional info must be less than 500 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Additional Info"
                    multiline
                    rows={2}
                    fullWidth
                    error={!!errors.additionalInfo}
                    helperText={errors.additionalInfo?.message}
                    InputProps={{
                      sx: {
                        backgroundColor: "background.default",
                      },
                    }}
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DCD9D0",
                      },
                    }}
                  />
                )}
              />
              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting || !hasSelectedInterest}
                sx={{
                  mt: 1,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
