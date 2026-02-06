import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import ScheduleTable from "../components/ScheduleTable.jsx";

export default function Schedule() {
  return (
    <Box
      sx={{
        py: 8,
        px: { md: 16, xl: 32 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom color="primary.main">
        Class Schedule
      </Typography>
      <Box sx={{ maxWidth: "520px" }}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            textTransform: "none",
            lineHeight: 1.6,
            letterSpacing: 0.5,
          }}
        >
          Check the calendar below for the most up-to-date class schedule. Looking to drop in? Check out our
          drop-in policy here.
        </Typography>
      </Box>
      <ScheduleTable />
    </Box>
  );
}
