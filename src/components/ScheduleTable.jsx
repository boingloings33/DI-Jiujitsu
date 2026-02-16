import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";

import ScheduleButton from "../components/ScheduleButton.jsx";

export default function ScheduleTable() {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 0,
      }}
    >
      <Table
        sx={{
          tableLayout: { md: "fixed" },
          width: "100%",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Time</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h5">Mon (No - Gi)</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h5">Tue (Gi)</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h5">Wed (No - Gi)</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h5">Thu (Gi)</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h5">Fri (Gi)</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h5">Sat</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell sx={timeCell}>7:00 AM - 8:15 AM</TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}></TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={timeCell}>10:00 AM - 12:00 PM</TableCell>
            <TableCell sx={bodyCell}></TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" text="Members Open" />
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell sx={timeCell}>12:00 PM - 1:00 PM</TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 3 */}
          <TableRow>
            <TableCell sx={timeCell}>4:00 PM - 4:45 PM</TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids" />
            </TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 4 */}
          <TableRow>
            <TableCell sx={timeCell}>4:45 PM - 5:30 PM</TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids2" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids2" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids2" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="kids2" />
            </TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 5 */}
          <TableRow>
            <TableCell sx={timeCell}>5:45 PM - 6:45 PM</TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="fundamentals" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="fundamentals" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="fundamentals" text="Parent/Child" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="fundamentals" text="Women's Defense" />
            </TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 6 */}
          <TableRow>
            <TableCell sx={timeCell}>6:45 PM - 8:00 PM</TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell}>
              <ScheduleButton variant="advanced" />
            </TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const headerCell = {
  backgroundColor: "#F9F7F4",
  border: "1px solid #DCD9D0",
  textAlign: "center",
};

const timeCell = {
  backgroundColor: "#FBFAF7",
  border: "1px solid #DCD9D0",
  fontWeight: 600,
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "text.secondary",
  fontSize: { xs: 10, xl: 12 },
  py: 2,
};

const bodyCell = {
  backgroundColor: "#FBFAF7",
  border: "1px solid #DCD9D0",
  height: 56,
  padding: 1,
};
