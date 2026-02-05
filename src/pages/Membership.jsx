import { Container, Typography, Box } from "@mui/material";
import PlanCard from "../components/PlanCard.jsx";
import bgMembership from "../assets/bg-membership.svg";
export default function Membership() {
  return (
    <Box
      component="section"
      id="now-open"
      sx={{
        py: { xs: 8, md: 10 },
        px: { md: 10 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgMembership})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <Box sx={{ maxWidth: "520px" }}>
        <Typography variant="h2" gutterBottom color="primary.main">
          Student Plans
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            color: "text.secondary",
            textTransform: "none",
            lineHeight: 1.6,
            letterSpacing: 0.5,
          }}>
          Membership at Daniel Island Jiu Jitsu is a commitment to your own
          growth. We offer straightforward options with no hidden fees or
          long-term binding contracts.
        </Typography>
      </Box>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
        <PlanCard
          title="Adults + Teens"
          subtitle="All levels welcomed!"
          price={189}
          bullets={[
            "Unlimited Training",
            "Access to open mat (Saturday)",
            "No contract required",
            "Ages 16 and up",
          ]}
        />
        <PlanCard
          title="Adults + Teens"
          subtitle="All levels welcomed!"
          price={189}
          bullets={[
            "Unlimited Training",
            "Access to open mat (Saturday)",
            "No contract required",
            "Ages 16 and up",
          ]}
        />
        <PlanCard
          title="Adults + Teens"
          subtitle="All levels welcomed!"
          price={189}
          bullets={[
            "Unlimited Training",
            "Access to open mat (Saturday)",
            "No contract required",
            "Ages 16 and up",
          ]}
        />
        <PlanCard
          title="Adults + Teens"
          subtitle="All levels welcomed!"
          price={189}
          bullets={[
            "Unlimited Training",
            "Access to open mat (Saturday)",
            "No contract required",
            "Ages 16 and up",
          ]}
        />
        <PlanCard
          title="Adults + Teens"
          subtitle="All levels welcomed!"
          price={189}
          bullets={[
            "Unlimited Training",
            "Access to open mat (Saturday)",
            "No contract required",
            "Ages 16 and up",
          ]}
        />
      </Box>
    </Box>
  );
}
